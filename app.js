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
    
    // Submit Login Form
    document.getElementById("login-form").addEventListener("submit", (e) => {
        e.preventDefault();
        
        const role = document.getElementById("login-role").value;
        const emailVal = document.getElementById("login-email").value.trim();
        const password = document.getElementById("login-password").value;
        const feedback = document.getElementById("login-feedback");
        
        if (role === "admin") {
            if (emailVal === "admin@papar.edu.my" && password === "admin123") {
                feedback.style.color = "var(--success)";
                feedback.style.display = "block";
                feedback.textContent = "Log masuk Admin berjaya! Mengalihkan ke Halaman Pengurusan...";
                showToast("Log masuk admin berjaya!", "success");
                
                setTimeout(() => {
                    feedback.style.display = "none";
                    window.location.href = "Jadual_baru.html";
                }, 1500);
            } else {
                showError("Alamat e-mel atau kata laluan salah.");
            }
        } else if (role === "programmer") {
            if (emailVal === "programmer@papar.edu.my" && password === "programmer123") {
                feedback.style.color = "var(--success)";
                feedback.style.display = "block";
                feedback.textContent = "Log masuk Programmer berjaya! Mengalihkan ke Portal Programmer...";
                showToast("Log masuk programmer berjaya!", "success");
                
                setTimeout(() => {
                    feedback.style.display = "none";
                    window.location.href = "Programmer.html";
                }, 1500);
            } else {
                showError("Alamat e-mel atau kata laluan salah.");
            }
        } else if (role === "pensyarah") {
            const doLogin = (list) => {
                const matchedLec = list.find(l => 
                    (l.email.toLowerCase() === emailVal.toLowerCase() || emailVal === "pensyarah@kolejkomuniti.edu.my") && 
                    password === (l.password || "pensyarah123")
                );

                if (matchedLec) {
                    feedback.style.color = "var(--success)";
                    feedback.style.display = "block";
                    feedback.textContent = `Log masuk Pensyarah (${matchedLec.shortName}) berjaya! Mengalihkan ke Portal Pensyarah...`;
                    showToast("Log masuk berjaya!", "success");
                    
                    localStorage.setItem("logged_lecturer", matchedLec.shortName);
                    
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

window.tukarLokasi = function() {
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
            return other.hari === slot.hari && 
                   toMin(other.mula) < toMin(slot.tamat) && 
                   toMin(slot.mula) < toMin(other.tamat);
        });
    }
    
    let gridHtml = `
        <table class="schedule-table" style="width:100%; border-collapse:collapse;">
            <thead>
                <tr>
                    <th style="width: 120px; text-align:center; background:var(--primary); color:#fff; padding:10px;">Masa</th>
                    ${hari.map(h => `<th style="text-align:center; background:var(--primary); color:#fff; padding:10px;">${h}</th>`).join('')}
                </tr>
            </thead>
            <tbody>
    `;
    
    jam.forEach(j => {
        const bMula = toMin(j.mula);
        const bTamat = toMin(j.tamat);
        
        gridHtml += `
            <tr style="border-bottom:1px solid var(--surface-border);">
                <th style="font-weight:600; text-align:center; background:var(--surface-hover); padding: 12px 6px; border-right:1px solid var(--surface-border);">
                    ${j.mula}–${j.tamat}
                </th>
        `;
        
        hari.forEach(h => {
            const matching = locSlots.filter(s => 
                s.hari === h && toMin(s.mula) < bTamat && toMin(s.tamat) > bMula
            );
            
            gridHtml += `<td style="padding: 6px; vertical-align: top; border-right:1px solid var(--surface-border); min-height:80px;">`;
            
            if (matching.length > 0) {
                matching.forEach(s => {
                    const isClashed = checkLocConflict(s);
                    const clashStyle = isClashed ? "background:#fef2f2; border:1px solid #ef4444; color:#ef4444;" : "background:var(--primary-soft); border-left:4px solid var(--primary); color:var(--text-primary);";
                    
                    gridHtml += `
                        <div style="padding:8px; border-radius:var(--border-radius-sm); margin-bottom:6px; font-size:0.75rem; box-shadow:0 1px 3px rgba(0,0,0,0.05); ${clashStyle}">
                            <div style="font-weight:700;">${s.kod} — ${s.subjek} ${isClashed ? '⚠️' : ''}</div>
                            <div style="font-size:0.7rem; margin-top:4px; opacity:0.95;">
                                👤 ${s.singkatan}${s.singkatanPembantu !== '-' ? '+' + s.singkatanPembantu : ''}<br>
                                🏫 Kelas: <b>${s.kelas}</b><br>
                                ⏱️ ${s.mula}–${s.tamat}
                            </div>
                        </div>
                    `;
                });
            }
            
            gridHtml += `</td>`;
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
    
    window.tickClock = function() {
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
            <span style="background: var(--primary-soft); border: 1px solid rgba(59, 130, 246, 0.15); color: var(--primary-soft-text); padding: 4px 12px; border-radius: 50px; font-weight: 700; font-size: 0.72rem; letter-spacing: 0.5px; display: inline-flex; align-items: center; gap: 4px; box-shadow: 0 2px 4px rgba(0,0,0,0.02);">
                🎓 SESI SEMASA: ${sess}
            </span>
            <span style="color: var(--text-secondary); display: inline-flex; align-items: center; gap: 6px; font-size: 0.78rem; font-weight: 500;">
                📅 ${now.toLocaleDateString('ms-MY', options)}
            </span>
        `;
    };
    
    window.tickClock();
    setInterval(window.tickClock, 1000);
}

