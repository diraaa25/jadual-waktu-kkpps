// Firebase Service and Fallback Logic

// 1. Detect if Firebase is configured
const isFirebaseConfigured = () => {
    return typeof firebaseConfig !== 'undefined' && 
           firebaseConfig.apiKey && 
           firebaseConfig.apiKey !== "YOUR_API_KEY" && 
           firebaseConfig.databaseURL && 
           firebaseConfig.databaseURL !== "YOUR_DATABASE_URL";
};

let db = null;
let firebaseActive = false;

// 2. Initialize Firebase compat if configured
if (isFirebaseConfigured()) {
    try {
        firebase.initializeApp(firebaseConfig);
        db = firebase.database();
        firebaseActive = true;
        console.log("Firebase initialized successfully.");
    } catch (error) {
        console.error("Firebase initialization failed:", error);
    }
} else {
    console.log("Firebase not configured. Falling back to LocalStorage.");
}

const isFirebaseActive = () => firebaseActive;

// Seed data definitions
const SEED_ANNOUNCEMENTS = [
    { category: "Pentadbiran Kolej", date: "Hari Ini", title: "Penyediaan Jadual Waktu Sesi 2026/2027", desc: "Semua pensyarah STM, SLK & UPA dikehendaki menyemak slot masing-masing di bahagian \"Urus Jadual Waktu\" bagi mengelakkan pertindihan." },
    { category: "Penyelaras STM", date: "Semalam", title: "Kemas kini Pakej Kursus Sijil Teknologi Maklumat", desc: "Penambahan subjek Pengaturcaraan Web (STM401) telah dimasukkan ke dalam daftar kursus aktif bagi penggal ini." },
    { category: "Unit Akademik", date: "3 Hari Lepas", title: "Pertemuan Mingguan Pensyarah", desc: "Perbincangan penyelarasan jadual waktu diadakan setiap hari Jumaat jam 9:00 pagi di Bilik TECC." }
];

