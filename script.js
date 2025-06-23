// Student data
const studentData = {
    student: {
        name: "Pittala Madar Vali",
        rollNumber: "23X51A3275",
        branch: "CSE - Data Science",
        year: "3rd Year",
        cgpa: "9.0",
        profilePhoto: "https://via.placeholder.com/96"
    },
    semesters: [
        {
            sem: "Semester 1",
            gpa: "8.83",
            subjects: [
                {
                    code: "PH101",
                    name: "Engineering Physics",
                    type: "Theory",
                    mid1: null,
                    mid2: null,
                    internal: 28,
                    external: 47,
                    total: 75,
                    grade: "P"
                },
                {
                    code: "MA101",
                    name: "Linear Algebra & Calculus",
                    type: "Theory",
                    mid1: null,
                    mid2: null,
                    internal: 30,
                    external: 51,
                    total: 81,
                    grade: "P"
                },
                {
                    code: "EE101",
                    name: "Basic Electrical & Electronics Engineering",
                    type: "Theory",
                    mid1: null,
                    mid2: null,
                    internal: 27,
                    external: 39,
                    total: 66,
                    grade: "P"
                },
                {
                    code: "EG101",
                    name: "Engineering Graphics",
                    type: "Theory",
                    mid1: null,
                    mid2: null,
                    internal: 30,
                    external: 58,
                    total: 88,
                    grade: "P"
                },
                {
                    code: "CS101",
                    name: "Introduction to Programming",
                    type: "Theory",
                    mid1: null,
                    mid2: null,
                    internal: 28,
                    external: 57,
                    total: 85,
                    grade: "P"
                },
                {
                    code: "IT101",
                    name: "IT Workshop",
                    type: "Lab",
                    mid1: null,
                    mid2: null,
                    internal: 29,
                    external: 65,
                    total: 94,
                    grade: "P"
                },
                {
                    code: "PHL101",
                    name: "Engineering Physics Lab",
                    type: "Lab",
                    mid1: null,
                    mid2: null,
                    internal: 30,
                    external: 70,
                    total: 100,
                    grade: "P"
                },
                {
                    code: "EEL101",
                    name: "Electrical & Electronics Engineering Workshop",
                    type: "Lab",
                    mid1: null,
                    mid2: null,
                    internal: 30,
                    external: 67,
                    total: 97,
                    grade: "P"
                },
                {
                    code: "CSL101",
                    name: "Computer Programming Lab",
                    type: "Lab",
                    mid1: null,
                    mid2: null,
                    internal: 29,
                    external: 69,
                    total: 98,
                    grade: "P"
                },
                {
                    code: "NSS101",
                    name: "NSS/NCC/Scouts & Guides/Community Service",
                    type: "Theory",
                    mid1: null,
                    mid2: null,
                    internal: 0,
                    external: 96,
                    total: 96,
                    grade: "P"
                }
            ]
        },
        {
            sem: "Semester 2",
            gpa: "9.28",
            subjects: [
                {
                    code: "ENG201",
                    name: "Communicative English",
                    type: "Theory",
                    mid1: null,
                    mid2: null,
                    internal: 29,
                    external: 53,
                    total: 82,
                    grade: "P"
                },
                {
                    code: "CH201",
                    name: "Chemistry",
                    type: "Theory",
                    mid1: null,
                    mid2: null,
                    internal: 30,
                    external: 54,
                    total: 84,
                    grade: "P"
                },
                {
                    code: "MA201",
                    name: "Differential Equations & Vector Calculus",
                    type: "Theory",
                    mid1: null,
                    mid2: null,
                    internal: 30,
                    external: 55,
                    total: 85,
                    grade: "P"
                },
                {
                    code: "CE201",
                    name: "Basic Civil & Mechanical Engineering",
                    type: "Theory",
                    mid1: null,
                    mid2: null,
                    internal: 30,
                    external: 43,
                    total: 73,
                    grade: "P"
                },
                {
                    code: "CS201",
                    name: "Data Structures",
                    type: "Theory",
                    mid1: null,
                    mid2: null,
                    internal: 30,
                    external: 68,
                    total: 98,
                    grade: "P"
                },
                {
                    code: "ENGL201",
                    name: "Communicative English Lab",
                    type: "Lab",
                    mid1: null,
                    mid2: null,
                    internal: 30,
                    external: 69,
                    total: 99,
                    grade: "P"
                },
                {
                    code: "CHL201",
                    name: "Chemistry Lab",
                    type: "Lab",
                    mid1: null,
                    mid2: null,
                    internal: 30,
                    external: 69,
                    total: 99,
                    grade: "P"
                },
                {
                    code: "EW201",
                    name: "Engineering Workshop",
                    type: "Lab",
                    mid1: null,
                    mid2: null,
                    internal: 27,
                    external: 69,
                    total: 96,
                    grade: "P"
                },
                {
                    code: "CSL201",
                    name: "Data Structures Lab",
                    type: "Lab",
                    mid1: null,
                    mid2: null,
                    internal: 30,
                    external: 69,
                    total: 99,
                    grade: "P"
                },
                {
                    code: "HW201",
                    name: "Health and Wellness Yoga and Sports",
                    type: "Theory",
                    mid1: null,
                    mid2: null,
                    internal: 0,
                    external: 96,
                    total: 96,
                    grade: "P"
                }
            ]
        },
        {
            sem: "Semester 3",
            gpa: "8.95",
            subjects: [
                {
                    code: "MA301",
                    name: "Discrete Mathematics & Graph Theory",
                    type: "Theory",
                    mid1: null,
                    mid2: null,
                    internal: 30,
                    external: 54,
                    total: 84,
                    grade: "P"
                },
                {
                    code: "HV301",
                    name: "Universal Human Values - Understanding Harmony and Ethical Human Conduct",
                    type: "Theory",
                    mid1: null,
                    mid2: null,
                    internal: 29,
                    external: 48,
                    total: 77,
                    grade: "P"
                },
                {
                    code: "CS301",
                    name: "Introduction to Data Science",
                    type: "Theory",
                    mid1: null,
                    mid2: null,
                    internal: 28,
                    external: 47,
                    total: 75,
                    grade: "P"
                },
                {
                    code: "CS302",
                    name: "Advanced Data Structures & Algorithms Analysis",
                    type: "Theory",
                    mid1: null,
                    mid2: null,
                    internal: 30,
                    external: 50,
                    total: 80,
                    grade: "P"
                },
                {
                    code: "CS303",
                    name: "Object Oriented Programming Through Java",
                    type: "Theory",
                    mid1: null,
                    mid2: null,
                    internal: 30,
                    external: 50,
                    total: 80,
                    grade: "P"
                },
                {
                    code: "CSL301",
                    name: "Data Science Lab",
                    type: "Lab",
                    mid1: null,
                    mid2: null,
                    internal: 30,
                    external: 70,
                    total: 100,
                    grade: "P"
                },
                {
                    code: "CSL302",
                    name: "Object Oriented Programming Through Java Lab",
                    type: "Lab",
                    mid1: null,
                    mid2: null,
                    internal: 30,
                    external: 70,
                    total: 100,
                    grade: "P"
                },
                {
                    code: "CS304",
                    name: "Python Programming",
                    type: "Theory",
                    mid1: null,
                    mid2: null,
                    internal: 30,
                    external: 70,
                    total: 100,
                    grade: "P"
                },
                {
                    code: "ES301",
                    name: "Environmental Science",
                    type: "Theory",
                    mid1: null,
                    mid2: null,
                    internal: 30,
                    external: 0,
                    total: 30,
                    grade: "P"
                },
                {
                    code: "FL301",
                    name: "Foreign Language Proficiency Certificate Course in French",
                    type: "Theory",
                    mid1: null,
                    mid2: null,
                    internal: 28,
                    external: 0,
                    total: 28,
                    grade: "P"
                },
                {
                    code: "CA301",
                    name: "Competitive Ability Course - I",
                    type: "Theory",
                    mid1: null,
                    mid2: null,
                    internal: 28,
                    external: 0,
                    total: 28,
                    grade: "P"
                }
            ]
        },
        {
            sem: "Semester 4",
            gpa: "8.95",
            subjects: [
                {
                    code: "OT401",
                    name: "Optimization Techniques",
                    type: "Theory",
                    mid1: null,
                    mid2: null,
                    internal: 30,
                    external: 58,
                    total: 88,
                    grade: "P"
                },
                {
                    code: "SM401",
                    name: "Statistical Methods for Data Science",
                    type: "Theory",
                    mid1: null,
                    mid2: null,
                    internal: 30,
                    external: 70,
                    total: 100,
                    grade: "P"
                },
                {
                    code: "DE401",
                    name: "Data Engineering",
                    type: "Theory",
                    mid1: null,
                    mid2: null,
                    internal: 30,
                    external: 65,
                    total: 95,
                    grade: "P"
                },
                {
                    code: "DBMS401",
                    name: "Database Management Systems",
                    type: "Theory",
                    mid1: null,
                    mid2: null,
                    internal: 28,
                    external: 38,
                    total: 66,
                    grade: "P"
                },
                {
                    code: "DL401",
                    name: "Digital Logic & Computer Organization",
                    type: "Theory",
                    mid1: null,
                    mid2: null,
                    internal: 28,
                    external: 34,
                    total: 62,
                    grade: "P"
                },
                {
                    code: "DEL401",
                    name: "Data Engineering Lab",
                    type: "Lab",
                    mid1: null,
                    mid2: null,
                    internal: 30,
                    external: 69,
                    total: 99,
                    grade: "P"
                },
                {
                    code: "DBMSL401",
                    name: "Database Management Systems Lab",
                    type: "Lab",
                    mid1: null,
                    mid2: null,
                    internal: 30,
                    external: 70,
                    total: 100,
                    grade: "P"
                },
                {
                    code: "EDA401",
                    name: "Exploratory Data Analysis with Python",
                    type: "Theory",
                    mid1: null,
                    mid2: null,
                    internal: 30,
                    external: 70,
                    total: 100,
                    grade: "P"
                },
                {
                    code: "DTI401",
                    name: "Design Thinking and Innovation",
                    type: "Theory",
                    mid1: null,
                    mid2: null,
                    internal: 29,
                    external: 54,
                    total: 83,
                    grade: "P"
                },
                {
                    code: "CA402",
                    name: "Competitive Ability Course - II",
                    type: "Theory",
                    mid1: null,
                    mid2: null,
                    internal: 24,
                    external: 0,
                    total: 24,
                    grade: "P"
                },
                {
                    code: "MP401",
                    name: "Minor Project",
                    type: "Theory",
                    mid1: null,
                    mid2: null,
                    internal: 50,
                    external: 0,
                    total: 50,
                    grade: "P"
                }
            ]
        },
        {
            sem: "Semester 5",
            gpa: null,
            subjects: [],
            completed: false
        },
        {
            sem: "Semester 6",
            gpa: null,
            subjects: [],
            completed: false
        },
        {
            sem: "Semester 7",
            gpa: null,
            subjects: [],
            completed: false
        },
        {
            sem: "Semester 8",
            gpa: null,
            subjects: [],
            completed: false
        }
    ]
};

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

