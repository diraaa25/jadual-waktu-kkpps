function announcementAuthor() {
    const role = sessionStorage.getItem('logged_role');
    const lecturer = sessionStorage.getItem('logged_lecturer');
    if (role === 'programmer') return 'programmer';
    if (role === 'pensyarah' && lecturer) return 'lecturer:' + lecturer;
    return '';
}

function normalizeAnnouncementsList(raw) {
    if (Array.isArray(raw)) return raw.filter(Boolean);
    if (raw && typeof raw === 'object') return Object.values(raw).filter(Boolean);
    return [];
}

function generateAnnouncementId() {
    if (typeof crypto !== 'undefined' && typeof crypto.randomUUID === 'function') {
        return crypto.randomUUID();
    }
    return 'ann-' + Date.now() + '-' + Math.random().toString(36).slice(2, 10);
}

function ownsAnnouncement(post, author = announcementAuthor()) {
    if (!author || !post) return false;
    if (author === 'programmer') return true;
    if (!post.owner && !post.publisher) return true;
    return post.owner
        ? post.owner.toUpperCase() === author.toUpperCase()
        : author.toUpperCase() === ('lecturer:' + post.publisher).toUpperCase();
}

function announcementPublisher(post, lecturers) {
    const code = post.owner?.startsWith('lecturer:') ? post.owner.slice(9) : post.publisher;
    return post.publisherName || lecturers.find(person => (person.shortName || person.short) === code)?.name ||
        (post.owner === 'programmer' ? 'Programmer SIJAWAP' : 'Pentadbir');
}

function escapeAnnouncement(value) {
    return String(value ?? '').replace(/[&<>"']/g, char =>
        ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[char]);
}

function announcementMatches(post, original) {
    if (!post || !original) return false;
    if (original.id && post.id) return post.id === original.id;
    return (post.title || '') === (original.title || '') &&
        (post.desc || '') === (original.desc || '') &&
        (post.date || '') === (original.date || '') &&
        (post.category || '') === (original.category || '');
}

function watchPublicNotices(callback) {
    if (isFirebaseActive()) {
        db.ref('public_notices').on('value', snapshot => callback(normalizeAnnouncementsList(snapshot.val())));
        return;
    }
    const key = 'kkpapar_public_notices';
    const refresh = () => callback(normalizeAnnouncementsList(JSON.parse(localStorage.getItem(key) || '[]')));
    refresh();
    window.addEventListener('storage', event => { if (event.key === key) refresh(); });
}

async function saveAnnouncement({ original, fields, publisherName, publicNotice = false }) {
    const author = announcementAuthor();
    if (!author || (publicNotice && author !== 'programmer') || (original && !ownsAnnouncement(original))) {
        throw new Error('Hanya penerbit boleh mengubah atau memadam hebahan ini.');
    }
    const update = stored => {
        const posts = normalizeAnnouncementsList(stored);
        if (!original) {
            return [{ ...fields, id: generateAnnouncementId(), owner: author, publisherName }, ...posts];
        }
        const index = posts.findIndex(post => announcementMatches(post, original));
        if (index < 0 || !ownsAnnouncement(posts[index], author)) return;
        if (!fields) {
            posts.splice(index, 1);
            return posts;
        }
        const existing = posts[index];
        posts[index] = {
            ...existing,
            ...fields,
            id: existing.id || original.id || generateAnnouncementId(),
            owner: existing.owner || author,
            publisherName: existing.owner && existing.publisherName ? existing.publisherName : (publisherName || existing.publisherName)
        };
        return posts;
    };
    const path = publicNotice ? 'public_notices' : 'announcements';
    if (isFirebaseActive()) {
        const ref = db.ref(path);
        const snap = await ref.once('value');
        let attempts = 0;
        const result = await ref.transaction(current => {
            attempts += 1;
            const base = (current === null && attempts === 1 && snap.exists()) ? snap.val() : current;
            return update(base);
        }, undefined, false);
        if (result.committed) return normalizeAnnouncementsList(result.snapshot.val());
    } else {
        const key = publicNotice ? 'kkpapar_public_notices' : 'kkpapar_announcements';
        const save = () => {
            const raw = localStorage.getItem(key);
            const fallback = publicNotice ? [] : (typeof SEED_ANNOUNCEMENTS !== 'undefined' ? SEED_ANNOUNCEMENTS : []);
            const current = raw !== null ? JSON.parse(raw) : fallback;
            const next = update(current);
            if (next) localStorage.setItem(key, JSON.stringify(next));
            return next;
        };
        const result = navigator.locks ? await navigator.locks.request(key, save) : save();
        if (result) return result;
    }
    throw new Error('Hebahan telah berubah atau tidak dapat disimpan. Muat semula dan cuba lagi.');
}