const SEED_LECTURERS = [
    { name: "DAILY BINTI TAYOK", shortName: "DT", designation: "Pegawai Pendidikan Pengajian Tinggi DH10", email: "daily.tayok@kolejkomuniti.edu.my", program: "STM", password: "pensyarah123" },
    { name: "DARNI BINTI MOHAMED YUSOFF", shortName: "DMY", designation: "Pegawai Pendidikan Pengajian Tinggi DH12", email: "darni.yusoff@kolejkomuniti.edu.my", program: "STM", password: "pensyarah123" },
    { name: "DG NUR AFIAH BINTI AWANG AHMAD", shortName: "DNA", designation: "Pegawai Pendidikan Pengajian Tinggi DH9", email: "dg.afiah@kolejkomuniti.edu.my", program: "STM", password: "pensyarah123" },
    { name: "JUSDY BIN JUWAIT", shortName: "JBJ", designation: "Pegawai Pendidikan Pengajian Tinggi DH12", email: "jusdy.juwait@kolejkomuniti.edu.my", program: "STM", password: "pensyarah123" },
    { name: "MOHAMMAD NOR IHSAN BIN MD ZIN", shortName: "MNI", designation: "Pegawai Pendidikan Pengajian Tinggi DH12", email: "ihsan.zin@kolejkomuniti.edu.my", program: "STM", password: "pensyarah123" },
    { name: "MOHD AZLAN BIN HASHIM", shortName: "MAH", designation: "Pegawai Pendidikan Pengajian Tinggi DH9", email: "azlan.hashim@kolejkomuniti.edu.my", program: "STM", password: "pensyarah123" },
    { name: "NADIRAH BINTI MOHAMAD", shortName: "NBM", designation: "Pegawai Pendidikan Pengajian Tinggi DH9", email: "nadirah.mohamad@kolejkomuniti.edu.my", program: "STM", password: "pensyarah123" },
    { name: "WAN AHMAD HILMI BIN A. RAHIM", shortName: "WAH", designation: "Pegawai Pendidikan Pengajian Tinggi DH10", email: "wan.hilmi@kolejkomuniti.edu.my", program: "STM", password: "pensyarah123" },
    { name: "DAYANG NURSHAZANA BINTI DAUD", shortName: "DND", designation: "Pegawai Pendidikan Pengajian Tinggi DH10", email: "d.shazana@kolejkomuniti.edu.my", program: "SLK", password: "pensyarah123" },
    { name: "DEVIANA RADEN", shortName: "DR", designation: "Pegawai Pendidikan Pengajian Tinggi DH9", email: "deviana.raden@kolejkomuniti.edu.my", program: "SLK", password: "pensyarah123" },
    { name: "FARHANA BINTI KAMIUS", shortName: "FBK", designation: "Pegawai Pendidikan Pengajian Tinggi DH9", email: "farhana.kamius@kolejkomuniti.edu.my", program: "SLK", password: "pensyarah123" },
    { name: "NURLIYANA HAMIZAH BINTI MOHD JEFFRI", shortName: "NHJ", designation: "Pegawai Pendidikan Pengajian Tinggi DH9", email: "nurliyana.jeffri@kolejkomuniti.edu.my", program: "SLK", password: "pensyarah123" },
    { name: "NURUL HUZAIFAH BINTI GIMSUN", shortName: "NHG", designation: "Pegawai Pendidikan Pengajian Tinggi DH9", email: "nurul.huzaifah@kolejkomuniti.edu.my", program: "SLK", password: "pensyarah123" },
    { name: "PUTERI NOR ARYSHA BINTI ARIFIN", shortName: "PNA", designation: "Pegawai Pendidikan Pengajian Tinggi DH9", email: "arysha.arifin@kolejkomuniti.edu.my", program: "SLK", password: "pensyarah123" },
    { name: "DAYANG NOORLIZAH BT AWANG MAHMOOD", shortName: "DNL", designation: "Pegawai Pendidikan Pengajian Tinggi DH10", email: "d.noorlizah@kolejkomuniti.edu.my", program: "UPA", password: "pensyarah123" },
    { name: "LUQMANUL HAKIM BIN ROSMIN", shortName: "LHR", designation: "Pegawai Pendidikan Pengajian Tinggi DH9", email: "luqmanul.hakim@kolejkomuniti.edu.my", program: "UPA", password: "pensyarah123" },
    { name: "TIFFANY THU PEI YING", shortName: "TPY", designation: "Pegawai Pendidikan Pengajian Tinggi DH10", email: "tiffany.thu@kolejkomuniti.edu.my", program: "UPA", password: "pensyarah123" },
    { name: "TS. NURATIKA ASYURAH BINTI ABDULLAH", shortName: "NAA", designation: "Pegawai Pendidikan Pengajian Tinggi DH10", email: "nuratika.asyurah@kolejkomuniti.edu.my", program: "UPA", password: "pensyarah123" }
];

