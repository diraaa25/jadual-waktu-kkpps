const TIMETABLE_PROGRAMS = ['SLK', 'STM', 'UPA'];
const PROGRAM_NAMES = {
    STM: 'Sijil Teknologi Maklumat',
    SLK: 'Sijil Perkhidmatan Logistik',
    UPA: 'Unit Pengajian Am'
};
const COORDINATOR_ROLES = [...TIMETABLE_PROGRAMS, 'INDUK'];
const roleLabel = role => role === 'INDUK'
    ? 'Penyelaras Jadual Waktu Induk' : 'Penyelaras JW ' + role;
const timetableSession = data => data.activeSession || 'SESI 1 2026/2027';
const lecturerCode = () => sessionStorage.getItem('logged_lecturer');
const coordinatorRoles = (data, code = lecturerCode()) =>
    code ? COORDINATOR_ROLES.filter(role => data.coordinators?.[role]?.[code] === true) : [];
const programForClass = kelas => String(kelas || '').trim().toUpperCase()
    .match(/^(SLK|STM|UPA)(?=\s|\d|$)/)?.[1];
const programForRow = (data, row) => row.programOwner === 'UPA' ? 'UPA' : programForClass(row.kelas) ||
    (!row.kelas && (data.slot || []).map(slot =>
        slot.kod === row.kod && slot.singkatan === row.singkatan && programForClass(slot.kelas)
    ).find(Boolean)) || (!row.kelas ? 'STM' : undefined);
const programRows = (data, field, program) =>
    (data[field] || []).filter(row => row && programForRow(data, row) === program);
const amendmentFields = ['slot', 'subjek', 'programReviews', 'effectiveDate', 'effectiveDateSession',
    'isConfirmed', 'approvalState', 'amendmentNumber'];
const timetableVersion = data => data.workingVersion || (data.pendingAmendment
    ? 'draft:' + data.pendingAmendment.id : 'published:' + (data.publishedAmendmentId || 'original'));
const amendmentLabel = data => data.amendmentNumber ? 'Pindaan ' + data.amendmentNumber : '';
const canSubmitProgram = (data, program) =>
    programRows(data, 'slot', program).length > 0 || (data.amendmentRequiredPrograms || []).includes(program);
const scheduleKey = value => String(value ?? '').trim().toUpperCase().replace(/\s+/g, '');
const timetableMinutes = value => {
    const [hours, minutes] = String(value).split(':').map(Number);
    return hours * 60 + minutes;
};

function strictTimetableClash(first, second) {
    if (scheduleKey(first.hari) !== scheduleKey(second.hari) ||
        !(timetableMinutes(first.mula) < timetableMinutes(second.tamat) &&
          timetableMinutes(second.mula) < timetableMinutes(first.tamat))) return false;
    const shares = (a, b) => Boolean(a && a !== '-' && a === b);
    const lecturers = [second.singkatan, second.singkatanPembantu].map(scheduleKey);
    return shares(scheduleKey(first.kelas), scheduleKey(second.kelas)) ||
        shares(scheduleKey(first.lokasi), scheduleKey(second.lokasi)) ||
        [first.singkatan, first.singkatanPembantu].map(scheduleKey)
            .some(code => lecturers.some(other => shares(code, other)));
}

const programHasReservation = (data, program) =>
    ['Induk', 'TPA', 'Approved'].includes(workflowFor(data, program).status);

