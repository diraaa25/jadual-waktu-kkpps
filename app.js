// Default Database Initialization Data

const DEFAULT_ANNOUNCEMENTS = [
    { category: "Pentadbiran Kolej", date: "Hari Ini", title: "Penyediaan Jadual Waktu Sesi 2026/2027", desc: "Semua pensyarah STM, SLK & UPA dikehendaki menyemak slot masing-masing di bahagian \"Urus Jadual Waktu\" bagi mengelakkan pertindihan." },
    { category: "Penyelaras STM", date: "Semalam", title: "Kemas kini Pakej Kursus Sijil Teknologi Maklumat", desc: "Penambahan subjek Pengaturcaraan Web (STM401) telah dimasukkan ke dalam daftar kursus aktif bagi penggal ini." },
    { category: "Unit Akademik", date: "3 Hari Lepas", title: "Pertemuan Mingguan Pensyarah", desc: "Perbincangan penyelarasan jadual waktu diadakan setiap hari Jumaat jam 9:00 pagi di Bilik TECC." }
];

const INITIAL_LECTURERS = [
    { name: "DAILY BINTI TAYOK", shortName: "DT", designation: "Pegawai Pendidikan Pengajian Tinggi DH41", email: "daily.tayok@kolejkomuniti.edu.my", program: "STM" },
    { name: "DARNI BINTI MOHAMED YUSOFF", shortName: "DMY", designation: "Pegawai Pendidikan Pengajian Tinggi DH44", email: "darni.yusoff@kolejkomuniti.edu.my", program: "STM" },
    { name: "DG NUR AFIAH BINTI AWANG AHMAD", shortName: "DNA", designation: "Pegawai Pendidikan Pengajian Tinggi DH29", email: "dg.afiah@kolejkomuniti.edu.my", program: "STM" },
    { name: "JUSDY BIN JUWAIT", shortName: "JBJ", designation: "Pegawai Pendidikan Pengajian Tinggi DH41", email: "jusdy.juwait@kolejkomuniti.edu.my", program: "STM" },
    { name: "MOHAMMAD NOR IHSAN BIN MD ZIN", shortName: "MNI", designation: "Pegawai Pendidikan Pengajian Tinggi DH41", email: "ihsan.zin@kolejkomuniti.edu.my", program: "STM" },
    { name: "MOHD AZLAN BIN HASHIM", shortName: "MAH", designation: "Pegawai Pendidikan Pengajian Tinggi DH44", email: "azlan.hashim@kolejkomuniti.edu.my", program: "STM" },
    { name: "NADIRAH BINTI MOHAMAD", shortName: "NBM", designation: "Pegawai Pendidikan Pengajian Tinggi DH41", email: "nadirah.mohamad@kolejkomuniti.edu.my", program: "STM" },
    { name: "WAN AHMAD HILMI BIN A. RAHIM", shortName: "WAH", designation: "Pegawai Pendidikan Pengajian Tinggi DH44", email: "wan.hilmi@kolejkomuniti.edu.my", program: "STM" },
    { name: "DAYANG NURSHAZANA BINTI DAUD", shortName: "DND", designation: "Pegawai Pendidikan Pengajian Tinggi DH41", email: "d.shazana@kolejkomuniti.edu.my", program: "SLK" },
    { name: "DEVIANA RADEN", shortName: "DR", designation: "Pegawai Pendidikan Pengajian Tinggi DH41", email: "deviana.raden@kolejkomuniti.edu.my", program: "SLK" },
    { name: "FARHANA BINTI KAMIUS", shortName: "FBK", designation: "Pegawai Pendidikan Pengajian Tinggi DH41", email: "farhana.kamius@kolejkomuniti.edu.my", program: "SLK" },
    { name: "NURLIYANA HAMIZAH BINTI MOHD JEFFRI", shortName: "NHJ", designation: "Pegawai Pendidikan Pengajian Tinggi DH29", email: "nurliyana.jeffri@kolejkomuniti.edu.my", program: "SLK" },
    { name: "NURUL HUZAIFAH BINTI GIMSUN", shortName: "NHG", designation: "Pegawai Pendidikan Pengajian Tinggi DH41", email: "nurul.huzaifah@kolejkomuniti.edu.my", program: "SLK" },
    { name: "PUTERI NOR ARYSHA BINTI ARIFIN", shortName: "PNA", designation: "Pegawai Pendidikan Pengajian Tinggi DH41", email: "arysha.arifin@kolejkomuniti.edu.my", program: "SLK" },
    { name: "DAYANG NOORLIZAH BT AWANG MAHMOOD", shortName: "DNL", designation: "Pegawai Pendidikan Pengajian Tinggi DH41", email: "d.noorlizah@kolejkomuniti.edu.my", program: "UPA" },
    { name: "LUQMANUL HAKIM BIN ROSMIN", shortName: "LHR", designation: "Pegawai Pendidikan Pengajian Tinggi DH41", email: "luqmanul.hakim@kolejkomuniti.edu.my", program: "UPA" },
    { name: "TIFFANY THU PEI YING", shortName: "TPY", designation: "Pegawai Pendidikan Pengajian Tinggi DH41", email: "tiffany.thu@kolejkomuniti.edu.my", program: "UPA" },
    { name: "TS. NURATIKA ASYURAH BINTI ABDULLAH", shortName: "NAA", designation: "Pegawai Pendidikan Pengajian Tinggi DH42", email: "nuratika.asyurah@kolejkomuniti.edu.my", program: "UPA" }
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
    { name: "Ethaniel Scott Henry", gender: "Lelaki", ic: "080817125887", address: "Kampung Kapa, Jalan Ranau-Tamparuli, 89250 Tamparuli, Sabah" }
];

// App State
let announcements = [];
let students = [];
let lecturersList = [];

// Initialize application
document.addEventListener("DOMContentLoaded", () => {
    initTheme();
    initDatabase();
    setupEventListeners();
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
            renderStats();
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
            students = JSON.parse(storedStudents);
        } else {
            students = [...INITIAL_STUDENTS];
            localStorage.setItem("kkpapar_students", JSON.stringify(students));
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
    renderStats();
    renderAnnouncements();
    renderStudents();
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
    const studentCount = students.length;
    
    document.getElementById("stat-total-pensyarah").textContent = totalCount;
    document.getElementById("stat-stm-pensyarah").textContent = stmCount;
    document.getElementById("stat-slk-pensyarah").textContent = slkCount;
    document.getElementById("stat-total-pelajar").textContent = studentCount;

    const badge = document.getElementById("badge-student-count");
    if (badge) {
        badge.textContent = `${studentCount} Pelajar`;
    }
}

function renderAnnouncements() {
    const storedAnnouncements = localStorage.getItem("kkpapar_announcements");
    if (storedAnnouncements) {
        announcements = JSON.parse(storedAnnouncements);
    }
    
    const board = document.getElementById("announcements-display-list");
    if (!board) return;
    
    board.innerHTML = "";
    
    if (announcements.length === 0) {
        board.innerHTML = `<p style="text-align:center; padding: 2rem 0; color: var(--text-muted);">Tiada hebahan atau peringatan buat masa ini.</p>`;
        return;
    }
    
    announcements.forEach(ann => {
        const item = document.createElement("div");
        item.className = "announcement-item";
        item.innerHTML = `
            <div class="announcement-meta">
                <strong>${ann.category}</strong>
                <span>📅 ${ann.date}</span>
            </div>
            <div class="announcement-title">${ann.title}</div>
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
