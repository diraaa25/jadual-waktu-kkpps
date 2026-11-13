const standardTimetableLocations = [
    { name: "DEWAN KULIAH", code: "DK", type: "Umum" },
    { name: "MAKMAL BAHASA", code: "MB", type: "Umum" },
    { name: "TECHNOLOGY ENABLE COLLABORATIVE CLASSROOM 1", code: "TECC 1", type: "Umum" },
    { name: "TECHNOLOGY ENABLE COLLABORATIVE CLASSROOM 2", code: "TECC 2", type: "Umum" },
    { name: "MAKMAL PENGATURCARAAN 1", code: "MP1", type: "STM" },
    { name: "MAKMAL PENGATURCARAAN 2", code: "MP2", type: "STM" },
    { name: "MAKMAL MULTIMEDIA", code: "MM", type: "STM" },
    { name: "MAKMAL BAIKPULIH DAN PEMASANGAN", code: "MBP", type: "STM" },
    { name: "MAKMAL RANGKAIAN", code: "MR", type: "STM" },
    { name: "MAKMAL PENDAWAIAN RANGKAIAN", code: "MPR", type: "STM" },
    { name: "MAKMAL AI", code: "MAI", type: "STM" },
    { name: "MAKMAL IOT", code: "MIOT", type: "STM" },
    { name: "MAKMAL LOGISTIK 1", code: "ML1", type: "SLK" },
    { name: "MAKMAL LOGISTIK 2", code: "ML2", type: "SLK" },
    { name: "MAKMAL SIMULASI LOGISTIK", code: "MS", type: "SLK" }
];

function timetableLocations() {
    const locations = new Map(standardTimetableLocations.map(item => [scheduleKey(item.name), item]));
    const custom = JSON.parse(localStorage.getItem('kkpapar_locations') || '[]');
    for (const name of custom) {
        const key = scheduleKey(name);
        if (locations.has(key)) continue;
        const upper = name.toUpperCase();
        const type = /\bUPA\b|PENGAJIAN AM/.test(upper) ? 'UPA' :
            /\bSLK\b|LOGISTIK/.test(upper) ? 'SLK' : /\bSTM\b|MAKMAL/.test(upper) ? 'STM' : 'Umum';
        locations.set(key, { name, code: locationInitials(name), type });
    }
    return locations;
}

function locationInitials(name) {
    return String(name || '').trim().split(/\s+/).map(word => word[0]).join('').toUpperCase();
}

// Each report is measured after its fonts and logos load, then scaled to one A4 sheet.
async function printTimetableWindow(target, { landscape = true, closeAfter = false } = {}) {
    const doc = target.document;
    const width = landscape ? 281 : 194;
    const height = landscape ? 194 : 281;
    const css = doc.createElement('style');
    css.textContent = `
        @page { size: A4 ${landscape ? 'landscape' : 'portrait'}; margin: 8mm; }
        html, body { margin: 0 !important; padding: 0 !important; background: white !important; }
        body { color: #000; font: 10px/1.2 Arial, sans-serif; }
        .print-sheet { width: ${width}mm; box-sizing: border-box; }
        .print-content { width: ${width}mm; display: flow-root; box-sizing: border-box; }
        .print-sheet .table-responsive { overflow: visible !important; }
        .print-sheet table { max-width: 100%; }
        ${timetableReportCss + lecturerPrintCss}
        @media print {
            * { print-color-adjust: exact; -webkit-print-color-adjust: exact; }
            .print-sheet { break-inside: avoid; overflow: hidden; }
            .print-sheet + .print-sheet { break-before: page; }
        }
    `;
    doc.head.append(css);
    const batches = Array.from(doc.querySelectorAll('body > .page-section'));
    const reports = batches.length ? batches.map(page => Array.from(page.childNodes)) : [Array.from(doc.body.childNodes)];
    doc.body.replaceChildren();
    const sheets = reports.map(report => {
        const sheet = doc.createElement('section');
        sheet.className = 'print-sheet';
        const content = doc.createElement('div');
        content.className = 'print-content';
        content.append(...report.filter(node => node.nodeName !== 'SCRIPT'));
        sheet.append(content);
        doc.body.append(sheet);
        return [sheet, content];
    });
    await Promise.all([doc.fonts?.ready, ...Array.from(doc.images, image => image.decode().catch(() => {}))]);
    for (const [sheet, content] of sheets) {
        const bounds = content.getBoundingClientRect();
        const availableHeight = height * 96 / 25.4 - 2;
        const ratio = Math.min(1, availableHeight / Math.max(bounds.height, content.scrollHeight),
            bounds.width / Math.max(bounds.width, content.scrollWidth));
        content.style.zoom = String(ratio);
        sheet.style.height = Math.ceil(content.getBoundingClientRect().height) + 'px';
    }
    if (closeAfter) target.addEventListener('afterprint', () => target.close(), { once: true });
    target.focus();
    target.print();
}