const SEED_STUDENTS = [
    { name: "Mohd Ridzuan bin Mohd Syafique", gender: "Lelaki", ic: "080412125123", address: "Lot 15, Lorong Grace Ville, 88100 Kota Kinabalu, Sabah" },
    { name: "Fiona Christie anak Jelius", gender: "Perempuan", ic: "091015126124", address: "Kampung Kivatu, Jalan Penampang-Tambunan, 89500 Penampang, Sabah" },
    { name: "Aaron Bradley Oswald", gender: "Lelaki", ic: "070228125531", address: "W.D.T. 24, Kampung Marakau, 89300 Ranau, Sabah" },
    { name: "Nurul Ain binti Mohammad Yusof", gender: "Perempuan", ic: "080808125046", address: "No. 24, Taman Tyng, Jalan Utara, 90000 Sandakan, Sabah" },
    { name: "Alvin Wong Siew Ming", gender: "Lelaki", ic: "081212125789", address: "Block C-3-1, Kepayan Ridge Phase 2, 88200 Kota Kinabalu, Sabah" },
    { name: "Dayangku Siti Sarah binti Awangku Ahmad", gender: "Perempuan", ic: "070505126234", address: "Kampung Likas, Jalan Pasir, 88400 Kota Kinabalu, Sabah" },
    { name: "Jackery bin Marcus", gender: "Lelaki", ic: "090311125983", address: "Kampung Bundu, 89000 Keningau, Sabah" },
    { name: "Michelle Chen Jia Yi", gender: "Perempuan", ic: "080618125246", address: "No. 18, Taman Megah, Jalan Apas, 91000 Tawau, Sabah" },
    { name: "Mohd Farhan bin Mokhtar", gender: "Lelaki", ic: "071103125091", address: "Kampung Air, Semporna, 91308 Semporna, Sabah" },
    { name: "Nellysa binti Robert", gender: "Perempuan", ic: "080927126022", address: "Kampung Sunsuron, 89650 Tambunan, Sabah" },
    { name: "Darren Benedict Lim", gender: "Lelaki", ic: "090120125421", address: "Lot 4, Taman Sendikit, Jalan Damai, 88300 Kota Kinabalu, Sabah" },
    { name: "Siti Aishah binti Dahlan", gender: "Perempuan", ic: "070714125572", address: "Kampung Tanjung Aru Baru, 88100 Kota Kinabalu, Sabah" },
    { name: "Rayner bin Sylvester", gender: "Lelaki", ic: "080509125813", address: "Kampung Minintod, Jalan Inanam-Penampang, 88450 Inanam, Sabah" },
    { name: "Elvia Natalie Edwin", gender: "Perempuan", ic: "091204126418", address: "Kampung Kinarut, 89600 Papar, Sabah" },
    { name: "Awangku Mohammad Nazirul bin Pengiran Haji Latif", gender: "Lelaki", ic: "071001125103", address: "Kampung Weston, 89800 Beaufort, Sabah" },
    { name: "Rachel Chong Mei Ting", gender: "Perempuan", ic: "080131125062", address: "Lot 12, Taman Ridgeview, Phase 1, 88200 Kota Kinabalu, Sabah" },
    { name: "Mohammad Haziq bin Zulkifli", gender: "Lelaki", ic: "090719125633", address: "Kampung Gana, 89100 Kota Marudu, Sabah" },
    { name: "Kimberly Jane Gidion", gender: "Perempuan", ic: "080324125982", address: "Kampung Dabak, 89500 Penampang, Sabah" },
    { name: "Brandon Lee Wei Jian", gender: "Lelaki", ic: "070409125205", address: "No. 7, Taman Fook On, Jalan Durian, 90000 Sandakan, Sabah" },
    { name: "Nurul Syazwani binti Abdul Rahman", gender: "Perempuan", ic: "090515125470", address: "Kampung Sim-Sim, Jambatan 4, 90000 Sandakan, Sabah" },
    { name: "Ryan Daniel bin George", gender: "Lelaki", ic: "081030125927", address: "Kampung Baru, 89200 Tuaran, Sabah" },
    { name: "Chloe Grace Fernandez", gender: "Perempuan", ic: "080214126138", address: "Lot 10-2, Taman Viewland, Phase 3, 88300 Kota Kinabalu, Sabah" },
    { name: "Mohd Shahril bin Asman", gender: "Lelaki", ic: "070908125401", address: "Kampung Tinusa 2, Jalan Airport, 90000 Sandakan, Sabah" },
    { name: "Nur Fatihah binti Jasni", gender: "Perempuan", ic: "090403125602", address: "Lorong 4, Taman Semarak, 91000 Tawau, Sabah" },
    { name: "Ethaniel Scott Henry", gender: "Lelaki", ic: "080817125887", address: "Kampung Kapa, Jalan Ranau-Tamparuli, 89250 Tamparuli, Sabah" },
    { name: "Nurul Farhana binti Roslan", gender: "Perempuan", ic: "081105126044", address: "Kampung Kuala Papar, 89600 Papar, Sabah" },
    { name: "Brandon Fletcher anak Donald", gender: "Lelaki", ic: "090422125335", address: "Taman Segama, Jalan Datuk Salleh Sulong, 88000 Kota Kinabalu, Sabah" },
    { name: "Siti Khadijah binti Mohd Daud", gender: "Perempuan", ic: "080219125674", address: "Kampung Laut, 89600 Papar, Sabah" },
    { name: "Muhammad Imran bin Ahmad", gender: "Lelaki", ic: "070930125893", address: "Taman Limbakau, 89600 Papar, Sabah" },
    { name: "Audryna Olivia Oswald", gender: "Perempuan", ic: "090714126116", address: "Kampung Koidupan, 89500 Penampang, Sabah" },
    { name: "Jason Ling Sheng Yee", gender: "Lelaki", ic: "080125125907", address: "Taman Indah Jaya, Jalan Lintas, 90000 Sandakan, Sabah" },
    { name: "Sharifah Nor Syahirah binti Syed Omar", gender: "Perempuan", ic: "081012125556", address: "Kampung Pengalat Besar, 89600 Papar, Sabah" },
    { name: "Daniel Marcus Junior", gender: "Lelaki", ic: "070511125219", address: "Kampung Nagapas, 89600 Papar, Sabah" },
    { name: "Chloe Yong Mei Xian", gender: "Perempuan", ic: "090308125438", address: "Lot 8, Taman Khidmat, Bukit Padang, 88300 Kota Kinabalu, Sabah" },
    { name: "Mohd Amirul bin Azman", gender: "Lelaki", ic: "080614125801", address: "Kampung Meliau, 89150 Kota Belud, Sabah" },
    { name: "Nur Syafiqah binti Rahman", gender: "Perempuan", ic: "081228126026", address: "Kampung Melalap, 89000 Tenom, Sabah" },
    { name: "Darren Voo Jin Hern", gender: "Lelaki", ic: "071015125463", address: "Taman Luyang Phase 4, 88300 Kota Kinabalu, Sabah" },
    { name: "Alyssa Joann Wong", gender: "Perempuan", ic: "090502126248", address: "Kampung Duvanson, Jalan Putatan, 88200 Putatan, Sabah" },
    { name: "Mohammad Syukri bin Ismail", gender: "Lelaki", ic: "080310125741", address: "Kampung Benoni, 89600 Papar, Sabah" },
    { name: "Grace Kelly anak Peter", gender: "Perempuan", ic: "070824125912", address: "Kampung Moyog, Jalan Penampang-Tambunan, 89500 Penampang, Sabah" },
    { name: "Shahrizal bin Mohd Yusuf", gender: "Lelaki", ic: "080117125303", address: "Kampung Beringgis, 89600 Papar, Sabah" },
    { name: "Nurul Hidayah binti Abdullah", gender: "Perempuan", ic: "090918126342", address: "Kampung Gana, 89600 Papar, Sabah" },
    { name: "Caleb Joshua Tan", gender: "Lelaki", ic: "080220125997", address: "Taman Seri Maju, Mile 4, North Road, 90000 Sandakan, Sabah" },
    { name: "Dayangku Fatimah binti Pengiran Hashim", gender: "Perempuan", ic: "081112126084", address: "Kampung Bundusan, 89500 Penampang, Sabah" },
    { name: "Mohd Danish bin Kamal", gender: "Lelaki", ic: "090605125785", address: "Kampung Buang Sayang, 89600 Papar, Sabah" }
];