function generateTimetableSlots(targets, reservedSlots) {
    const days = ['Isnin', 'Selasa', 'Rabu', 'Khamis', 'Jumaat'];
    const starts = [8, 9, 10, 11, 13, 14, 15, 16, 17];
    const clock = minutes => String(Math.floor(minutes / 60)).padStart(2, '0') + ':' +
        String(minutes % 60).padStart(2, '0');
    const requirements = [];
    for (const { subject, kelas, lokasi } of targets) {
        const total = Math.round(Number(subject.jam) * 60);
        if (!kelas || !lokasi || !Number.isFinite(total) || total <= 0 || total > 45 * 60) return;
        const blocks = total > 240 ? Math.ceil(total / 180) : 1;
        for (let block = 0, remaining = total; block < blocks; block++) {
            const duration = block === blocks - 1 ? remaining : Math.min(180, remaining);
            remaining -= duration;
            const options = [];
            for (const hari of days) {
                for (const start of starts) {
                    const end = start * 60 + duration;
                    const afternoon = hari === 'Jumaat' ? 14 : 13;
                    if (start < (subject.prefStart || 8) || end > 18 * 60 ||
                        (end > 12 * 60 && start < afternoon)) continue;
                    const slot = {
                        kod: subject.kod, subjek: subject.subjek, kelas, lokasi, hari,
                        mula: clock(start * 60), tamat: clock(end), singkatan: subject.singkatan,
                        singkatanPembantu: subject.singkatanPembantu || '-', nama: subject.nama || '-',
                        namaPembantu: subject.namaPembantu || '-',
                        ...(subject.programOwner ? { programOwner: subject.programOwner } : {})
                    };
                    if (!reservedSlots.some(other => strictTimetableClash(slot, other))) options.push(slot);
                }
            }
            if (!options.length) return;
            requirements.push(options);
        }
    }
    requirements.sort((a, b) => a.length - b.length);
    const slots = [];
    let remainingChecks = 25000;
    function solve(index) {
        if (index === requirements.length) return true;
        for (const slot of requirements[index]) {
            if (--remainingChecks < 0) return false;
            if (slots.some(other => strictTimetableClash(slot, other))) continue;
            slots.push(slot);
            if (solve(index + 1)) return true;
            slots.pop();
        }
        return false;
    }
    return solve(0) ? slots : undefined;
}

function workingTimetable(data) {
    const draft = data.pendingAmendment;
    if (!draft) return data;
    const result = { ...data, workingVersion: 'draft:' + draft.id, amendmentRequiredPrograms: draft.requiredPrograms };
    delete result.pendingAmendment;
    for (const key of amendmentFields) result[key] = draft[key];
    return result;
}

function beginTimetableAmendment(number, snapshot) {
    const code = lecturerCode();
    const id = crypto.randomUUID();
    return updateTimetable(data => {
        if (sessionStorage.getItem('logged_role') !== 'pensyarah' ||
            !coordinatorRoles(data, code).includes('INDUK') || !data.isConfirmed || data.pendingAmendment ||
            timetableSession(data) !== timetableSession(snapshot) || timetableVersion(data) !== timetableVersion(snapshot) ||
            !Number.isInteger(number) || number < 1 || number > 10 || number <= (data.amendmentNumber || 0)) return;
        const requiredPrograms = TIMETABLE_PROGRAMS.filter(program => programRows(data, 'slot', program).length ||
            Object.values(data.coordinators?.[program] || {}).some(assigned => assigned === true));
        data.pendingAmendment = {
            id, requiredPrograms, amendmentNumber: number, slot: data.slot || [], subjek: data.subjek || [],
            isConfirmed: false, approvalState: 'Draft'
        };
        return data;
    });
}

function updateWorkingTimetable(snapshot, update) {
    return updateTimetable(data => {
        if (timetableSession(snapshot) !== timetableSession(data) ||
            timetableVersion(snapshot) !== timetableVersion(data)) return;
        if (!data.pendingAmendment) return update(data);
        const next = update(workingTimetable(data));
        if (!next) return;
        const target = next.isConfirmed ? data : data.pendingAmendment;
        for (const key of amendmentFields) {
            if (next[key] === undefined) delete target[key];
            else target[key] = next[key];
        }
        if (next.isConfirmed) {
            data.publishedAmendmentId = data.pendingAmendment.id;
            delete data.pendingAmendment;
        }
        return data;
    });
}
const workflowFor = (data, program) => {
    if (data.publicationWithdrawn) {
        return programRows(data, 'slot', program).length
            ? { status: 'Returned', revision: 'legacy-withdrawal' }
            : { status: 'Draft' };
    }
    const review = data.programReviews?.[program];
    return review?.session === timetableSession(data) ? review : { status: 'Draft' };
};
const workflowLabels = {
    Draft: 'Draf', Induk: 'Menunggu semakan Induk', TPA: 'Menunggu pengesahan TPA',
    Approved: 'Disahkan TPA', Returned: 'Dikembalikan kepada program'
};
const validEffectiveDate = date => typeof date === 'string' && /^\d{4}-\d{2}-\d{2}$/.test(date) &&
    Number.isFinite(Date.parse(date)) && new Date(date).toISOString().slice(0, 10) === date;
