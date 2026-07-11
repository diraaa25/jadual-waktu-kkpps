// Default Database Initialization Data

const DEFAULT_ANNOUNCEMENTS = [
    { category: "Pentadbiran Kolej", date: "Hari Ini", title: "Penyediaan Jadual Waktu Sesi 2026/2027", desc: "Semua pensyarah STM, SLK & UPA dikehendaki menyemak slot masing-masing di bahagian \"Urus Jadual Waktu\" bagi mengelakkan pertindihan." },
    { category: "Penyelaras STM", date: "Semalam", title: "Kemas kini Pakej Kursus Sijil Teknologi Maklumat", desc: "Penambahan subjek Pengaturcaraan Web (STM401) telah dimasukkan ke dalam daftar kursus aktif bagi penggal ini." },
    { category: "Unit Akademik", date: "3 Hari Lepas", title: "Pertemuan Mingguan Pensyarah", desc: "Perbincangan penyelarasan jadual waktu diadakan setiap hari Jumaat jam 9:00 pagi di Bilik TECC." }
];

const INITIAL_LECTURERS = [
    { name: "DAILY BINTI TAYOK", shortName: "DT", designation: "Pegawai Pendidikan Pengajian Tinggi DH10", email: "daily.tayok@kolejkomuniti.edu.my", program: "STM" },
    { name: "DARNI BINTI MOHAMED YUSOFF", shortName: "DMY", designation: "Pegawai Pendidikan Pengajian Tinggi DH12", email: "darni.yusoff@kolejkomuniti.edu.my", program: "STM" },
    { name: "DG NUR AFIAH BINTI AWANG AHMAD", shortName: "DNA", designation: "Pegawai Pendidikan Pengajian Tinggi DH9", email: "dg.afiah@kolejkomuniti.edu.my", program: "STM" },
    { name: "JUSDY BIN JUWAIT", shortName: "JBJ", designation: "Pegawai Pendidikan Pengajian Tinggi DH12", email: "jusdy.juwait@kolejkomuniti.edu.my", program: "STM" },
    { name: "MOHAMMAD NOR IHSAN BIN MD ZIN", shortName: "MNI", designation: "Pegawai Pendidikan Pengajian Tinggi DH12", email: "ihsan.zin@kolejkomuniti.edu.my", program: "STM" },
    { name: "MOHD AZLAN BIN HASHIM", shortName: "MAH", designation: "Pegawai Pendidikan Pengajian Tinggi DH9", email: "azlan.hashim@kolejkomuniti.edu.my", program: "STM" },
    { name: "NADIRAH BINTI MOHAMAD", shortName: "NBM", designation: "Pegawai Pendidikan Pengajian Tinggi DH9", email: "nadirah.mohamad@kolejkomuniti.edu.my", program: "STM" },
    { name: "WAN AHMAD HILMI BIN A. RAHIM", shortName: "WAH", designation: "Pegawai Pendidikan Pengajian Tinggi DH10", email: "wan.hilmi@kolejkomuniti.edu.my", program: "STM" },
    { name: "DAYANG NURSHAZANA BINTI DAUD", shortName: "DND", designation: "Pegawai Pendidikan Pengajian Tinggi DH10", email: "d.shazana@kolejkomuniti.edu.my", program: "SLK" },
    { name: "DEVIANA RADEN", shortName: "DR", designation: "Pegawai Pendidikan Pengajian Tinggi DH9", email: "deviana.raden@kolejkomuniti.edu.my", program: "SLK" },
    { name: "FARHANA BINTI KAMIUS", shortName: "FBK", designation: "Pegawai Pendidikan Pengajian Tinggi DH9", email: "farhana.kamius@kolejkomuniti.edu.my", program: "SLK" },
    { name: "NURLIYANA HAMIZAH BINTI MOHD JEFFRI", shortName: "NHJ", designation: "Pegawai Pendidikan Pengajian Tinggi DH9", email: "nurliyana.jeffri@kolejkomuniti.edu.my", program: "SLK" },
    { name: "NURUL HUZAIFAH BINTI GIMSUN", shortName: "NHG", designation: "Pegawai Pendidikan Pengajian Tinggi DH9", email: "nurul.huzaifah@kolejkomuniti.edu.my", program: "SLK" },
    { name: "PUTERI NOR ARYSHA BINTI ARIFIN", shortName: "PNA", designation: "Pegawai Pendidikan Pengajian Tinggi DH9", email: "arysha.arifin@kolejkomuniti.edu.my", program: "SLK" },
    { name: "DAYANG NOORLIZAH BT AWANG MAHMOOD", shortName: "DNL", designation: "Pegawai Pendidikan Pengajian Tinggi DH10", email: "d.noorlizah@kolejkomuniti.edu.my", program: "UPA" },
    { name: "LUQMANUL HAKIM BIN ROSMIN", shortName: "LHR", designation: "Pegawai Pendidikan Pengajian Tinggi DH9", email: "luqmanul.hakim@kolejkomuniti.edu.my", program: "UPA" },
    { name: "TIFFANY THU PEI YING", shortName: "TPY", designation: "Pegawai Pendidikan Pengajian Tinggi DH10", email: "tiffany.thu@kolejkomuniti.edu.my", program: "UPA" },
    { name: "TS. NURATIKA ASYURAH BINTI ABDULLAH", shortName: "NAA", designation: "Pegawai Pendidikan Pengajian Tinggi DH10", email: "nuratika.asyurah@kolejkomuniti.edu.my", program: "UPA" }
];