const SEED_TIMETABLE = {
    isConfirmed: false,
    approvalState: "Draft",
    tpaLecturer: "DT",
    activeSession: "SESI 1 2026/2027",
    sessionsList: ["SESI 1 2026/2027", "SESI 2 2026/2027", "SESI 1 2027/2028"],
    subjek: [
        { nama: "DAILY BINTI TAYOK", singkatan: "DT", namaPembantu: "-", singkatanPembantu: "-", subjek: "Pengaturcaraan Web", kod: "STM3012", jam: 3 },
        { nama: "DARNI BINTI MOHAMED YUSOFF", singkatan: "DMY", namaPembantu: "-", singkatanPembantu: "-", subjek: "Pangkalan Data", kod: "STM3113", jam: 3 },
        { nama: "MOHD AZLAN BIN HASHIM", singkatan: "MAH", namaPembantu: "-", singkatanPembantu: "-", subjek: "Sistem Pengoperasian", kod: "STM2103", jam: 3 },
        { nama: "PUTERI NOR ARYSHA BINTI ARIFIN", singkatan: "PNA", namaPembantu: "-", singkatanPembantu: "-", subjek: "Penghayatan Etika dan Peradaban", kod: "MPU2162", jam: 2 },
        { nama: "TIFFANY THU PEI YING", singkatan: "TPY", namaPembantu: "-", singkatanPembantu: "-", subjek: "Pengajian Islam", kod: "MPU2312", jam: 2 },
        { nama: "JUSDY BIN JUWAIT", singkatan: "JBJ", namaPembantu: "-", singkatanPembantu: "-", subjek: "Matematik Diskrit", kod: "STM2043", jam: 3 }
    ],
    slot: [
        { kod: "STM3012", kelas: "STM 1A", lokasi: "MAKMAL PENGATURCARAAN 1", hari: "Isnin", mula: "08:00", tamat: "10:00", singkatan: "DT", singkatanPembantu: "-", subjek: "Pengaturcaraan Web", nama: "DAILY BINTI TAYOK", namaPembantu: "-" },
        { kod: "STM3113", kelas: "STM 1A", lokasi: "MAKMAL PENGATURCARAAN 2", hari: "Rabu", mula: "10:00", tamat: "12:00", singkatan: "DMY", singkatanPembantu: "-", subjek: "Pangkalan Data", nama: "DARNI BINTI MOHAMED YUSOFF", namaPembantu: "-" },
        { kod: "STM3012", kelas: "STM 1B", lokasi: "MAKMAL MULTIMEDIA", hari: "Isnin", mula: "10:00", tamat: "12:00", singkatan: "DT", singkatanPembantu: "-", subjek: "Pengaturcaraan Web", nama: "DAILY BINTI TAYOK", namaPembantu: "-" },
        { kod: "STM3012", kelas: "STM 1C", lokasi: "MAKMAL RANGKAIAN", hari: "Selasa", mula: "14:00", tamat: "16:00", singkatan: "DT", singkatanPembantu: "-", subjek: "Pengaturcaraan Web", nama: "DAILY BINTI TAYOK", namaPembantu: "-" },
        { kod: "MPU2162", kelas: "SLK 1A", lokasi: "DEWAN KULIAH", hari: "Khamis", mula: "08:00", tamat: "10:00", singkatan: "PNA", singkatanPembantu: "-", subjek: "Penghayatan Etika dan Peradaban", nama: "PUTERI NOR ARYSHA BINTI ARIFIN", namaPembantu: "-" },
        { kod: "MPU2162", kelas: "SLK 1B", lokasi: "DEWAN KULIAH", hari: "Khamis", mula: "10:00", tamat: "12:00", singkatan: "PNA", singkatanPembantu: "-", subjek: "Penghayatan Etika dan Peradaban", nama: "PUTERI NOR ARYSHA BINTI ARIFIN", namaPembantu: "-" }
    ]
};