const effectiveDateLocked = data => !data.publicationWithdrawn && (
    data.effectiveDateSession === timetableSession(data) ||
    TIMETABLE_PROGRAMS.some(program => ['TPA', 'Approved'].includes(workflowFor(data, program).status))
);
const formattedEffectiveDate = data => validEffectiveDate(data.effectiveDate)
    ? new Intl.DateTimeFormat('ms-MY', { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC' })
        .format(new Date(data.effectiveDate)).toUpperCase()
    : '—';

function returnTimetablesToPrograms(data, revision) {
    data.programReviews = Object.fromEntries(TIMETABLE_PROGRAMS
        .filter(program => programRows(data, 'slot', program).length)
        .map(program => [program, { status: 'Returned', session: timetableSession(data), revision }]));
    delete data.publicationWithdrawn;
    delete data.effectiveDateSession;
    return refreshPublication(data);
}

function refreshPublication(data) {
    const populated = TIMETABLE_PROGRAMS.filter(program => canSubmitProgram(data, program));
    const slots = (data.slot || []).filter(Boolean);
    data.isConfirmed = !data.publicationWithdrawn && populated.length > 0 && slots.every(slot => programForClass(slot.kelas)) &&
        populated.every(program => workflowFor(data, program).status === 'Approved');
    data.approvalState = data.isConfirmed ? 'Approved' :
        populated.some(program => workflowFor(data, program).status === 'TPA') ? 'Pending' : 'Draft';
    return data;
}

function changeWorkflow(data, program, action, code, expected, revision, effectiveDate) {
    if (!TIMETABLE_PROGRAMS.includes(program) || !code) return;
    if (data.publicationWithdrawn) returnTimetablesToPrograms(data, 'legacy-withdrawal');
    const roles = coordinatorRoles(data, code);
    const review = workflowFor(data, program);
    if (expected && (expected.session !== timetableSession(data) ||
        expected.status !== review.status || expected.revision !== review.revision)) return;
    const status = review.status;
    let next;
    if (action === 'submit' && roles.includes(program) &&
        ['Draft', 'Returned'].includes(status) && canSubmitProgram(data, program)) {
        const reserved = (data.slot || []).filter(slot => {
            const owner = programForRow(data, slot);
            return owner !== program && programHasReservation(data, owner);
        });
        if (programRows(data, 'slot', program).some(slot => reserved.some(other => strictTimetableClash(slot, other)))) {
            throw new Error('Jadual bertindih dengan program yang telah dihantar kepada Induk. Ubah slot atau jana jadual semula.');
        }
        next = { status: 'Induk', preparedBy: code };
    } else if (status === 'Induk' && roles.includes('INDUK')) {
        if (action === 'endorse') {
            if (!validEffectiveDate(data.effectiveDate) || data.effectiveDate !== effectiveDate) return;
            data.effectiveDateSession = timetableSession(data);
            next = { ...review, status: 'TPA', reviewedBy: code };
        }
        if (action === 'returnInduk') next = { ...review, status: 'Returned' };
    } else if (status === 'TPA' && code === (data.tpaLecturer || 'DT')) {
        if (action === 'approve') next = { ...review, status: 'Approved', approvedBy: code };
        if (action === 'returnTpa') next = { ...review, status: 'Returned' };
    }
    if (!next) return;
    data.programReviews = { ...data.programReviews, [program]: {
        ...next, session: timetableSession(data), revision: revision || Date.now().toString()
    } };
    return refreshPublication(data);
}

function applyProgrammerChanges(current, draft, baseline) {
    if (sessionStorage.getItem('logged_role') !== 'programmer' || !baseline) return;
    const fields = ['slot', 'subjek', 'sessionsList', 'activeSession', 'tpaLecturer',
        'programmerPassword', 'adminPassword'];
    const normalize = (data, key) => {
        if (key === 'activeSession') return timetableSession(data);
        if (key === 'tpaLecturer') return data.tpaLecturer || 'DT';
        if (['slot', 'subjek'].includes(key)) return data[key] || [];
        if (key === 'sessionsList') return data[key] || ['SESI 1 2026/2027', 'SESI 2 2026/2027'];
        return data[key];
    };
    const equal = (a, b) => JSON.stringify(a) === JSON.stringify(b);
    const changed = fields.filter(key => !equal(normalize(draft, key), normalize(baseline, key)));
    if (dataEditDuringAmendment(current, changed)) {
        throw new Error('Jadual asal kekal diterbitkan semasa pindaan sedang diproses.');
    }
    if (changed.some(key => !equal(normalize(current, key), normalize(baseline, key)))) return;
    if (current.publicationWithdrawn) returnTimetablesToPrograms(current, 'legacy-withdrawal');
    const resetAll = changed.some(key => ['activeSession', 'tpaLecturer'].includes(key));
    const changedPrograms = TIMETABLE_PROGRAMS.filter(program => resetAll ||
        changed.some(key => ['slot', 'subjek'].includes(key) &&
            !equal(programRows(current, key, program), programRows(draft, key, program))));
    changed.forEach(key => { current[key] = draft[key]; });
    if (changed.includes('activeSession')) {
        delete current.effectiveDate;
        delete current.effectiveDateSession;
        delete current.amendmentNumber;
        delete current.publishedAmendmentId;
    }
    if (current.programReviews || changedPrograms.length) {
        changedPrograms.forEach(program => { delete current.programReviews?.[program]; });
        refreshPublication(current);
    }
    return current;
}

function dataEditDuringAmendment(data, changed) {
    return data.pendingAmendment && changed.some(key => ['slot', 'subjek', 'activeSession', 'tpaLecturer'].includes(key));
}

async function updateTimetable(update) {
    if (isFirebaseActive()) {
        const ref = db.ref('timetable');
        // Load the current value before the first transaction callback runs.
        await ref.once('value');
        const result = await ref.transaction(current => update(current || {}), undefined, false);
        if (result.committed) return result.snapshot.val();
    } else {
        const updateLocal = () => {
            const key = 'jadualSistemV3';
            const next = update(JSON.parse(localStorage.getItem(key)) || {});
            if (next) localStorage.setItem(key, JSON.stringify(next));
            return next;
        };
        const next = navigator.locks
            ? await navigator.locks.request('sijawap-timetable', updateLocal) : updateLocal();
        if (next) return next;
    }
    throw new Error('Perubahan tidak dapat disimpan. Semak peranan atau muat semula jadual dan cuba lagi.');
}

function changeTimetableStatus(program, action, snapshot, effectiveDate) {
    const code = lecturerCode();
    if (sessionStorage.getItem('logged_role') !== 'pensyarah') return Promise.reject(new Error('Sila log masuk.'));
    const expected = { ...workflowFor(snapshot, program), session: timetableSession(snapshot) };
    const revision = crypto.randomUUID();
    return updateWorkingTimetable(snapshot,
        data => changeWorkflow(data, program, action, code, expected, revision, effectiveDate));
}

function setTimetableEffectiveDate(date, snapshot) {
    const code = lecturerCode();
    return updateWorkingTimetable(snapshot, data => {
        if (sessionStorage.getItem('logged_role') !== 'pensyarah' ||
            !coordinatorRoles(data, code).includes('INDUK') || !validEffectiveDate(date) ||
            effectiveDateLocked(data) || timetableSession(data) !== timetableSession(snapshot) ||
            data.effectiveDate !== snapshot.effectiveDate) return;
        return { ...data, effectiveDate: date };
    });
}

function canManageTimetableCancellation(data) {
    const role = sessionStorage.getItem('logged_role');
    return role === 'programmer' || (role === 'pensyarah' && coordinatorRoles(data).includes('INDUK'));
}

function cancelTimetableAmendment(snapshot) {
    return updateTimetable(data => {
        if (!canManageTimetableCancellation(data) || !data.pendingAmendment ||
            timetableVersion(data) !== timetableVersion(snapshot)) return;
        delete data.pendingAmendment;
        return data;
    });
}

function cancelTimetableEffectiveDate(snapshot) {
    const revision = crypto.randomUUID();
    return updateWorkingTimetable(snapshot, data => {
        if (!canManageTimetableCancellation(data) || data.isConfirmed || !validEffectiveDate(data.effectiveDate) ||
            data.effectiveDate !== snapshot.effectiveDate) return;
        delete data.effectiveDate;
        delete data.effectiveDateSession;
        for (const program of TIMETABLE_PROGRAMS) {
            const review = workflowFor(data, program);
            if (!['TPA', 'Approved'].includes(review.status)) continue;
            data.programReviews[program] = {
                status: 'Induk', session: timetableSession(data), revision,
                ...(review.preparedBy ? { preparedBy: review.preparedBy } : {})
            };
        }
        return refreshPublication(data);
    });
}

function renderTimetableCancellationControls(container, data, onSave, onError = alert) {
    container.replaceChildren();
    const add = (label, prompt, cancel) => {
        const button = document.createElement('button');
        button.type = 'button';
        button.className = 'btn btn-danger-outline';
        button.textContent = label;
        button.onclick = async () => {
            if (!confirm(prompt)) return;
            button.disabled = true;
            try {
                onSave(await cancel(data));
            } catch (error) {
                onError(error.message);
                button.disabled = false;
            }
        };
        container.append(button);
    };
    if (data.workingVersion) {
        add('Batal Pindaan', 'Buang draf pindaan ini dan kembali kepada jadual asal?', cancelTimetableAmendment);
    }
    if (!data.isConfirmed && validEffectiveDate(data.effectiveDate)) {
        add('Batal Tarikh Kuatkuasa', 'Batalkan tarikh ini? Jadual yang telah dihantar kepada TPA akan dikembalikan kepada Induk.',
            cancelTimetableEffectiveDate);
    }
}

function renderCoordinatorMenu(container, data, selected) {
    const roles = coordinatorRoles(data);
    container.replaceChildren();
    if (sessionStorage.getItem('logged_role') !== 'pensyarah') return;
    const links = [['Pensyarah', 'Pensyarah.html', !selected], ...roles.map(role =>
        ['Admin · ' + roleLabel(role), 'Jadual_baru.html?peranan=' + role, role === selected])];
    links.forEach(([label, url, active]) => {
        const link = document.createElement('a');
        link.href = url;
        link.textContent = label;
        if (active) link.setAttribute('aria-current', 'page');
        container.append(link);
    });
}

function escapeTimetableText(value) {
    return String(value ?? '').replace(/[&<>"']/g, char => (
        { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[char]
    ));
}

function lecturerSignatures(data, lecturers, program) {
    const programs = Array.isArray(program) ? program : program ? [program] : [];
    const assigned = role => Object.keys(data.coordinators?.[role] || {})
        .filter(code => data.coordinators[role][code] === true).sort()[0];
    const name = code => lecturers.find(item => (item.shortName || item.short) === code)?.name || '—';
    const codes = key => [...new Set(programs.map(item => workflowFor(data, item)[key]).filter(Boolean))];
    const reviewers = codes('reviewedBy');
    const approvers = codes('approvedBy');
    const signers = [
        ['Disediakan oleh', 'Penyelaras Jadual Waktu', (programs.length ? programs : [null])
            .map(item => [name(workflowFor(data, item).preparedBy || assigned(item)), PROGRAM_NAMES[item]])],
        ['Disemak oleh', roleLabel('INDUK'), [[
            reviewers.length ? reviewers.map(name).join(' / ') : name(assigned('INDUK')), 'Kolej Komuniti Papar'
        ]]],
        ['Disahkan oleh', 'Timbalan Pengarah Akademik', [[
            approvers.length ? approvers.map(name).join(' / ') : name(data.tpaLecturer || 'DT'), 'Kolej Komuniti Papar'
        ]]]
    ];
    return '<div class="signature-grid">' + signers.map(([caption, title, people]) =>
        '<div><span>' + caption + ':</span>' + people.map(([person, unit]) =>
            '<strong>' + escapeTimetableText(person) + '</strong><span>' +
            escapeTimetableText(title) + '</span><span>' + escapeTimetableText(unit) + '</span>'
        ).join('') + '</div>'
    ).join('') + '</div>';
}

function timetableFooter(data, lecturers, program, confirmed = data.isConfirmed) {
    return lecturerSignatures(data, lecturers, program) +
        '<div class="timetable-print-note"><strong>' +
        (confirmed ? 'JADUAL DISAHKAN BAGI ' : 'JADUAL BAGI ') + escapeTimetableText(timetableSession(data)) +
        '</strong><div>JADUAL INI ADALAH CETAKAN KOMPUTER. TANDATANGAN TIDAK DIPERLUKAN</div></div>';
}

function timetableMetadata(dept, data) {
    const label = amendmentLabel(data);
    return '<div>' + (label ? '<div class="timetable-amendment">' + label + '</div>' : '') +
        '<dl class="timetable-metadata"><dt>TARIKH KUATKUASA</dt><dd>' +
        formattedEffectiveDate(data) + '</dd><dt>PROGRAM / UNIT</dt><dd>' +
        escapeTimetableText(dept.toUpperCase()) + '</dd></dl></div>';
}

function renderTimetableEffectiveDate(data) {
    document.querySelectorAll('[data-timetable-effective-date]').forEach(element => {
        element.replaceChildren();
        if (amendmentLabel(data)) {
            const note = document.createElement('small');
            note.className = 'timetable-amendment';
            note.textContent = amendmentLabel(data);
            element.append(note);
        }
        element.append('Tarikh Kuatkuasa: ' + formattedEffectiveDate(data));
    });
}

function timetableSignatoryProgram(dept, slots) {
    if (PROGRAM_NAMES[dept]) return dept;
    const programs = [...new Set(slots.map(slot => programForRow({}, slot)).filter(Boolean))];
    return programs;
}