const timetableReportCss = `
    .timetable-report { color: #000; background: #fff; font: 10px/1.25 Arial, sans-serif; }
    .timetable-report h2, .timetable-report p { margin: 0; }
    .timetable-report-heading { display: flex; justify-content: space-between; align-items: center; text-align: center; margin-bottom: 10px; }
    .timetable-report-heading img { width: 120px; height: 50px; object-fit: contain; }
    .timetable-report-heading h2 { font-size: 15px; }
    .timetable-report-meta { display: flex; justify-content: space-between; gap: 12px; font-weight: 700; }
    .timetable-report-session { text-align: center; font-weight: 700; padding-top: 7px; }
    .timetable-tasks { width: 100%; border-collapse: collapse; font-size: 9px; }
    .timetable-tasks th, .timetable-tasks td { border: 1px solid #555; padding: 3px; text-align: left; }
    .timetable-tasks th { background: #edf2f7; }
    .signature-grid { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 12px; margin-top: 5mm; font-size: 9px; }
    .signature-grid > div { display: grid; align-content: start; gap: 2px; }
    .signature-grid strong { margin-top: 3px; }
    .timetable-print-note { border-top: 1px solid #333; text-align: center; margin-top: 4mm; padding-top: 2mm; font-size: 8px; }
    .timetable-metadata { display: grid; grid-template-columns: max-content minmax(0, 1fr); gap: 2px 8px; margin: 0; }
    .timetable-amendment { display: block; margin-bottom: 3px; font-size: .85em; text-align: right; }
    .timetable-metadata dt, .timetable-metadata dd { margin: 0; }
    .timetable-metadata dd::before { content: ': '; }
`;

function installTimetableReportStyles() {
    const style = document.createElement('style');
    style.textContent = timetableReportCss + lecturerPrintCss;
    document.head.append(style);
}

function timetableTaskTable(kind, tasks, slots, subjects, lecturers) {
    const text = escapeTimetableText;
    const classReport = kind === 'kelas';
    const showLecturer = classReport || kind === 'lokasi';
    const matches = (row, task) => scheduleKey(row.kod) === scheduleKey(task.kod) &&
        (!row.kelas || scheduleKey(row.kelas) === scheduleKey(task.kelas));
    const roster = new Map(lecturers.map(item => [scheduleKey(item.shortName || item.short), item.name]));
    const credits = [];
    const rows = tasks.map(task => {
        const scheduled = slots.filter(slot => matches(slot, task));
        const registered = subjects.filter(subject => matches(subject, task));
        const credit = registered.map(subject => subject.kredit ?? subject.credit)
            .find(value => value != null && value !== '' && Number.isFinite(Number(value)));
        if (classReport) credits.push(credit);
        const names = new Set((scheduled.length ? scheduled : registered).flatMap(item => [
            roster.get(scheduleKey(item.singkatan)) || item.nama,
            roster.get(scheduleKey(item.singkatanPembantu)) || item.namaPembantu
        ]).filter(name => name && name !== '-'));
        const cells = [task.kod, task.nama];
        if (showLecturer) cells.push([...names].join(' / ') || '—');
        cells.push(classReport ? credit ?? '—' : task.kelas, task.jam);
        return '<tr>' + cells.map(value => '<td>' + text(value) + '</td>').join('') + '</tr>';
    });
    const headings = ['KOD KURSUS', 'NAMA KURSUS'];
    if (showLecturer) headings.push('NAMA PENSYARAH');
    headings.push(classReport ? 'KREDIT' : 'KELAS', showLecturer ? 'JAM' : 'JAM MENGAJAR');
    const total = tasks.reduce((sum, task) => sum + (Number(task.jam) || 0), 0);
    const creditTotal = classReport ? '<th>' + (credits.some(value => value === undefined) ? '—' :
        credits.reduce((sum, value) => sum + Number(value), 0)) + '</th>' : '';
    return '<b>TUGAS MENGAJAR</b><table class="timetable-tasks"><thead><tr>' +
        headings.map(value => '<th>' + value + '</th>').join('') + '</tr></thead><tbody>' +
        rows.join('') + '<tr><th colspan="' + (headings.length - (classReport ? 2 : 1)) +
        '">JUMLAH KESELURUHAN</th>' + creditTotal + '<th>' + text(Number(total.toFixed(2))) + '</th></tr></tbody></table>';
}