const SEED_SPAK_ACTIVITIES = [
    {
        id: "spak-seed-1",
        title: "Taklimat 1 Latihan Industri Sesi 2:26/27",
        date: "2026-07-24",
        startTime: "08:00",
        endTime: "11:30",
        location: "Dewan Rafflesia",
        category: "Penting",
        coordinator: "DAILY BINTI TAYOK",
        updatedAt: "2026-07-09 18:19"
    }
];

// 3. Auto-seed if Firebase is active but empty
if (isFirebaseActive()) {
    db.ref().once('value', snapshot => {
        if (!snapshot.exists()) {
            console.log("Firebase is empty. Seeding default database values...");
            db.ref().set({
                announcements: SEED_ANNOUNCEMENTS,
                lecturers: SEED_LECTURERS,
                students: SEED_STUDENTS,
                timetable: SEED_TIMETABLE,
                spakActivities: SEED_SPAK_ACTIVITIES
            }).then(() => {
                console.log("Seeding complete.");
            }).catch(e => {
                console.error("Seeding failed:", e);
            });
        }
    });
}

// 4. Firebase API wrappers
const firebaseWatchAnnouncements = (callback) => {
    if (isFirebaseActive()) {
        db.ref('announcements').on('value', snapshot => {
            callback(snapshot.val());
        });
    }
};

const firebaseSaveAnnouncements = (data) => {
    if (isFirebaseActive()) {
        return db.ref('announcements').set(data);
    }
};

const firebaseWatchLecturers = (callback) => {
    if (isFirebaseActive()) {
        db.ref('lecturers').on('value', snapshot => {
            callback(snapshot.val());
        });
    }
};

const firebaseGetLecturersOnce = (callback) => {
    if (isFirebaseActive()) {
        db.ref('lecturers').once('value').then(snapshot => {
            callback(snapshot.val());
        });
    }
};

const firebaseSaveLecturers = (data) => {
    if (isFirebaseActive()) {
        return db.ref('lecturers').set(data);
    }
};

