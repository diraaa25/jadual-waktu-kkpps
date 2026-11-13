function announcementAuthor() {
    const role = sessionStorage.getItem('logged_role');
    const lecturer = sessionStorage.getItem('logged_lecturer');
    if (role === 'programmer') return 'programmer';
    if (role === 'pensyarah' && lecturer) return 'lecturer:' + lecturer;
    return '';
}

function ownsAnnouncement(post, author = announcementAuthor()) {
    if (!author || !post) return false;
    return post.owner ? post.owner === author : author === 'lecturer:' + post.publisher;
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

function watchPublicNotices(callback) {
    if (isFirebaseActive()) {
        db.ref('public_notices').on('value', snapshot => callback(snapshot.val() || []));
        return;
    }
    const key = 'kkpapar_public_notices';
    const refresh = () => callback(JSON.parse(localStorage.getItem(key) || '[]'));
    refresh();
    window.addEventListener('storage', event => { if (event.key === key) refresh(); });
}

async function saveAnnouncement({ original, fields, publisherName, publicNotice = false }) {
    const author = announcementAuthor();
    if (!author || (publicNotice && author !== 'programmer') || (original && !ownsAnnouncement(original))) {
        throw new Error('Hanya penerbit boleh mengubah atau memadam hebahan ini.');
    }
    const id = original?.id || crypto.randomUUID();
    const matchesOriginal = post => Object.keys(post).length === Object.keys(original).length &&
        Object.keys(original).every(key => post[key] === original[key]);
    const update = stored => {
        const posts = (stored || []).filter(Boolean);
        if (!original) return [{ ...fields, id, owner: author, publisherName }, ...posts];
        const index = posts.findIndex(post => original.id ? post.id === original.id : matchesOriginal(post));
        if (index < 0 || !ownsAnnouncement(posts[index], author) ||
            !matchesOriginal(posts[index])) return;
        if (!fields) posts.splice(index, 1);
        else posts[index] = { ...posts[index], ...fields, id, owner: author, publisherName };
        return posts;
    };
    const path = publicNotice ? 'public_notices' : 'announcements';
    if (isFirebaseActive()) {
        const ref = db.ref(path);
        await ref.once('value');
        const result = await ref.transaction(update, undefined, false);
        if (result.committed) return result.snapshot.val() || [];
    } else {
        const key = publicNotice ? 'kkpapar_public_notices' : 'kkpapar_announcements';
        const save = () => {
            const next = update(JSON.parse(localStorage.getItem(key) || 'null') ||
                (publicNotice ? [] : SEED_ANNOUNCEMENTS));
            if (next) localStorage.setItem(key, JSON.stringify(next));
            return next;
        };
        const result = navigator.locks ? await navigator.locks.request(key, save) : save();
        if (result) return result;
    }
    throw new Error('Hebahan telah berubah atau tidak dapat disimpan. Muat semula dan cuba lagi.');
}