function buildTimetableReport({ kind, title, label, value, dept, data, slots, tasks, lecturers, signatory, confirmed }) {
    const text = escapeTimetableText;
    return '<div class="timetable-report"><header class="timetable-report-heading">' +
        '<img src="Logo_KPT.png" alt="Logo KPT"><div><h2>KOLEJ KOMUNITI PAPAR</h2>' +
        '<p>KEMENTERIAN PENDIDIKAN TINGGI</p><p><b>' + text(title.toUpperCase()) + '</b></p></div>' +
        '<img src="Logo_KKPPS.jpeg" alt="Logo KKPPS"></header>' +
        '<div class="timetable-report-meta"><span>' + text(label + ' : ' + value) + '</span>' +
        timetableMetadata(dept, data) + '</div><p class="timetable-report-session">' +
        text(timetableSession(data)) + '</p>' + renderTimetableGrid(slots) +
        timetableTaskTable(kind, tasks, slots, data.subjek || [], lecturers) +
        timetableFooter(data, lecturers, signatory, confirmed) + '</div>';
}

async function downloadTimetablePdf(markup, filename, button, reportError) {
    if (button?.getAttribute('aria-busy') === 'true') return;
    button?.setAttribute('aria-busy', 'true');
    const frame = document.createElement('iframe');
    frame.title = 'Penjana PDF';
    frame.tabIndex = -1;
    frame.setAttribute('aria-hidden', 'true');
    frame.style.cssText = 'position:fixed; left:-2000px; top:0; width:1100px; height:760px; border:0';
    document.body.append(frame);
    let timeout;
    try {
        const doc = frame.contentDocument;
        doc.open();
        doc.write('<!doctype html><html lang="ms"><head><meta charset="utf-8"><style>' +
            'body{margin:0} #pdf-sheet{width:280mm;overflow:hidden;}' +
            timetableReportCss + lecturerPrintCss + '</style></head><body>' +
            '<div id="pdf-sheet">' + markup + '</div></body></html>');
        doc.close();
        const generate = async () => {
            const library = doc.createElement('script');
            library.src = new URL('html2pdf.bundle.min.js', location.href).href;
            await Promise.all([
                new Promise((resolve, reject) => {
                    library.onload = resolve;
                    library.onerror = reject;
                    doc.head.append(library);
                }),
                ...Array.from(doc.images, image => image.decode().catch(() => {}))
            ]);
            const sheet = doc.getElementById('pdf-sheet');
            const report = sheet.firstElementChild;
            const height = report.getBoundingClientRect().height;
            const maxHeight = 192 * 96 / 25.4;
            if (height > maxHeight) {
                report.style.transform = 'scale(' + maxHeight / height + ')';
                report.style.transformOrigin = 'top left';
                sheet.style.height = maxHeight + 'px';
            }
            return frame.contentWindow.html2pdf().set({
                margin: 8,
                pagebreak: { mode: [] },
                image: { type: 'jpeg', quality: 0.95 },
                html2canvas: { scale: 1.5, imageTimeout: 3000, logging: false },
                jsPDF: { unit: 'mm', format: 'a4', orientation: 'landscape' }
            }).from(sheet).outputPdf('blob');
        };
        const blob = await Promise.race([generate(), new Promise((_, reject) => {
            timeout = setTimeout(() => reject(new Error('PDF timeout')), 15000);
        })]);
        const url = URL.createObjectURL(blob);
        const download = document.createElement('a');
        download.href = url;
        download.download = filename;
        document.body.append(download);
        download.click();
        download.remove();
        setTimeout(() => URL.revokeObjectURL(url), 30000);
    } catch {
        reportError('PDF tidak dapat dijana. Sila cuba lagi atau gunakan butang Cetak.');
    } finally {
        clearTimeout(timeout);
        frame.remove();
        button?.removeAttribute('aria-busy');
    }
}

function openTimetablePrint(title, markup, css = '', options) {
    const target = window.open('', '_blank');
    if (!target) {
        alert('Benarkan tetingkap timbul untuk mencetak.');
        return;
    }
    target.document.open();
    target.document.write('<!doctype html><html lang="ms"><head><meta charset="utf-8"><title>' +
        escapeTimetableText(title) + '</title><style>' + css + '</style></head><body>' + markup + '</body></html>');
    target.document.close();
    return printTimetableWindow(target, options);
}