function initializeApp() {
    populateStudentProfile();
    generateSemesterCards();
}

function populateStudentProfile() {
    const student = studentData.student;
    
    // Update main profile
    document.getElementById('student-name').textContent = student.name;
    document.getElementById('roll-number').textContent = student.rollNumber;
    document.getElementById('branch').textContent = student.branch;
    document.getElementById('year').textContent = student.year;
    document.getElementById('cgpa').textContent = student.cgpa;
    
    // Update detail page profile
    document.getElementById('detail-student-name').textContent = student.name;
    document.getElementById('detail-roll-number').textContent = student.rollNumber;
    document.getElementById('detail-branch').textContent = student.branch;
    
    // Update profile photo if available
    if (student.profilePhoto && student.profilePhoto !== "https://via.placeholder.com/96") {
        document.getElementById('profile-photo').src = student.profilePhoto;
    }
}

function generateSemesterCards() {
    const grid = document.getElementById('semester-grid');
    grid.innerHTML = '';
    
    studentData.semesters.forEach((semester, index) => {
        const card = createSemesterCard(semester, index + 1);
        grid.appendChild(card);
    });
}

function createSemesterCard(semester, semesterNumber) {
    const card = document.createElement('div');
    card.className = `semester-card ${semester.completed === false ? 'incomplete' : ''}`;
    card.onclick = () => showSemesterDetails(semesterNumber);
    
    const isCompleted = semester.completed !== false;
    
    card.innerHTML = `
        <div class="card-content">
            <div class="card-left">
                <div class="card-icon ${semester.completed === false ? 'incomplete' : ''}">
                    <i class="fas ${isCompleted ? 'fa-book-open' : 'fa-clock'}"></i>
                </div>
                <div class="card-info">
                    <h3>Semester ${semesterNumber}</h3>
                    <p>${isCompleted ? 'Click to view details' : 'Not completed yet'}</p>
                </div>
            </div>
            <div class="card-right">
                ${isCompleted && semester.gpa ? `
                    <div class="gpa-section">
                        <i class="fas fa-trending-up"></i>
                        <span>GPA</span>
                    </div>
                    <div class="gpa-value">${semester.gpa}</div>
                ` : `
                    <div class="pending-section">
                        <p>Pending</p>
                        <p>--</p>
                    </div>
                `}
            </div>
        </div>
    `;
    
    return card;
}