const firebaseWatchStudents = (callback) => {
    if (isFirebaseActive()) {
        db.ref('students').on('value', snapshot => {
            callback(snapshot.val());
        });
    }
};

const firebaseSaveStudents = (data) => {
    if (isFirebaseActive()) {
        return db.ref('students').set(data);
    }
};

const firebaseWatchTimetable = (callback) => {
    if (isFirebaseActive()) {
        db.ref('timetable').on('value', snapshot => {
            callback(snapshot.val());
        });
    }
};

const firebaseSaveTimetable = (data) => {
    if (isFirebaseActive()) {
        return db.ref('timetable').set(data);
    }
};

const firebaseWatchSpakActivities = (callback) => {
    if (isFirebaseActive()) {
        db.ref('spakActivities').on('value', snapshot => {
            callback(snapshot.val());
        });
    }
};

const firebaseSaveSpakActivities = (data) => {
    if (isFirebaseActive()) {
        return db.ref('spakActivities').set(data);
    }
};

// Function to upload existing local storage database to Firebase
const firebaseUploadLocalToFirebase = (onSuccess, onError) => {
    if (!isFirebaseActive()) {
        if (onError) onError("Firebase is not configured or active.");
        return;
    }
    try {
        const localAnn = JSON.parse(localStorage.getItem('kkpapar_announcements')) || SEED_ANNOUNCEMENTS;
        const localLec = JSON.parse(localStorage.getItem('kkpapar_lecturers')) || SEED_LECTURERS;
        const localStud = JSON.parse(localStorage.getItem('kkpapar_students')) || SEED_STUDENTS;
        const localTimetable = JSON.parse(localStorage.getItem('jadualSistemV3')) || SEED_TIMETABLE;
        const localSpak = JSON.parse(localStorage.getItem('kkpapar_spak_activities')) || SEED_SPAK_ACTIVITIES;

        db.ref().set({
            announcements: localAnn,
            lecturers: localLec,
            students: localStud,
            timetable: localTimetable,
            spakActivities: localSpak
        }).then(() => {
            if (onSuccess) onSuccess();
        }).catch(e => {
            if (onError) onError(e);
        });
    } catch (e) {
        if (onError) onError(e);
    }
};

// 5. Connection Status Badge UI helper
const appendStatusBadge = (sidebarSelector, isDark = false) => {
    const active = isFirebaseActive();
    if (!active) return; // Do not show badge if Firebase is inactive

    const text = "Firebase Connected";
    const color = "#10b981";
    const bg = "rgba(16, 185, 129, 0.15)";
    const dot = "🟢";

    const badgeHtml = `
        <div id="firebase-status-badge" style="
            display: inline-flex;
            align-items: center;
            gap: 6px;
            font-size: 11px;
            font-weight: 700;
            color: ${color};
            background: ${bg};
            border: 1px solid ${color}40;
            padding: 6px 12px;
            border-radius: 8px;
            margin: 10px 0;
            width: fit-content;
            transition: all 0.3s ease;
        " title="${active ? 'Pangkalan data atas talian Firebase aktif & disegerak secara nyata.' : 'Mod fallback aktif. Sila konfigurasikan firebase-config.js.'}">
            <span>${dot}</span>
            <span>${text}</span>
        </div>
    `;

    // Try to append inside sidebar footer or at page top
    setTimeout(() => {
        let container = document.querySelector(sidebarSelector);
        if (!container) {
            container = document.querySelector('.app-layout') || document.body;
            if (container) {
                const wrapper = document.createElement('div');
                wrapper.style.padding = '0 2rem';
                wrapper.innerHTML = badgeHtml;
                container.insertBefore(wrapper, container.firstChild);
            }
        } else {
            const tempDiv = document.createElement('div');
            tempDiv.innerHTML = badgeHtml.trim();
            container.insertBefore(tempDiv.firstElementChild, container.firstChild);
        }
    }, 100);
};

const format12Hour = (timeStr) => {
    if (!timeStr) return '';
    const parts = timeStr.split(':');
    if (parts.length < 2) return timeStr;
    let h = parseInt(parts[0], 10);
    const m = parts[1];
    const ampm = h >= 12 ? 'PM' : 'AM';
    h = h % 12;
    h = h ? h : 12;
    return `${h}:${m} ${ampm}`;
};