function renderTimetableGrid(slots, hasConflict = () => false) {
    const locations = timetableLocations();
    const parseTime = value => {
        const [hour, minute] = String(value).split(':').map(Number);
        return hour + minute / 60;
    };
    const starts = slots.map(slot => parseTime(slot.mula)).filter(Number.isFinite);
    const ends = slots.map(slot => parseTime(slot.tamat)).filter(Number.isFinite);
    const firstHour = Math.floor(Math.min(8, ...starts));
    const endHour = Math.ceil(Math.max(17, ...ends));
    const hours = Array.from({ length: endHour - firstHour }, (_, index) => firstHour + index);
    const covers = (slot, start, end) => parseTime(slot.mula) < end && parseTime(slot.tamat) > start;
    const isFriday = slot => String(slot.hari).toLowerCase() === 'jumaat';
    const weekdayBreak = !slots.some(slot => !isFriday(slot) && covers(slot, 12, 13));
    const fridayBreak = !slots.some(slot => isFriday(slot) && covers(slot, 12, 14));
    const time = hour => String(hour).padStart(2, '0') + ':00';
    const heading = friday => '<tr><th>HARI</th>' + hours.map(hour => {
        if (friday && fridayBreak && hour === 13) return '';
        if (hour === 12 && (friday ? fridayBreak : weekdayBreak)) {
            return '<th' + (friday ? ' colspan="2"' : '') + '>REHAT</th>';
        }
        return '<th>' + time(hour) + ' – ' + time(hour + 1) + '</th>';
    }).join('') + '</tr>';
    const days = ['Isnin', 'Selasa', 'Rabu', 'Khamis', 'Jumaat'];
    return '<table class="lecturer-print-grid"><tbody>' + heading(false) + days.map((day, index) => {
        const friday = index === 4;
        return (friday ? heading(true) : '') + '<tr><th>' + day.toUpperCase() + '</th>' + hours.map(hour => {
            if (friday && fridayBreak) {
                if (hour === 12) return '<td class="break" colspan="2">REHAT / SOLAT</td>';
                if (hour === 13) return '';
            }
            if (!friday && weekdayBreak && hour === 12) {
                return index === 0 ? '<td class="break weekday-break" rowspan="4"><span>REHAT</span></td>' : '';
            }
            const lessons = slots.filter(slot => String(slot.hari).toLowerCase() === day.toLowerCase() &&
                covers(slot, hour, hour + 1));
            return '<td>' + lessons.map(slot => '<div class="timetable-lesson' + (hasConflict(slot) ? ' clash' : '') +
                '"><b>' + escapeTimetableText(slot.kod) + '</b><br>' +
                escapeTimetableText(slot.kelas) + '<br>' +
                escapeTimetableText(locations.get(scheduleKey(slot.lokasi))?.code || locationInitials(slot.lokasi) || '—') + '<br>' +
                escapeTimetableText([slot.singkatan, slot.singkatanPembantu].filter(code => code && code !== '-').join(' / ')) +
                '</div>').join('') + '</td>';
        }).join('') + '</tr>';
    }).join('') + '</tbody></table>';
}

const lecturerPrintCss = `
    .lecturer-print-grid { width: 100%; table-layout: fixed; border-collapse: collapse; margin: 3mm 0 5mm; text-align: center; }
    .lecturer-print-grid th, .lecturer-print-grid td { border: 1px solid #555; padding: 2px 3px; }
    .lecturer-print-grid th { background: #ff0; font-size: 9px; }
    .lecturer-print-grid td { height: 11mm; font-size: 9px; }
    .lecturer-print-grid tr:nth-child(odd) td { background: #bdd4e8; }
    .lecturer-print-grid td.break { background: #ffc000; font-weight: bold; }
    .lecturer-print-grid .weekday-break span { writing-mode: vertical-rl; transform: rotate(180deg); }
    .lecturer-print-grid td div + div { border-top: 1px solid #aaa; margin-top: 2px; padding-top: 2px; }
    .lecturer-print-grid { color: #111827; background: #fff; overflow-wrap: anywhere; }
    .timetable-lesson.clash { background: #fee2e2; color: #991b1b; }
`;

const existingGridPrintCss = `
    table { width: 100%; border-collapse: collapse; }
    th, td { border: 1px solid #555; padding: 4px; vertical-align: top; }
    th { background: #edf2f7; }
    td div + div { margin-top: 3px; }
    td img { width: 12px; }
    svg { display: none; }
    [class*="bg-blue-100"] { background: #ffe9a6; }
`;