function showSemesterDetails(semesterNumber) {
    const semester = studentData.semesters[semesterNumber - 1];
    
    if (!semester) {
        alert('Semester not found');
        return;
    }
    
    // Hide dashboard and show details
    document.getElementById('dashboard').classList.remove('active');
    document.getElementById('semester-details').classList.add('active');
    
    if (semester.completed === false) {
        // Show incomplete semester message
        document.getElementById('subject-table-container').style.display = 'none';
        document.getElementById('incomplete-semester').style.display = 'block';
        document.getElementById('incomplete-title').textContent = `Semester ${semesterNumber} - Not Completed Yet`;
    } else {
        // Show subject table
        document.getElementById('incomplete-semester').style.display = 'none';
        document.getElementById('subject-table-container').style.display = 'block';
        generateSubjectTable(semester);
    }
}

function generateSubjectTable(semester) {
    const container = document.getElementById('subject-table-container');
    
    container.innerHTML = `
        <div class="table-header">
            <div class="table-header-content">
                <div class="table-title">
                    <h2>${semester.sem}</h2>
                    <p>Semester GPA: <span class="gpa-highlight">${semester.gpa}</span></p>
                </div>
                <div class="table-actions">
                    <button class="action-btn" onclick="window.print()">
                        <i class="fas fa-print"></i> Print
                    </button>
                    <button class="action-btn" onclick="exportData()">
                        <i class="fas fa-download"></i> Export
                    </button>
                </div>
            </div>
        </div>
        <div class="table-wrapper">
            <table class="subject-table">
                <thead>
                    <tr>
                        <th>Subject Code</th>
                        <th>Subject Name</th>
                        <th>Type</th>
                        <th>Mid-1 (30)</th>
                        <th>Mid-2 (30)</th>
                        <th>Internal (30)</th>
                        <th>External (70)</th>
                        <th>Total (100)</th>
                        <th>Grade</th>
                    </tr>
                </thead>
                <tbody>
                    ${semester.subjects.map((subject, index) => `
                        <tr>
                            <td>${subject.code}</td>
                            <td>${subject.name}</td>
                            <td>
                                <span class="subject-type ${subject.type.toLowerCase()}">
                                    ${subject.type}
                                </span>
                            </td>
                            <td>${subject.mid1 !== null ? subject.mid1 : '--'}</td>
                            <td>${subject.mid2 !== null ? subject.mid2 : '--'}</td>
                            <td>${subject.internal}</td>
                            <td>${subject.external}</td>
                            <td><strong>${subject.total}</strong></td>
                            <td>
                                <span class="grade-badge ${getGradeClass(subject.grade)}">
                                    ${subject.grade}
                                </span>
                            </td>
                        </tr>
                    `).join('')}
                </tbody>
            </table>
        </div>
    `;
}