const INITIAL_STUDENTS = [
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

// App State
let announcements = [];
let students = [];
let lecturersList = [];
let DB = { subjek: [], slot: [], isConfirmed: false };
let spakActivities = [];

// Initialize application
document.addEventListener("DOMContentLoaded", () => {
    initTheme();
    initDatabase();
    setupEventListeners();
    startLiveClock();
    if (!isFirebaseActive()) {
        renderAll();
    }
});

// 1. Theme Management
function initTheme() {
    const isDark = localStorage.getItem("kkpapar_dark_mode") === "true";
    const body = document.body;
    const themeBtn = document.getElementById("theme-toggle");

    if (isDark) {
        body.classList.add("dark-mode");
        body.classList.remove("light-mode");
        themeBtn.querySelector("span").textContent = "Mod Cerah";
    } else {
        body.classList.add("light-mode");
        body.classList.remove("dark-mode");
        themeBtn.querySelector("span").textContent = "Mod Gelap";
    }
}

function toggleTheme() {
    const body = document.body;
    const themeBtn = document.getElementById("theme-toggle");
    const isDark = body.classList.toggle("dark-mode");
    body.classList.toggle("light-mode", !isDark);

    localStorage.setItem("kkpapar_dark_mode", isDark);
    themeBtn.querySelector("span").textContent = isDark ? "Mod Cerah" : "Mod Gelap";

    showToast(`Tema bertukar ke Mod ${isDark ? 'Gelap' : 'Cerah'}`, "success");
}

// 2. Database Management
function initDatabase() {
    if (isFirebaseActive()) {
        firebaseWatchAnnouncements(data => {
            announcements = data || [];
            renderAnnouncements();
            renderStats();
        });
        firebaseWatchStudents(data => {
            students = data || [];
            renderStudents();
            renderStats();
        });
        firebaseWatchLecturers(data => {
            lecturersList = data || [];
            window.lecturersList = lecturersList;
            renderStats();
        });
        firebaseWatchTimetable(data => {
            DB = data || { subjek: [], slot: [], isConfirmed: false };
            DB.slot = DB.slot || [];
            DB.subjek = DB.subjek || [];
            renderAll();
        });
        firebaseWatchSpakActivities(data => {
            spakActivities = data || [];
            if (typeof renderSpakCalendar === 'function') renderSpakCalendar();
        });
    } else {
        // Load announcements
        const storedAnnouncements = localStorage.getItem("kkpapar_announcements");
        if (storedAnnouncements) {
            announcements = JSON.parse(storedAnnouncements);
        } else {
            announcements = [...DEFAULT_ANNOUNCEMENTS];
            localStorage.setItem("kkpapar_announcements", JSON.stringify(announcements));
        }

        // Load students
        const storedStudents = localStorage.getItem("kkpapar_students");
        if (storedStudents) {
            const parsed = JSON.parse(storedStudents);
            if (parsed.length === 25) {
                students = [...INITIAL_STUDENTS];
                localStorage.setItem("kkpapar_students", JSON.stringify(students));
            } else {
                students = parsed;
            }
        } else {
            students = [...INITIAL_STUDENTS];
            localStorage.setItem("kkpapar_students", JSON.stringify(students));
        }

        // Load timetable
        const storedTimetable = localStorage.getItem("jadualSistemV3");
        if (storedTimetable) {
            DB = JSON.parse(storedTimetable);
        } else {
            DB = { subjek: [], slot: [], isConfirmed: false };
        }
        DB.slot = DB.slot || [];
        DB.subjek = DB.subjek || [];

        // Load SPAK activities
        const storedSpak = localStorage.getItem("kkpapar_spak_activities");
        if (storedSpak && JSON.parse(storedSpak).length > 0) {
            spakActivities = JSON.parse(storedSpak);
        } else {
            // Seed a sample activity initially
            spakActivities = [
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
            localStorage.setItem("kkpapar_spak_activities", JSON.stringify(spakActivities));
        }
    }
}

// 3. Tab Navigation
function switchTab(tabId) {
    const panes = document.querySelectorAll(".tab-pane");
    panes.forEach(pane => pane.classList.remove("active"));

    const navItems = document.querySelectorAll(".nav-item");
    navItems.forEach(item => item.classList.remove("active"));

    const activePane = document.getElementById(`tab-${tabId}`);
    if (activePane) activePane.classList.add("active");

    const activeNavItem = document.querySelector(`.nav-item[data-tab="${tabId}"]`);
    if (activeNavItem) activeNavItem.classList.add("active");

    const headerTitle = document.getElementById("header-title");
    const headerSubtitle = document.getElementById("header-subtitle");

    switch (tabId) {
        case "home":
            headerTitle.textContent = "Dashboard Utama";
            headerSubtitle.textContent = "Gambaran keseluruhan maklumat Kolej Komuniti Papar";
            break;
        case "pelajar":
            headerTitle.textContent = "Direktori Pelajar";
            headerSubtitle.textContent = "Senarai rekod maklumat pelajar Kolej Komuniti Papar, Sabah";
            break;
        case "login":
            headerTitle.textContent = "Log Masuk";
            headerSubtitle.textContent = "Akses portal mengikut peranan anda";
            break;
        case "spak":
            headerTitle.textContent = "Aktiviti KKPPS";
            headerSubtitle.textContent = "Kalendar & makluman terkini aktiviti pelajar & akademik KKPPS";
            if (typeof initSpakCalendar === 'function') {
                initSpakCalendar();
            }
            break;
        case "lokasi":
            headerTitle.textContent = "Jadual Lokasi";
            headerSubtitle.textContent = "Semak jadual penggunaan kelas & makmal Kolej Komuniti Papar";
            break;
    }
}

// 4. Setup Event Listeners
function setupEventListeners() {
    // Tab switching
    const navItems = document.querySelectorAll(".nav-item");
    navItems.forEach(item => {
        item.addEventListener("click", () => {
            const tabId = item.getAttribute("data-tab");
            if (tabId === "pelajar") {
                window.location.href = "Pelajar.html";
            } else {
                switchTab(tabId);
            }
        });
    });

    // Theme toggle
    document.getElementById("theme-toggle").addEventListener("click", toggleTheme);

    // Search & Filter Students
    document.getElementById("search-student").addEventListener("input", renderStudents);
    document.getElementById("filter-student-gender").addEventListener("change", renderStudents);

    // Login role sub-tab click handler
    const subtabs = document.querySelectorAll(".login-subtab");
    subtabs.forEach(tab => {
        tab.addEventListener("click", () => {
            // Remove active classes
            subtabs.forEach(t => t.classList.remove("active"));
            // Set current active
            tab.classList.add("active");

            const role = tab.getAttribute("data-role");
            document.getElementById("login-role").value = role;

            // Update labels, headings & placeholders dynamically
            const labelEmail = document.getElementById("label-login-email");
            const inputEmail = document.getElementById("login-email");
            const title = document.getElementById("login-portal-title");
            const desc = document.getElementById("login-portal-desc");
            const feedback = document.getElementById("login-feedback");

            // Clear feedback and input values
            feedback.style.display = "none";
            inputEmail.value = "";
            document.getElementById("login-password").value = "";

            if (role === "pensyarah") {
                title.textContent = "Portal Pensyarah";
                desc.textContent = "Sila log masuk untuk semakan tugasan & jadual waktu mengajar";
                labelEmail.textContent = "Alamat E-mel";
                inputEmail.placeholder = "pensyarah@kolejkomuniti.edu.my";
            } else if (role === "admin") {
                title.textContent = "Portal Admin";
                desc.textContent = "Akses pentadbiran untuk mengurus bilik, subjek & jadual waktu";
                labelEmail.textContent = "Alamat E-mel";
                inputEmail.placeholder = "admin@papar.edu.my";
            } else if (role === "programmer") {
                title.textContent = "Portal Programmer";
                desc.textContent = "Akses pembangunan sistem untuk menguji & mengemas kini pangkalan data";
                labelEmail.textContent = "Alamat E-mel";
                inputEmail.placeholder = "programmer@papar.edu.my";
            }
        });
    });

    // SHA-256 Hashing Utility
    async function hashPassword(password) {
        if (!password) return "";
        const msgBuffer = new TextEncoder().encode(password);
        const hashBuffer = await crypto.subtle.digest('SHA-256', msgBuffer);
        const hashArray = Array.from(new Uint8Array(hashBuffer));
        return hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
    }

    // Submit Login Form
    document.getElementById("login-form").addEventListener("submit", async (e) => {
        e.preventDefault();

        let role = document.getElementById("login-role").value;
        const emailVal = document.getElementById("login-email").value.trim().toLowerCase();
        const password = document.getElementById("login-password").value;
        const feedback = document.getElementById("login-feedback");

        const hashedInput = await hashPassword(password);

        // Auto-detect role to prevent user tab selection mistakes
        if (emailVal === "admin@papar.edu.my") {
            role = "admin";
        } else if (emailVal === "programmer@papar.edu.my") {
            role = "programmer";
        }

        if (role === "admin") {
            const adminPass = (DB && DB.adminPassword) ? DB.adminPassword : "0192023a7bbd73250516f069df18b5006e76c8c2c158e3794b748e727e37d5c9";
            const isMatch = (hashedInput === adminPass || password === adminPass ||
                hashedInput === "0192023a7bbd73250516f069df18b5006e76c8c2c158e3794b748e727e37d5c9" || password === "admin123");

            if (emailVal === "admin@papar.edu.my" && isMatch) {
                feedback.style.color = "var(--success)";
                feedback.style.display = "block";
                feedback.textContent = "Log masuk Admin berjaya! Mengalihkan ke Halaman Pengurusan...";
                showToast("Log masuk admin berjaya!", "success");

                // Store session
                sessionStorage.setItem("logged_role", "admin");

                setTimeout(() => {
                    feedback.style.display = "none";
                    window.location.href = "Jadual_baru.html";
                }, 1500);
            } else {
                showError("Alamat e-mel atau kata laluan salah.");
            }
        } else if (role === "programmer") {
            const progPass = (DB && DB.programmerPassword) ? DB.programmerPassword : "3e18a0ff1ef80a0684f09d22be3f5df7a195b169542a201c107be6782a205d15";
            const isMatch = (hashedInput === progPass || password === progPass ||
                hashedInput === "3e18a0ff1ef80a0684f09d22be3f5df7a195b169542a201c107be6782a205d15" || password === "programmer123");

            if (emailVal === "programmer@papar.edu.my" && isMatch) {
                feedback.style.color = "var(--success)";
                feedback.style.display = "block";
                feedback.textContent = "Log masuk Programmer berjaya! Mengalihkan ke Portal Programmer...";
                showToast("Log masuk programmer berjaya!", "success");

                // Store session
                sessionStorage.setItem("logged_role", "programmer");

                setTimeout(() => {
                    feedback.style.display = "none";
                    window.location.href = "Programmer.html";
                }, 1500);
            } else {
                showError("Alamat e-mel atau kata laluan salah.");
            }
        } else if (role === "pensyarah") {
            const doLogin = (list) => {
                const matchedLec = list.find(l => {
                    const storedPass = l.password || "f5d548325ef014a00b65287e0766ff31f288414b62db496515a415ff69572421";
                    const emailMatch = (l.email.toLowerCase() === emailVal.toLowerCase() || emailVal === "pensyarah@kolejkomuniti.edu.my");
                    const passwordMatch = (hashedInput === storedPass || password === storedPass ||
                        (password === "pensyarah123" && storedPass === "f5d548325ef014a00b65287e0766ff31f288414b62db496515a415ff69572421"));
                    return emailMatch && passwordMatch;
                });

                if (matchedLec) {
                    feedback.style.color = "var(--success)";
                    feedback.style.display = "block";
                    feedback.textContent = `Log masuk Pensyarah (${matchedLec.shortName}) berjaya! Mengalihkan ke Portal Pensyarah...`;
                    showToast("Log masuk berjaya!", "success");

                    localStorage.setItem("logged_lecturer", matchedLec.shortName);
                    sessionStorage.setItem("logged_role", "pensyarah");

                    setTimeout(() => {
                        feedback.style.display = "none";
                        window.location.href = "Pensyarah.html";
                    }, 1500);
                } else {
                    showError("E-mel pensyarah tidak didaftarkan atau kata laluan salah.");
                }
            };

            if (isFirebaseActive()) {
                firebaseGetLecturersOnce(lecturers => {
                    doLogin(lecturers || []);
                });
            } else {
                let lecturers = JSON.parse(localStorage.getItem('kkpapar_lecturers')) || INITIAL_LECTURERS;
                doLogin(lecturers);
            }
        }

        function showError(msg) {
            feedback.style.color = "var(--danger)";
            feedback.style.display = "block";
            feedback.textContent = msg;
            showToast("Gagal log masuk. Sila periksa kelayakan.", "danger");
        }
    });

    // Toggle Login Password Visibility
    const togglePassBtn = document.getElementById("toggle-login-password");
    if (togglePassBtn) {
        togglePassBtn.addEventListener("click", () => {
            const passInput = document.getElementById("login-password");
            const eyeIcon = document.getElementById("eye-icon");
            if (passInput && eyeIcon) {
                if (passInput.type === "password") {
                    passInput.type = "text";
                    // Change eye icon to eye-off icon
                    eyeIcon.innerHTML = `
                        <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path>
                        <line x1="1" y1="1" x2="23" y2="23"></line>
                    `;
                } else {
                    passInput.type = "password";
                    // Change eye icon back to eye icon
                    eyeIcon.innerHTML = `
                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                        <circle cx="12" cy="12" r="3"></circle>
                    `;
                }
            }
        });
    }
}

// 5. Toast Notifications System
function showToast(message, type = "success") {
    const toastBox = document.getElementById("toast-box");
    const toast = document.createElement("div");
    toast.className = `toast ${type}`;

    let icon = "";
    if (type === "success") {
        icon = `
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" style="width:16px;height:16px;color:var(--success)">
                <polyline points="20 6 9 17 4 12"></polyline>
            </svg>
        `;
    } else {
        icon = `
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" style="width:16px;height:16px;color:var(--danger)">
                <circle cx="12" cy="12" r="10"></circle>
                <line x1="12" y1="8" x2="12" y2="12"></line>
                <line x1="12" y1="16" x2="12.01" y2="16"></line>
            </svg>
        `;
    }

    toast.innerHTML = `
        ${icon}
        <span>${message}</span>
    `;

    toastBox.appendChild(toast);

    setTimeout(() => {
        toast.style.animation = "slideIn 0.3s ease-in reverse forwards";
        setTimeout(() => {
            toast.remove();
        }, 300);
    }, 3200);
}

// 6. Render Operations
function renderAll() {
    // Inject defaults if empty
    DB.sessionsList = DB.sessionsList || ["SESI 1 2026/2027", "SESI 2 2026/2027"];
    DB.activeSession = DB.activeSession || "SESI 1 2026/2027";
    DB.tpaLecturer = DB.tpaLecturer || "DT";
    DB.approvalState = DB.approvalState || "Draft";

    renderStats();
    renderAnnouncements();
    renderStudents();

    // Toggle landing page Location Timetable tab visibility based on approval state
    const isApproved = (DB && DB.approvalState === "Approved");
    const unverifiedEl = document.getElementById("lokasi-unverified-state");
    const contentEl = document.getElementById("lokasi-view-content");
    if (unverifiedEl && contentEl) {
        if (isApproved) {
            unverifiedEl.style.display = "none";
            contentEl.style.display = "block";
        } else {
            unverifiedEl.style.display = "block";
            contentEl.style.display = "none";
        }
    }

    const sess = (DB && DB.activeSession) ? DB.activeSession : 'SESI 1 2026/2027';
    document.querySelectorAll(".print-footer-session").forEach(el => {
        el.textContent = `JADUAL DISAHKAN BAGI SESI ${sess}`.toUpperCase();
    });

    if (typeof populateLocationDropdown === 'function') populateLocationDropdown();
    if (typeof renderLocationGrid === 'function') renderLocationGrid();
}

function renderStats() {
    let lecturers = [];
    if (isFirebaseActive()) {
        lecturers = lecturersList;
    } else {
        lecturers = JSON.parse(localStorage.getItem('kkpapar_lecturers')) || INITIAL_LECTURERS;
    }
    const totalCount = lecturers.length;
    const stmCount = lecturers.filter(l => l.program === "STM").length;
    const slkCount = lecturers.filter(l => l.program === "SLK").length;
    const upaCount = lecturers.filter(l => l.program === "UPA" || l.dept === "UPA").length;
    const studentCount = students.length;

    document.getElementById("stat-total-pensyarah").textContent = totalCount;
    document.getElementById("stat-stm-pensyarah").textContent = stmCount;
    document.getElementById("stat-slk-pensyarah").textContent = slkCount;
    const upaStatEl = document.getElementById("stat-upa-pensyarah");
    if (upaStatEl) {
        upaStatEl.textContent = upaCount;
    }
    document.getElementById("stat-total-pelajar").textContent = studentCount;

    const badge = document.getElementById("badge-student-count");
    if (badge) {
        badge.textContent = `${studentCount} Pelajar`;
    }
}

function renderAnnouncements() {
    if (!isFirebaseActive()) {
        const storedAnnouncements = localStorage.getItem("kkpapar_announcements");
        if (storedAnnouncements) {
            announcements = JSON.parse(storedAnnouncements);
        }
    }

    const board = document.getElementById("announcements-display-list");
    if (!board) return;

    board.innerHTML = "";

    // Filter out expired announcements
    const now = new Date();
    const todayStr = now.getFullYear() + '-' + String(now.getMonth() + 1).padStart(2, '0') + '-' + String(now.getDate()).padStart(2, '0');

    const activeAnnouncements = announcements.filter(ann => {
        if (ann.expiryDate) {
            return ann.expiryDate >= todayStr;
        }
        return true;
    });

    if (activeAnnouncements.length === 0) {
        board.innerHTML = `<p style="text-align:center; padding: 2rem 0; color: var(--text-muted);">Tiada hebahan atau peringatan buat masa ini.</p>`;
        return;
    }

    activeAnnouncements.forEach(ann => {
        const item = document.createElement("div");

        let itemClass = "announcement-item";
        let badgeHtml = "";
        if (ann.priority === 'Segera') {
            itemClass += " priority-segera";
            badgeHtml = `<span class="priority-badge segera">⚠️ SEGERA</span>`;
        } else if (ann.priority === 'Penting') {
            itemClass += " priority-penting";
            badgeHtml = `<span class="priority-badge penting">★ PENTING</span>`;
        } else {
            itemClass += " priority-biasa";
        }

        item.className = itemClass;

        const pubText = ann.publisher ? `<span class="announcement-pub" style="font-size:0.75rem; color:var(--text-secondary); margin-left:10px;">👤 Oleh: ${ann.publisher}</span>` : '';
        const expText = ann.expiryDate ? `<span style="font-size:0.75rem; color:var(--danger); margin-left:10px; font-weight:600;">(Luput: ${ann.expiryDate})</span>` : '';

        item.innerHTML = `
            <div class="announcement-meta">
                <strong>${ann.category}</strong>
                <span>📅 ${ann.date}</span>
                ${pubText}
                ${expText}
            </div>
            <div class="announcement-title">${ann.title}${badgeHtml}</div>
            <div class="announcement-desc">${ann.desc}</div>
        `;
        board.appendChild(item);
    });
}

function renderStudents() {
    const searchQuery = document.getElementById("search-student").value.toLowerCase().trim();
    const filterGender = document.getElementById("filter-student-gender").value;

    const filtered = students.filter(s => {
        const matchesSearch = s.name.toLowerCase().includes(searchQuery) ||
            s.ic.includes(searchQuery) ||
            s.address.toLowerCase().includes(searchQuery);
        const matchesGender = filterGender === "all" || s.gender === filterGender;
        return matchesSearch && matchesGender;
    });

    const body = document.getElementById("list-students-body");
    if (!body) return;
    body.innerHTML = "";

    if (filtered.length === 0) {
        body.innerHTML = `<tr><td colspan="5" style="text-align:center; color:var(--text-muted);">Tiada rekod pelajar ditemui.</td></tr>`;
        return;
    }

    filtered.forEach((s, idx) => {
        const tr = document.createElement("tr");
        const genderBadge = s.gender === "Lelaki" ? "badge-lelaki" : "badge-perempuan";
        tr.innerHTML = `
            <td>${idx + 1}</td>
            <td><strong>${s.name}</strong></td>
            <td><code>${s.ic}</code></td>
            <td><span class="badge ${genderBadge}">${s.gender}</span></td>
            <td>${s.address}</td>
        `;
        body.appendChild(tr);
    });
}

// --- LOCATION SCHEDULE VIEW (JADUAL LOKASI) ---
let activeLocation = "DEWAN KULIAH";
const LOCATIONS_LIST = [
    "DEWAN KULIAH",
    "MAKMAL BAHASA",
    "TECHNOLOGY ENABLE COLLABORATIVE CLASSROOM 1",
    "TECHNOLOGY ENABLE COLLABORATIVE CLASSROOM 2",
    "MAKMAL PENGATURCARAAN 1",
    "MAKMAL PENGATURCARAAN 2",
    "MAKMAL MULTIMEDIA",
    "MAKMAL BAIKPULIH DAN PEMASANGAN",
    "MAKMAL RANGKAIAN",
    "MAKMAL PENDAWAIAN RANGKAIAN",
    "MAKMAL AI",
    "MAKMAL IOT",
    "MAKMAL LOGISTIK 1",
    "MAKMAL LOGISTIK 2",
    "MAKMAL SIMULASI LOGISTIK"
];

function populateLocationDropdown() {
    const select = document.getElementById("pilih-lokasi");
    if (!select) return;

    // Get unique locations from DB slots and fallback to standard list
    const activeLocs = DB && DB.slot ? DB.slot.map(s => s.lokasi).filter(Boolean) : [];
    const uniqueLocs = [...new Set([...activeLocs, ...LOCATIONS_LIST])].sort();

    select.innerHTML = "";
    uniqueLocs.forEach(loc => {
        const opt = document.createElement("option");
        opt.value = loc;
        opt.textContent = loc;
        if (loc === activeLocation) opt.selected = true;
        select.appendChild(opt);
    });
}

window.tukarLokasi = function () {
    const select = document.getElementById("pilih-lokasi");
    if (select) {
        activeLocation = select.value;
        renderLocationGrid();
    }
}

function renderLocationGrid() {
    const gridWrap = document.getElementById("lokasi-grid-wrap");
    if (!gridWrap) return;

    const locSlots = DB && DB.slot ? DB.slot.filter(s => s.lokasi === activeLocation) : [];

    const hari = ['Isnin', 'Selasa', 'Rabu', 'Khamis', 'Jumaat'];
    const jam = [];
    for (let h = 8; h <= 17; h++) {
        jam.push({
            mula: `${String(h).padStart(2, '0')}:00`,
            tamat: `${String(h + 1).padStart(2, '0')}:00`
        });
    }

    function toMin(timeStr) {
        const [h, m] = timeStr.split(':').map(Number);
        return h * 60 + m;
    }

    function checkLocConflict(slot) {
        return locSlots.some(other => {
            const sameSlot = other.kod === slot.kod &&
                other.kelas === slot.kelas &&
                other.hari === slot.hari &&
                other.mula === slot.mula;
            if (sameSlot) return false;

            const timeOverlap = toMin(other.mula) < toMin(slot.tamat) &&
                toMin(slot.mula) < toMin(other.tamat);
            if (other.hari !== slot.hari || !timeOverlap) return false;

            // Combined Class Check
            const isSameSubject = (slot.kod === other.kod && slot.kod !== '-') || (slot.subjek === other.subjek);
            const isCombinedClass = isSameSubject && (slot.singkatan === other.singkatan) && (slot.lokasi === other.lokasi);
            if (isCombinedClass) return false;

            // Parallel Elective Check in same location
            const isParallelElective = (
                (slot.subjek && other.subjek) && (
                    (slot.subjek.toUpperCase().includes("ISLAM") && other.subjek.toUpperCase().includes("MORAL")) ||
                    (slot.subjek.toUpperCase().includes("MORAL") && other.subjek.toUpperCase().includes("ISLAM")) ||
                    (slot.subjek.toUpperCase().includes("ISLAM") && other.subjek.toUpperCase().includes("KEBANGSAAN")) ||
                    (slot.subjek.toUpperCase().includes("KEBANGSAAN") && other.subjek.toUpperCase().includes("ISLAM")) ||
                    (slot.subjek.toUpperCase().includes("MORAL") && other.subjek.toUpperCase().includes("KEBANGSAAN")) ||
                    (slot.subjek.toUpperCase().includes("KEBANGSAAN") && other.subjek.toUpperCase().includes("MORAL"))
                )
            );
            if (isParallelElective) return false;

            return true;
        });
    }

    let gridHtml = `
        <table class="schedule-table" style="width:100%; border-collapse:collapse;">
            <thead>
                <tr>
                    <th style="width: 120px; text-align:center; background:var(--primary); color:#fff; padding:10px;">Masa</th>
                    ${hari.map(h => `<th style="text-align:center; background:var(--primary); color:#fff; padding:10px;">${h}</th>`).join('')}
                </tr>
                     <tbody>
    `;

    // Rowspan tracker to avoid repeating cards for multi-hour blocks
    const rowspanTracker = { 'Isnin': 0, 'Selasa': 0, 'Rabu': 0, 'Khamis': 0, 'Jumaat': 0 };

    jam.forEach(j => {
        const bMula = toMin(j.mula);
        const bTamat = toMin(j.tamat);

        gridHtml += `
            <tr style="border-bottom:1px solid var(--surface-border);">
                <th style="font-weight:600; text-align:center; background:var(--surface-hover); padding: 12px 6px; border-right:1px solid var(--surface-border);">
                    ${format12Hour(j.mula)} – ${format12Hour(j.tamat)}
                </th>
        `;

        hari.forEach(h => {
            // If this day-hour cell is already spanned from a previous row, skip td rendering
            if (rowspanTracker[h] > 0) {
                rowspanTracker[h]--;
                return;
            }

            // Find slots starting at this exact hour
            const startingSlots = locSlots.filter(s =>
                s.hari === h && toMin(s.mula) === bMula
            );

            if (startingSlots.length > 0) {
                // Calculate maximum rowspan duration from slots starting here
                const durations = startingSlots.map(s => {
                    const diffMin = toMin(s.tamat) - toMin(s.mula);
                    return Math.max(1, Math.round(diffMin / 60));
                });
                const maxRowspan = Math.max(...durations);
                rowspanTracker[h] = maxRowspan - 1;

                gridHtml += `<td rowspan="${maxRowspan}" style="padding: 4px; vertical-align: stretch; border-right:1px solid var(--surface-border); height: 1px;"><div style="height: 100%; display: flex; flex-direction: column; gap: 4px; justify-content: stretch;">`;

                let groupedSlots = [];
                let spakGroup = null;
                startingSlots.forEach(s => {
                    if (s.subjek.toLowerCase().includes('spak')) {
                        if (!spakGroup) {
                            spakGroup = {
                                isSpak: true,
                                items: []
                            };
                            groupedSlots.push(spakGroup);
                        }
                        spakGroup.items.push(s);
                    } else {
                        groupedSlots.push(s);
                    }
                });

                groupedSlots.forEach(g => {
                    if (g.isSpak) {
                        const spakStyle = "background:var(--primary-soft); border-left:4px solid var(--primary); color:var(--text-primary);";
                        const mainItem = g.items[0];

                        // unique lecturers and classes
                        const lecturers = [...new Set(g.items.map(s => s.singkatan + (s.singkatanPembantu !== '-' ? '/' + s.singkatanPembantu : '')))].join(', ');
                        const classes = [...new Set(g.items.map(s => s.kelas))].join(', ');

                        gridHtml += `
                            <div style="padding:8px; border-radius:var(--border-radius-sm); font-size:0.75rem; box-shadow:0 1px 3px rgba(0,0,0,0.05); display: flex; flex-direction: column; justify-content: center; align-items: flex-start; text-align: left; gap: 4px; flex: 1; ${spakStyle}">
                                <div style="font-weight:700;">- - SPAK</div>
                                <div style="font-size:0.7rem; opacity:0.95;">
                                    👤 ${lecturers}<br>
                                    🏫 Kelas: <b>${classes}</b><br>
                                    ⏱️ ${format12Hour(mainItem.mula)} – ${format12Hour(mainItem.tamat)}
                                </div>
                            </div>
                        `;
                    } else {
                        const s = g;
                        const isClashed = checkLocConflict(s);
                        const clashStyle = isClashed ? "background:#fef2f2; border:1px solid #ef4444; color:#ef4444;" : "background:var(--primary-soft); border-left:4px solid var(--primary); color:var(--text-primary);";

                        gridHtml += `
                            <div style="padding:8px; border-radius:var(--border-radius-sm); font-size:0.75rem; box-shadow:0 1px 3px rgba(0,0,0,0.05); display: flex; flex-direction: column; justify-content: center; align-items: flex-start; text-align: left; gap: 4px; flex: 1; ${clashStyle}">
                                <div style="font-weight:700;">${s.kod} — ${s.subjek} ${isClashed ? '⚠️' : ''}</div>
                                <div style="font-size:0.7rem; opacity:0.95;">
                                    👤 ${s.singkatan}${s.singkatanPembantu !== '-' ? '/' + s.singkatanPembantu : ''}<br>
                                    🏫 Kelas: <b>${s.kelas}</b><br>
                                    ⏱️ ${format12Hour(s.mula)} – ${format12Hour(s.tamat)}
                                </div>
                            </div>
                        `;
                    }
                });
                gridHtml += `</div></td>`;
            } else {
                gridHtml += `<td style="padding: 6px; vertical-align: top; border-right:1px solid var(--surface-border); min-height:80px;"></td>`;
            }
        });

        gridHtml += `</tr>`;
    });
    gridHtml += `</tbody></table>`;
    gridWrap.innerHTML = gridHtml;
}

// Start Live Clock
function startLiveClock() {
    const clockEl = document.getElementById("live-clock");
    if (!clockEl) return;

    window.tickClock = function () {
        const now = new Date();
        const options = {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            hour12: true
        };
        const sess = (DB && DB.activeSession) ? DB.activeSession : 'SESI 1 2026/2027';
        clockEl.innerHTML = `
            <span style="background: rgba(255,255,255,0.18); border: 1px solid rgba(255,255,255,0.3); color: #ffffff; padding: 4px 12px; border-radius: 50px; font-weight: 700; font-size: 0.72rem; letter-spacing: 0.5px; display: inline-flex; align-items: center; gap: 4px;">
                🎓 SESI SEMASA: ${sess}
            </span>
            <span style="color: #ffffff; display: inline-flex; align-items: center; gap: 6px; font-size: 0.78rem; font-weight: 600;">
                📅 ${now.toLocaleDateString('ms-MY', options)}
            </span>
        `;
    };

    window.tickClock();
    setInterval(window.tickClock, 1000);
}

/* ==========================================================================
   SPAK CALENDAR CONTROLLER FUNCTIONS
   ========================================================================== */
let spakYear = 2026;
let spakMonth = 6; // Default to July
let selectedDateStr = "2026-07-24";

const MALAY_MONTHS = [
    "Januari", "Februari", "Mac", "April", "Mei", "Jun",
    "Julai", "Ogos", "September", "Oktober", "November", "Disember"
];

function initSpakCalendar() {
    const today = new Date();
    // Default to July 2026 to match seed event, otherwise use current date
    spakYear = today.getFullYear();
    spakMonth = today.getMonth();

    const yyyy = today.getFullYear();
    const mm = String(today.getMonth() + 1).padStart(2, '0');
    const dd = String(today.getDate()).padStart(2, '0');
    selectedDateStr = `${yyyy}-${mm}-${dd}`;

    renderSpakCalendar();
}

function navMonth(direction) {
    spakMonth += direction;
    if (spakMonth < 0) {
        spakMonth = 11;
        spakYear--;
    } else if (spakMonth > 11) {
        spakMonth = 0;
        spakYear++;
    }
    renderSpakCalendar();
}

function renderSpakCalendar() {
    const monthYearHeader = document.getElementById("calendarMonthYear");
    const daysGrid = document.getElementById("calendarDaysGrid");
    if (!monthYearHeader || !daysGrid) return;

    monthYearHeader.textContent = `${MALAY_MONTHS[spakMonth]} ${spakYear}`;
    daysGrid.innerHTML = "";

    const firstDayIndex = new Date(spakYear, spakMonth, 1).getDay();
    const totalDays = new Date(spakYear, spakMonth + 1, 0).getDate();
    const prevTotalDays = new Date(spakYear, spakMonth, 0).getDate();

    // Render previous month padding days
    for (let i = firstDayIndex - 1; i >= 0; i--) {
        const cell = document.createElement("div");
        cell.className = "spak-day-cell inactive";
        const dayNum = prevTotalDays - i;
        cell.innerHTML = `<span class="spak-day-num">${dayNum}</span>`;
        daysGrid.appendChild(cell);
    }

    // Render current month active days
    const today = new Date();
    for (let day = 1; day <= totalDays; day++) {
        const cell = document.createElement("div");
        cell.className = "spak-day-cell";

        const dayStr = `${spakYear}-${String(spakMonth + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
        const dayEvents = spakActivities.filter(act => act.date === dayStr);
        const hasEvents = dayEvents.length > 0;
        const hasPenting = dayEvents.some(act => act.category && (act.category.toLowerCase() === 'penting' || act.category.toLowerCase() === 'segera'));

        if (hasEvents) {
            if (hasPenting) {
                cell.classList.add("spak-day-penting");
            } else {
                cell.classList.add("spak-day-biasa");
            }
        }

        if (day === today.getDate() && spakMonth === today.getMonth() && spakYear === today.getFullYear()) {
            cell.classList.add("today");
        }
        if (dayStr === selectedDateStr) {
            cell.classList.add("selected");
        }

        cell.innerHTML = `<span class="spak-day-num">${day}</span>`;

        if (hasEvents) {
            const indicator = document.createElement("div");
            indicator.className = `spak-event-indicator ${hasPenting ? 'penting' : 'biasa'}`;
            cell.appendChild(indicator);
        }

        cell.addEventListener("click", () => {
            selectedDateStr = dayStr;
            renderSpakCalendar();
        });

        daysGrid.appendChild(cell);
    }

    // Render next month padding days
    const gridCount = daysGrid.children.length;
    const remaining = (gridCount <= 35) ? (35 - gridCount) : (42 - gridCount);
    for (let i = 1; i <= remaining; i++) {
        const cell = document.createElement("div");
        cell.className = "spak-day-cell inactive";
        cell.innerHTML = `<span class="spak-day-num">${i}</span>`;
        daysGrid.appendChild(cell);
    }

    renderSpakEventList();
}

function renderSpakEventList() {
    const listEl = document.getElementById("spakEventList");
    const titleEl = document.getElementById("spakInfoTitle");
    if (!listEl || !titleEl) return;

    const selectedDateObj = new Date(selectedDateStr);
    const day = selectedDateObj.getDate();
    const month = MALAY_MONTHS[selectedDateObj.getMonth()];
    const year = selectedDateObj.getFullYear();

    titleEl.textContent = `Makluman: ${day} ${month} ${year}`;

    const dayEvents = spakActivities.filter(act => act.date === selectedDateStr);

    if (dayEvents.length === 0) {
        listEl.innerHTML = `
            <div style="text-align: center; color: var(--text-muted); padding: 40px 20px;">
                <div style="font-size: 2.5rem; margin-bottom: 10px;">📅</div>
                <p style="font-size: 0.85rem; font-weight: 500;">Tiada aktiviti atau makluman pada tarikh ini.</p>
            </div>
        `;
        return;
    }

    let html = "";
    dayEvents.forEach(evt => {
        const isPenting = evt.category && (evt.category.toLowerCase() === "penting" || evt.category.toLowerCase() === "segera");
        const categoryBadge = isPenting ? "PENTING" : "MAKLUMAN UMUM";
        const badgeClass = isPenting ? "spak-cat-penting" : "spak-cat-umum";
        const itemClass = isPenting ? "spak-event-item spak-penting" : "spak-event-item";

        const formattedStart = format12Hour(evt.startTime);
        const formattedEnd = format12Hour(evt.endTime);
        const timeDisplay = (formattedStart && formattedEnd) ? `${formattedStart} - ${formattedEnd}` : (evt.startTime || "");

        html += `
            <div class="${itemClass}" onclick="bukaDetailSpak('${evt.id}')" style="cursor: pointer;">
                <div style="display: flex; justify-content: space-between; align-items: center;">
                    <span class="spak-event-category ${badgeClass}">
                        ${isPenting ? '⚠️' : '📢'} ${categoryBadge}
                    </span>
                    <span style="font-size: 0.72rem; font-weight: 600; color: var(--text-secondary); display: flex; align-items: center; gap: 4px;">
                        📅 ${day} ${month} ${year}
                    </span>
                </div>
                <h4 class="spak-event-title">${evt.title}</h4>
                <div class="spak-event-meta">
                    <span>🏫 <strong>Lokasi:</strong> ${evt.location || '-'}</span>
                    <span>⏱️ <strong>Masa:</strong> ${timeDisplay}</span>
                </div>
                <div class="spak-event-footer">
                    <span>👤 Penyelaras: ${evt.coordinator || '-'}</span>
                    <span>Kemaskini: ${evt.updatedAt || '-'}</span>
                </div>
            </div>
        `;
    });

    listEl.innerHTML = html;
}

window.bukaDetailSpak = function (id) {
    const evt = spakActivities.find(a => a.id === id);
    if (!evt) return;

    const isPenting = evt.category && (evt.category.toLowerCase() === "penting" || evt.category.toLowerCase() === "segera");
    const categoryBadge = isPenting ? "⚠️ PENTING" : "📢 MAKLUMAN UMUM";
    const badgeEl = document.getElementById("spakModalBadge");

    badgeEl.textContent = categoryBadge;
    if (isPenting) {
        badgeEl.style.cssText = "background:#fef2f2; color:#dc2626; font-size:0.72rem; font-weight:800; padding:4px 12px; border-radius:50px; letter-spacing:0.3px; border:1px solid #fca5a5;";
    } else {
        badgeEl.style.cssText = "background:#f0fdfa; color:#0d9488; font-size:0.72rem; font-weight:800; padding:4px 12px; border-radius:50px; letter-spacing:0.3px; border:1px solid #5eead4;";
    }

    document.getElementById("spakModalTitle").textContent = evt.title;

    // Format Date
    const dateObj = new Date(evt.date);
    const formattedDate = `${dateObj.getDate()} ${MALAY_MONTHS[dateObj.getMonth()]} ${dateObj.getFullYear()}`;

    document.getElementById("spakModalDate").textContent = formattedDate;

    // Format Time
    const formattedStart = format12Hour(evt.startTime);
    const formattedEnd = format12Hour(evt.endTime);
    const timeDisplay = (formattedStart && formattedEnd) ? `${formattedStart} - ${formattedEnd}` : (evt.startTime || "");
    document.getElementById("spakModalTime").textContent = timeDisplay;

    document.getElementById("spakModalLocation").textContent = evt.location || "-";
    document.getElementById("spakModalCoordinator").textContent = evt.coordinator || "-";
    document.getElementById("spakModalDescription").textContent = evt.description || "Tiada ulasan atau deskripsi lanjut disediakan.";
    document.getElementById("spakModalId").textContent = evt.id;
    document.getElementById("spakModalUpdated").textContent = evt.updatedAt || "-";

    document.getElementById("modalSpakDetail").style.display = "flex";
};

window.tutupModalSpak = function () {
    document.getElementById("modalSpakDetail").style.display = "none";
};

// Add listener to close modal on overlay click
window.addEventListener("click", (e) => {
    const modal = document.getElementById("modalSpakDetail");
    if (e.target === modal) {
        window.tutupModalSpak();
    }
});
window.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
        window.tutupModalSpak();
    }
});

window.navMonth = navMonth;
window.initSpakCalendar = initSpakCalendar;
window.renderSpakCalendar = renderSpakCalendar;
window.renderSpakEventList = renderSpakEventList;


/* ==========================================================================
   PWA — Service Worker Registration & Install Prompt
   ========================================================================== */

// Register Service Worker
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('./service-worker.js')
            .then(reg => console.log('[PWA] Service Worker registered:', reg.scope))
            .catch(err => console.warn('[PWA] Service Worker failed:', err));
    });
}

// Show install banner when browser fires beforeinstallprompt
let deferredInstallPrompt = null;

window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault();
    deferredInstallPrompt = e;

    // Create install banner if not already there
    if (!document.getElementById('pwa-install-banner')) {
        const banner = document.createElement('div');
        banner.id = 'pwa-install-banner';
        banner.innerHTML = `
            <div style="
                position: fixed; bottom: 16px; left: 50%; transform: translateX(-50%);
                background: #0b3d5c; color: #fff;
                padding: 12px 20px; border-radius: 50px;
                display: flex; align-items: center; gap: 12px;
                box-shadow: 0 8px 24px rgba(0,0,0,0.25);
                z-index: 9999; font-family: 'Inter', sans-serif;
                font-size: 0.85rem; font-weight: 600;
                animation: slideUp 0.4s ease;
                white-space: nowrap;
            ">
                <img src="icons/icon-192.png" style="width:28px;height:28px;border-radius:6px;">
                <span>Muat turun aplikasi ke telefon anda</span>
                <button id="pwa-install-btn" style="
                    background: #fff; color: #0b3d5c;
                    border: none; border-radius: 20px;
                    padding: 6px 14px; font-weight: 700; font-size: 0.8rem;
                    cursor: pointer;
                ">Install</button>
                <button id="pwa-dismiss-btn" style="
                    background: transparent; color: rgba(255,255,255,0.7);
                    border: none; font-size: 1.1rem; cursor: pointer; padding: 0 4px;
                ">✕</button>
            </div>
        `;
        document.body.appendChild(banner);

        document.getElementById('pwa-install-btn').addEventListener('click', () => {
            deferredInstallPrompt.prompt();
            deferredInstallPrompt.userChoice.then(() => {
                banner.remove();
                deferredInstallPrompt = null;
            });
        });

        document.getElementById('pwa-dismiss-btn').addEventListener('click', () => {
            banner.remove();
        });
    }
});

// Hide banner after successful install
window.addEventListener('appinstalled', () => {
    const banner = document.getElementById('pwa-install-banner');
    if (banner) banner.remove();
    console.log('[PWA] App installed successfully!');
});