function getGradeClass(grade) {
    switch (grade.toLowerCase()) {
        case 'a+': return 'grade-a-plus';
        case 'a': return 'grade-a';
        case 'b+': return 'grade-b-plus';
        case 'b': return 'grade-b';
        case 'c': return 'grade-c';
        case 'p': return 'grade-p';
        default: return 'grade-p';
    }
}

function showDashboard() {
    document.getElementById('semester-details').classList.remove('active');
    document.getElementById('dashboard').classList.add('active');
}

function exportData() {
    // Simple CSV export functionality
    const currentSemester = getCurrentSemesterFromTable();
    if (!currentSemester) return;
    
    let csv = 'Subject Code,Subject Name,Type,Mid-1,Mid-2,Internal,External,Total,Grade\n';
    
    currentSemester.subjects.forEach(subject => {
        csv += `${subject.code},"${subject.name}",${subject.type},`;
        csv += `${subject.mid1 || '--'},${subject.mid2 || '--'},`;
        csv += `${subject.internal},${subject.external},${subject.total},${subject.grade}\n`;
    });
    
    const blob = new Blob([csv], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${currentSemester.sem.replace(' ', '_')}_marks.csv`;
    a.click();
    window.URL.revokeObjectURL(url);
}

function getCurrentSemesterFromTable() {
    // Get current semester based on the displayed table
    const titleElement = document.querySelector('.table-title h2');
    if (!titleElement) return null;
    
    const semesterName = titleElement.textContent;
    return studentData.semesters.find(sem => sem.sem === semesterName);
}

// Handle browser back/forward navigation
window.addEventListener('popstate', function(event) {
    if (event.state && event.state.page === 'semester') {
        showSemesterDetails(event.state.semesterNumber);
    } else {
        showDashboard();
    }
});

// Update browser history when navigating
function updateHistory(page, semesterNumber = null) {
    const state = { page };
    if (semesterNumber) {
        state.semesterNumber = semesterNumber;
    }
    
    const url = semesterNumber ? `#semester-${semesterNumber}` : '#';
    window.history.pushState(state, '', url);
}

// Handle initial page load with hash
window.addEventListener('load', function() {
    const hash = window.location.hash;
    if (hash.startsWith('#semester-')) {
        const semesterNumber = parseInt(hash.replace('#semester-', ''));
        if (semesterNumber && semesterNumber <= studentData.semesters.length) {
            showSemesterDetails(semesterNumber);
        }
    }
});