
// ===================================================================================
// --- APP STATE, STORE & CONFIG ---
// ===================================================================================
let currentUser = null;

const navConfig = {
    Admin: [
        { icon: 'fa-tachometer-alt', text: 'Dashboard', page: 'dashboard' },
        { icon: 'fa-user-graduate', text: 'Students', page: 'students' },
        { icon: 'fa-chalkboard-teacher', text: 'Teachers', page: 'teachers' },
        {icon: 'fa-users',text: 'Staff & Colleagues',page: 'staff' },

        { icon: 'fa-building', text: 'Departments', page: 'departments' },
        { icon: 'fa-school', text: 'Classes', page: 'classes' },
        { icon: 'fa-calendar-alt', text: 'Timetable', page: 'timetable' },
        { icon: 'fa-file-invoice-dollar', text: 'Fees', page: 'fees' },
        { icon: 'fa-file-alt', text: 'Exams', page: 'exams' },
        { icon: 'fa-bullhorn', text: 'Notice Board', page: 'notices' },
        { icon: 'fa-book-open-reader', text: 'Library', page: 'library' },
        { icon: 'fa-bus', text: 'Transport', page: 'transport' },
        { icon: 'fa-user-circle', text: 'Profile', page: 'profile' },
    ],
    Teacher: [
        { icon: 'fa-tachometer-alt', text: 'Dashboard', page: 'dashboard' },
        { icon: 'fa-user-graduate', text: 'My Students', page: 'students' },
        { icon: 'fa-calendar-check', text: 'Attendance', page: 'attendance' },
        { icon: 'fa-calendar-alt', text: 'My Timetable', page: 'timetable' },
        { icon: 'fa-file-alt', text: 'Exams & Results', page: 'exams' },
        { icon: 'fa-bullhorn', text: 'Notice Board', page: 'notices' },
        { icon: 'fa-user-circle', text: 'Profile', page: 'profile' },
    ],
    Student: [
        { icon: 'fa-tachometer-alt', text: 'Dashboard', page: 'dashboard' },
        { icon: 'fa-calendar-alt', text: 'My Timetable', page: 'timetable' },
        { icon: 'fa-file-invoice-dollar', text: 'My Fees', page: 'fees' },
        { icon: 'fa-file-alt', text: 'My Results', page: 'exams' },
        { icon: 'fa-bullhorn', text: 'Notice Board', page: 'notices' },
        { icon: 'fa-envelope', text: 'Contact Teacher', page: 'contactTeacher' },
        { icon: 'fa-book-reader', text: 'Library', page: 'library' },
        { icon: 'fa-user-circle', text: 'My Profile', page: 'profile' },
    ],
    Accountant: [
        { icon: 'fa-chart-pie', text: 'Dashboard', page: 'accountantDashboard' },
        { icon: 'fa-file-invoice-dollar', text: 'Fee Collection', page: 'fees' },
        { icon: 'fa-money-check-alt', text: 'Salary Management', page: 'salaries' },
        { icon: 'fa-receipt', text: 'Expense Tracking', page: 'expenses' },
        { icon: 'fa-file-export', text: 'Financial Reports', page: 'financialReports' },
        { icon: 'fa-user-circle', text: 'Profile', page: 'profile' },
    ],
    Librarian: [
        { icon: 'fa-book-spells', text: 'Library Management', page: 'library' },
        { icon: 'fa-user-circle', text: 'Profile', page: 'profile' },
    ]
};


// ===================================================================================
// --- SIMULATED API SERVICE & DATABASE ---
// ===================================================================================
let appDatabase = {};

const embeddedDatabase = {
  "users": {
    "alvee": { "password": "alvee", "role": "Admin", "name": "Alvee", "email": "alvee@school.com", "profileImage": "https://placehold.co/150x150/EFEFEF/333?text=A" },
    "sami": { "password": "sami", "role": "Admin", "name": "Sami", "email": "sami@school.com", "profileImage": "https://placehold.co/150x150/EFEFEF/333?text=S" },
    "accountant@school.com": { "password": "accountant", "role": "Accountant", "name": "S.Sahil", "email": "accountant@school.com", "profileImage": "https://placehold.co/150x150/EFEFEF/333?text=FR" },
    "librarian@school.com": { "password": "librarian", "role": "Librarian", "name": "Alvee", "email": "librarian@school.com", "profileImage": "https://placehold.co/150x150/EFEFEF/333?text=SI" },
    "sales01@school.com": { "password": "password", "role": "Salesman", "name": "Mark Spencer", "email": "sales01@school.com", "contact": "012-345-6781", "profileImage": "https://placehold.co/150x150/EFEFEF/333?text=MS" },
    "sales02@school.com": { "password": "password", "role": "Salesman", "name": "Laura King", "email": "sales02@school.com", "contact": "012-345-6782" },
    "sales03@school.com": { "password": "password", "role": "Salesman", "name": "Brian Wright", "email": "sales03@school.com", "contact": "012-345-6783" },
    "sales04@school.com": { "password": "password", "role": "Salesman", "name": "Nancy Hill", "email": "sales04@school.com", "contact": "012-345-6784" },
    "sales05@school.com": { "password": "password", "role": "Salesman", "name": "Scott Green", "email": "sales05@school.com", "contact": "012-345-6785" },
    // --- NEW CLERK STAFF (5) ---
    "clerk01@school.com": { "password": "password", "role": "Clerk", "name": "Jane Smith", "email": "clerk01@school.com", "contact": "019-876-5431" },
    "clerk02@school.com": { "password": "password", "role": "Clerk", "name": "Peter Jones", "email": "clerk02@school.com", "contact": "019-876-5432" },
    "clerk03@school.com": { "password": "password", "role": "Clerk", "name": "Donna Moore", "email": "clerk03@school.com", "contact": "019-876-5433" },
    "clerk04@school.com": { "password": "password", "role": "Clerk", "name": "Kevin Taylor", "email": "clerk04@school.com", "contact": "019-876-5434" },
    "clerk05@school.com": { "password": "password", "role": "Clerk", "name": "Sandra Brown", "email": "clerk05@school.com", "contact": "019-876-5435" },
    "nanny01@school.com": { "password": "password", "role": "Nanny", "name": "Alex Star", "email": "nanny01@school.com", "contact": "019-876-5435" },
    "nanny02@school.com": { "password": "password", "role": "Nanny", "name": "Joe Kerry", "email": "nanny02@school.com", "contact": "019-876-5435" },
    "nanny03@school.com": { "password": "password", "role": "Nanny", "name": "Fancy Brown", "email": "nanny03@school.com", "contact": "019-876-5435" },
    "nanny04@school.com": { "password": "password", "role": "Nanny", "name": "Sindra Pawl", "email": "nanny04@school.com", "contact": "019-876-5435" },
    "nanny05@school.com": { "password": "password", "role": "Nanny", "name": "Alixa Jwson", "email": "nanny05@school.com", "contact": "019-876-5435" },
    "nanny06@school.com": { "password": "password", "role": "Nanny", "name": "Babby Flox", "email": "nanny06@school.com", "contact": "019-876-5435" },
    "nanny07@school.com": { "password": "password", "role": "Nanny", "name": "Jeson Harrington", "email": "nanny07@school.com", "contact": "019-876-5435" },
    
    "davis@school.com": { "password": "teacher", "role": "Teacher", "teacherId": "t1"},
    "wilson@school.com": { "password": "teacher", "role": "Teacher", "teacherId": "t2"},
    "anderson@school.com": { "password": "teacher", "role": "Teacher", "teacherId": "t3"},
    "garcia@school.com": { "password": "teacher", "role": "Teacher", "teacherId": "t4"},
    "martinez@school.com": { "password": "teacher", "role": "Teacher", "teacherId": "t5"},
    "lee@school.com": { "password": "teacher", "role": "Teacher", "teacherId": "t6"},
    "chen@school.com": { "password": "teacher", "role": "Teacher", "teacherId": "t7"},
    "taylor@school.com": { "password": "teacher", "role": "Teacher", "teacherId": "t8"},
    "moore@school.com": { "password": "teacher", "role": "Teacher", "teacherId": "t9"},
    "clark@school.com": { "password": "teacher", "role": "Teacher", "teacherId": "t10"},
    "wright@school.com": { "password": "teacher", "role": "Teacher", "teacherId": "t11"},
    "evans@school.com": { "password": "teacher", "role": "Teacher", "teacherId": "t12"},
    "harris@school.com": { "password": "teacher", "role": "Teacher", "teacherId": "t13"},
    "lewis@school.com": { "password": "teacher", "role": "Teacher", "teacherId": "t14"},
    "walker@school.com": { "password": "teacher", "role": "Teacher", "teacherId": "t15"},
    "hall@school.com": { "password": "teacher", "role": "Teacher", "teacherId": "t16"},
    "allen@school.com": { "password": "teacher", "role": "Teacher", "teacherId": "t17"},
    "king@school.com": { "password": "teacher", "role": "Teacher", "teacherId": "t18"},
    "scott@school.com": { "password": "teacher", "role": "Teacher", "teacherId": "t19"},
    "green@school.com": { "password": "teacher", "role": "Teacher", "teacherId": "t20"},
    "baker@school.com": { "password": "teacher", "role": "Teacher", "teacherId": "t21"},
    "adams@school.com": { "password": "teacher", "role": "Teacher", "teacherId": "t22"},
    "alice@school.com": { "password": "student", "role": "Student", "studentId": "s1"},
    "bob@school.com": { "password": "student", "role": "Student", "studentId": "s2"},
    "charlie@school.com": { "password": "student", "role": "Student", "studentId": "s3"},
    "diana@school.com": { "password": "student", "role": "Student", "studentId": "s4"},
    "bruce@school.com": { "password": "student", "role": "Student", "studentId": "s5"},
    "peter@school.com": { "password": "student", "role": "Student", "studentId": "s7"},
    "tony@school.com": { "password": "student", "role": "Student", "studentId": "s8"},
    "steve@school.com": { "password": "student", "role": "Student", "studentId": "s9"},
    "natasha@school.com": { "password": "student", "role": "Student", "studentId": "s10"},
    "wanda@school.com": { "password": "student", "role": "Student", "studentId": "s11"},
    "tchalla@school.com": { "password": "student", "role": "Student", "studentId": "s12"},
    "carol@school.com": { "password": "student", "role": "Student", "studentId": "s13"},
    "david@school.com": { "password": "student", "role": "Student", "studentId": "s14"},
    "thor@school.com": { "password": "student", "role": "Student", "studentId": "s15"},
    "loki@school.com": { "password": "student", "role": "Student", "studentId": "s16"},
    "jane@school.com": { "password": "student", "role": "Student", "studentId": "s17"},
    "bucky@school.com": { "password": "student", "role": "Student", "studentId": "s18"},
    "sam@school.com": { "password": "student", "role": "Student", "studentId": "s19"},
    "hope@school.com": { "password": "student", "role": "Student", "studentId": "s21"},
    "stephen@school.com": { "password": "student", "role": "Student", "studentId": "s22"},
    "matt@school.com": { "password": "student", "role": "Student", "studentId": "s23"},
    "jessica@school.com": { "password": "student", "role": "Student", "studentId": "s24"},
    "luke@school.com": { "password": "student", "role": "Student", "studentId": "s25"},
    "danny@school.com": { "password": "student", "role": "Student", "studentId": "s26"},
    "frank@school.com": { "password": "student", "role": "Student", "studentId": "s27"},
    "elektra@school.com": { "password": "student", "role": "Student", "studentId": "s28"},
    "reed@school.com": { "password": "student", "role": "Student", "studentId": "s29"},
    "sue@school.com": { "password": "student", "role": "Student", "studentId": "s30"},
    "johnny@school.com": { "password": "student", "role": "Student", "studentId": "s31"},
    "ben@school.com": { "password": "student", "role": "Student", "studentId": "s32"},
    "ororo@school.com": { "password": "student", "role": "Student", "studentId": "s33"},
    "tasnim.tanha@school.com": { "password": "student", "role": "Student", "studentId": "s34"},
    "ratul.hasan@school.com": { "password": "student", "role": "Student", "studentId": "s35"},
    "jubayer.ratul@school.com": { "password": "student", "role": "Student", "studentId": "s36"},
    "jamil.hamim@school.com": { "password": "student", "role": "Student", "studentId": "s37"},
    "arindom.turjo@school.com": { "password": "student", "role": "Student", "studentId": "s38"},
    "monayem.hossain@school.com": { "password": "student", "role": "Student", "studentId": "s39"},
    "prottoy.mankin@school.com": { "password": "student", "role": "Student", "studentId": "s40"},
    "tahmidul.afrose@school.com": { "password": "student", "role": "Student", "studentId": "s41"},
    "tahsinul.imrose@school.com": { "password": "student", "role": "Student", "studentId": "s42"},
    "junidur.rahman@school.com": { "password": "student", "role": "Student", "studentId": "s43"},
    "mamun.shake@school.com": { "password": "student", "role": "Student", "studentId": "s44"},
    "raian.mahadi@school.com": { "password": "student", "role": "Student", "studentId": "s45"},
    "saiful.islam@school.com": { "password": "student", "role": "Student", "studentId": "s46"},
    "shourav.beswas@school.com": { "password": "student", "role": "Student", "studentId": "s47"},
    "meherub.badhon@school.com": { "password": "student", "role": "Student", "studentId": "s48"},
    "kanej.keya@school.com": { "password": "student", "role": "Student", "studentId": "s49"},
    "anika.ebnat@school.com": { "password": "student", "role": "Student", "studentId": "s50"},
    "farjana.bushra@school.com": { "password": "student", "role": "Student", "studentId": "s51"},
    "khushi.akter@school.com": { "password": "student", "role": "Student", "studentId": "s52"},
    "sanzida.sultana@school.com": { "password": "student", "role": "Student", "studentId": "s53"},
    "sanjida.ruma@school.com": { "password": "student", "role": "Student", "studentId": "s54"},
    "jannatul.mawya@school.com": { "password": "student", "role": "Student", "studentId": "s55"},
    "zonaed.hossain@school.com": { "password": "student", "role": "Student", "studentId": "s56"},
    "rokib.noyon@school.com": { "password": "student", "role": "Student", "studentId": "s57"},
    "abrar.projoy@school.com": { "password": "student", "role": "Student", "studentId": "s58"},
    "tuton.ghosh@school.com": { "password": "student", "role": "Student", "studentId": "s59"},
    "mohammad.hosen@school.com": { "password": "student", "role": "Student", "studentId": "s60"},
    "israt.shimu@school.com": { "password": "student", "role": "Student", "studentId": "s61"},
    "md.junaid@school.com": { "password": "student", "role": "Student", "studentId": "s62"},
    "md.samiuzzaman@school.com": { "password": "student", "role": "Student", "studentId": "s63"}
  },
  "departments": [
    { "id": "d1", "name": "Science & Mathematics" },
    { "id": "d2", "name": "Humanities & Social Sciences" },
    { "id": "d3", "name": "Arts & Recreation" },
    { "id": "d4", "name": "Technology" },
    { "id": "d5", "name": "Languages" },
    { "id": "d6", "name": "Business & Economics" },
    { "id": "d7", "name": "Computer Science" },
    { "id": "d8", "name": "Physical Education" },
    { "id": "d9", "name": "Electrical Engineering" },
    { "id": "d10", "name": "Civil Engineering" },
    { "id": "d11", "name": "Department Of LAW" },
    { "id": "d12", "name": "English" },
    { "id": "d13", "name": "Philosophy" }
  ],
  "subjects": [
    { "id": "sub1", "name": "Mathematics" },
    { "id": "sub2", "name": "Physics" },
    { "id": "sub3", "name": "History" },
    { "id": "sub4", "name": "English" },
    { "id": "sub5", "name": "Physical Education" },
    { "id": "sub6", "name": "Art" },
    { "id": "sub7", "name": "Music" },
    { "id": "sub8", "name": "Biology" },
    { "id": "sub9", "name": "Chemistry" },
    { "id": "sub10", "name": "Geography" },
    { "id": "sub11", "name": "Computer Science" },
    { "id": "sub12", "name": "Economics" },
    { "id": "sub13", "name": "Social Studies" },
    { "id": "sub14", "name": "Drama" },
    { "id": "sub15", "name": "French" },
    { "id": "sub16", "name": "Spanish" },
    { "id": "sub17", "name": "German" },
    { "id": "sub18", "name": "Philosophy" },
    { "id": "sub19", "name": "Environmental Science" },
    { "id": "sub20", "name": "Algebra" },
    { "id": "sub21", "name": "Literature" }
  ],
  "students": [
    { "id": "s1", "name": "Alice Smith", "rollNo": "2233081101", "classId": "c1", "guardianName": "John Smith", "contact": "123-456-7890", "email": "alice@school.com", "address": "123 Main St", "dateOfBirth": "2015-05-20", "gender": "Female", "enrollmentDate": "2023-04-01", "bloodGroup": "A+", "profileImage": "https://placehold.co/150x150/EFEFEF/333?text=AS" },
    { "id": "s2", "name": "Bob Johnson", "rollNo": "2233081102", "classId": "c1", "guardianName": "Jane Johnson", "contact": "123-456-7891", "email": "bob@school.com", "address": "456 Oak Ave", "dateOfBirth": "2015-06-11", "gender": "Male", "enrollmentDate": "2023-04-01", "bloodGroup": "B-", "profileImage": "https://placehold.co/150x150/EFEFEF/333?text=BJ" },
    { "id": "s3", "name": "Charlie Brown", "rollNo": "2233082201", "classId": "c2", "guardianName": "Sally Brown", "contact": "123-456-7892", "email": "charlie@school.com", "address": "789 Pine Ln", "dateOfBirth": "2014-02-15", "gender": "Male", "enrollmentDate": "2022-04-01", "bloodGroup": "O+", "profileImage": "https://placehold.co/150x150/EFEFEF/333?text=CB" },
    { "id": "s4", "name": "Diana Prince", "rollNo": "223308103", "classId": "c1", "guardianName": "Hippolyta Prince", "contact": "123-111-2223", "email": "diana@school.com", "address": "1 Paradise Island", "dateOfBirth": "2015-03-01", "gender": "Female", "enrollmentDate": "2023-04-01", "bloodGroup": "AB+", "profileImage": "https://placehold.co/150x150/EFEFEF/333?text=DP" },
    { "id": "s5", "name": "Bruce Wayne", "rollNo": "223308104", "classId": "c1", "guardianName": "Alfred Pennyworth", "contact": "123-222-3334", "email": "bruce@school.com", "address": "1007 Mountain Drive", "dateOfBirth": "2015-04-17", "gender": "Male", "enrollmentDate": "2023-04-01", "bloodGroup": "O-", "profileImage": "https://placehold.co/150x150/EFEFEF/333?text=BW" },
    { "id": "s6", "name": "Clark Kent", "rollNo": "223308105", "classId": "c1", "guardianName": "Martha Kent", "contact": "123-333-4445", "email": "clark@school.com", "address": "321 Farm Road", "dateOfBirth": "2015-02-28", "gender": "Male", "enrollmentDate": "2023-04-01", "bloodGroup": "A-", "profileImage": null },
    { "id": "s7", "name": "Peter Parker", "rollNo": "223308106", "classId": "c1", "guardianName": "May Parker", "contact": "123-444-5556", "email": "peter@school.com", "address": "20 Ingram Street", "dateOfBirth": "2015-08-10", "gender": "Male", "enrollmentDate": "2023-04-01", "bloodGroup": "AB-", "profileImage": null },
    { "id": "s8", "name": "Tony Stark", "rollNo": "223308107", "classId": "c1", "guardianName": "Howard Stark", "contact": "123-555-6667", "email": "tony@school.com", "address": "10880 Malibu Point", "dateOfBirth": "2015-05-29", "gender": "Male", "enrollmentDate": "2023-04-01", "bloodGroup": "O+", "profileImage": null },
    { "id": "s9", "name": "Steve Rogers", "rollNo": "223308108", "classId": "c1", "guardianName": "Sarah Rogers", "contact": "123-666-7778", "email": "steve@school.com", "address": "569 Leavenworth St", "dateOfBirth": "1918-07-04", "gender": "Male", "enrollmentDate": "2023-04-01", "bloodGroup": "A+", "profileImage": null },
    { "id": "s10", "name": "Natasha Romanoff", "rollNo": "223308109", "classId": "c1", "guardianName": "Ivan Romanoff", "contact": "123-777-8889", "email": "natasha@school.com", "address": "Stalingrad, Russia", "dateOfBirth": "1984-11-22", "gender": "Female", "enrollmentDate": "2023-04-01", "bloodGroup": "B+", "profileImage": null },
    { "id": "s11", "name": "Wanda Maximoff", "rollNo": "223308110", "classId": "c1", "guardianName": "Olek Maximoff", "contact": "123-888-9990", "email": "wanda@school.com", "address": "Novi Grad, Sokovia", "dateOfBirth": "1989-02-10", "gender": "Female", "enrollmentDate": "2023-04-01", "bloodGroup": "AB-", "profileImage": null },
    { "id": "s12", "name": "TChalla Udaku", "rollNo": "223308111", "classId": "c1", "guardianName": "Ramonda Udaku", "contact": "123-999-0001", "email": "tchalla@school.com", "address": "Royal Palace, Wakanda", "dateOfBirth": "1980-11-29", "gender": "Male", "enrollmentDate": "2023-04-01", "bloodGroup": "O+", "profileImage": null },
    { "id": "s13", "name": "Carol Danvers", "rollNo": "223308112", "classId": "c1", "guardianName": "Marie Danvers", "contact": "123-000-1112", "email": "carol@school.com", "address": "Planet Hala", "dateOfBirth": "1968-04-24", "gender": "Female", "enrollmentDate": "2023-04-01", "bloodGroup": "A+", "profileImage": null },
    { "id": "s14", "name": "David Banner", "rollNo": "223308202", "classId": "c2", "guardianName": "Brian Banner", "contact": "213-111-2223", "email": "david@school.com", "address": "Unknown", "dateOfBirth": "1969-12-18", "gender": "Male", "enrollmentDate": "2022-04-01", "bloodGroup": "B+", "profileImage": null },
    { "id": "s15", "name": "Thor Odinson", "rollNo": "223308203", "classId": "c2", "guardianName": "Odin Borson", "contact": "213-222-3334", "email": "thor@school.com", "address": "Asgard", "dateOfBirth": "965-01-01", "gender": "Male", "enrollmentDate": "2022-04-01", "bloodGroup": "O+", "profileImage": null },
    { "id": "s16", "name": "Loki Laufeyson", "rollNo": "223308204", "classId": "c2", "guardianName": "Farbauti Laufeyson", "contact": "213-333-4445", "email": "loki@school.com", "address": "Jotunheim", "dateOfBirth": "965-12-17", "gender": "Male", "enrollmentDate": "2022-04-01", "bloodGroup": "AB-", "profileImage": null },
    { "id": "s17", "name": "Jane Foster", "rollNo": "223308205", "classId": "c2", "guardianName": "Erik Selvig", "contact": "213-444-5556", "email": "jane@school.com", "address": "Puente Antiguo, NM", "dateOfBirth": "1985-06-05", "gender": "Female", "enrollmentDate": "2022-04-01", "bloodGroup": "A-", "profileImage": null },
    { "id": "s18", "name": "Bucky Barnes", "rollNo": "223308206", "classId": "c2", "guardianName": "George Barnes", "contact": "213-555-6667", "email": "bucky@school.com", "address": "Shelbyville, IN", "dateOfBirth": "1917-03-10", "gender": "Male", "enrollmentDate": "2022-04-01", "bloodGroup": "O-", "profileImage": null },
    { "id": "s19", "name": "Sam Wilson", "rollNo": "223308207", "classId": "c2", "guardianName": "Paul Wilson", "contact": "213-666-7778", "email": "sam@school.com", "address": "Harlem, NY", "dateOfBirth": "1978-09-23", "gender": "Male", "enrollmentDate": "2022-04-01", "bloodGroup": "B-", "profileImage": null },
    { "id": "s20", "name": "Scott Lang", "rollNo": "223308208", "classId": "c2", "guardianName": "Maggie Lang", "contact": "213-777-8889", "email": "scott@school.com", "address": "San Francisco, CA", "dateOfBirth": "1975-04-18", "gender": "Male", "enrollmentDate": "2022-04-01", "bloodGroup": "A+", "profileImage": null },
    { "id": "s21", "name": "Hope van Dyne", "rollNo": "223308209", "classId": "c2", "guardianName": "Hank Pym", "contact": "213-888-9990", "email": "hope@school.com", "address": "San Francisco, CA", "dateOfBirth": "1979-08-21", "gender": "Female", "enrollmentDate": "2022-04-01", "bloodGroup": "O+", "profileImage": null },
    { "id": "s22", "name": "Stephen Strange", "rollNo": "223308210", "classId": "c2", "guardianName": "Eugene Strange", "contact": "213-999-0001", "email": "stephen@school.com", "address": "177A Bleecker Street", "dateOfBirth": "1930-11-18", "gender": "Male", "enrollmentDate": "2022-04-01", "bloodGroup": "AB+", "profileImage": null },
    { "id": "s23", "name": "Matt Murdock", "rollNo": "223308301", "classId": "c3", "guardianName": "Jack Murdock", "contact": "312-111-2223", "email": "matt@school.com", "address": "Hells Kitchen, NY", "dateOfBirth": "1993-11-19", "gender": "Male", "enrollmentDate": "2021-04-01", "bloodGroup": "O-", "profileImage": null },
    { "id": "s24", "name": "Jessica Jones", "rollNo": "223308302", "classId": "c3", "guardianName": "Alisa Jones", "contact": "312-222-3334", "email": "jessica@school.com", "address": "Forest Hills, Queens", "dateOfBirth": "1984-11-07", "gender": "Female", "enrollmentDate": "2021-04-01", "bloodGroup": "A-", "profileImage": null },
    { "id": "s25", "name": "Luke Cage", "rollNo": "223308303", "classId": "c3", "guardianName": "James Lucas", "contact": "312-333-4445", "email": "luke@school.com", "address": "Harlem, NY", "dateOfBirth": "1972-10-12", "gender": "Male", "enrollmentDate": "2021-04-01", "bloodGroup": "B+", "profileImage": null },
    { "id": "s26", "name": "Danny Rand", "rollNo": "223308304", "classId": "c3", "guardianName": "Wendell Rand", "contact": "312-444-5556", "email": "danny@school.com", "address": "K'un-Lun", "dateOfBirth": "1991-04-01", "gender": "Male", "enrollmentDate": "2021-04-01", "bloodGroup": "O+", "profileImage": null },
    { "id": "s27", "name": "Frank Castle", "rollNo": "223308305", "classId": "c3", "guardianName": "Maria Castle", "contact": "312-555-6667", "email": "frank@school.com", "address": "Queens, NY", "dateOfBirth": "1976-02-16", "gender": "Male", "enrollmentDate": "2021-04-01", "bloodGroup": "A+", "profileImage": null },
    { "id": "s28", "name": "Elektra Natchios", "rollNo": "223308306", "classId": "c3", "guardianName": "Hugo Natchios", "contact": "312-666-7778", "email": "elektra@school.com", "address": "Greek Islands", "dateOfBirth": "1980-11-25", "gender": "Female", "enrollmentDate": "2021-04-01", "bloodGroup": "AB-", "profileImage": null },
    { "id": "s29", "name": "Reed Richards", "rollNo": "223308307", "classId": "c3", "guardianName": "Nathaniel Richards", "contact": "312-777-8889", "email": "reed@school.com", "address": "Central City, CA", "dateOfBirth": "1942-02-28", "gender": "Male", "enrollmentDate": "2021-04-01", "bloodGroup": "O+", "profileImage": null },
    { "id": "s30", "name": "Sue Storm", "rollNo": "223308308", "classId": "c3", "guardianName": "Franklin Storm", "contact": "312-888-9990", "email": "sue@school.com", "address": "Long Island, NY", "dateOfBirth": "1945-09-13", "gender": "Female", "enrollmentDate": "2021-04-01", "bloodGroup": "A-", "profileImage": null },
    { "id": "s31", "name": "Johnny Storm", "rollNo": "223308309", "classId": "c3", "guardianName": "Franklin Storm", "contact": "312-999-0001", "email": "johnny@school.com", "address": "Long Island, NY", "dateOfBirth": "1948-10-05", "gender": "Male", "enrollmentDate": "2021-04-01", "bloodGroup": "B+", "profileImage": null },
    { "id": "s32", "name": "Ben Grimm", "rollNo": "223308310", "classId": "c3", "guardianName": "Daniel Grimm", "contact": "312-000-1112", "email": "ben@school.com", "address": "Yancy Street, NY", "dateOfBirth": "1944-08-01", "gender": "Male", "enrollmentDate": "2021-04-01", "bloodGroup": "O-", "profileImage": null },
    { "id": "s33", "name": "Ororo Munroe", "rollNo": "223308311", "classId": "c3", "guardianName": "N'Dare Munroe", "contact": "312-111-2222", "email": "ororo@school.com", "address": "Cairo, Egypt", "dateOfBirth": "1951-11-01", "gender": "Female", "enrollmentDate": "2021-04-01", "bloodGroup": "A+", "profileImage": null },
    { "id": "s34", "name": "Mst Tasnim Amina Tanha", "rollNo": "2233081040", "classId": "c4", "guardianName": "Amina Tanha", "contact": "555-0101", "email": "tasnim.tanha@school.com", "address": "Dhaka, BD", "dateOfBirth": "2015-01-01", "gender": "Female", "enrollmentDate": "2023-04-01", "bloodGroup": "B+", "profileImage": null },
    { "id": "s35", "name": "Ratul Hasan", "rollNo": "2233081244", "classId": "c4", "guardianName": "Kabir Hasan", "contact": "555-0102", "email": "ratul.hasan@school.com", "address": "Dhaka, BD", "dateOfBirth": "2015-02-02", "gender": "Male", "enrollmentDate": "2023-04-01", "bloodGroup": "O+", "profileImage": null },
    { "id": "s36", "name": "Jubayer Ahmed Ratul", "rollNo": "2233081263", "classId": "c4", "guardianName": "Farid Ahmed", "contact": "555-0103", "email": "jubayer.ratul@school.com", "address": "Dhaka, BD", "dateOfBirth": "2015-03-03", "gender": "Male", "enrollmentDate": "2023-04-01", "bloodGroup": "A+", "profileImage": null },
    { "id": "s37", "name": "Jamil Sarkar Hamim", "rollNo": "2233081267", "classId": "c4", "guardianName": "Ali Sarkar", "contact": "555-0104", "email": "jamil.hamim@school.com", "address": "Dhaka, BD", "dateOfBirth": "2015-04-04", "gender": "Male", "enrollmentDate": "2023-04-01", "bloodGroup": "B-", "profileImage": null },
    { "id": "s38", "name": "Arindom Chakrabarty Turjo", "rollNo": "2233081311", "classId": "c4", "guardianName": "G. Chakrabarty", "contact": "555-0105", "email": "arindom.turjo@school.com", "address": "Dhaka, BD", "dateOfBirth": "2015-05-05", "gender": "Male", "enrollmentDate": "2023-04-01", "bloodGroup": "AB+", "profileImage": null },
    { "id": "s39", "name": "Monayem Hossain", "rollNo": "2233081251", "classId": "c4", "guardianName": "Nur Hossain", "contact": "555-0106", "email": "monayem.hossain@school.com", "address": "Dhaka, BD", "dateOfBirth": "2015-06-06", "gender": "Male", "enrollmentDate": "2023-04-01", "bloodGroup": "O-", "profileImage": null },
    { "id": "s40", "name": "Prottoy Mankin", "rollNo": "2233081204", "classId": "c4", "guardianName": "David Mankin", "contact": "555-0107", "email": "prottoy.mankin@school.com", "address": "Dhaka, BD", "dateOfBirth": "2015-07-07", "gender": "Male", "enrollmentDate": "2023-04-01", "bloodGroup": "A-", "profileImage": null },
    { "id": "s41", "name": "Tahmidul Islam Afrose", "rollNo": "2233081223", "classId": "c4", "guardianName": "Rafiqul Islam", "contact": "555-0109", "email": "tahmidul.afrose@school.com", "address": "Dhaka, BD", "dateOfBirth": "2015-09-09", "gender": "Male", "enrollmentDate": "2023-04-01", "bloodGroup": "O+", "profileImage": null },
    { "id": "s42", "name": "Tahsinul Islam Imrose", "rollNo": "2233081222", "classId": "c4", "guardianName": "Rafiqul Islam", "contact": "555-0110", "email": "tahsinul.imrose@school.com", "address": "Dhaka, BD", "dateOfBirth": "2015-10-10", "gender": "Male", "enrollmentDate": "2023-04-01", "bloodGroup": "A+", "profileImage": null },
    { "id": "s43", "name": "Junidur Rahman", "rollNo": "2233081237", "classId": "c4", "guardianName": "Habibur Rahman", "contact": "555-0111", "email": "junidur.rahman@school.com", "address": "Dhaka, BD", "dateOfBirth": "2015-11-11", "gender": "Male", "enrollmentDate": "2023-04-01", "bloodGroup": "B-", "profileImage": null },
    { "id": "s44", "name": "Mamun Shake", "rollNo": "2233081255", "classId": "c4", "guardianName": "Abdullah Shake", "contact": "555-0112", "email": "mamun.shake@school.com", "address": "Dhaka, BD", "dateOfBirth": "2015-12-12", "gender": "Male", "enrollmentDate": "2023-04-01", "bloodGroup": "AB+", "profileImage": null },
    { "id": "s45", "name": "Raian Mahadi", "rollNo": "2233081266", "classId": "c4", "guardianName": "Fahim Mahadi", "contact": "555-0113", "email": "raian.mahadi@school.com", "address": "Dhaka, BD", "dateOfBirth": "2014-01-13", "gender": "Male", "enrollmentDate": "2022-04-01", "bloodGroup": "O-", "profileImage": null },
    { "id": "s46", "name": "Md Saiful Islam", "rollNo": "2233081220", "classId": "c4", "guardianName": "Sirajul Islam", "contact": "555-0114", "email": "saiful.islam@school.com", "address": "Dhaka, BD", "dateOfBirth": "2014-02-14", "gender": "Male", "enrollmentDate": "2022-04-01", "bloodGroup": "A-", "profileImage": null },
    { "id": "s47", "name": "Shourav Beswas", "rollNo": "2233081228", "classId": "c4", "guardianName": "B. Beswas", "contact": "555-0115", "email": "shourav.beswas@school.com", "address": "Dhaka, BD", "dateOfBirth": "2014-03-15", "gender": "Male", "enrollmentDate": "2022-04-01", "bloodGroup": "B+", "profileImage": null },
    { "id": "s48", "name": "Meherub Hassan Badhon", "rollNo": "2233081271", "classId": "c4", "guardianName": "Anwar Hassan", "contact": "555-0116", "email": "meherub.badhon@school.com", "address": "Dhaka, BD", "dateOfBirth": "2014-04-16", "gender": "Male", "enrollmentDate": "2022-04-01", "bloodGroup": "O+", "profileImage": null },
    { "id": "s49", "name": "Kanej Fatema Keya", "rollNo": "2233081550", "classId": "c5", "guardianName": "Abul Fatema", "contact": "555-0117", "email": "kanej.keya@school.com", "address": "Chittagong, BD", "dateOfBirth": "2014-05-17", "gender": "Female", "enrollmentDate": "2022-04-01", "bloodGroup": "A+", "profileImage": null },
    { "id": "s50", "name": "Anika Ebnat", "rollNo": "2233081556", "classId": "c5", "guardianName": "Jamal Ebnat", "contact": "555-0118", "email": "anika.ebnat@school.com", "address": "Chittagong, BD", "dateOfBirth": "2014-06-18", "gender": "Female", "enrollmentDate": "2022-04-01", "bloodGroup": "B-", "profileImage": null },
    { "id": "s51", "name": "Farjana Bushra", "rollNo": "2233081569", "classId": "c5", "guardianName": "Kamal Bushra", "contact": "555-0119", "email": "farjana.bushra@school.com", "address": "Chittagong, BD", "dateOfBirth": "2014-07-19", "gender": "Female", "enrollmentDate": "2022-04-01", "bloodGroup": "AB+", "profileImage": null },
    { "id": "s52", "name": "Most. Khushi Akter", "rollNo": "2233081531", "classId": "c4", "guardianName": "Rahim Akter", "contact": "555-0120", "email": "khushi.akter@school.com", "address": "Dhaka, BD", "dateOfBirth": "2014-08-20", "gender": "Female", "enrollmentDate": "2022-04-01", "bloodGroup": "O-", "profileImage": null },
    { "id": "s53", "name": "Sanzida Sultana", "rollNo": "2233081545", "classId": "c4", "guardianName": "Karim Sultana", "contact": "555-0121", "email": "sanzida.sultana@school.com", "address": "Dhaka, BD", "dateOfBirth": "2014-09-21", "gender": "Female", "enrollmentDate": "2022-04-01", "bloodGroup": "A-", "profileImage": null },
    { "id": "s54", "name": "Sanjida Akter Ruma", "rollNo": "2233081582", "classId": "c4", "guardianName": "Salim Akter", "contact": "555-0122", "email": "sanjida.ruma@school.com", "address": "Dhaka, BD", "dateOfBirth": "2014-10-22", "gender": "Female", "enrollmentDate": "2022-04-01", "bloodGroup": "B+", "profileImage": null },
    { "id": "s55", "name": "Jannatul Mawya", "rollNo": "2233081053", "classId": "c4", "guardianName": "Ferdous Mawya", "contact": "555-0123", "email": "jannatul.mawya@school.com", "address": "Dhaka, BD", "dateOfBirth": "2014-11-23", "gender": "Female", "enrollmentDate": "2022-04-01", "bloodGroup": "O+", "profileImage": null },
    { "id": "s56", "name": "Md.Zonaed Hossain", "rollNo": "2233081272", "classId": "c4", "guardianName": "Bilal Hossain", "contact": "555-0124", "email": "zonaed.hossain@school.com", "address": "Dhaka, BD", "dateOfBirth": "2014-12-24", "gender": "Male", "enrollmentDate": "2022-04-01", "bloodGroup": "A+", "profileImage": null },
    { "id": "s57", "name": "Md.Rokib hasan noyon", "rollNo": "2233081265", "classId": "c4", "guardianName": "Jamal Hasan", "contact": "555-0125", "email": "rokib.noyon@school.com", "address": "Dhaka, BD", "dateOfBirth": "2013-01-25", "gender": "Male", "enrollmentDate": "2021-04-01", "bloodGroup": "B-", "profileImage": null },
    { "id": "s58", "name": "Md Abrar Projoy", "rollNo": "2233081260", "classId": "c4", "guardianName": "Dalim Projoy", "contact": "555-0126", "email": "abrar.projoy@school.com", "address": "Dhaka, BD", "dateOfBirth": "2013-02-26", "gender": "Male", "enrollmentDate": "2021-04-01", "bloodGroup": "AB+", "profileImage": null },
    { "id": "s59", "name": "Tuton Ghosh", "rollNo": "2233081268", "classId": "c4", "guardianName": "T. Ghosh", "contact": "555-0127", "email": "tuton.ghosh@school.com", "address": "Dhaka, BD", "dateOfBirth": "2013-03-27", "gender": "Male", "enrollmentDate": "2021-04-01", "bloodGroup": "O-", "profileImage": null },
    { "id": "s60", "name": "Mohammad Hosen", "rollNo": "2233081269", "classId": "c4", "guardianName": "Abdul Hosen", "contact": "555-0128", "email": "mohammad.hosen@school.com", "address": "Dhaka, BD", "dateOfBirth": "2013-04-28", "gender": "Male", "enrollmentDate": "2021-04-01", "bloodGroup": "A-", "profileImage": null },
    { "id": "s61", "name": "Israt jahan shimu", "rollNo": "2231081042", "classId": "c4", "guardianName": "Iqbal Jahan", "contact": "555-0129", "email": "israt.shimu@school.com", "address": "Dhaka, BD", "dateOfBirth": "2013-05-29", "gender": "Female", "enrollmentDate": "2021-04-01", "bloodGroup": "B+", "profileImage": null },
    { "id": "s62", "name": "Md Junaid", "rollNo": "2233081246", "classId": "c4", "guardianName": "Yusuf Junaid", "contact": "555-0130", "email": "md.junaid@school.com", "address": "Dhaka, BD", "dateOfBirth": "2013-06-30", "gender": "Male", "enrollmentDate": "2021-04-01", "bloodGroup": "O+", "profileImage": null },
    { "id": "s63", "name": "Md. Samiuzzaman", "rollNo": "2233081257", "classId": "c4", "guardianName": "S. Zaman", "contact": "555-0131", "email": "md.samiuzzaman@school.com", "address": "Dhaka, BD", "dateOfBirth": "2013-07-01", "gender": "Male", "enrollmentDate": "2021-04-01", "bloodGroup": "A+", "profileImage": null }
  ],
"teachers": [
    { "id": "t1", "name": "Mr. Davis", "departmentId": "d1", "subject": "Math", "contact": "987-654-3210", "email": "davis@school.com", "address": "222 Teacher Rd", "joiningDate": "2018-07-15", "qualifications": "M.Sc. in Mathematics", "bloodGroup": "O+", "profileImage": "https://placehold.co/150x150/EFEFEF/333?text=MD", "baseSalary": 50000 },
    { "id": "t2", "name": "Ms. Wilson", "departmentId": "d1", "subject": "Science", "contact": "987-654-3211", "email": "wilson@school.com", "address": "333 Faculty Ct", "joiningDate": "2019-02-11", "qualifications": "M.Sc. in Physics", "bloodGroup": "A+", "profileImage": "https://placehold.co/150x150/EFEFEF/333?text=MW", "baseSalary": 52000 },
    { "id": "t3", "name": "Mr. Anderson", "departmentId": "d2", "subject": "History", "contact": "987-111-2223", "email": "anderson@school.com", "address": "444 History Ln", "joiningDate": "2020-08-20", "qualifications": "M.A. in History", "bloodGroup": "B-", "profileImage": null, "baseSalary": 48000 },
    { "id": "t4", "name": "Ms. Garcia", "departmentId": "d5", "subject": "English", "contact": "987-222-3334", "email": "garcia@school.com", "address": "555 Literature Ave", "joiningDate": "2017-01-10", "qualifications": "M.A. in English Literature", "bloodGroup": "AB+", "profileImage": null, "baseSalary": 55000 },
    { "id": "t5", "name": "Mr. Martinez", "departmentId": "d3", "subject": "Physical Education", "contact": "987-333-4445", "email": "martinez@school.com", "address": "666 Gymnasium Blvd", "joiningDate": "2021-05-19", "qualifications": "B.P.Ed", "bloodGroup": "O-", "profileImage": null, "baseSalary": 45000 },
    { "id": "t6", "name": "Ms. Lee", "departmentId": "d3", "subject": "Art", "contact": "987-444-5556", "email": "lee@school.com", "address": "777 Creativity Cres", "joiningDate": "2019-09-01", "qualifications": "M.F.A.", "bloodGroup": "A+", "profileImage": null, "baseSalary": 47000 },
    { "id": "t7", "name": "Mr. Chen", "departmentId": "d3", "subject": "Music", "contact": "987-555-6667", "email": "chen@school.com", "address": "888 Harmony Way", "joiningDate": "2018-03-12", "qualifications": "M.Mus.", "bloodGroup": "B+", "profileImage": null, "baseSalary": 47500 },
    { "id": "t8", "name": "Ms. Taylor", "departmentId": "d1", "subject": "Biology", "contact": "987-666-7778", "email": "taylor@school.com", "address": "999 Cell Division Dr", "joiningDate": "2022-07-28", "qualifications": "M.Sc. in Biology", "bloodGroup": "O+", "profileImage": null, "baseSalary": 51000 },
    { "id": "t9", "name": "Mr. Moore", "departmentId": "d1", "subject": "Chemistry", "contact": "987-777-8889", "email": "moore@school.com", "address": "101 Element St", "joiningDate": "2016-11-30", "qualifications": "M.Sc. in Chemistry", "bloodGroup": "A-", "profileImage": null, "baseSalary": 56000 },
    { "id": "t10", "name": "Ms. Clark", "departmentId": "d1", "subject": "Physics", "contact": "987-888-9990", "email": "clark@school.com", "address": "202 Quantum Quay", "joiningDate": "2017-06-15", "qualifications": "Ph.D. in Physics", "bloodGroup": "B+", "profileImage": null, "baseSalary": 60000 },
    { "id": "t11", "name": "Mr. Wright", "departmentId": "d2", "subject": "Geography", "contact": "987-999-0001", "email": "wright@school.com", "address": "303 Atlas Alley", "joiningDate": "2020-01-25", "qualifications": "M.A. in Geography", "bloodGroup": "O+", "profileImage": null, "baseSalary": 49000 },
    { "id": "t12", "name": "Ms. Evans", "departmentId": "d4", "subject": "Computer Science", "contact": "987-000-1112", "email": "evans@school.com", "address": "404 Binary Bypass", "joiningDate": "2021-08-01", "qualifications": "M.Tech in CS", "bloodGroup": "A+", "profileImage": null, "baseSalary": 58000 },
    { "id": "t13", "name": "Mr. Harris", "departmentId": "d6", "subject": "Economics", "contact": "987-112-2233", "email": "harris@school.com", "address": "505 Market Mews", "joiningDate": "2019-07-21", "qualifications": "M.A. in Economics", "bloodGroup": "AB-", "profileImage": null, "baseSalary": 53000 },
    { "id": "t14", "name": "Ms. Lewis", "departmentId": "d2", "subject": "Social Studies", "contact": "987-223-3344", "email": "lewis@school.com", "address": "606 Society Sq", "joiningDate": "2018-10-05", "qualifications": "M.A. in Sociology", "bloodGroup": "B-", "profileImage": null, "baseSalary": 48500 },
    { "id": "t15", "name": "Mr. Walker", "departmentId": "d3", "subject": "Drama", "contact": "987-334-4455", "email": "walker@school.com", "address": "707 Stage Street", "joiningDate": "2022-02-18", "qualifications": "M.A. in Theatre Arts", "bloodGroup": "O-", "profileImage": null, "baseSalary": 46000 },
    { "id": "t16", "name": "Ms. Hall", "departmentId": "d5", "subject": "French", "contact": "987-445-5566", "email": "hall@school.com", "address": "808 Paris Place", "joiningDate": "2017-04-12", "qualifications": "M.A. in French", "bloodGroup": "A+", "profileImage": null, "baseSalary": 54000 },
    { "id": "t17", "name": "Mr. Allen", "departmentId": "d5", "subject": "Spanish", "contact": "987-556-6677", "email": "allen@school.com", "address": "909 Madrid Manor", "joiningDate": "2020-09-09", "qualifications": "M.A. in Spanish", "bloodGroup": "B+", "profileImage": null, "baseSalary": 53500 },
    { "id": "t18", "name": "Ms. King", "departmentId": "d5", "subject": "German", "contact": "987-667-7788", "email": "king@school.com", "address": "121 Berlin Blvd", "joiningDate": "2021-01-14", "qualifications": "M.A. in German", "bloodGroup": "O+", "profileImage": null, "baseSalary": 54500 },
    { "id": "t19", "name": "Mr. Scott", "departmentId": "d2", "subject": "Philosophy", "contact": "987-778-8899", "email": "scott@school.com", "address": "232 Thought Thicket", "joiningDate": "2018-06-29", "qualifications": "M.A. in Philosophy", "bloodGroup": "A-", "profileImage": null, "baseSalary": 49500 },
    { "id": "t20", "name": "Ms. Green", "departmentId": "d1", "subject": "Environmental Sci.", "contact": "987-889-9900", "email": "green@school.com", "address": "343 Ecology Esplanade", "joiningDate": "2022-08-11", "qualifications": "M.Sc. in Environmental Science", "bloodGroup": "B+", "profileImage": null, "baseSalary": 51500 },
    { "id": "t21", "name": "Mr. Baker", "departmentId": "d1", "subject": "Algebra", "contact": "987-990-0011", "email": "baker@school.com", "address": "454 Equation End", "joiningDate": "2019-03-03", "qualifications": "M.Sc. in Mathematics", "bloodGroup": "AB+", "profileImage": null, "baseSalary": 50500 },
    { "id": "t22", "name": "Ms. Adams", "departmentId": "d5", "subject": "Literature", "contact": "987-001-1122", "email": "adams@school.com", "address": "565 Novella Nook", "joiningDate": "2017-10-10", "qualifications": "Ph.D. in Literature", "bloodGroup": "O+", "profileImage": null, "baseSalary": 59000 }
  ],
  "classes": [
    { "id": "c1", "name": "Class 1", "teacherId": "t2", "academicYear": "2025-2026", "roomNumber": "101" },
    { "id": "c2", "name": "Class 2", "teacherId": "t1", "academicYear": "2025-2026", "roomNumber": "102" },
    { "id": "c3", "name": "Class 3", "teacherId": "t3", "academicYear": "2025-2026", "roomNumber": "103" },
    { "id": "c4", "name": "Section G", "teacherId": "t4", "academicYear": "2025-2026", "roomNumber": "201" },
    { "id": "c5", "name": "Section C", "teacherId": "t5", "academicYear": "2025-2026", "roomNumber": "202" }
  ],
  "timetable": [
    { "id": "tt1", "classId": "c1", "dayOfWeek": "Monday", "period": 1, "startTime": "09:00", "endTime": "09:45", "subjectId": "sub2", "teacherId": "t2" },
    { "id": "tt2", "classId": "c1", "dayOfWeek": "Monday", "period": 2, "startTime": "09:45", "endTime": "10:30", "subjectId": "sub4", "teacherId": "t4" },
    { "id": "tt3", "classId": "c2", "dayOfWeek": "Monday", "period": 1, "startTime": "09:00", "endTime": "09:45", "subjectId": "sub1", "teacherId": "t1" },
    { "id": "tt4", "classId": "c2", "dayOfWeek": "Tuesday", "period": 2, "startTime": "09:45", "endTime": "10:30", "subjectId": "sub3", "teacherId": "t3" },
    { "id": "tt5", "classId": "c3", "dayOfWeek": "Wednesday", "period": 3, "startTime": "11:00", "endTime": "11:45", "subjectId": "sub8", "teacherId": "t8" },
    { "id": "tt6", "classId": "c4", "dayOfWeek": "Thursday", "period": 4, "startTime": "12:00", "endTime": "12:45", "subjectId": "sub11", "teacherId": "t12" },
    { "id": "tt7", "classId": "c5", "dayOfWeek": "Friday", "period": 1, "startTime": "09:00", "endTime": "09:45", "subjectId": "sub5", "teacherId": "t5" },
    { "id": "tt8", "classId": "c1", "dayOfWeek": "Tuesday", "period": 1, "startTime": "09:00", "endTime": "09:45", "subjectId": "sub1", "teacherId": "t1" }
  ],
  "notices": [
    { "id": "n1", "title": "School Reopens", "content": "The school will reopen on Monday, August 4th, 2025.", "date": "2025-07-25", "target": "All", "authorId": "admin" },
    { "id": "n2", "title": "Annual Sports Day", "content": "The annual sports day will be held in the last week of September.", "date": "2025-07-20", "target": "All", "authorId": "admin" },
    { "id": "n3", "title": "Urgent Staff Meeting", "content": "All teachers are requested to attend a meeting on Friday at 3 PM.", "date": "2025-07-26", "target": "Teacher", "authorId": "admin" },
    { "id": "n4", "title": "Science Fair Submissions", "content": "Students interested in the science fair must submit their project proposals by the end of this month.", "date": "2025-07-24", "target": "Student", "authorId": "t2" },
    { "id": "n5", "title": "Fee Payment Reminder", "content": "The last date for fee payment for the current term is August 10th. Please pay on time to avoid a late fee.", "date": "2025-07-22", "target": "All", "authorId": "admin" },
    { "id": "n6", "title": "Parent-Teacher Meeting", "content": "The Parent-Teacher meeting for classes 1-5 will be held on August 16th, 2025.", "date": "2025-07-29", "target": "All", "authorId": "admin" }
  ],
  "attendance": [
    { "attendanceId": "att1", "studentId": "s1", "classId": "c1", "date": "2025-07-28", "status": "Present" },
    { "attendanceId": "att2", "studentId": "s2", "classId": "c1", "date": "2025-07-28", "status": "Absent" },
    { "attendanceId": "att3", "studentId": "s3", "classId": "c2", "date": "2025-07-28", "status": "Present" },
    { "attendanceId": "att4", "studentId": "s4", "classId": "c4", "date": "2025-07-28", "status": "Present" }
  ],
  "fees": [
    { "id": "f1", "studentId": "s1", "feeType": "Tuition Fee", "amount": 5000, "status": "Paid", "dueDate": "2025-08-10", "paidDate": "2025-07-20" },
    { "id": "f2", "studentId": "s2", "feeType": "Tuition Fee", "amount": 5000, "status": "Unpaid", "dueDate": "2025-08-10", "paidDate": null },
    { "id": "f3", "studentId": "s1", "feeType": "Exam Fee", "amount": 500, "status": "Paid", "dueDate": "2025-09-01", "paidDate": "2025-07-20" },
    { "id": "f4", "studentId": "s3", "feeType": "Tuition Fee", "amount": 4500, "status": "Unpaid", "dueDate": "2025-08-10", "paidDate": null },
    { "id": "f5", "studentId": "s4", "feeType": "Tuition Fee", "amount": 5000, "status": "Paid", "dueDate": "2025-08-10", "paidDate": "2025-07-21" },
    { "id": "f6", "studentId": "s5", "feeType": "Tuition Fee", "amount": 5000, "status": "Paid", "dueDate": "2025-08-10", "paidDate": "2025-07-22" },
    { "id": "f7", "studentId": "s6", "feeType": "Tuition Fee", "amount": 5000, "status": "Paid", "dueDate": "2025-08-10", "paidDate": "2025-07-23" },
    { "id": "f8", "studentId": "s7", "feeType": "Tuition Fee", "amount": 5000, "status": "Paid", "dueDate": "2025-08-10", "paidDate": "2025-07-24" },
    { "id": "f9", "studentId": "s8", "feeType": "Tuition Fee", "amount": 5000, "status": "Paid", "dueDate": "2025-08-10", "paidDate": "2025-07-25" },
    { "id": "f10", "studentId": "s9", "feeType": "Tuition Fee", "amount": 5000, "status": "Paid", "dueDate": "2025-08-10", "paidDate": "2025-07-26" },
    { "id": "f11", "studentId": "s10", "feeType": "Tuition Fee", "amount": 5000, "status": "Paid", "dueDate": "2025-08-10", "paidDate": "2025-07-27" },
    { "id": "f12", "studentId": "s11", "feeType": "Tuition Fee", "amount": 5000, "status": "Paid", "dueDate": "2025-08-10", "paidDate": "2025-07-28" },
    { "id": "f13", "studentId": "s12", "feeType": "Tuition Fee", "amount": 5000, "status": "Paid", "dueDate": "2025-08-10", "paidDate": "2025-07-29" },
    { "id": "f14", "studentId": "s13", "feeType": "Tuition Fee", "amount": 5000, "status": "Paid", "dueDate": "2025-08-10", "paidDate": "2025-07-15" },
    { "id": "f15", "studentId": "s14", "feeType": "Tuition Fee", "amount": 5000, "status": "Paid", "dueDate": "2025-08-10", "paidDate": "2025-07-16" },
    { "id": "f16", "studentId": "s15", "feeType": "Tuition Fee", "amount": 5000, "status": "Paid", "dueDate": "2025-08-10", "paidDate": "2025-07-17" },
    { "id": "f17", "studentId": "s16", "feeType": "Tuition Fee", "amount": 5000, "status": "Paid", "dueDate": "2025-08-10", "paidDate": "2025-07-18" },
    { "id": "f18", "studentId": "s17", "feeType": "Tuition Fee", "amount": 5000, "status": "Paid", "dueDate": "2025-08-10", "paidDate": "2025-07-19" },
    { "id": "f19", "studentId": "s18", "feeType": "Tuition Fee", "amount": 5000, "status": "Unpaid", "dueDate": "2025-08-10", "paidDate": null },
    { "id": "f20", "studentId": "s19", "feeType": "Tuition Fee", "amount": 5000, "status": "Paid", "dueDate": "2025-08-10", "paidDate": "2025-07-01" },
    { "id": "f21", "studentId": "s20", "feeType": "Tuition Fee", "amount": 5000, "status": "Paid", "dueDate": "2025-08-10", "paidDate": "2025-07-02" },
    { "id": "f22", "studentId": "s21", "feeType": "Tuition Fee", "amount": 5000, "status": "Paid", "dueDate": "2025-08-10", "paidDate": "2025-07-03" },
    { "id": "f23", "studentId": "s22", "feeType": "Tuition Fee", "amount": 5000, "status": "Paid", "dueDate": "2025-08-10", "paidDate": "2025-07-04" },
    { "id": "f24", "studentId": "s23", "feeType": "Tuition Fee", "amount": 5000, "status": "Paid", "dueDate": "2025-08-10", "paidDate": "2025-07-05" },
    { "id": "f25", "studentId": "s24", "feeType": "Tuition Fee", "amount": 5000, "status": "Paid", "dueDate": "2025-08-10", "paidDate": "2025-07-06" },
    { "id": "f26", "studentId": "s25", "feeType": "Tuition Fee", "amount": 5000, "status": "Paid", "dueDate": "2025-08-10", "paidDate": "2025-07-07" },
    { "id": "f27", "studentId": "s26", "feeType": "Tuition Fee", "amount": 5000, "status": "Paid", "dueDate": "2025-08-10", "paidDate": "2025-07-08" },
    { "id": "f28", "studentId": "s27", "feeType": "Tuition Fee", "amount": 5000, "status": "Paid", "dueDate": "2025-08-10", "paidDate": "2025-07-09" },
    { "id": "f29", "studentId": "s28", "feeType": "Tuition Fee", "amount": 5000, "status": "Paid", "dueDate": "2025-08-10", "paidDate": "2025-07-10" },
    { "id": "f30", "studentId": "s29", "feeType": "Tuition Fee", "amount": 5000, "status": "Paid", "dueDate": "2025-08-10", "paidDate": "2025-07-11" },
    { "id": "f31", "studentId": "s30", "feeType": "Tuition Fee", "amount": 5000, "status": "Paid", "dueDate": "2025-08-10", "paidDate": "2025-07-12" },
    { "id": "f32", "studentId": "s31", "feeType": "Tuition Fee", "amount": 5000, "status": "Paid", "dueDate": "2025-08-10", "paidDate": "2025-07-13" },
    { "id": "f33", "studentId": "s32", "feeType": "Tuition Fee", "amount": 5000, "status": "Paid", "dueDate": "2025-08-10", "paidDate": "2025-07-14" },
    { "id": "f34", "studentId": "s33", "feeType": "Tuition Fee", "amount": 5000, "status": "Paid", "dueDate": "2025-08-10", "paidDate": "2025-07-20" },
    { "id": "f35", "studentId": "s34", "feeType": "Tuition Fee", "amount": 5000, "status": "Paid", "dueDate": "2025-08-10", "paidDate": "2025-07-21" },
    { "id": "f36", "studentId": "s35", "feeType": "Library Fine", "amount": 25, "status": "Unpaid", "dueDate": "2025-08-15", "paidDate": null }
  ],
  "salaries": [
    { "id": "sal1", "teacherId": "t1", "baseSalary": 50000, "bonus": 2000, "deductions": 1500, "netPay": 50500, "month": "2025-07", "status": "Paid", "paidDate": "2025-07-28" },
    { "id": "sal2", "teacherId": "t2", "baseSalary": 52000, "bonus": 0, "deductions": 1800, "netPay": 50200, "month": "2025-07", "status": "Paid", "paidDate": "2025-07-28" },
    { "id": "sal3", "teacherId": "t3", "baseSalary": 48000, "bonus": 0, "deductions": 1500, "netPay": 46500, "month": "2025-07", "status": "Pending", "paidDate": null }
  ],
  "expenses": [
      { "id": "exp1", "category": "Utilities", "amount": 25000, "date": "2025-07-15", "description": "Monthly Electricity and Water Bill" },
      { "id": "exp2", "category": "Supplies", "amount": 12000, "date": "2025-07-20", "description": "Stationery and Lab Supplies" },
      { "id": "exp3", "category": "Maintenance", "amount": 8000, "date": "2025-07-25", "description": "Campus ground maintenance" }
  ],
  "exams": [
    { "id": "ex1", "name": "Class Test I", "classId": "c1", "subjectId": "sub2", "teacherId": "t2", "date": "2025-08-15", "maxMarks": 25 },
    { "id": "ex2", "name": "Mid-Term Exam", "classId": "c1", "subjectId": "sub4", "teacherId": "t4", "date": "2025-09-17", "maxMarks": 100 },
    { "id": "ex3", "name": "Class Test I", "classId": "c2", "subjectId": "sub1", "teacherId": "t1", "date": "2025-08-16", "maxMarks": 25 },
    { "id": "ex4", "name": "Mid-Term Exam", "classId": "c4", "subjectId": "sub11", "teacherId": "t12", "date": "2025-09-15", "maxMarks": 100 },
    { "id": "ex5", "name": "Final Term Exam", "classId": "c1", "subjectId": "sub2", "teacherId": "t2", "date": "2025-12-10", "maxMarks": 100 },
    { "id": "ex6", "name": "Class Test II", "classId": "c2", "subjectId": "sub1", "teacherId": "t1", "date": "2025-10-20", "maxMarks": 25 },
    { "id": "ex7", "name": "Quiz I", "classId": "c3", "subjectId": "sub5", "teacherId": "t5", "date": "2025-08-20", "maxMarks": 15 },
    { "id": "ex8", "name": "Practical Exam", "classId": "c5", "subjectId": "sub7", "teacherId": "t7", "date": "2025-11-05", "maxMarks": 50 },
    { "id": "ex9", "name": "Mid-Term Exam", "classId": "c3", "subjectId": "sub6", "teacherId": "t6", "date": "2025-09-22", "maxMarks": 100 },
    { "id": "ex10", "name": "Class Test I", "classId": "c6", "subjectId": "sub10", "teacherId": "t10", "date": "2025-08-18", "maxMarks": 25 },
    { "id": "ex11", "name": "Final Term Exam", "classId": "c2", "subjectId": "sub3", "teacherId": "t3", "date": "2025-12-12", "maxMarks": 100 },
    { "id": "ex12", "name": "Class Test II", "classId": "c1", "subjectId": "sub4", "teacherId": "t4", "date": "2025-10-25", "maxMarks": 25 },
    { "id": "ex13", "name": "Assignment I", "classId": "c4", "subjectId": "sub8", "teacherId": "t8", "date": "2025-09-01", "maxMarks": 20 },
    { "id": "ex14", "name": "Mid-Term Exam", "classId": "c5", "subjectId": "sub9", "teacherId": "t9", "date": "2025-09-28", "maxMarks": 100 },
    { "id": "ex15", "name": "Quiz II", "classId": "c6", "subjectId": "sub12", "teacherId": "t11", "date": "2025-11-15", "maxMarks": 15 },
    { "id": "ex16", "name": "Class Test I", "classId": "c7", "subjectId": "sub13", "teacherId": "t13", "date": "2025-08-21", "maxMarks": 25 },
    { "id": "ex17", "name": "Final Term Exam", "classId": "c3", "subjectId": "sub5", "teacherId": "t5", "date": "2025-12-15", "maxMarks": 100 },
    { "id": "ex18", "name": "Oral Exam", "classId": "c1", "subjectId": "sub2", "teacherId": "t2", "date": "2025-11-20", "maxMarks": 30 },
    { "id": "ex19", "name": "Mid-Term Exam", "classId": "c7", "subjectId": "sub14", "teacherId": "t14", "date": "2025-10-02", "maxMarks": 100 },
    { "id": "ex20", "name": "Class Test III", "classId": "c2", "subjectId": "sub1", "teacherId": "t1", "date": "2025-11-18", "maxMarks": 25 },
    { "id": "ex21", "name": "Project Evaluation", "classId": "c5", "subjectId": "sub7", "teacherId": "t7", "date": "2025-12-01", "maxMarks": 75 },
    { "id": "ex22", "name": "Quiz I", "classId": "c8", "subjectId": "sub15", "teacherId": "t15", "date": "2025-08-25", "maxMarks": 15 },
    { "id": "ex23", "name": "Mid-Term Exam", "classId": "c8", "subjectId": "sub15", "teacherId": "t15", "date": "2025-10-05", "maxMarks": 100 },
    { "id": "ex24", "name": "Final Term Exam", "classId": "c6", "subjectId": "sub10", "teacherId": "t10", "date": "2025-12-18", "maxMarks": 100 },
    { "id": "ex25", "name": "Class Test II", "classId": "c7", "subjectId": "sub13", "teacherId": "t13", "date": "2025-10-30", "maxMarks": 25 },
    { "id": "ex26", "name": "Lab Exam", "classId": "c1", "subjectId": "sub4", "teacherId": "t4", "date": "2025-11-28", "maxMarks": 40 }
  ],
  "results": [
    { "resultId": "res1", "examId": "ex1", "studentId": "s1", "marks": 22 },
    { "resultId": "res2", "examId": "ex1", "studentId": "s2", "marks": 19 },
    { "resultId": "res3", "examId": "ex2", "studentId": "s1", "marks": 85 },
    { "resultId": "res4", "examId": "ex2", "studentId": "s2", "marks": 78 },
    { "resultId": "res5", "examId": "ex3", "studentId": "s3", "marks": 24 },
    { "resultId": "res6", "examId": "ex5", "studentId": "s1", "marks": 92 },
    { "resultId": "res7", "examId": "ex5", "studentId": "s2", "marks": 88 },
    { "resultId": "res8", "examId": "ex6", "studentId": "s3", "marks": 21 },
    { "resultId": "res9", "examId": "ex4", "studentId": "s7", "marks": 75 },
    { "resultId": "res10", "examId": "ex7", "studentId": "s4", "marks": 12 },
    { "resultId": "res11", "examId": "ex8", "studentId": "s5", "marks": 45 },
    { "resultId": "res12", "examId": "ex9", "studentId": "s23", "marks": 81 },
    { "resultId": "res13", "examId": "ex10", "studentId": "s33", "marks": 20 },
    { "resultId": "res14", "examId": "ex11", "studentId": "s3", "marks": 78 },
    { "resultId": "res15", "examId": "ex12", "studentId": "s1", "marks": 23 },
    { "resultId": "res16", "examId": "ex13", "studentId": "s4", "marks": 18 },
    { "resultId": "res17", "examId": "ex14", "studentId": "s5", "marks": 88 },
    { "resultId": "res18", "examId": "ex15", "studentId": "s27", "marks": 14 },
    { "resultId": "res19", "examId": "ex16", "studentId": "s6", "marks": 19 },
    { "resultId": "res20", "examId": "ex17", "studentId": "s38", "marks": 91 },
    { "resultId": "res21", "examId": "ex18", "studentId": "s2", "marks": 25 },
    { "resultId": "res22", "examId": "ex19", "studentId": "s7", "marks": 68 },
    { "resultId": "res23", "examId": "ex20", "studentId": "s3", "marks": 22 },
    { "resultId": "res24", "examId": "ex21", "studentId": "s5", "marks": 65 },
    { "resultId": "res25", "examId": "ex22", "studentId": "s8", "marks": 11 },
    { "resultId": "res26", "examId": "ex23", "studentId": "s8", "marks": 76 },
    { "resultId": "res27", "examId": "ex24", "studentId": "s31", "marks": 82 },
    { "resultId": "res28", "examId": "ex25", "studentId": "s6", "marks": 21 },
    { "resultId": "res29", "examId": "ex26", "studentId": "s1", "marks": 33 }
  ],
  "library": {
    "books": [
      { "bookId": "b1", "title": "Introduction to Algebra", "author": "John Doe", "publicationYear": 2020, "isbn": "978-3-16-148410-0", "genre": "Mathematics", "totalCopies": 10, "availableCopies": 7 },
      { "bookId": "b2", "title": "A Brief History of Time", "author": "Stephen Hawking", "publicationYear": 1988, "isbn": "978-0-553-10953-5", "genre": "Science", "totalCopies": 5, "availableCopies": 4 },
      { "bookId": "b3", "title": "The Adventures of Tom Sawyer", "author": "Mark Twain", "publicationYear": 1876, "isbn": "978-0-14-303956-3", "genre": "Fiction", "totalCopies": 15, "availableCopies": 15 },
      { "bookId": "b4", "title": "Pride and Prejudice", "author": "Jane Austen", "publicationYear": 1813, "isbn": "978-0-14-143951-8", "genre": "Romance", "totalCopies": 7, "availableCopies": 7 },
      { "bookId": "b5", "title": "To Kill a Mockingbird", "author": "Harper Lee", "publicationYear": 1960, "isbn": "978-0-06-112008-4", "genre": "Fiction", "totalCopies": 12, "availableCopies": 10 },
      { "bookId": "b6", "title": "The Great Gatsby", "author": "F. Scott Fitzgerald", "publicationYear": 1925, "isbn": "978-0-7432-7356-5", "genre": "Fiction", "totalCopies": 8, "availableCopies": 8 },
      { "bookId": "b7", "title": "Fundamentals of Physics", "author": "Halliday, Resnick, Walker", "publicationYear": 2013, "isbn": "978-1-118-23072-5", "genre": "Science", "totalCopies": 8, "availableCopies": 6 },
      { "bookId": "b8", "title": "Principles of Economics", "author": "N. Gregory Mankiw", "publicationYear": 2020, "isbn": "978-0-357-13348-4", "genre": "Economics", "totalCopies": 6, "availableCopies": 6 },
      { "bookId": "b9", "title": "The Nightingale", "author": "Kristin Hannah", "publicationYear": 2015, "isbn": "978-0-312-57722-3", "genre": "Historical Fiction", "totalCopies": 9, "availableCopies": 9 },
      { "bookId": "b10", "title": "1984", "author": "George Orwell", "publicationYear": 1949, "isbn": "978-0-452-28423-4", "genre": "Dystopian", "totalCopies": 10, "availableCopies": 10 },
      { "bookId": "b11", "title": "The Catcher in the Rye", "author": "J.D. Salinger", "publicationYear": 1951, "isbn": "978-0-316-76948-0", "genre": "Fiction", "totalCopies": 6, "availableCopies": 5 },
      { "bookId": "b12", "title": "Sapiens: A Brief History of Humankind", "author": "Yuval Noah Harari", "publicationYear": 2011, "isbn": "978-0-06-231609-7", "genre": "Non-Fiction", "totalCopies": 12, "availableCopies": 12 },
      { "bookId": "b13", "title": "The Hobbit", "author": "J.R.R. Tolkien", "publicationYear": 1937, "isbn": "978-0-618-00221-4", "genre": "Fantasy", "totalCopies": 15, "availableCopies": 14 },
      { "bookId": "b14", "title": "Cosmos", "author": "Carl Sagan", "publicationYear": 1980, "isbn": "978-0-345-33132-7", "genre": "Science", "totalCopies": 7, "availableCopies": 7 },
      { "bookId": "b15", "title": "Clean Code: A Handbook of Agile Software Craftsmanship", "author": "Robert C. Martin", "publicationYear": 2008, "isbn": "978-0-13-235088-4", "genre": "Technology", "totalCopies": 20, "availableCopies": 18 },
      { "bookId": "b16", "title": "The Lord of the Rings", "author": "J.R.R. Tolkien", "publicationYear": 1954, "isbn": "978-0-618-64015-7", "genre": "Fantasy", "totalCopies": 10, "availableCopies": 10 },
      { "bookId": "b17", "title": "A People's History of the United States", "author": "Howard Zinn", "publicationYear": 1980, "isbn": "978-0-06-083865-2", "genre": "History", "totalCopies": 8, "availableCopies": 8 },
      { "bookId": "b18", "title": "The Diary of a Young Girl", "author": "Anne Frank", "publicationYear": 1947, "isbn": "978-0-553-29698-3", "genre": "Biography", "totalCopies": 9, "availableCopies": 9 },
      { "bookId": "b19", "title": "Brave New World", "author": "Aldous Huxley", "publicationYear": 1932, "isbn": "978-0-06-085052-4", "genre": "Dystopian", "totalCopies": 7, "availableCopies": 6 },
      { "bookId": "b20", "title": "Moby-Dick", "author": "Herman Melville", "publicationYear": 1851, "isbn": "978-1-5032-8078-6", "genre": "Fiction", "totalCopies": 5, "availableCopies": 5 },
      { "bookId": "b21", "title": "War and Peace", "author": "Leo Tolstoy", "publicationYear": 1869, "isbn": "978-1-4000-7998-8", "genre": "Historical Fiction", "totalCopies": 4, "availableCopies": 4 },
      { "bookId": "b22", "title": "The Selfish Gene", "author": "Richard Dawkins", "publicationYear": 1976, "isbn": "978-0-19-929115-1", "genre": "Science", "totalCopies": 6, "availableCopies": 6 },
      { "bookId": "b23", "title": "Calculus: Early Transcendentals", "author": "James Stewart", "publicationYear": 2015, "isbn": "978-1-285-74155-0", "genre": "Mathematics", "totalCopies": 25, "availableCopies": 25 },
      { "bookId": "b24", "title": "Thinking, Fast and Slow", "author": "Daniel Kahneman", "publicationYear": 2011, "isbn": "978-0-374-53355-7", "genre": "Psychology", "totalCopies": 11, "availableCopies": 10 },
      { "bookId": "b25", "title": "One Hundred Years of Solitude", "author": "Gabriel Garcia Marquez", "publicationYear": 1967, "isbn": "978-0-06-088328-7", "genre": "Magical Realism", "totalCopies": 8, "availableCopies": 8 },
      { "bookId": "b26", "title": "The Structure of Scientific Revolutions", "author": "Thomas S. Kuhn", "publicationYear": 1962, "isbn": "978-0-226-45808-3", "genre": "Philosophy", "totalCopies": 5, "availableCopies": 5 },
      { "bookId": "b27", "title": "Guns, Germs, and Steel", "author": "Jared Diamond", "publicationYear": 1997, "isbn": "978-0-393-31755-8", "genre": "History", "totalCopies": 9, "availableCopies": 9 },
      { "bookId": "b28", "title": "Frankenstein", "author": "Mary Shelley", "publicationYear": 1818, "isbn": "978-0-486-28211-4", "genre": "Gothic Fiction", "totalCopies": 13, "availableCopies": 13 },
      { "bookId": "b29", "title": "The Art of Computer Programming", "author": "Donald E. Knuth", "publicationYear": 1968, "isbn": "978-0-201-89683-1", "genre": "Technology", "totalCopies": 7, "availableCopies": 7 }
    ],
    "transactions": [
      { "transactionId": "lt1", "bookId": "b1", "studentId": "s3", "issueDate": "2025-07-15", "dueDate": "2025-07-29", "returnDate": null, "status": "Issued" },
      { "transactionId": "lt2", "bookId": "b2", "studentId": "s1", "issueDate": "2025-07-10", "dueDate": "2025-07-24", "returnDate": "2025-07-22", "status": "Returned" },
      { "transactionId": "lt3", "bookId": "b1", "studentId": "s2", "issueDate": "2025-07-01", "dueDate": "2025-07-15", "returnDate": null, "status": "Overdue" },
      { "transactionId": "lt4", "bookId": "b5", "studentId": "s8", "issueDate": "2025-07-25", "dueDate": "2025-08-08", "returnDate": null, "status": "Issued" },
      { "transactionId": "lt5", "bookId": "b1", "studentId": "s5", "issueDate": "2025-07-29", "dueDate": "2025-08-12", "returnDate": null, "status": "Issued" },
      { "transactionId": "lt6", "bookId": "b6", "studentId": "s4", "issueDate": "2025-07-28", "dueDate": "2025-08-11", "returnDate": null, "status": "Issued" },
      { "transactionId": "lt7", "bookId": "b5", "studentId": "s5", "issueDate": "2025-07-12", "dueDate": "2025-07-26", "returnDate": "2025-07-28", "status": "Returned" },
      { "transactionId": "lt8", "bookId": "b7", "studentId": "s1", "issueDate": "2025-07-29", "dueDate": "2025-08-12", "returnDate": null, "status": "Issued" },
      { "transactionId": "lt9", "bookId": "b11", "studentId": "s6", "issueDate": "2025-07-20", "dueDate": "2025-08-03", "returnDate": null, "status": "Issued" },
      { "transactionId": "lt10", "bookId": "b13", "studentId": "s7", "issueDate": "2025-07-22", "dueDate": "2025-08-05", "returnDate": null, "status": "Issued" },
      { "transactionId": "lt11", "bookId": "b15", "studentId": "s8", "issueDate": "2025-07-18", "dueDate": "2025-08-01", "returnDate": null, "status": "Issued" },
      { "transactionId": "lt12", "bookId": "b15", "studentId": "s23", "issueDate": "2025-07-19", "dueDate": "2025-08-02", "returnDate": null, "status": "Issued" },
      { "transactionId": "lt13", "bookId": "b19", "studentId": "s31", "issueDate": "2025-07-21", "dueDate": "2025-08-04", "returnDate": null, "status": "Issued" },
      { "transactionId": "lt14", "bookId": "b24", "studentId": "s2", "issueDate": "2025-07-25", "dueDate": "2025-08-08", "returnDate": null, "status": "Issued" },
      { "transactionId": "lt15", "bookId": "b7", "studentId": "s3", "issueDate": "2025-07-26", "dueDate": "2025-08-09", "returnDate": null, "status": "Issued" },
      { "transactionId": "lt16", "bookId": "b10", "studentId": "s4", "issueDate": "2025-07-10", "dueDate": "2025-07-24", "returnDate": "2025-07-23", "status": "Returned" },
      { "transactionId": "lt17", "bookId": "b4", "studentId": "s5", "issueDate": "2025-07-08", "dueDate": "2025-07-22", "returnDate": "2025-07-21", "status": "Returned" },
      { "transactionId": "lt18", "bookId": "b9", "studentId": "s1", "issueDate": "2025-06-30", "dueDate": "2025-07-14", "returnDate": null, "status": "Overdue" },
      { "transactionId": "lt19", "bookId": "b12", "studentId": "s22", "issueDate": "2025-07-02", "dueDate": "2025-07-16", "returnDate": "2025-07-15", "status": "Returned" },
      { "transactionId": "lt20", "bookId": "b20", "studentId": "s6", "issueDate": "2025-07-29", "dueDate": "2025-08-12", "returnDate": null, "status": "Issued" },
      { "transactionId": "lt21", "bookId": "b21", "studentId": "s7", "issueDate": "2025-07-28", "dueDate": "2025-08-11", "returnDate": null, "status": "Issued" },
      { "transactionId": "lt22", "bookId": "b22", "studentId": "s8", "issueDate": "2025-07-27", "dueDate": "2025-08-10", "returnDate": null, "status": "Issued" },
      { "transactionId": "lt23", "bookId": "b25", "studentId": "s1", "issueDate": "2025-07-14", "dueDate": "2025-07-28", "returnDate": "2025-07-28", "status": "Returned" },
      { "transactionId": "lt24", "bookId": "b26", "studentId": "s2", "issueDate": "2025-07-13", "dueDate": "2025-07-27", "returnDate": null, "status": "Overdue" },
      { "transactionId": "lt25", "bookId": "b28", "studentId": "s3", "issueDate": "2025-07-29", "dueDate": "2025-08-12", "returnDate": null, "status": "Issued" },
      { "transactionId": "lt26", "bookId": "b16", "studentId": "s4", "issueDate": "2025-07-16", "dueDate": "2025-07-30", "returnDate": null, "status": "Issued" },
      { "transactionId": "lt27", "bookId": "b17", "studentId": "s5", "issueDate": "2025-07-17", "dueDate": "2025-07-31", "returnDate": null, "status": "Issued" }
    ],
  "reservations": [
      { "reservationId": "resv1", "bookId": "b1", "studentId": "s4", "requestDate": "2025-07-28", "status": "Pending" },
      { "reservationId": "resv2", "bookId": "b6", "studentId": "s2", "requestDate": "2025-07-29", "status": "Pending" },
      { "reservationId": "resv3", "bookId": "b2", "studentId": "s22", "requestDate": "2025-07-20", "status": "Fulfilled" },
      { "reservationId": "resv4", "bookId": "b7", "studentId": "s23", "requestDate": "2025-07-29", "status": "Pending" },
      { "reservationId": "resv5", "bookId": "b15", "studentId": "s1", "requestDate": "2025-07-28", "status": "Pending" },
      { "reservationId": "resv6", "bookId": "b19", "studentId": "s3", "requestDate": "2025-07-27", "status": "Pending" },
      { "reservationId": "resv7", "bookId": "b1", "studentId": "s6", "requestDate": "2025-07-29", "status": "Pending" },
      { "reservationId": "resv8", "bookId": "b5", "studentId": "s7", "requestDate": "2025-07-26", "status": "Fulfilled" },
      { "reservationId": "resv9", "bookId": "b26", "studentId": "s8", "requestDate": "2025-07-29", "status": "Pending" },
      { "reservationId": "resv10", "bookId": "b11", "studentId": "s30", "requestDate": "2025-07-28", "status": "Pending" },
      { "reservationId": "resv11", "bookId": "b13", "studentId": "s2", "requestDate": "2025-07-25", "status": "Fulfilled" },
      { "reservationId": "resv12", "bookId": "b24", "studentId": "s4", "requestDate": "2025-07-29", "status": "Pending" },
      { "reservationId": "resv13", "bookId": "b1", "studentId": "s5", "requestDate": "2025-07-24", "status": "Cancelled" },
      { "reservationId": "resv14", "bookId": "b2", "studentId": "s6", "requestDate": "2025-07-23", "status": "Fulfilled" },
      { "reservationId": "resv15", "bookId": "b7", "studentId": "s7", "requestDate": "2025-07-29", "status": "Pending" },
      { "reservationId": "resv16", "bookId": "b15", "studentId": "s8", "requestDate": "2025-07-22", "status": "Fulfilled" },
      { "reservationId": "resv17", "bookId": "b19", "studentId": "s1", "requestDate": "2025-07-29", "status": "Pending" },
      { "reservationId": "resv18", "bookId": "b26", "studentId": "s2", "requestDate": "2025-07-21", "status": "Cancelled" },
      { "reservationId": "resv19", "bookId": "b5", "studentId": "s3", "requestDate": "2025-07-29", "status": "Pending" },
      { "reservationId": "resv20", "bookId": "b6", "studentId": "s4", "requestDate": "2025-07-20", "status": "Fulfilled" },
      { "reservationId": "resv21", "bookId": "b10", "studentId": "s5", "requestDate": "2025-07-28", "status": "Pending" },
      { "reservationId": "resv22", "bookId": "b12", "studentId": "s33", "requestDate": "2025-07-27", "status": "Pending" },
      { "reservationId": "resv23", "bookId": "b23", "studentId": "s30", "requestDate": "2025-07-29", "status": "Pending" }
    ],
    "acquisitions": [
      { "acquisitionId": "acq1", "bookId": "b6", "title": "Introduction to AI", "author": "Stuart Russell", "acquiredDate": "2025-07-15", "price": 4200, "supplier": "Academic Books Ltd." },
      { "acquisitionId": "acq2", "bookId": "b7", "title": "Data Structures in C", "author": "Mark Allen Weiss", "acquiredDate": "2025-07-10", "price": 3500, "supplier": "Campus Textbooks" },
      { "acquisitionId": "acq3", "bookId": "b8", "title": "World History: A Modern Perspective", "author": "John Merriman", "acquiredDate": "2025-06-25", "price": 3800, "supplier": "Global Distributors" },
      { "acquisitionId": "acq4", "bookId": "b10", "title": "1984", "author": "George Orwell", "acquiredDate": "2025-05-10", "price": 850, "supplier": "Classic Reads Inc." },
      { "acquisitionId": "acq5", "bookId": "b11", "title": "The Catcher in the Rye", "author": "J.D. Salinger", "acquiredDate": "2025-05-10", "price": 900, "supplier": "Classic Reads Inc." },
      { "acquisitionId": "acq6", "bookId": "b12", "title": "Sapiens: A Brief History of Humankind", "author": "Yuval Noah Harari", "acquiredDate": "2025-05-12", "price": 1500, "supplier": "Global Distributors" },
      { "acquisitionId": "acq7", "bookId": "b13", "title": "The Hobbit", "author": "J.R.R. Tolkien", "acquiredDate": "2025-05-15", "price": 1100, "supplier": "Fantasy Books Co." },
      { "acquisitionId": "acq8", "bookId": "b14", "title": "Cosmos", "author": "Carl Sagan", "acquiredDate": "2025-05-20", "price": 1350, "supplier": "Scientific Press" },
      { "acquisitionId": "acq9", "bookId": "b15", "title": "Clean Code", "author": "Robert C. Martin", "acquiredDate": "2025-05-21", "price": 2800, "supplier": "Tech Books Unlimited" },
      { "acquisitionId": "acq10", "bookId": "b16", "title": "The Lord of the Rings", "author": "J.R.R. Tolkien", "acquiredDate": "2025-05-25", "price": 2200, "supplier": "Fantasy Books Co." },
      { "acquisitionId": "acq11", "bookId": "b17", "title": "A People's History of the United States", "author": "Howard Zinn", "acquiredDate": "2025-06-01", "price": 1800, "supplier": "Global Distributors" },
      { "acquisitionId": "acq12", "bookId": "b18", "title": "The Diary of a Young Girl", "author": "Anne Frank", "acquiredDate": "2025-06-02", "price": 750, "supplier": "Classic Reads Inc." },
      { "acquisitionId": "acq13", "bookId": "b19", "title": "Brave New World", "author": "Aldous Huxley", "acquiredDate": "2025-06-05", "price": 950, "supplier": "Classic Reads Inc." },
      { "acquisitionId": "acq14", "bookId": "b20", "title": "Moby-Dick", "author": "Herman Melville", "acquiredDate": "2025-06-05", "price": 1000, "supplier": "Classic Reads Inc." },
      { "acquisitionId": "acq15", "bookId": "b21", "title": "War and Peace", "author": "Leo Tolstoy", "acquiredDate": "2025-06-08", "price": 1400, "supplier": "Classic Reads Inc." },
      { "acquisitionId": "acq16", "bookId": "b22", "title": "The Selfish Gene", "author": "Richard Dawkins", "acquiredDate": "2025-06-10", "price": 1600, "supplier": "Scientific Press" },
      { "acquisitionId": "acq17", "bookId": "b23", "title": "Calculus: Early Transcendentals", "author": "James Stewart", "acquiredDate": "2025-06-15", "price": 4500, "supplier": "Academic Books Ltd." },
      { "acquisitionId": "acq18", "bookId": "b24", "title": "Thinking, Fast and Slow", "author": "Daniel Kahneman", "acquiredDate": "2025-06-18", "price": 1750, "supplier": "Global Distributors" },
      { "acquisitionId": "acq19", "bookId": "b25", "title": "One Hundred Years of Solitude", "author": "Gabriel Garcia Marquez", "acquiredDate": "2025-06-20", "price": 1150, "supplier": "World Literature House" },
      { "acquisitionId": "acq20", "bookId": "b26", "title": "The Structure of Scientific Revolutions", "author": "Thomas S. Kuhn", "acquiredDate": "2025-06-22", "price": 1900, "supplier": "Scientific Press" },
      { "acquisitionId": "acq21", "bookId": "b27", "title": "Guns, Germs, and Steel", "author": "Jared Diamond", "acquiredDate": "2025-06-28", "price": 2100, "supplier": "Global Distributors" },
      { "acquisitionId": "acq22", "bookId": "b28", "title": "Frankenstein", "author": "Mary Shelley", "acquiredDate": "2025-07-01", "price": 800, "supplier": "Classic Reads Inc." },
      { "acquisitionId": "acq23", "bookId": "b29", "title": "The Art of Computer Programming", "author": "Donald E. Knuth", "acquiredDate": "2025-07-05", "price": 5500, "supplier": "Tech Books Unlimited" }
    ],
 "readingLists": [
    { "id": "rl1", "name": "Physics Fundamentals", "classId": "c1", "teacherId": "t2", "bookIds": ["b2"] },
    { "id": "rl2", "name": "Classic American Literature", "classId": "c4", "teacherId": "t4", "bookIds": ["b3", "b5", "b6"] },
    { "id": "rl3", "name": "Introduction to Algebra", "classId": "c2", "teacherId": "t1", "bookIds": ["b1", "b4"] },
    { "id": "rl4", "name": "World History: Ancient Civilizations", "classId": "c3", "teacherId": "t3", "bookIds": ["b7", "b8", "b9"] },
    { "id": "rl5", "name": "Biology: The Cell", "classId": "c5", "teacherId": "t2", "bookIds": ["b10", "b11"] },
    { "id": "rl6", "name": "Shakespearean Tragedies", "classId": "c4", "teacherId": "t4", "bookIds": ["b12", "b13"] },
    { "id": "rl7", "name": "Calculus I", "classId": "c2", "teacherId": "t1", "bookIds": ["b14", "b15"] },
    { "id": "rl8", "name": "European Renaissance Art", "classId": "c5", "teacherId": "t5", "bookIds": ["b16", "b17", "b18"] },
    { "id": "rl9", "name": "Chemistry: Atomic Structure", "classId": "c3", "teacherId": "t6", "bookIds": ["b19", "b20"] },
    { "id": "rl10", "name": "Intro to Programming with Python", "classId": "c3", "teacherId": "t7", "bookIds": ["b21", "b22"] },
    { "id": "rl11", "name": "The Cold War Era", "classId": "c3", "teacherId": "t3", "bookIds": ["b23", "b24", "b25"] },
    { "id": "rl12", "name": "Environmental Science", "classId": "c4", "teacherId": "t8", "bookIds": ["b26", "b27"] },
    { "id": "rl13", "name": "Modern Poetry", "classId": "c1", "teacherId": "t4", "bookIds": ["b28", "b29", "b30"] },
    { "id": "rl14", "name": "Quantum Mechanics", "classId": "c1", "teacherId": "t2", "bookIds": ["b31", "b32"] },
    { "id": "rl15", "name": "Introduction to Philosophy", "classId": "c1", "teacherId": "t9", "bookIds": ["b33", "b34"] },
    { "id": "rl16", "name": "Data Structures and Algorithms", "classId": "c5", "teacherId": "t7", "bookIds": ["b35", "b36"] },
    { "id": "rl17", "name": "Microeconomics Principles", "classId": "c5", "teacherId": "t10", "bookIds": ["b37"] },
    { "id": "rl18", "name": "Macroeconomics Principles", "classId": "c5", "teacherId": "t10", "bookIds": ["b38", "b39"] },
    { "id": "rl19", "name": "Music Theory I", "classId": "c1", "teacherId": "t5", "bookIds": ["b40", "b41"] },
    { "id": "rl20", "name": "Geology: Plate Tectonics", "classId": "c3", "teacherId": "t8", "bookIds": ["b42"] },
    { "id": "rl21", "name": "Abnormal Psychology", "classId": "c4", "teacherId": "t9", "bookIds": ["b43", "b44", "b45"] },
    { "id": "rl22", "name": "Organic Chemistry I", "classId": "c2", "teacherId": "t6", "bookIds": ["b46", "b47"] }
]
  },
  "transport": {
    "vehicles": [
      { "vehicleId": "v1", "vehicleNumber": "DH-GA-1234", "driverName": "Mr. Kamal", "driverContact": "01711-000001", "capacity": 30 },
      { "vehicleId": "v2", "vehicleNumber": "DH-GA-5678", "driverName": "Mr. Jamal", "driverContact": "01711-000002", "capacity": 30 },
      { "vehicleId": "v3", "vehicleNumber": "DH-CA-9101", "driverName": "Mr. Rahim", "driverContact": "01711-000003", "capacity": 25 },
      { "vehicleId": "v4", "vehicleNumber": "DH-DA-2233", "driverName": "Mr. Selim", "driverContact": "01711-000004", "capacity": 40 },
      { "vehicleId": "v5", "vehicleNumber": "DH-MA-4455", "driverName": "Mr. Karim", "driverContact": "01711-000005", "capacity": 25 },
      { "vehicleId": "v6", "vehicleNumber": "DH-GA-6677", "driverName": "Mr. Bashar", "driverContact": "01711-000006", "capacity": 30 },
      { "vehicleId": "v7", "vehicleNumber": "DH-CA-8899", "driverName": "Mr. Anis", "driverContact": "01711-000007", "capacity": 25 },
      { "vehicleId": "v8", "vehicleNumber": "DH-DA-1012", "driverName": "Mr. Faruk", "driverContact": "01711-000008", "capacity": 40 },
      { "vehicleId": "v9", "vehicleNumber": "DH-MA-3456", "driverName": "Mr. Nabil", "driverContact": "01711-000009", "capacity": 25 },
      { "vehicleId": "v10", "vehicleNumber": "DH-GA-7890", "driverName": "Mr. Ratan", "driverContact": "01711-000010", "capacity": 30 },
      { "vehicleId": "v11", "vehicleNumber": "DH-CA-1122", "driverName": "Mr. Mizan", "driverContact": "01711-000011", "capacity": 25 },
      { "vehicleId": "v12", "vehicleNumber": "DH-DA-3344", "driverName": "Mr. Sohel", "driverContact": "01711-000012", "capacity": 40 },
      { "vehicleId": "v13", "vehicleNumber": "DH-MA-5566", "driverName": "Mr. Alom", "driverContact": "01711-000013", "capacity": 25 },
      { "vehicleId": "v14", "vehicleNumber": "DH-GA-7788", "driverName": "Mr. Babul", "driverContact": "01711-000014", "capacity": 30 },
      { "vehicleId": "v15", "vehicleNumber": "DH-CA-9900", "driverName": "Mr. Palash", "driverContact": "01711-000015", "capacity": 25 },
      { "vehicleId": "v16", "vehicleNumber": "DH-DA-1213", "driverName": "Mr. Jewel", "driverContact": "01711-000016", "capacity": 40 },
      { "vehicleId": "v17", "vehicleNumber": "DH-MA-1415", "driverName": "Mr. Manik", "driverContact": "01711-000017", "capacity": 25 },
      { "vehicleId": "v18", "vehicleNumber": "DH-GA-1617", "driverName": "Mr. Sumon", "driverContact": "01711-000018", "capacity": 30 },
      { "vehicleId": "v19", "vehicleNumber": "DH-CA-1819", "driverName": "Mr. Arif", "driverContact": "01711-000019", "capacity": 25 },
      { "vehicleId": "v20", "vehicleNumber": "DH-DA-2021", "driverName": "Mr. Asif", "driverContact": "01711-000020", "capacity": 40 },
      { "vehicleId": "v21", "vehicleNumber": "DH-MA-2223", "driverName": "Mr. Emon", "driverContact": "01711-000021", "capacity": 25 },
      { "vehicleId": "v22", "vehicleNumber": "DH-GA-2425", "driverName": "Mr. Biplob", "driverContact": "01711-000022", "capacity": 30 },
      { "vehicleId": "v23", "vehicleNumber": "DH-CA-2627", "driverName": "Mr. Firoz", "driverContact": "01711-000023", "capacity": 25 }
    ],
    "routes": [
      { "routeId": "r1", "routeName": "Route A - North", "stops": ["Stop A1", "Stop A2", "Stop A3"] },
      { "routeId": "r2", "routeName": "Route B - South", "stops": ["Stop B1", "Stop B2", "Stop B3"] },
      { "routeId": "r3", "routeName": "Route C - East", "stops": ["Stop C1", "Stop C2", "Stop C3", "Stop C4"] },
      { "routeId": "r4", "routeName": "Route D - West", "stops": ["Stop D1", "Stop D2", "Stop D3"] },
      { "routeId": "r5", "routeName": "Route E - Central", "stops": ["Stop E1", "Stop E2", "Stop E3", "Stop E4"] },
      { "routeId": "r6", "routeName": "Route F - North-East", "stops": ["Stop F1", "Stop F2", "Stop F3"] },
      { "routeId": "r7", "routeName": "Route G - South-West", "stops": ["Stop G1", "Stop G2", "Stop G3"] },
      { "routeId": "r8", "routeName": "Express Route 1", "stops": ["Campus", "Main Hub 1", "Main Hub 2"] },
      { "routeId": "r9", "routeName": "Express Route 2", "stops": ["Campus", "Main Hub 3", "Main Hub 4"] },
      { "routeId": "r10", "routeName": "Route H - Inner Circle", "stops": ["Stop H1", "Stop H2", "Stop H3", "Stop H4", "Stop H5"] },
      { "routeId": "r11", "routeName": "Route I - Outer Circle", "stops": ["Stop I1", "Stop I2", "Stop I3", "Stop I4", "Stop I5"] },
      { "routeId": "r12", "routeName": "Route J - North-West", "stops": ["Stop J1", "Stop J2", "Stop J3"] },
      { "routeId": "r13", "routeName": "Route K - South-East", "stops": ["Stop K1", "Stop K2", "Stop K3", "Stop K4"] },
      { "routeId": "r14", "routeName": "Special Route A", "stops": ["Campus", "Faculty Quarters", "Admin Building"] },
      { "routeId": "r15", "routeName": "Night Route A", "stops": ["Campus", "Hostel A", "Hostel B", "Hostel C"] },
      { "routeId": "r16", "routeName": "Night Route B", "stops": ["Campus", "Hostel D", "Hostel E", "Library"] },
      { "routeId": "r17", "routeName": "Route L - Riverside", "stops": ["Stop L1", "Stop L2", "Stop L3"] },
      { "routeId": "r18", "routeName": "Route M - Hillside", "stops": ["Stop M1", "Stop M2"] },
      { "routeId": "r19", "routeName": "Route N - Downtown", "stops": ["Stop N1", "Stop N2", "Stop N3", "Stop N4"] },
      { "routeId": "r20", "routeName": "Route O - Suburban East", "stops": ["Stop O1", "Stop O2", "Stop O3"] },
      { "routeId": "r21", "routeName": "Route P - Suburban West", "stops": ["Stop P1", "Stop P2", "Stop P3"] },
      { "routeId": "r22", "routeName": "Inter-Campus Shuttle", "stops": ["Main Campus", "Science Campus", "Arts Campus"] },
      { "routeId": "r23", "routeName": "Weekend Route", "stops": ["Campus", "Shopping Mall", "Cinema Hall", "Park"] }
    ],
    "assignments": [
      { "assignmentId": "ta1", "studentId": "s1", "vehicleId": "v1", "routeId": "r1" },
      { "assignmentId": "ta2", "studentId": "s2", "vehicleId": "v1", "routeId": "r1" },
      { "assignmentId": "ta3", "studentId": "s3", "vehicleId": "v2", "routeId": "r2" },
      { "assignmentId": "ta4", "studentId": "s40", "vehicleId": "v1", "routeId": "r1" },
      { "assignmentId": "ta5", "studentId": "s4", "vehicleId": "v3", "routeId": "r3" },
      { "assignmentId": "ta6", "studentId": "s5", "vehicleId": "v2", "routeId": "r2" },
      { "assignmentId": "ta7", "studentId": "s30", "vehicleId": "v3", "routeId": "r3" },
      { "assignmentId": "ta8", "studentId": "s23", "vehicleId": "v4", "routeId": "r4" },
      { "assignmentId": "ta9", "studentId": "s6", "vehicleId": "v4", "routeId": "r4" },
      { "assignmentId": "ta10", "studentId": "s7", "vehicleId": "v5", "routeId": "r5" },
      { "assignmentId": "ta11", "studentId": "s8", "vehicleId": "v5", "routeId": "r5" },
      { "assignmentId": "ta12", "studentId": "s9", "vehicleId": "v6", "routeId": "r6" },
      { "assignmentId": "ta13", "studentId": "s10", "vehicleId": "v6", "routeId": "r6" },
      { "assignmentId": "ta14", "studentId": "s11", "vehicleId": "v7", "routeId": "r7" },
      { "assignmentId": "ta15", "studentId": "s12", "vehicleId": "v7", "routeId": "r7" },
      { "assignmentId": "ta16", "studentId": "s13", "vehicleId": "v8", "routeId": "r8" },
      { "assignmentId": "ta17", "studentId": "s14", "vehicleId": "v8", "routeId": "r8" },
      { "assignmentId": "ta18", "studentId": "s15", "vehicleId": "v9", "routeId": "r9" },
      { "assignmentId": "ta19", "studentId": "s16", "vehicleId": "v9", "routeId": "r9" },
      { "assignmentId": "ta20", "studentId": "s17", "vehicleId": "v10", "routeId": "r10" },
      { "assignmentId": "ta21", "studentId": "s18", "vehicleId": "v10", "routeId": "r10" },
      { "assignmentId": "ta22", "studentId": "s19", "vehicleId": "v11", "routeId": "r11" },
      { "assignmentId": "ta23", "studentId": "s20", "vehicleId": "v11", "routeId": "r11" },
      { "assignmentId": "ta24", "studentId": "s21", "vehicleId": "v12", "routeId": "r12" },
      { "assignmentId": "ta25", "studentId": "s22", "vehicleId": "v12", "routeId": "r12" },
      { "assignmentId": "ta26", "studentId": "s23", "vehicleId": "v1", "routeId": "r1" },
      { "assignmentId": "ta27", "studentId": "s24", "vehicleId": "v2", "routeId": "r2" }
    ]
  }
};

// You can assign the embeddedDatabase to your appDatabase variable
appDatabase = embeddedDatabase;

const apiService = (() => {
    const DB_KEY = 'sms_database_pro';
    const init = async () => {
        const savedDb = localStorage.getItem(DB_KEY);
        if (savedDb) {
            try {
                appDatabase = JSON.parse(savedDb);
            } catch (error) {
                console.error("Could not parse saved database. Loading default.", error);
                appDatabase = JSON.parse(JSON.stringify(embeddedDatabase));
                save();
            }
        } else {
            appDatabase = JSON.parse(JSON.stringify(embeddedDatabase));
            save();
        }
    };
    const save = () => localStorage.setItem(DB_KEY, JSON.stringify(appDatabase));
    
    const get = (collection, subCollection = null) => new Promise(resolve => setTimeout(() => {
        if (subCollection) {
            resolve(JSON.parse(JSON.stringify(appDatabase[collection] ? (appDatabase[collection][subCollection] || []) : [])));
        } else {
            resolve(JSON.parse(JSON.stringify(appDatabase[collection] || [])));
        }
    }, 150));

    const create = (collection, data, subCollection = null) => new Promise(resolve => setTimeout(() => {
        let idKey = 'id';
        if (collection === 'library') {
            if (subCollection === 'books') idKey = 'bookId';
            else if (subCollection === 'transactions') idKey = 'transactionId';
            else if (subCollection === 'reservations') idKey = 'reservationId';
            else if (subCollection === 'acquisitions') idKey = 'acquisitionId';
        }
        
        const prefix = collection.slice(0,1) + (subCollection ? subCollection.slice(0,1) : '');
        const newItem = { ...data, [idKey]: `${prefix}${Date.now()}` };
        
        if (subCollection) {
            if (!appDatabase[collection]) appDatabase[collection] = {};
            if (!appDatabase[collection][subCollection]) appDatabase[collection][subCollection] = [];
            appDatabase[collection][subCollection].push(newItem);
        } else {
            if (!appDatabase[collection]) appDatabase[collection] = [];
            appDatabase[collection].push(newItem);
        }
        save();
        resolve(newItem);
    }, 100));

    const update = (collection, id, data, subCollection = null, idKey = 'id') => new Promise(resolve => setTimeout(() => {
        const collectionToUpdate = subCollection ? appDatabase[collection][subCollection] : appDatabase[collection];
        const index = collectionToUpdate.findIndex(item => item[idKey] === id);
        if (index !== -1) {
            collectionToUpdate[index] = { ...collectionToUpdate[index], ...data };
            save();
            resolve(collectionToUpdate[index]);
        }
    }, 100));

    const remove = (collection, id, subCollection = null, idKey = 'id') => new Promise(resolve => setTimeout(() => {
        if(subCollection) {
            appDatabase[collection][subCollection] = appDatabase[collection][subCollection].filter(item => item[idKey] !== id);
        } else {
            appDatabase[collection] = appDatabase[collection].filter(item => item.id !== id);
        }
        save();
        resolve({ success: true });
    }, 100));
    
    const getAttendance = (date, classId) => new Promise(resolve => {
        const records = appDatabase.attendance.filter(att => att.date === date && att.classId === classId);
        const attendanceMap = records.reduce((acc, record) => {
            acc[record.studentId] = record.status;
            return acc;
        }, {});
        resolve(attendanceMap);
    });

    const saveAttendance = (date, classId, records) => new Promise(resolve => {
        appDatabase.attendance = appDatabase.attendance.filter(att => att.date !== date || att.classId !== classId);
        for (const studentId in records) {
            const newRecord = {
                attendanceId: `att${Date.now()}${studentId}`,
                studentId: studentId,
                classId: classId,
                date: date,
                status: records[studentId]
            };
            appDatabase.attendance.push(newRecord);
        }
        save();
        resolve({ success: true });
    });

    const getResultsForExam = (examId) => new Promise(resolve => {
        const results = appDatabase.results.filter(r => r.examId === examId);
        resolve(results);
    });

    const saveResults = (examId, resultsData) => new Promise(resolve => {
        resultsData.forEach(res => {
            const existingResultIndex = appDatabase.results.findIndex(r => r.examId === examId && r.studentId === res.studentId);
            if (existingResultIndex > -1) {
                appDatabase.results[existingResultIndex] = { ...appDatabase.results[existingResultIndex], ...res };
            } else {
                appDatabase.results.push({ resultId: `res${Date.now()}${res.studentId}`, examId, ...res });
            }
        });
        save();
        resolve({ success: true });
    });
     
    const reset = async () => {
        localStorage.removeItem(DB_KEY);
        await init();
    };

    return { init, save, get, create, update, remove, getAttendance, saveAttendance, getResultsForExam, saveResults, reset };
})();


// ===================================================================================
// --- CENTRALIZED DATA STORE ---
// ===================================================================================
const store = {
    _data: {},
    _maps: {},
    async initialize() {
        const collections = ['users', 'departments', 'subjects', 'students', 'teachers', 'classes', 'timetable', 'notices', 'attendance', 'fees', 'exams', 'results', 'library', 'transport', 'salaries', 'expenses'];
        const promises = collections.map(async (key) => {
            this._data[key] = await apiService.get(key);
        });
        await Promise.all(promises);
        this.buildMaps();
    },
    get(collection, subCollection = null) {
        if (subCollection) {
            return this._data[collection] ? (this._data[collection][subCollection] || []) : [];
        }
        return this._data[collection] || [];
    },
    getMap(collection) {
        return this._maps[collection] || new Map();
    },
    buildMaps() {
        this._maps.students = new Map(this.get('students').map(s => [s.id, s]));
        this._maps.teachers = new Map(this.get('teachers').map(t => [t.id, t]));
        this._maps.classes = new Map(this.get('classes').map(c => [c.id, c]));
        this._maps.subjects = new Map(this.get('subjects').map(s => [s.id, s]));
        this._maps.departments = new Map(this.get('departments').map(d => [d.id, d]));
        this._maps.books = new Map(this.get('library', 'books').map(b => [b.bookId, b]));
        this._maps.members = new Map([...this._maps.students, ...this._maps.teachers]);
    },
    async refresh(collection, subCollection = null) {
        if (subCollection) {
            if (!this._data[collection]) this._data[collection] = {};
            this._data[collection][subCollection] = await apiService.get(collection, subCollection);
        } else {
            this._data[collection] = await apiService.get(collection);
        }
        this.buildMaps(); // Rebuild maps that might depend on this collection
    }
};

// ===================================================================================
// --- UI ELEMENT SELECTORS ---
// ===================================================================================
const ui = {
    loginPage: document.getElementById('login-page'),
    app: document.getElementById('app'),                
    loginForm: document.getElementById('login-form'),
    loginMessage: document.getElementById('login-message'),
    logoutButton: document.getElementById('logout-button'),
    contentArea: document.getElementById('content-area'),
    pageTitle: document.getElementById('page-title'),
    navMenu: document.getElementById('nav-menu'),
    userInfo: document.getElementById('user-info'),
    userNameDisplay: document.getElementById('user-name-display'),
    userRoleDisplay: document.getElementById('user-role-display'),
    sidebar: document.getElementById('sidebar'),
    sidebarOverlay: document.getElementById('sidebar-overlay'),
    mobileMenuBtn: document.getElementById('mobile-menu-btn'),
    modal: document.getElementById('form-modal'),
    modalTitle: document.getElementById('modal-title'),
    modalBody: document.getElementById('modal-body'),
    closeModalButton: document.getElementById('close-modal-button'),
    confirmModal: document.getElementById('confirm-modal'),
    confirmText: document.getElementById('confirm-text'),
    confirmYesBtn: document.getElementById('confirm-yes-btn'),
    confirmNoBtn: document.getElementById('confirm-no-btn'),
    headerUserAvatar: document.getElementById('header-user-avatar'),
    toastContainer: document.getElementById('toast-container'),
    resetDataBtn: document.getElementById('reset-data-btn'), 
};


// ===================================================================================
// --- INITIALIZATION & ROUTING ---
// ===================================================================================
document.addEventListener('DOMContentLoaded', async () => {
    await apiService.init();
    await store.initialize();

    const savedUser = sessionStorage.getItem('sms_user_pro');
    if (savedUser) {
        currentUser = JSON.parse(savedUser);
        initializeApp();
    } else {
        ui.loginPage.style.display = 'block';
        ui.app.classList.add('hidden');
    }

    setupGlobalEventListeners();
});

const setupGlobalEventListeners = () => {
    ui.loginForm.addEventListener('submit', handleLogin);
    ui.logoutButton.addEventListener('click', handleLogout);
    ui.closeModalButton.addEventListener('click', () => closeAnimatedModal(ui.modal));
    ui.confirmNoBtn.addEventListener('click', () => closeAnimatedModal(ui.confirmModal));
    ui.resetDataBtn.addEventListener('click', handleResetData);
    ui.mobileMenuBtn.addEventListener('click', toggleSidebar);
    ui.sidebarOverlay.addEventListener('click', toggleSidebar);
};

const toggleSidebar = () => {
    ui.sidebar.classList.toggle('sidebar-open');
    ui.sidebarOverlay.classList.toggle('hidden');
};


const handleLogin = async (e) => {
    e.preventDefault();
    const username = e.target.username.value;
    const password = e.target.password.value;
    ui.loginMessage.textContent = '';

    const users = appDatabase.users;
    const userAccount = users[username.toLowerCase()];

    if (userAccount && userAccount.password === password) {
        currentUser = {
            username: username.toLowerCase(),
            role: userAccount.role,
        };

        // Fetch and merge role-specific data into the currentUser object
        if (['Admin', 'Accountant', 'Librarian'].includes(userAccount.role)) {
            Object.assign(currentUser, {
                id: username.toLowerCase(),
                name: userAccount.name,
                email: userAccount.email,
                profileImage: userAccount.profileImage
            });
        } else if (userAccount.role === 'Student') {
            const studentData = store.getMap('students').get(userAccount.studentId);
            if (!studentData) {
                ui.loginMessage.textContent = 'Student profile data could not be found.';
                return;
            }
            currentUser = { ...currentUser, ...studentData };
        } else if (userAccount.role === 'Teacher') {
            const teacherData = store.getMap('teachers').get(userAccount.teacherId);
            if (!teacherData) {
                ui.loginMessage.textContent = 'Teacher profile data could not be found.';
                return;
            }
            currentUser = { ...currentUser, ...teacherData };
        }

        sessionStorage.setItem('sms_user_pro', JSON.stringify(currentUser));
        initializeApp();

    } else {
        ui.loginMessage.textContent = 'Invalid username or password.';
    }
};

const handleLogout = () => {
    showConfirmationModal(
        "Are you sure you want to log out?",
        () => {
            currentUser = null;
            sessionStorage.removeItem('sms_user_pro');
            window.location.reload();
        }
    );
};

const handleResetData = () => {
    showConfirmationModal(
        'Are you sure you want to reset all data to default?',
        async () => {
            await apiService.reset();
            showToast('Application data has been reset.', 'info');
            sessionStorage.removeItem('sms_user_pro');
            setTimeout(() => window.location.reload(), 1500);
        }
    );
};


const initializeApp = () => {
    ui.loginPage.style.display = 'none';
    ui.app.classList.remove('hidden');

    setupUIForRole();

    // Navigate to the default page for the user's role
    const defaultPage = navConfig[currentUser.role]?.[0]?.page;
    if (defaultPage) {
        navigateTo(defaultPage);
    } else {
        ui.contentArea.innerHTML = `<p class="text-red-400">No default page configured for role: ${currentUser.role}</p>`;
    }
};

const setupUIForRole = () => {
    if (!currentUser) return;

    ui.headerUserAvatar.src = currentUser.profileImage || generateInitialsAvatar(currentUser.name);
    ui.userNameDisplay.textContent = currentUser.name;
    ui.userRoleDisplay.textContent = currentUser.role;

    const menuItems = navConfig[currentUser.role] || [];
    ui.navMenu.innerHTML = menuItems.map(item => `
        <a href="#" class="sidebar-link p-3 my-1 rounded-lg flex items-center gap-4 text-slate-300" data-page="${item.page}">
            <i class="fas ${item.icon} w-6 text-center text-lg"></i>
            <span class="font-medium">${item.text}</span>
        </a>
    `).join('');

    document.querySelectorAll('.sidebar-link').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            navigateTo(link.dataset.page);
            if (window.innerWidth < 1024) { // Close sidebar on mobile after navigation
                toggleSidebar();
            }
        });
    });
};

const navigateTo = (page) => {
    // Update active link in the sidebar
    document.querySelectorAll('.sidebar-link').forEach(link => {
        link.classList.toggle('active', link.dataset.page === page);
    });

    // Update the main page title
    const pageConfig = navConfig[currentUser.role]?.find(item => item.page === page);
    ui.pageTitle.textContent = pageConfig?.text || 'Dashboard';

    // Map pages to their rendering functions
    const pageRenderers = {
        'dashboard': renderDashboard,
        'students': renderStudentsPage,
        'teachers': renderTeachersPage,
        'staff': renderStaffPage,
        'classes': renderClassesPage,
        'attendance': renderAttendancePage,
        'fees': renderFeesPage,
        'exams': renderExamsPage,
        'notices': renderNoticesPage,
        'profile': renderProfilePage,
        'departments': renderDepartmentsPage,
        'library': renderLibraryPage,
        'transport': renderTransportPage,
        'contactTeacher': renderContactTeacherPage,
        'timetable': renderTimetablePage,
        'accountantDashboard': renderAccountantDashboard,
        'salaries': renderSalaryPage,
        'expenses': renderExpensesPage,
        'financialReports': renderFinancialReports,
    };

    const renderFunc = pageRenderers[page];

    // Show a skeleton loader for a better user experience
    if (['students', 'teachers', 'classes', 'departments', 'fees', 'salaries', 'expenses'].includes(page)) {
        ui.contentArea.innerHTML = getSkeletonLoaderHTML('table');
    } else if (page && page.toLowerCase().includes('dashboard')) {
        ui.contentArea.innerHTML = getSkeletonLoaderHTML('dashboard');
    } else {
        ui.contentArea.innerHTML = `<div class="flex justify-center items-center h-full"><i class="fas fa-spinner fa-spin fa-3x"></i></div>`;
    }

    // Render the actual page content after a short delay
    if (typeof renderFunc === 'function') {
        setTimeout(renderFunc, 150);
    } else {
        ui.contentArea.innerHTML = `<div class="animate-fade-in"><p>Page not found or is under construction.</p></div>`;
    }
};

// ===================================================================================
// --- PAGE RENDERERS ---
// ===================================================================================

const renderDashboard = async () => {
    const students = store.get('students');
    const teachers = store.get('teachers');
    const fees = store.get('fees');
    const allNotices = store.get('notices');
    const exams = store.get('exams');
    const timetable = store.get('timetable');
    const classesMap = store.getMap('classes');
    const subjectsMap = store.getMap('subjects');
    const teachersMap = store.getMap('teachers');

    // STUDENT DASHBOARD
    if (currentUser.role === 'Student') {
        const pendingFeesCount = fees.filter(f => f.studentId === currentUser.id && f.status === 'Unpaid').length;
        const upcomingExams = exams.filter(e => e.classId === currentUser.classId && new Date(e.date) >= new Date()).sort((a, b) => new Date(a.date) - new Date(b.date));
        const relevantNotices = allNotices.filter(n => n.target === 'All' || n.target === 'Student' || n.target === `class_${currentUser.classId}` || n.target === currentUser.id).sort((a, b) => new Date(b.date) - new Date(a.date));
        const myLibraryTx = store.get('library', 'transactions').filter(t => t.studentId === currentUser.id && t.status === 'Issued');
        const overdueBooksCount = myLibraryTx.filter(t => new Date(t.dueDate) < new Date()).length;

        const studentStatCards = [
            { title: 'Upcoming Exams', value: upcomingExams.length, icon: 'fa-file-alt', color: 'indigo' },
            { title: 'Pending Fees', value: pendingFeesCount, icon: 'fa-file-invoice-dollar', color: 'yellow' },
            { title: 'Overdue Books', value: overdueBooksCount, icon: 'fa-exclamation-triangle', color: 'red' },
        ];

        ui.contentArea.innerHTML = `
            <div class="animate-fade-in">
                <div class="mb-6">
                    <h2 class="text-3xl md:text-4xl font-extrabold text-white leading-tight">Welcome back, <span class="text-blue-400">${currentUser.name.split(' ')[0]}!</span></h2>
                    <p class="text-slate-400 mt-2">Here's your personalized summary for today.</p>
                </div>
                <div class="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">${studentStatCards.map(createDashboardCard).join('')}</div>
                <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <div class="bg-slate-800/50 p-6 rounded-xl shadow-xl border border-slate-700">
                        <h3 class="text-xl font-semibold mb-4 text-white">Recent Notices</h3>
                        <div class="space-y-3 max-h-80 overflow-y-auto custom-scrollbar">
                            ${relevantNotices.length > 0 ? relevantNotices.slice(0, 4).map(n => createNoticeCard(n, 'School', n.target, 'border-blue-500')).join('') : '<p class="text-slate-500 italic">No recent notices to display.</p>'}
                        </div>
                    </div>
                    <div class="bg-slate-800/50 p-6 rounded-xl shadow-xl border border-slate-700">
                        <h3 class="text-xl font-semibold mb-4 text-white">Upcoming Exams</h3>
                        <div class="space-y-3 max-h-80 overflow-y-auto custom-scrollbar">
                            ${upcomingExams.length > 0 ? upcomingExams.slice(0, 4).map(e => createUpcomingExamCard(e, subjectsMap.get(e.subjectId)?.name || 'N/A')).join('') : '<p class="text-slate-500 italic">No upcoming exams scheduled.</p>'}
                        </div>
                    </div>
                </div>
            </div>`;
    // TEACHER DASHBOARD
    } else if (currentUser.role === 'Teacher') {
        const myClassIdsAsTeacher = store.get('classes').filter(c => c.teacherId === currentUser.id).map(c => c.id);
        const myClassIdsAsSubjectTeacher = timetable.filter(t => t.teacherId === currentUser.id).map(t => t.classId);
        const allMyClassIds = [...new Set([...myClassIdsAsTeacher, ...myClassIdsAsSubjectTeacher])];

        const myStudents = students.filter(s => allMyClassIds.includes(s.classId));
        const myExams = exams.filter(e => e.teacherId === currentUser.id);
        const upcomingExams = myExams.filter(e => new Date(e.date) >= new Date()).sort((a, b) => new Date(a.date) - new Date(b.date));
        const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        const today = daysOfWeek[new Date().getDay()];
        const todaysClasses = timetable.filter(t => t.teacherId === currentUser.id && t.dayOfWeek === today).sort((a,b) => a.startTime.localeCompare(b.startTime));
        const relevantNotices = allNotices.filter(n => ['All', 'Teacher', 'Staff', currentUser.id].includes(n.target)).sort((a,b) => new Date(b.date) - new Date(a.date));

        const statCards = [
            { title: 'My Students', value: myStudents.length, icon: 'fa-user-graduate', color: 'blue' },
            { title: 'My Classes', value: allMyClassIds.length, icon: 'fa-school', color: 'green' },
            { title: 'Upcoming Exams', value: upcomingExams.length, icon: 'fa-file-alt', color: 'yellow' },
            { title: "Today's Classes", value: todaysClasses.length, icon: 'fa-calendar-day', color: 'indigo' },
        ];
        
        ui.contentArea.innerHTML = `
            <div class="animate-fade-in">
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">${statCards.map(createDashboardCard).join('')}</div>
                <div class="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-6">
                    <div class="lg:col-span-1 bg-slate-800/50 p-6 rounded-xl shadow-xl border border-slate-700">
                        <h3 class="text-xl font-semibold mb-4 text-white">Today's Timetable (<span class="text-blue-400">${today}</span>)</h3>
                        <div class="space-y-3 max-h-96 overflow-y-auto custom-scrollbar">
                            ${todaysClasses.length > 0 ? todaysClasses.map(c => `
                                <div class="flex items-center gap-4 p-3 rounded-lg bg-slate-700/50">
                                    <div class="text-center font-semibold bg-blue-900/50 text-blue-300 rounded-lg px-3 py-1 min-w-[70px]"><p>${c.startTime}</p></div>
                                    <div><p class="font-bold text-white">${subjectsMap.get(c.subjectId)?.name || 'N/A'}</p><p class="text-sm text-slate-400">Class: ${classesMap.get(c.classId)?.name || 'N/A'}</p></div>
                                </div>`).join('') : `<p class="text-slate-500 italic">No classes scheduled for today.</p>`}
                        </div>
                    </div>
                    <div class="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div class="bg-slate-800/50 p-6 rounded-xl shadow-xl border border-slate-700 flex flex-col">
                            <h3 class="text-xl font-semibold mb-4 text-white">Recent Messages & Notices</h3>
                            <div class="flex-grow space-y-3 max-h-80 overflow-y-auto custom-scrollbar mb-4">
                                 ${relevantNotices.length > 0 ? relevantNotices.slice(0, 5).map(n => createNoticeCard(n, 'School', n.target, 'border-blue-500')).join('') : `<p class="text-slate-500 italic">No new messages or notices.</p>`}
                            </div>
                            <div class="mt-auto border-t border-slate-700 pt-4">
                                <button id="quick-message-btn" class="w-full text-center p-3 rounded-lg bg-blue-600 hover:bg-blue-700 transition duration-300"><i class="fas fa-paper-plane mr-2"></i>Compose Message</button>
                            </div>
                        </div>
                        <div class="bg-slate-800/50 p-6 rounded-xl shadow-xl border border-slate-700">
                            <h3 class="text-xl font-semibold mb-4 text-white">Student Gender Distribution</h3>
                            ${myStudents.length > 0 ? `<canvas id="genderChart"></canvas>` : `<p class="text-slate-500 italic">No student data to display.</p>`}
                        </div>
                    </div>
                </div>
            </div>`;

        document.getElementById('quick-message-btn').onclick = openAdvancedMessageModal;
        if(myStudents.length > 0) renderDashboardCharts(null, myStudents);
    // ADMIN DASHBOARD
    } else {
        const totalStaffCount = Object.values(appDatabase.users).filter(user => user.role !== 'Student').length;
        const statCards = [
            { title: 'Total Students', value: students.length, icon: 'fa-user-graduate', color: 'blue' },
            { title: 'Total Staff', value: totalStaffCount, icon: 'fa-users-cog', color: 'green' },
            { title: 'Total Fees Due', value: `BDT ${fees.filter(f => f.status === 'Unpaid').reduce((sum, f) => sum + f.amount, 0).toLocaleString()}`, icon: 'fa-file-invoice-dollar', color: 'yellow' },
            { title: 'Books on Loan', value: store.get('library', 'transactions').filter(t => t.status === 'Issued').length, icon: 'fa-book', color: 'indigo' },
        ];
        const upcomingExams = exams.filter(e => new Date(e.date) >= new Date()).sort((a, b) => new Date(a.date) - new Date(b.date));

        ui.contentArea.innerHTML = `
            <div class="animate-fade-in">
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">${statCards.map(createDashboardCard).join('')}</div>
                <div class="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-6">
                    <div class="lg:col-span-2 bg-slate-800/50 p-6 rounded-xl shadow-xl border border-slate-700">
                        <h3 class="text-xl font-semibold mb-4 text-white">Fee Collection Overview</h3>
                        <canvas id="feesChart"></canvas>
                    </div>
                    <div class="bg-slate-800/50 p-6 rounded-xl shadow-xl border border-slate-700">
                        <h3 class="text-xl font-semibold mb-4 text-white">Student Distribution</h3>
                        <canvas id="genderChart"></canvas>
                    </div>
                </div>
                <div class="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <div class="bg-slate-800/50 p-6 rounded-xl shadow-xl border border-slate-700">
                         <h3 class="text-xl font-semibold mb-4 text-white">Quick Communication</h3>
                         <p class="text-slate-400 mb-4">Send a message directly to specific classes, teachers, or the entire school.</p>
                         <button id="admin-send-message-btn" class="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-lg"><i class="fas fa-paper-plane mr-2"></i> Send a Message / Notice</button>
                    </div>
                    <div class="bg-slate-800/50 p-6 rounded-xl shadow-xl border border-slate-700">
                        <h3 class="text-xl font-semibold mb-4 text-white">Upcoming Events & Exams</h3>
                        <div class="space-y-3 max-h-60 overflow-y-auto custom-scrollbar">
                            ${upcomingExams.length > 0 ? upcomingExams.slice(0, 5).map(e => createUpcomingExamCard(e, subjectsMap.get(e.subjectId)?.name || 'N/A')).join('') : '<p class="text-slate-500 italic">No upcoming events or exams.</p>'}
                        </div>
                    </div>
                </div>
            </div>`;
        document.getElementById('admin-send-message-btn').onclick = openAdvancedMessageModal;
        renderDashboardCharts(fees, students);
    }
};



async function renderStudentsPage() {
    const classes = store.get('classes');
    const timetable = store.get('timetable');
    let studentDataFilter = null;
    let configOverrides = {};

    if (currentUser.role === 'Teacher') {
        const myClassIdsAsTeacher = classes.filter(c => c.teacherId === currentUser.id).map(c => c.id);
        const myClassIdsAsSubjectTeacher = timetable.filter(t => t.teacherId === currentUser.id).map(t => t.classId);
        const allMyClassIds = [...new Set([...myClassIdsAsTeacher, ...myClassIdsAsSubjectTeacher])];

        if (allMyClassIds.length === 0) {
            ui.contentArea.innerHTML = `
                <div class="text-center p-8 bg-slate-800/50 rounded-xl border border-slate-700">
                    <i class="fas fa-info-circle fa-2x text-blue-400 mb-4"></i>
                    <h3 class="text-xl font-semibold text-white">No Students Found</h3>
                    <p class="text-slate-400 mt-2">You are not currently assigned as a class teacher or subject teacher for any class.</p>
                </div>`;
            return;
        }
        studentDataFilter = (student) => allMyClassIds.includes(student.classId);
        configOverrides = {
            hideAddButton: true,
            hideActions: false,
        };
    } else if (currentUser.role === 'Student') {
        studentDataFilter = (student) => student.classId === currentUser.classId;
        configOverrides = {
            hideAddButton: true,
            hideActions: true,
        };
    }

    const classMap = store.getMap('classes');
    const classFilterOptions = [
        { value: '', label: 'All Classes' },
        ...classes.map(c => ({ value: c.id, label: c.name }))
    ];

    const baseConfig = {
        title: 'Student',
        collectionName: 'students',
        dataFilter: studentDataFilter,
        search: true,
        searchPlaceholder: 'Search by name, roll, or guardian...',
        searchKeys: ['name', 'rollNo', 'guardianName'], // Enhanced search
        classFilter: currentUser.role !== 'Student',
        classFilterOptions: classFilterOptions,
        columns: [
            {
                label: 'Name',
                render: item => `
                    <div class="flex items-center gap-3">
                        <img src="${item.profileImage || generateInitialsAvatar(item.name)}" alt="${item.name}" class="w-10 h-10 rounded-full object-cover">
                        <div>
                            <p class="font-semibold text-white">${item.name}</p>
                            ${currentUser.role !== 'Student' ? `<a href="mailto:${item.email}" class="text-xs text-slate-400 hover:text-blue-400 transition-colors">${item.email}</a>` : ''}
                        </div>
                    </div>`,
                sortable: true,
                sortKey: 'name'
            },
            { label: 'Roll No', key: 'rollNo', sortable: true },
            { label: 'Class', render: item => classMap.get(item.classId)?.name || 'N/A', sortable: true, sortKey: 'classId' },
            { label: 'Guardian', key: 'guardianName', sortable: true },
            { label: 'Guardian Contact', key: 'contact' },
        ],
        formFields: [
            { name: 'name', label: 'Full Name', type: 'text', required: true },
            { name: 'email', label: 'Email', type: 'email', required: true },
            { name: 'rollNo', label: 'Roll Number', type: 'text', required: true },
            { name: 'dateOfBirth', label: 'Date of Birth', type: 'date', required: true },
            { name: 'classId', label: 'Class', type: 'select', options: classes.map(c => `<option value="${c.id}">${c.name}</option>`).join(''), required: true },
            { name: 'gender', label: 'Gender', type: 'select', options: '<option value="Male">Male</option><option value="Female">Female</option><option value="Other">Other</option>', required: true },
            { name: 'bloodGroup', label: 'Blood Group', type: 'select', options: '<option value="">Select</option><option value="A+">A+</option><option value="A-">A-</option><option value="B+">B+</option><option value="B-">B-</option><option value="AB+">AB+</option><option value="AB-">AB-</option><option value="O+">O+</option><option value="O-">O-</option>' },
            { name: 'previousSchool', label: 'Previous School', type: 'text' },
            { name: 'guardianName', label: 'Guardian Name', type: 'text', required: true },
            { name: 'fatherName', label: 'Father\'s Name', type: 'text', required: true },
            { name: 'fatherPhone', label: 'Father\'s Contact', type: 'tel', required: true },
            { name: 'motherName', label: 'Mother\'s Name', type: 'text', required: true },
            { name: 'motherPhone', label: 'Mother\'s Contact', type: 'tel' },
            { name: 'address', label: 'Current Address', type: 'textarea', required: true },
        ]
    };

    renderGenericListPage({ ...baseConfig, ...configOverrides });
}


async function renderTeachersPage() {
    const departments = store.get('departments');
    const departmentMap = store.getMap('departments');

    const teacherPageConfig = {
        title: 'Teacher',
        collectionName: 'teachers',
        columns: [
            {
                label: 'Name',
                render: item => `
                    <div class="flex items-center gap-3">
                        <img src="${item.profileImage || generateInitialsAvatar(item.name)}" alt="${item.name}" class="w-10 h-10 rounded-full object-cover">
                        <div>
                            <p class="font-semibold text-white">${item.name}</p>
                            <a href="mailto:${item.email}" class="text-xs text-slate-400 hover:text-blue-400 transition-colors">${item.email}</a>
                        </div>
                    </div>`,
                sortable: true,
                sortKey: 'name'
            },
            { label: 'Primary Subject', key: 'subject', sortable: true },
            { label: 'Department', render: (item) => departmentMap.get(item.departmentId)?.name || 'N/A', sortable: true, sortKey: 'departmentId' },
            { label: 'Contact', key: 'contact' },
        ],
        formFields: [
            { name: 'name', label: 'Full Name', type: 'text', required: true },
            { name: 'email', label: 'Email (will be username)', type: 'email', required: true },
            { name: 'subject', label: 'Primary Subject', type: 'text', required: true },
            { name: 'departmentId', label: 'Department', type: 'select', options: departments.map(d => `<option value="${d.id}">${d.name}</option>`).join(''), required: true },
            { name: 'contact', label: 'Contact', type: 'tel', required: true },
            { name: 'address', label: 'Address', type: 'textarea' },
            { name: 'qualifications', label: 'Qualifications', type: 'text' },
            { name: 'baseSalary', label: 'Base Salary (BDT)', type: 'number' },
        ],
        searchKeys: ['name', 'subject', 'email']
    };

    if (currentUser.role === 'Admin') {
        teacherPageConfig.customAddFunction = () => {
            openFormModal(`Add New ${teacherPageConfig.title}`, teacherPageConfig.formFields, async (formData) => {
                const username = formData.email.toLowerCase();

                // Improvement: Prevent creating a user that already exists
                if (appDatabase.users[username]) {
                    showToast('Error: A user with this email already exists.', 'error');
                    return; // Stop the function
                }

                // 1. Create the teacher profile first
                const newTeacher = await apiService.create(teacherPageConfig.collectionName, formData);

                // 2. If successful, create the associated user login
                const defaultPassword = 'teacher'; // Set a default password
                appDatabase.users[username] = {
                    password: defaultPassword,
                    role: "Teacher",
                    teacherId: newTeacher.id // Link the login to the profile
                };
                await apiService.save(); // Save the updated users database

                // Improvement: Clear and helpful success message
                showToast(`${teacherPageConfig.title} added successfully! The default password is "${defaultPassword}".`, 'success');
                renderTeachersPage(); // Refresh the page
            });
        };
    } else {
        teacherPageConfig.hideAddButton = true;
        teacherPageConfig.hideActions = true;
    }

    renderGenericListPage(teacherPageConfig);
}

// Function to render the new Staff & Colleagues page
async function renderStaffPage() {
    const users = appDatabase.users;
    const teachers = store.get('teachers');
    const teacherMap = store.getMap('teachers');

    const allStaff = Object.entries(users)
        .filter(([_, userObject]) => userObject.role !== 'Student')
        .map(([username, userObject]) => {
            let details = {
                id: username, // Use username (email) as the unique ID for this view
                name: userObject.name,
                role: userObject.role,
                email: userObject.email,
                contact: userObject.contact || 'N/A',
                profileImage: userObject.profileImage,
            };
            // If the user is a teacher, merge details from the teachers table
            if (userObject.role === 'Teacher' && userObject.teacherId) {
                const teacherDetails = teacherMap.get(userObject.teacherId);
                if (teacherDetails) {
                    // Merge, but keep the unique id as the username
                    details = { ...teacherDetails, ...details, id: username };
                }
            }
            return details;
        });

    const allRoles = [...new Set(allStaff.map(s => s.role))];
    const roleFilterOptions = [
        { value: '', label: 'All Roles' },
        ...allRoles.map(role => ({ value: role, label: role }))
    ];

    const config = {
        title: 'Staff & Colleagues',
        collectionName: 'users', // The base collection is users
        data: allStaff, // We provide the processed data directly
        columns: [
             {
                label: 'Name',
                render: item => `
                    <div class="flex items-center gap-3">
                        <img src="${item.profileImage || generateInitialsAvatar(item.name)}" alt="${item.name}" class="w-10 h-10 rounded-full object-cover">
                        <div>
                            <p class="font-semibold text-white">${item.name || 'N/A'}</p>
                            <a href="mailto:${item.email}" class="text-xs text-slate-400 hover:text-blue-400 transition-colors">${item.email || 'N/A'}</a>
                        </div>
                    </div>`,
                sortable: true,
                sortKey: 'name'
            },
            { label: 'Role / Profession', key: 'role', sortable: true },
            { label: 'Contact', key: 'contact' },
        ],
        searchKeys: ['name', 'role', 'email'],
        hideAddButton: true,
        hideActions: currentUser.role !== 'Admin',
        customHeader: `
            <input type="text" id="search-input" placeholder="Search by name, role, etc..." class="p-2 rounded-lg bg-slate-700 border border-slate-600 focus:ring-2 focus:ring-blue-500">
            <select id="role-filter" class="p-2 rounded-lg bg-slate-700 border border-slate-600 focus:ring-2 focus:ring-blue-500">
                ${roleFilterOptions.map(opt => `<option value="${opt.value}">${opt.label}</option>`).join('')}
            </select>
            ${currentUser.role === 'Admin' ? `
                <button id="add-staff-btn" class="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg flex items-center gap-2">
                    <i class="fas fa-plus"></i> Add Staff
                </button>
            ` : ''}
        `,
        customListeners: () => {
            if (currentUser.role === 'Admin') {
                document.getElementById('add-staff-btn')?.addEventListener('click', () => {
                    const formFields = [
                        { name: 'name', label: 'Full Name', type: 'text', required: true },
                        { name: 'email', label: 'Email (will be username)', type: 'email', required: true },
                        { name: 'role', label: 'Role / Profession', type: 'text', required: true, placeholder: 'e.g., Clerk, Nanny, etc.' },
                        { name: 'contact', label: 'Contact Number', type: 'tel' },
                        { name: 'password', label: 'Initial Password', type: 'text', required: true },
                    ];

                    openFormModal('Add New Staff Member', formFields, async (formData) => {
                        const username = formData.email.toLowerCase();
                        // Improvement: Prevent creating a user that already exists
                        if (appDatabase.users[username]) {
                            showToast('Error: A user with this email already exists.', 'error');
                            return;
                        }

                        appDatabase.users[username] = {
                            name: formData.name,
                            email: formData.email,
                            role: formData.role,
                            contact: formData.contact,
                            password: formData.password,
                            profileImage: null // Default profile image
                        };

                        await apiService.save();
                        showToast('New staff member added successfully!', 'success');
                        renderStaffPage();
                    });
                });
            }
            // Attach edit listeners for existing staff
            document.querySelectorAll('.edit-btn').forEach(btn => {
                btn.onclick = () => {
                    const staffId = btn.dataset.id; // This will be the email/username
                    openStaffEditModal(staffId);
                };
            });
        }
    };

    renderGenericListPage(config);
}


// Helper 1: Builds the modal's HTML. Easier to manage.
// Helper 1: Builds the complex HTML string for the modal form.
const buildStaffEditFormHTML = (staffData, staffId) => {
    const standardFieldConfigs = [
        { name: 'name', label: 'Name', type: 'text' },
        { name: 'role', label: 'Role', type: 'text' },
        { name: 'email', label: 'Email', type: 'email' },
        { name: 'contact', label: 'Contact', type: 'tel' }
    ];
    const standardFields = standardFieldConfigs.map(f => f.name);
    const customFields = Object.keys(staffData).filter(key =>
        !standardFields.includes(key) && !['password', 'profileImage', 'teacherId', 'id', 'nidImage'].includes(key)
    );

    const viewNidButtonHtml = staffData.nidImage
        ? `<button type="button" id="view-nid-btn" class="w-full text-sm bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-3 rounded-lg flex items-center justify-center gap-2"><i class="fas fa-id-card"></i> View NID Card</button>`
        : '';

    return `
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 max-h-[65vh] overflow-y-auto custom-scrollbar pr-2">
            <div class="md:col-span-1 space-y-4">
                <h4 class="text-lg font-semibold text-slate-200">Profile Actions</h4>
                <div class="text-center relative group w-32 h-32 mx-auto">
                    <img id="staff-edit-img-preview" src="${staffData.profileImage || generateInitialsAvatar(staffData.name)}" alt="Profile Picture" class="w-32 h-32 rounded-full object-cover border-4 border-slate-700 shadow-lg">
                    <label for="staff-image-upload" class="absolute inset-0 flex items-center justify-center bg-black bg-opacity-60 rounded-full cursor-pointer opacity-0 group-hover:opacity-100 transition-opacity">
                        <i class="fas fa-camera text-2xl text-white"></i>
                    </label>
                    <input type="file" id="staff-image-upload" accept="image/*" class="hidden">
                </div>
                <div class="text-center">
                    <p class="font-bold text-xl text-white">${staffData.name}</p>
                    <p class="text-blue-400">${staffData.role}</p>
                    <p class="text-xs text-slate-500 mt-1">Username: ${staffId}</p>
                </div>
                <div class="space-y-2 pt-4 border-t border-slate-700">
                    ${viewNidButtonHtml}
                    <button type="button" id="reset-staff-password-btn" class="w-full text-sm bg-slate-600 hover:bg-slate-700 text-white font-bold py-2 px-3 rounded-lg flex items-center justify-center gap-2"><i class="fas fa-key"></i> Reset Password</button>
                    <button type="button" id="delete-staff-btn" class="w-full text-sm bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-3 rounded-lg flex items-center justify-center gap-2"><i class="fas fa-trash-alt"></i> Delete Staff Member</button>
                </div>
            </div>
            <div class="md:col-span-2">
                <form id="edit-staff-form" class="space-y-4">
                    <h4 class="text-lg font-semibold text-slate-200">Basic Information</h4>
                    ${standardFieldConfigs.map(field => `<div><label class="block text-sm font-medium text-slate-300">${field.label}</label><input type="${field.type}" name="${field.name}" value="${staffData[field.name] || ''}" class="mt-1 block w-full px-3 py-2 bg-slate-800 border border-slate-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"></div>`).join('')}
                    <hr class="border-slate-600">
                    <h4 class="text-lg font-semibold text-slate-200">Other Details</h4>
                    <div id="dynamic-fields-container" class="space-y-3">
                        ${customFields.map(key => `<div class="flex gap-2 items-center dynamic-field-row"><input type="text" value="${key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}" class="flex-1 px-3 py-2 bg-slate-700 border border-slate-600 rounded-md font-bold" readonly><input type="text" value="${staffData[key]}" data-key="${key}" class="flex-1 px-3 py-2 bg-slate-800 border border-slate-600 rounded-md"></div>`).join('')}
                    </div>
                     <div class="flex justify-end items-center pt-4 border-t border-slate-700">
                        <button type="submit" class="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg">Save Changes</button>
                    </div>
                </form>
            </div>
        </div>`;
};

// Helper 2: Attaches all event listeners for the modal's buttons and form.
const attachStaffEditModalListeners = (staffData, staffId) => {
    let newProfileImageData = null;

    document.getElementById('view-nid-btn')?.addEventListener('click', () => showImageViewer(staffData.nidImage));

    document.getElementById('staff-image-upload').addEventListener('change', (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                newProfileImageData = e.target.result;
                document.getElementById('staff-edit-img-preview').src = newProfileImageData;
            };
            reader.readAsDataURL(file);
        }
    });

    document.getElementById('reset-staff-password-btn').addEventListener('click', async () => {
        const newPassword = prompt(`Enter a new password for ${staffData.name}.\nThis is a temporary password. Leave blank to cancel.`);
        if (newPassword && newPassword.trim() !== '') {
            appDatabase.users[staffId].password = newPassword.trim();
            await apiService.save();
            showToast('Password has been reset successfully!', 'success');
        } else if (newPassword !== null) { // User didn't click cancel, but left it blank
            showToast('Password reset cancelled.', 'info');
        }
    });

    document.getElementById('delete-staff-btn').addEventListener('click', () => {
        showConfirmationModal(`Are you sure you want to permanently delete the user ${staffData.name}? This action cannot be undone.`, async () => {
            // If they are a teacher, remove them from the teachers table
            if (staffData.role === 'Teacher' && staffData.teacherId) {
                appDatabase.teachers = appDatabase.teachers.filter(t => t.id !== staffData.teacherId);
            }
            // Delete the user from the main users login table
            delete appDatabase.users[staffId];

            await apiService.save();
            showToast('Staff member has been deleted.', 'success');
            closeAnimatedModal(ui.modal);
            renderStaffPage(); // Refresh the page
        });
    });

    document.getElementById('edit-staff-form').addEventListener('submit', async (e) => {
        e.preventDefault();
        const form = e.target;
        const submitButton = form.querySelector('button[type="submit"]');
        submitButton.disabled = true;
        submitButton.innerHTML = `<i class="fas fa-spinner fa-spin mr-2"></i> Saving...`;

        const updatedUserData = { ...appDatabase.users[staffId] };

        if (newProfileImageData) {
            updatedUserData.profileImage = newProfileImageData;
        }

        ['name', 'role', 'email', 'contact'].forEach(field => {
            if(form[field]){
                 updatedUserData[field] = form[field].value;
            }
        });

        document.querySelectorAll('#dynamic-fields-container input[data-key]').forEach(input => {
            updatedUserData[input.dataset.key] = input.value;
        });

        appDatabase.users[staffId] = updatedUserData;

        if(updatedUserData.role === 'Teacher' && updatedUserData.teacherId){
            const teacherIndex = appDatabase.teachers.findIndex(t => t.id === updatedUserData.teacherId);
            if(teacherIndex !== -1){
                // Update the corresponding teacher record with all matching keys
                Object.keys(appDatabase.teachers[teacherIndex]).forEach(key => {
                    if(updatedUserData.hasOwnProperty(key)){
                        appDatabase.teachers[teacherIndex][key] = updatedUserData[key];
                    }
                });
            }
        }

        await apiService.save();
        showToast('Staff information updated successfully!', 'success');
        closeAnimatedModal(ui.modal);
        await store.refresh('teachers'); // Refresh data store
        renderStaffPage();
    });
};

// Main function: Coordinates the process of opening the modal.
function openStaffEditModal(staffId) {
     const baseUserData = appDatabase.users[staffId];
    if (!baseUserData) {
        showToast('Could not find staff member data.', 'error');
        return;
    }

    // Combine base user data with role-specific data (e.g., from teachers table)
    let staffData = { ...baseUserData };
    if (staffData.role === 'Teacher' && staffData.teacherId) {
        const teacherDetails = appDatabase.teachers.find(t => t.id === staffData.teacherId);
        if (teacherDetails) {
            // Ensure base user data (like email, name from the users object) overwrites teacher data if they differ
            staffData = { ...teacherDetails, ...staffData };
        }
    }

    ui.modalTitle.textContent = `Edit Staff Profile: ${staffData.name}`;
    ui.modalBody.innerHTML = buildStaffEditFormHTML(staffData, staffId); // Use helper 1
    attachStaffEditModalListeners(staffData, staffId); // Use helper 2

    const modalContent = ui.modal.querySelector('.modal-content');
    modalContent.classList.add('!max-w-4xl');
    openAnimatedModal(ui.modal);
    ui.modal.addEventListener('transitionend', () => {
        if (!ui.modal.classList.contains('show')) {
            modalContent.classList.remove('!max-w-4xl');
        }
    }, { once: true });
}

async function renderDepartmentsPage() {
    renderGenericListPage({
        title: 'Department', collectionName: 'departments',
        columns: [{ label: 'Department Name', key: 'name', sortable: true }],
        formFields: [{ name: 'name', label: 'Department Name', type: 'text', required: true }],
        searchKeys: ['name']
    });
}

async function renderClassesPage() {
    const teachers = store.get('teachers');
    const teacherMap = store.getMap('teachers');
    renderGenericListPage({
        title: 'Class', collectionName: 'classes',
        columns: [
            { label: 'Class Name', key: 'name', sortable: true },
            { label: 'Class Teacher', render: (item) => teacherMap.get(item.teacherId)?.name || 'N/A', key: 'teacherId', sortable: true },
            { label: 'Academic Year', key: 'academicYear', sortable: true },
            { label: 'Room No.', key: 'roomNumber' },
        ],
        formFields: [
            { name: 'name', label: 'Class Name', type: 'text', required: true },
            { name: 'teacherId', label: 'Class Teacher', type: 'select', options: teachers.map(t => `<option value="${t.id}">${t.name}</option>`).join(''), required: true },
            { name: 'academicYear', label: 'Academic Year', type: 'text', placeholder: 'e.g., 2025-2026' },
            { name: 'roomNumber', label: 'Room Number', type: 'text' },
        ],
        searchKeys: ['name', 'academicYear', 'roomNumber']
    });
}
async function renderTimetablePage() {
    const timetable = store.get('timetable');
    const classes = store.get('classes');
    const subjects = store.get('subjects');
    const teachers = store.get('teachers');
    const subjectsMap = store.getMap('subjects');
    const teachersMap = store.getMap('teachers');

    let relevantClasses = [];
    if (currentUser.role === 'Admin') {
        relevantClasses = classes;
    } else if (currentUser.role === 'Student') {
        relevantClasses = classes.filter(c => c.id === currentUser.classId);
    } else if (currentUser.role === 'Teacher') {
        const teacherClassIds = [...new Set(timetable.filter(t => t.teacherId === currentUser.id).map(t => t.classId))];
        classes.forEach(c => {
            if (c.teacherId === currentUser.id && !teacherClassIds.includes(c.id)) {
                teacherClassIds.push(c.id);
            }
        });
        relevantClasses = classes.filter(c => teacherClassIds.includes(c.id));
    }

    const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const allPeriods = [...new Set(timetable.map(t => t.period))].sort((a, b) => a - b);
    const timeSlots = allPeriods.map(p => {
        const entry = timetable.find(t => t.period === p);
        return entry ? `${entry.startTime} - ${entry.endTime}` : `Period ${p}`;
    });

    const openTimetableForm = (entryData = {}, classId, day, period) => {
        const isEditing = !!entryData.id;
        const title = isEditing ? 'Edit Timetable Entry' : 'Add Timetable Entry';

        const formFields = [
            { name: 'subjectId', label: 'Subject', type: 'select', options: subjects.map(s => `<option value="${s.id}">${s.name}</option>`).join(''), required: true },
            { name: 'teacherId', label: 'Teacher', type: 'select', options: teachers.map(t => `<option value="${t.id}">${t.name}</option>`).join(''), required: true },
            { name: 'startTime', label: 'Start Time', type: 'time', required: true },
            { name: 'endTime', label: 'End Time', type: 'time', required: true },
        ];

        openFormModal(title, formFields, async (formData) => {
            const payload = { ...formData, classId, dayOfWeek: day, period: parseInt(period) };
            if (isEditing) {
                await apiService.update('timetable', entryData.id, payload);
                showToast('Entry updated successfully!', 'success');
            } else {
                await apiService.create('timetable', payload);
                showToast('Entry added successfully!', 'success');
            }
            await store.refresh('timetable');
            renderTimetablePage();
        }, entryData);
    };

    const getTimetableHTMLForClass = (classData, canEdit) => {
        const classTimetable = timetable.filter(t => t.classId === classData.id);
        const grid = {};
        classTimetable.forEach(item => {
            if (!grid[item.dayOfWeek]) grid[item.dayOfWeek] = {};
            grid[item.dayOfWeek][item.period] = item;
        });

        return `
            <div class="overflow-x-auto custom-scrollbar">
                <table class="min-w-full border-collapse">
                    <thead>
                        <tr class="bg-slate-700">
                            <th class="p-3 border border-slate-600">Time / Day</th>
                            ${days.map(day => `<th class="p-3 border border-slate-600">${day}</th>`).join('')}
                        </tr>
                    </thead>
                    <tbody>
                        ${allPeriods.map((period, index) => `
                            <tr class="text-center">
                                <td class="p-3 border border-slate-600 font-medium bg-slate-700/50">
                                    <p class="font-bold">${timeSlots[index]}</p>
                                    <p class="text-xs text-slate-500">Period ${period}</p>
                                </td>
                                ${days.map(day => {
                                    const entry = grid[day]?.[period];
                                    if (entry) {
                                        const subject = subjectsMap.get(entry.subjectId)?.name || 'N/A';
                                        const teacher = teachersMap.get(entry.teacherId)?.name || 'N/A';
                                        return `<td class="p-3 border border-slate-600 align-middle relative group transition-colors hover:bg-slate-700/40">
                                                    <p class="font-bold">${subject}</p>
                                                    <p class="text-sm text-slate-400">${teacher}</p>
                                                    ${canEdit ? `
                                                    <div class="absolute top-1 right-1 opacity-0 group-hover:opacity-100 transition-opacity flex gap-1">
                                                        <button class="edit-entry-btn text-blue-400 hover:text-blue-300 p-1" data-entry-id="${entry.id}" title="Edit"><i class="fas fa-edit"></i></button>
                                                        <button class="delete-entry-btn text-red-400 hover:text-red-300 p-1" data-entry-id="${entry.id}" title="Delete"><i class="fas fa-trash"></i></button>
                                                    </div>` : ''}
                                                </td>`;
                                    }
                                    return `<td class="p-3 border border-slate-600 align-middle relative group transition-colors hover:bg-slate-700/40">
                                                ${canEdit ? `
                                                <button class="add-entry-btn opacity-0 group-hover:opacity-100 transition-opacity text-2xl text-slate-400 hover:text-green-400"
                                                        data-class-id="${classData.id}" data-day="${day}" data-period="${period}" title="Add Entry">
                                                    <i class="fas fa-plus-circle"></i>
                                                </button>` : '—'}
                                            </td>`;
                                }).join('')}
                            </tr>
                        `).join('')}
                    </tbody>
                </table>
            </div>
        `;
    };

    ui.contentArea.innerHTML = `
        <div class="space-y-8 animate-fade-in">
            ${relevantClasses.map(c => {
                const isClassTeacher = currentUser.role === 'Teacher' && currentUser.id === c.teacherId;
                const canEdit = currentUser.role === 'Admin' || isClassTeacher;
                return `
                <div class="bg-slate-800/50 p-6 rounded-xl shadow-md border border-slate-700">
                    <h3 class="text-xl font-semibold mb-4">${c.name} - Weekly Timetable</h3>
                    ${getTimetableHTMLForClass(c, canEdit)}
                </div>`;
            }).join('')}
            ${relevantClasses.length === 0 ? `
                <div class="bg-slate-800 p-6 rounded-xl shadow-md text-center">
                    <p>No timetable information available for you.</p>
                </div>
            ` : ''}
        </div>
    `;

    document.querySelectorAll('.edit-entry-btn').forEach(btn => {
        btn.onclick = () => {
            const entryId = btn.dataset.entryId;
            const entry = timetable.find(e => e.id === entryId);
            if (entry) {
                openTimetableForm(entry, entry.classId, entry.dayOfWeek, entry.period);
            }
        };
    });

    document.querySelectorAll('.add-entry-btn').forEach(btn => {
        btn.onclick = () => {
            const { classId, day, period } = btn.dataset;
            openTimetableForm({}, classId, day, period);
        };
    });

    document.querySelectorAll('.delete-entry-btn').forEach(btn => {
        btn.onclick = () => {
            const entryId = btn.dataset.entryId;
            showConfirmationModal('Are you sure you want to delete this timetable entry?', async () => {
                await apiService.remove('timetable', entryId);
                await store.refresh('timetable');
                showToast('Entry deleted successfully.', 'success');
                renderTimetablePage();
            });
        };
    });
}
async function renderFeesPage() {
    const studentMap = store.getMap('students');
    const formatCurrency = (value) => `BDT ${Number(value || 0).toLocaleString()}`;
    const students = store.get('students');
    
    let config = {
        title: 'Fee Record',
        collectionName: 'fees',
        columns: [
            { label: 'Student', render: (item) => studentMap.get(item.studentId)?.name || 'N/A', key: 'studentId', sortable: true },
            { label: 'Fee Type', key: 'feeType', sortable: true },
            { label: 'Amount', key: 'amount', render: (item) => formatCurrency(item.amount), sortable: true },
            { label: 'Status', key: 'status', sortable: true, render: (item) => `<span class="status-badge ${item.status.toLowerCase() === 'paid' ? 'status-paid' : 'status-unpaid'}">${item.status}</span>` },
            { label: 'Due Date', key: 'dueDate', sortable: true },
        ],
        formFields: [
            { name: 'studentId', label: 'Student', type: 'select', options: students.map(s => `<option value="${s.id}">${s.name} (Roll: ${s.rollNo})</option>`).join(''), required: true },
            { name: 'feeType', label: 'Fee Type', type: 'text', placeholder: 'e.g., Tuition Fee, Exam Fee', required: true },
            { name: 'amount', label: 'Amount (BDT)', type: 'number', required: true },
            { name: 'dueDate', label: 'Due Date', type: 'date', required: true },
            { name: 'status', label: 'Status', type: 'select', options: '<option value="Unpaid">Unpaid</option><option value="Paid">Paid</option>', required: true },
        ],
        searchKeys: ['feeType']
    };

    if (currentUser.role === 'Student') {
        config.dataFilter = (fee) => fee.studentId === currentUser.id;
        config.hideAddButton = true;
        config.hideActions = true;
    } else if (currentUser.role === 'Teacher') {
        config.hideAddButton = true;
        config.hideActions = true;
    } else if (currentUser.role === 'Accountant' || currentUser.role === 'Admin') {
        config.hideAddButton = true; 
        config.columns.push({ 
            label: 'Action', 
            render: (item) => item.status === 'Unpaid' ? `<button class="text-sm bg-green-600 hover:bg-green-700 text-white font-bold py-1 px-3 rounded-lg mark-paid-btn" data-id="${item.id}">Mark as Paid</button>` : `Paid on ${item.paidDate || ''}`
        });
        
        config.customHeader = `
            <button id="generate-fees-btn" class="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded-lg">Generate Monthly Fees</button>
            <button id="add-fee-btn" class="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg">Add Single Fee Record</button>
        `;
        config.customListeners = () => {
            document.getElementById('add-fee-btn').onclick = () => openFormModal(`Add New ${config.title}`, config.formFields, async (formData) => {
                await apiService.create(config.collectionName, formData);
                await store.refresh(config.collectionName);
                showToast(`${config.title} added successfully!`, 'success');
                renderFeesPage();
            });
            document.getElementById('generate-fees-btn').onclick = () => showToast('This would trigger a backend process to generate monthly fees for all students.', 'info');
            document.querySelectorAll('.mark-paid-btn').forEach(btn => {
                btn.onclick = async () => {
                    const feeId = btn.dataset.id;
                    await apiService.update('fees', feeId, { status: 'Paid', paidDate: new Date().toISOString().slice(0, 10) });
                    await store.refresh('fees');
                    showToast('Fee marked as paid!', 'success');
                    renderFeesPage();
                }
            });
        };
    }
    
    renderGenericListPage(config);
}
async function renderAttendancePage() {
    const classes = store.get('classes');
    const timetable = store.get('timetable');
    let viewableClasses = classes;
    
    if (currentUser.role === 'Teacher') {
        const myClassIdsAsTeacher = classes.filter(c => c.teacherId === currentUser.id).map(c => c.id);
        const myClassIdsAsSubjectTeacher = timetable.filter(t => t.teacherId === currentUser.id).map(t => t.classId);
        const allMyClassIds = [...new Set([...myClassIdsAsTeacher, ...myClassIdsAsSubjectTeacher])];
        viewableClasses = classes.filter(c => allMyClassIds.includes(c.id));
    }

    ui.contentArea.innerHTML = `
        <div class="bg-slate-800/50 p-6 rounded-xl shadow-md border border-slate-700 animate-fade-in">
            <h3 class="text-xl font-semibold mb-4">Manage Attendance</h3>
            ${currentUser.role !== 'Student' ? `
            <div class="flex flex-wrap items-center gap-4 mb-6 p-4 bg-slate-800 rounded-lg">
                <input type="date" id="attendance-date" value="${new Date().toISOString().slice(0, 10)}" class="border p-2 rounded-lg bg-slate-700 border-slate-600 focus:ring-2 focus:ring-blue-500">
                <select id="attendance-class" class="border p-2 rounded-lg bg-slate-700 border-slate-600 focus:ring-2 focus:ring-blue-500 flex-grow">${viewableClasses.map(c => `<option value="${c.id}">${c.name}</option>`).join('')}</select>
                <button id="load-attendance-btn" class="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg transition-transform hover:scale-105">Load Attendance</button>
            </div>` : ''}
            <div id="attendance-sheet">
                <p class="text-center text-slate-400">Please select a date and class to load the attendance sheet.</p>
            </div>
        </div>
    `;
    
    const loadBtn = document.getElementById('load-attendance-btn');
    if (loadBtn) {
        loadBtn.onclick = async () => {
            const date = document.getElementById('attendance-date').value;
            const classId = document.getElementById('attendance-class').value;
            const sheetContainer = document.getElementById('attendance-sheet');
            
            if (!date || !classId) {
                sheetContainer.innerHTML = `<p class="text-red-400">Please select both date and class.</p>`;
                return;
            }
            
            sheetContainer.innerHTML = getSkeletonLoaderHTML('table');
            
            const students = store.get('students').filter(s => s.classId === classId);
            const attendanceMap = await apiService.getAttendance(date, classId);
            
            sheetContainer.innerHTML = `
                <div class="overflow-x-auto mt-4">
                    <table class="min-w-full"><thead class="bg-slate-700"><tr>
                        <th class="py-3 px-4 text-left font-semibold">Student Name</th>
                        <th class="py-3 px-4 text-left font-semibold">Roll No</th>
                        <th class="py-3 px-4 text-left font-semibold">Status</th>
                    </tr></thead><tbody class="divide-y divide-slate-700">
                    ${students.map(s => `
                        <tr class="hover:bg-slate-700/30">
                            <td class="px-4 py-3">${s.name}</td>
                            <td class="px-4 py-3">${s.rollNo}</td>
                            <td class="px-4 py-3">
                                <select class="attendance-status border p-1 rounded-lg w-full bg-slate-700 border-slate-600" data-studentid="${s.id}">
                                    <option value="Present" ${attendanceMap[s.id] === 'Present' ? 'selected' : ''}>Present</option>
                                    <option value="Absent" ${attendanceMap[s.id] === 'Absent' ? 'selected' : ''}>Absent</option>
                                    <option value="Late" ${attendanceMap[s.id] === 'Late' ? 'selected' : ''}>Late</option>
                                </select>
                            </td>
                        </tr>
                    `).join('')}
                    </tbody></table>
                    <button id="save-attendance-btn" class="mt-6 bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-6 rounded-lg transition-transform hover:scale-105">Save Attendance</button>
                </div>
            `;
            
            document.getElementById('save-attendance-btn').onclick = async () => {
                const records = {};
                document.querySelectorAll('.attendance-status').forEach(select => {
                    records[select.dataset.studentid] = select.value;
                });
                await apiService.saveAttendance(date, classId, records);
                showToast('Attendance saved successfully!', 'success');
            };
        };
    }
}
async function renderExamsPage() {
    // --- Data Fetching and Mapping ---
    await Promise.all([
        store.refresh('exams'), store.refresh('results'), store.refresh('classes'),
        store.refresh('subjects'), store.refresh('teachers'), store.refresh('timetable'), store.refresh('students')
    ]);

    const allExams = store.get('exams');
    const allResults = store.get('results');
    const classesMap = store.getMap('classes');
    const subjectsMap = store.getMap('subjects');
    const teachersMap = store.getMap('teachers');
    const timetable = store.get('timetable');
    const students = store.get('students');
    const PASS_PERCENTAGE = 40; // Define a global pass mark

    // --- 1. STUDENT VIEW: "My Results" Report Card ---
    if (currentUser.role === 'Student') {
        const myResults = allResults.filter(r => r.studentId === currentUser.id);
        const resultsByExamName = myResults.reduce((acc, result) => {
            const exam = allExams.find(e => e.id === result.examId);
            if (exam) {
                if (!acc[exam.name]) acc[exam.name] = [];
                acc[exam.name].push({ ...result, exam: exam });
            }
            return acc;
        }, {});

        ui.contentArea.innerHTML = `
            <div class="animate-fade-in space-y-8">
                ${Object.keys(resultsByExamName).length > 0 ?
                  Object.entries(resultsByExamName).map(([examName, results]) => {
                    const totalMarksObtained = results.reduce((sum, r) => sum + r.marks, 0);
                    const totalMaxMarks = results.reduce((sum, r) => sum + r.exam.maxMarks, 0);
                    const overallPercentage = totalMaxMarks > 0 ? ((totalMarksObtained / totalMaxMarks) * 100).toFixed(1) : 0;

                    return `
                    <div class="bg-slate-800/50 p-6 rounded-xl border border-slate-700 shadow-md">
                        <h3 class="text-xl font-semibold mb-4 text-white">${examName}</h3>
                        <div class="overflow-x-auto">
                            <table class="min-w-full text-sm">
                                <thead class="bg-slate-700">
                                    <tr>
                                        <th class="p-3 text-left">Subject</th>
                                        <th class="p-3 text-left">Marks Obtained</th>
                                        <th class="p-3 text-left">Max Marks</th>
                                        <th class="p-3 text-left">Percentage</th>
                                        <th class="p-3 text-left">Status</th>
                                    </tr>
                                </thead>
                                <tbody class="divide-y divide-slate-700">
                                    ${results.map(r => {
                                        const subjectName = subjectsMap.get(r.exam.subjectId)?.name || 'N/A';
                                        const percentage = ((r.marks / r.exam.maxMarks) * 100);
                                        const status = percentage >= PASS_PERCENTAGE ? 'Pass' : 'Fail';
                                        return `
                                            <tr class="hover:bg-slate-700/30">
                                                <td class="p-3 font-semibold">${subjectName}</td>
                                                <td class="p-3 text-blue-300 font-bold">${r.marks}</td>
                                                <td class="p-3">${r.exam.maxMarks}</td>
                                                <td class="p-3 font-semibold">${percentage.toFixed(1)}%</td>
                                                <td class="p-3"><span class="status-badge ${status === 'Pass' ? 'status-paid' : 'status-unpaid'}">${status}</span></td>
                                            </tr>
                                        `;
                                    }).join('')}
                                </tbody>
                                <tfoot class="bg-slate-700/50 font-bold">
                                     <tr>
                                        <td class="p-3 text-right">Overall</td>
                                        <td class="p-3">${totalMarksObtained}</td>
                                        <td class="p-3">${totalMaxMarks}</td>
                                        <td class="p-3">${overallPercentage}%</td>
                                        <td class="p-3"></td>
                                     </tr>
                                </tfoot>
                            </table>
                        </div>
                    </div>
                  `}).join('')
                  : `<div class="text-center p-10 bg-slate-800/50 rounded-xl"><p class="text-slate-400">Your results have not been published yet.</p></div>`
                }
            </div>
        `;
        return; // End of student view
    }

    // --- 2. TEACHER / ADMIN VIEW: Tabbed Interface ---
    const renderTabsHTML = () => `
        <div class="flex border-b border-slate-700 mb-6">
            <button class="tab-link active py-3 px-5 font-semibold border-b-2 border-blue-500 text-white" data-tab="exam-schedule">Exam Schedule</button>
            <button class="tab-link py-3 px-5 font-semibold border-b-2 border-transparent text-slate-400 hover:text-white" data-tab="results-entry">Results Entry</button>
        </div>
        <div id="exam-schedule" class="tab-content animate-fade-in"></div>
        <div id="results-entry" class="tab-content hidden animate-fade-in"></div>
    `;
    ui.contentArea.innerHTML = `<div class="bg-slate-800/50 p-6 rounded-xl border border-slate-700 shadow-md">${renderTabsHTML()}</div>`;

    // --- Helper for "Exam Schedule" Tab ---
    const renderExamScheduleTab = () => {
        const container = document.getElementById('exam-schedule');
        const relevantExams = (currentUser.role === 'Admin') ? allExams : allExams.filter(e => e.teacherId === currentUser.id);
        const examGroups = relevantExams.reduce((acc, exam) => { (acc[exam.name] = acc[exam.name] || []).push(exam); return acc; }, {});

        container.innerHTML = `
            <div class="flex justify-between items-center mb-4">
                <h3 class="text-xl font-semibold">Scheduled Exams</h3>
                <button id="add-exam-btn" class="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg">Create Exam Schedule</button>
            </div>
            <div class="space-y-6">
            ${Object.keys(examGroups).length > 0 ? Object.entries(examGroups).map(([name, exams]) => `
                <div>
                    <h4 class="text-lg font-bold mb-3 p-3 bg-slate-700/50 rounded-lg">${name}</h4>
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                    ${exams.map(exam => `
                        <div class="p-4 bg-slate-800 border border-slate-700 rounded-lg flex justify-between items-start">
                            <div>
                                <p class="font-bold">${classesMap.get(exam.classId)?.name} - ${subjectsMap.get(exam.subjectId)?.name}</p>
                                <p class="text-sm text-slate-400">Date: ${exam.date} | Max Marks: ${exam.maxMarks}</p>
                            </div>
                            <div class="flex gap-2">
                                <button class="edit-exam-btn text-blue-400 hover:text-blue-300 p-1" data-id="${exam.id}"><i class="fas fa-edit"></i></button>
                                <button class="delete-exam-btn text-red-500 hover:text-red-400 p-1" data-id="${exam.id}"><i class="fas fa-trash"></i></button>
                            </div>
                        </div>
                    `).join('')}
                    </div>
                </div>
            `).join('') : '<p class="text-center p-4 text-slate-500">No exams scheduled.</p>'}
            </div>
        `;
        
        const openExamForm = (examData = {}) => {
            const isEditing = !!examData.id;
            const myClasses = [...new Set(timetable.filter(t => t.teacherId === currentUser.id).map(t => t.classId))].map(cid => classesMap.get(cid)).filter(Boolean);
            const formFields = [ /* same as before */ ]; // formFields definition is compact and can be kept inside.
             openFormModal(isEditing ? 'Edit Exam' : 'Create Exam', [
                { name: 'name', label: 'Exam Name', type: 'text', required: true, value: examData.name || '' },
                { name: 'classId', label: 'Class', type: 'select', options: myClasses.map(c=>`<option value="${c.id}">${c.name}</option>`).join(''), required: true, value: examData.classId || '' },
                { name: 'subjectId', label: 'Subject', type: 'select', options: '', required: true, value: examData.subjectId || '' },
                { name: 'date', label: 'Date', type: 'date', required: true, value: examData.date || '' },
                { name: 'maxMarks', label: 'Max Marks', type: 'number', required: true, value: examData.maxMarks || '' },
            ], async (formData) => {
                if(isEditing) {
                    await apiService.update('exams', examData.id, formData);
                    showToast('Exam updated successfully', 'success');
                } else {
                    await apiService.create('exams', { ...formData, teacherId: currentUser.id });
                    showToast('Exam created successfully', 'success');
                }
                renderExamsPage();
            }, examData);
            
            const classSelect = document.getElementById('classId');
            const subjectSelect = document.getElementById('subjectId');
            const updateSubjects = () => {
                const selectedClassId = classSelect.value;
                const teacherSubjects = [...new Set(timetable.filter(t => t.teacherId === currentUser.id && t.classId === selectedClassId).map(t => t.subjectId))].map(sid => subjectsMap.get(sid)).filter(Boolean);
                subjectSelect.innerHTML = teacherSubjects.map(s => `<option value="${s.id}">${s.name}</option>`).join('');
                if(isEditing && examData.subjectId) subjectSelect.value = examData.subjectId;
            };
            classSelect.onchange = updateSubjects;
            updateSubjects();
        };

        document.getElementById('add-exam-btn').onclick = () => openExamForm();
        document.querySelectorAll('.edit-exam-btn').forEach(btn => btn.onclick = () => openExamForm(allExams.find(e => e.id === btn.dataset.id)));
        document.querySelectorAll('.delete-exam-btn').forEach(btn => btn.onclick = () => showConfirmationModal('Delete this exam?', () => apiService.remove('exams', btn.dataset.id).then(renderExamsPage)));
    }

    // --- Helper for "Results Entry" Tab ---
    const renderResultsEntryTab = () => {
        const container = document.getElementById('results-entry');
        const myClassIds = [...new Set(timetable.filter(t => t.teacherId === currentUser.id).map(t => t.classId))];
        if (myClassIds.length === 0) {
            container.innerHTML = `<p class="text-center text-slate-400 p-8">You are not assigned to teach any subjects in any class. Please contact an administrator.</p>`;
            return;
        }
        const myClasses = myClassIds.map(id => classesMap.get(id)).filter(Boolean);
        container.innerHTML = `<!-- UI Structure remains similar but logic will be enhanced -->`; // Skeleton of the UI
        container.innerHTML = `
            <div class="bg-slate-800 p-4 rounded-lg border border-slate-700 space-y-4">
                <div class="grid grid-cols-1 md:grid-cols-4 gap-4">
                    <select id="result-class-select" class="p-2 rounded-lg bg-slate-700 border-slate-600 w-full"><option value="">-- Select Class --</option>${myClasses.map(c => `<option value="${c.id}">${c.name}</option>`).join('')}</select>
                    <select id="result-subject-select" class="p-2 rounded-lg bg-slate-700 border-slate-600 w-full" disabled><option value="">-- Select Subject --</option></select>
                    <select id="result-exam-select" class="p-2 rounded-lg bg-slate-700 border-slate-600 w-full" disabled><option value="">-- Select Exam --</option></select>
                    <button id="load-results-sheet-btn" class="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg w-full" disabled>Load Sheet</button>
                </div>
            </div>
            <div id="results-sheet-container" class="mt-6"></div>
        `;

        const classSelect = document.getElementById('result-class-select');
        const subjectSelect = document.getElementById('result-subject-select');
        const examSelect = document.getElementById('result-exam-select');
        const loadBtn = document.getElementById('load-results-sheet-btn');

        classSelect.onchange = () => {
             const classId = classSelect.value;
             subjectSelect.innerHTML = '<option value="">-- Select Subject --</option>';
             if (classId) {
                const subjectsInClass = [...new Set(timetable.filter(t => t.classId === classId && t.teacherId === currentUser.id).map(t => t.subjectId))].map(id => subjectsMap.get(id)).filter(Boolean);
                subjectSelect.innerHTML += subjectsInClass.map(s => `<option value="${s.id}">${s.name}</option>`).join('');
                subjectSelect.disabled = false;
             }
             subjectSelect.onchange(); // Trigger chain reaction
        };

        subjectSelect.onchange = () => {
            const classId = classSelect.value, subjectId = subjectSelect.value;
            examSelect.innerHTML = '<option value="">-- Select Exam --</option>';
            if(classId && subjectId) {
                examSelect.innerHTML += allExams.filter(e => e.classId === classId && e.subjectId === subjectId).map(e => `<option value="${e.id}">${e.name} (${e.date})</option>`).join('');
                examSelect.disabled = false;
            }
            examSelect.onchange();
        };

        examSelect.onchange = () => { loadBtn.disabled = !examSelect.value; };

        loadBtn.onclick = async () => {
            const examId = examSelect.value;
            const exam = allExams.find(e => e.id === examId);
            if (!exam) return;

            const sheetContainer = document.getElementById('results-sheet-container');
            sheetContainer.innerHTML = getSkeletonLoaderHTML('table');

            let classStudents = students.filter(s => s.classId === exam.classId);
            const existingResults = await apiService.getResultsForExam(examId);
            const resultsMap = new Map(existingResults.map(r => [r.studentId, r.marks]));

            const renderResultsTable = () => {
                const tableBody = document.getElementById('results-table-body');
                if(!tableBody) return;
                tableBody.innerHTML = classStudents.map(s => `
                    <tr class="hover:bg-slate-700/30">
                        <td class="p-2">${s.name}</td><td class="p-2">${s.rollNo}</td>
                        <td class="p-2"><input type="number" class="w-32 p-1 border rounded bg-slate-800 border-slate-600 result-input focus:ring-2 focus:ring-blue-500" data-studentid="${s.id}" value="${resultsMap.get(s.id) || ''}" max="${exam.maxMarks}" min="0"></td>
                    </tr>`).join('');
            };

            const updateStats = () => {
                const marks = Array.from(document.querySelectorAll('.result-input')).map(input => parseFloat(input.value)).filter(val => !isNaN(val));
                const statsContainer = document.getElementById('results-summary-stats');
                if (!statsContainer) return;
                if (marks.length === 0) { statsContainer.innerHTML = '<p class="text-slate-500">Enter marks to see live stats.</p>'; return; }
                const sum = marks.reduce((a, b) => a + b, 0);
                const avg = sum / marks.length;
                const high = Math.max(...marks);
                const low = Math.min(...marks);
                statsContainer.innerHTML = `
                    <div class="stat-item"><span class="label">Class Average</span><span class="value">${avg.toFixed(2)}</span></div>
                    <div class="stat-item"><span class="label">Highest Score</span><span class="value text-green-400">${high}</span></div>
                    <div class="stat-item"><span class="label">Lowest Score</span><span class="value text-red-400">${low}</span></div>
                `;
            };
            
            sheetContainer.innerHTML = `
                <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    <div class="lg:col-span-2">
                         <div class="flex justify-between items-center mb-4">
                            <h3 class="text-lg font-semibold">Results for: ${exam.name} - ${subjectsMap.get(exam.subjectId).name}</h3>
                            <button id="save-all-results-btn" data-examid="${examId}" class="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-lg">Save Results</button>
                        </div>
                        <div class="overflow-y-auto max-h-[60vh] custom-scrollbar">
                            <table class="min-w-full"><thead class="bg-slate-700 sticky top-0"><tr>
                                <th class="p-2 text-left sortable-header" data-sort="name">Student Name <i class="fas fa-sort"></i></th>
                                <th class="p-2 text-left">Roll No</th>
                                <th class="p-2 text-left sortable-header" data-sort="marks">Marks <i class="fas fa-sort"></i></th>
                            </tr></thead><tbody id="results-table-body" class="divide-y divide-slate-700"></tbody></table>
                        </div>
                    </div>
                    <div class="bg-slate-800 p-4 rounded-lg">
                        <h4 class="text-lg font-semibold mb-4 border-b border-slate-700 pb-2">Live Statistics</h4>
                        <div id="results-summary-stats" class="space-y-3"></div>
                    </div>
                </div>
            `;
            
            renderResultsTable();
            updateStats();

            sheetContainer.addEventListener('input', e => {
                if (e.target.classList.contains('result-input')) {
                    const value = parseFloat(e.target.value);
                    const max = parseFloat(e.target.max);
                    e.target.classList.toggle('border-red-500', value > max);
                    resultsMap.set(e.target.dataset.studentid, value);
                    updateStats();
                }
            });
            
            document.getElementById('save-all-results-btn').onclick = async (e) => {
                const resultsData = [];
                let hasInvalidData = false;
                document.querySelectorAll('.result-input').forEach(input => {
                    if (input.classList.contains('border-red-500')) hasInvalidData = true;
                    if (input.value) resultsData.push({ studentId: input.dataset.studentid, marks: parseFloat(input.value) });
                });
                if(hasInvalidData) { showToast('Please fix invalid entries before saving.', 'error'); return; }
                await apiService.saveResults(e.target.dataset.examid, resultsData);
                showToast('Results saved successfully!', 'success');
            };

            document.querySelectorAll('.sortable-header').forEach(header => {
                header.onclick = () => {
                    const sortKey = header.dataset.sort;
                    const isAsc = header.dataset.order === 'asc';
                    header.dataset.order = isAsc ? 'desc' : 'asc';
                    
                    classStudents.sort((a, b) => {
                        let valA, valB;
                        if(sortKey === 'name') {
                            valA = a.name.toLowerCase(); valB = b.name.toLowerCase();
                        } else { // marks
                            valA = resultsMap.get(a.id) || -1; valB = resultsMap.get(b.id) || -1;
                        }
                        if(valA < valB) return isAsc ? -1 : 1;
                        if(valA > valB) return isAsc ? 1 : -1;
                        return 0;
                    });
                    renderResultsTable();
                }
            });
        };
    };

    // --- Tab Switching Logic & Initial Render ---
    document.querySelectorAll('.tab-link').forEach(button => {
        button.addEventListener('click', (e) => {
            const tabButton = e.currentTarget;
            document.querySelectorAll('.tab-link').forEach(btn => btn.classList.remove('active', 'text-white', 'border-blue-500'));
            document.querySelectorAll('.tab-content').forEach(content => content.classList.add('hidden'));
            tabButton.classList.add('active', 'text-white', 'border-blue-500');
            document.getElementById(tabButton.dataset.tab).classList.remove('hidden');
        });
    });
    
    renderExamScheduleTab();
    renderResultsEntryTab();
}

async function renderNoticesPage() {
    // First, make sure we have the latest data from the database
    await store.refresh('notices');
    const allNotices = store.get('notices');
    const teachersMap = store.getMap('teachers');
    const studentsMap = store.getMap('students');
    const classesMap = store.getMap('classes');
    teachersMap.set('admin', { name: 'School Admin' }); // A fallback name for admin-posted notices

    // This is the new, cleaner HTML structure for the page
    ui.contentArea.innerHTML = `
        <div class="bg-slate-800/50 p-6 rounded-xl border border-slate-700 shadow-md animate-fade-in">
            <div class="flex flex-wrap justify-between items-center mb-6 gap-4">
                <h3 class="text-2xl font-bold text-white">Notice Board & Messages</h3>
                ${(currentUser.role === 'Admin' || currentUser.role === 'Teacher') ?
                    `<button id="add-new-notice-btn" class="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg flex items-center gap-2 transition-transform transform hover:scale-105">
                        <i class="fas fa-plus"></i> New Notice/Message
                     </button>`
                    : ''}
            </div>
            <div id="notice-list-container" class="space-y-5">
                <!-- Notice cards will be inserted here by JavaScript -->
            </div>
        </div>`;

    const noticeListContainer = document.getElementById('notice-list-container');

    // This function filters and displays the notices
    const renderList = () => {
        const relevantNotices = allNotices.filter(n => {
            // This filtering logic is preserved to keep features the same
            if (n.type === 'private_message') {
                return n.authorId === currentUser.id || n.target === currentUser.id;
            }
            if (currentUser.role === 'Admin') return true;
            if (currentUser.role === 'Teacher') return ['All', 'Teacher', 'Staff'].includes(n.target);
            if (currentUser.role === 'Student') return ['All', 'Student', `class_${currentUser.classId}`].includes(n.target);
            if (['Accountant', 'Librarian'].includes(currentUser.role)) return ['All', 'Staff'].includes(n.target);
            return false;
        }).sort((a, b) => new Date(b.date) - new Date(a.date)); // Sort by most recent first

        if (relevantNotices.length === 0) {
            noticeListContainer.innerHTML = `
                <div class="text-center py-12">
                    <i class="fas fa-envelope-open fa-3x text-slate-500"></i>
                    <p class="text-slate-400 mt-4">No new notices or messages for you.</p>
                </div>`;
            return;
        }

        // Create and display a card for each notice
        noticeListContainer.innerHTML = relevantNotices.map(notice => {
            const author = teachersMap.get(notice.authorId) || studentsMap.get(notice.authorId) || { name: 'System' };
            return createNoticeCard(notice, author.name);
        }).join('');

        // After rendering, make the buttons (like reply/delete) work
        attachNoticeActionListeners();
    };

    // Make the "New Notice/Message" button open the form modal
    const addNewNoticeBtn = document.getElementById('add-new-notice-btn');
    if (addNewNoticeBtn) {
        addNewNoticeBtn.onclick = () => openAdvancedMessageModal();
    }

    renderList(); // Call the function to display the notices
}
const renderLibraryPage = async () => {
    // --- 1. DATA FETCHING AND PREPARATION ---
    await Promise.all([
        store.refresh('library', 'books'),
        store.refresh('library', 'transactions'),
        store.refresh('library', 'reservations'),
        store.refresh('library', 'acquisitions'),
        store.refresh('library', 'readingLists'),
        store.refresh('fees'),
        store.refresh('students'),
        store.refresh('teachers'),
        store.refresh('classes')
    ]);

    const libraryData = {
        books: store.get('library', 'books'),
        transactions: store.get('library', 'transactions'),
        reservations: store.get('library', 'reservations'),
        readingLists: store.get('library', 'readingLists'),
        acquisitions: store.get('library', 'acquisitions')
    };

    const studentMap = store.getMap('students');
    const teacherMap = store.getMap('teachers');
    const memberMap = new Map([...studentMap, ...teacherMap]);
    const bookMap = new Map(libraryData.books.map(b => [b.bookId, b]));
    const FINE_PER_DAY = 5;

    // --- 2. HELPER & CORE LOGIC FUNCTIONS ---

    const formatDate = (isoDate) => isoDate ? new Date(isoDate).toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' }) : 'N/A';
    
    const calculateOverdueDays = (dueDate) => {
        const due = new Date(dueDate);
        const today = new Date(); // Use the real current date
        today.setHours(0, 0, 0, 0);
        due.setHours(0, 0, 0, 0);
        if (today <= due) return 0;
        return Math.ceil((today - due) / (1000 * 60 * 60 * 24));
    };

    const completeReturn = async (transaction) => {
        await apiService.update('library', transaction.transactionId, { status: 'Returned', returnDate: new Date().toISOString().slice(0, 10) }, 'transactions', 'transactionId');
        const book = bookMap.get(transaction.bookId);
        if (book) {
            await apiService.update('library', book.bookId, { availableCopies: book.availableCopies + 1 }, 'books', 'bookId');
        }
    };

    const handleReturn = async (transactionId) => {
        const transaction = libraryData.transactions.find(t => t.transactionId === transactionId);
        if (!transaction) return;

        const overdueDays = calculateOverdueDays(transaction.dueDate);
        if (overdueDays > 0) {
            const fineAmount = overdueDays * FINE_PER_DAY;
            showConfirmationModal(`This book is ${overdueDays} days overdue. A fine of BDT ${fineAmount} will be added. Proceed?`, async () => {
                await apiService.create('fees', {
                    studentId: transaction.memberId, // Matches original data structure
                    feeType: 'Library Fine',
                    amount: fineAmount,
                    status: 'Unpaid',
                    dueDate: new Date(new Date().setDate(new Date().getDate() + 14)).toISOString().slice(0, 10)
                });
                await completeReturn(transaction);
                showToast(`Fine of BDT ${fineAmount} added.`, 'info');
                renderLibraryPage();
            });
        } else {
            await completeReturn(transaction);
            showToast('Book returned successfully!', 'success');
            renderLibraryPage();
        }
    };
    
    const cancelRequest = async (reservationId) => {
        showConfirmationModal('Are you sure you want to cancel this book request?', async () => {
            await apiService.remove('library', reservationId, 'reservations', 'reservationId');
            showToast('Your book request has been cancelled.', 'success');
            renderLibraryPage();
        });
    };

    const exportToCsv = (filename, headers, rows) => {
       const sanitizeCell = (cell) => {
            let strCell = String(cell === null || cell === undefined ? '' : cell);
            if (strCell.search(/("|,|\n)/g) >= 0) {
                strCell = `"${strCell.replace(/"/g, '""')}"`;
            }
            return strCell;
        };
        const sanitizedRows = rows.map(row => row.map(sanitizeCell));
        const csvContent = "data:text/csv;charset=utf-8," + headers.join(",") + "\n" + sanitizedRows.map(e => e.join(",")).join("\n");
        const encodedUri = encodeURI(csvContent);
        const link = document.createElement("a");
        link.setAttribute("href", encodedUri);
        link.setAttribute("download", filename);
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        showToast(`Report ${filename} downloaded.`, 'success');
    };

    // --- 3. UI RENDERING ---

    const renderTabs = () => {
        let tabs = [];
        const isAdmin = currentUser.role === 'Admin' || currentUser.role === 'Librarian';

        if (isAdmin) {
            tabs = [
                { id: 'lib-dashboard', label: 'Dashboard', icon: 'fa-chart-line' },
                { id: 'catalog', label: 'Book Catalog', icon: 'fa-book' },
                { id: 'transactions', label: 'Transactions', icon: 'fa-exchange-alt' },
                { id: 'reservations', label: 'Reservations', icon: 'fa-clock' },
                { id: 'members', label: 'Members', icon: 'fa-users' },
                { id: 'reports', label: 'Reports', icon: 'fa-file-export' },
            ];
        } else { // Student or Teacher
            tabs = [
                { id: 'catalog', label: 'Search Books', icon: 'fa-search' },
                { id: 'my-books', label: 'My Books & History', icon: 'fa-book-reader' },
                { id: 'reading-lists', label: 'Reading Lists', icon: 'fa-list-ol' },
            ];
        }

        return `
            <div class="flex flex-wrap border-b border-slate-700 mb-6 -mx-4 px-4 custom-scrollbar overflow-x-auto">
                ${tabs.map((tab, index) => `
                    <button class="tab-link flex-shrink-0 py-3 px-4 flex items-center gap-2 font-semibold border-b-2 transition-colors duration-300 ${index === 0 ? 'active text-blue-400 border-blue-400' : 'text-slate-400 border-transparent hover:text-white'}" data-tab="${tab.id}">
                        <i class="fas ${tab.icon}"></i> ${tab.label}
                    </button>
                `).join('')}
            </div>
            ${tabs.map((tab, index) => `<div id="${tab.id}" class="tab-content ${index > 0 ? 'hidden' : ''} animate-fade-in"></div>`).join('')}
        `;
    };

    ui.contentArea.innerHTML = `<div class="bg-slate-800/50 p-4 sm:p-6 rounded-xl border border-slate-700 animate-fade-in">${renderTabs()}</div>`;

    // --- 4. TAB-SPECIFIC RENDERERS ---

const renderLibrarianDashboard = () => {
    // --- 1. (NEW) CALCULATE DATA FOR THE CHART ---
    // We count the occurrences of each genre from the transaction history.
    const recentAcquisitions = libraryData.acquisitions.sort((a, b) => new Date(b.acquiredDate) - new Date(a.acquiredDate)).slice(0, 5);

    const genreCounts = libraryData.transactions.reduce((acc, transaction) => {
        const book = bookMap.get(transaction.bookId);
        if (book && book.genre) {
            acc[book.genre] = (acc[book.genre] || 0) + 1;
        }
        return acc;
    }, {});

    const container = document.getElementById('lib-dashboard');
    const totalBooks = libraryData.books.reduce((sum, book) => sum + book.totalCopies, 0);
    const booksOnLoan = libraryData.transactions.filter(t => t.status === 'Issued').length;
    const overdueBooks = libraryData.transactions.filter(t => t.status === 'Issued' && calculateOverdueDays(t.dueDate) > 0).length;
    const totalMembers = memberMap.size;
    
    const cardData = [
        { title: 'Total Books', value: totalBooks, icon: 'fa-book-journal-whills', color: 'blue' },
        { title: 'Books on Loan', value: booksOnLoan, icon: 'fa-people-arrows', color: 'green' },
        { title: 'Overdue Books', value: overdueBooks, icon: 'fa-exclamation-triangle', color: 'red' },
        { title: 'Total Members', value: totalMembers, icon: 'fa-users', color: 'purple' },
    ];
    
    // --- 2. (UPDATED) ADD HTML FOR THE CHART ---
    container.innerHTML = `
        <h3 class="text-2xl font-bold mb-6 text-white">Library Dashboard</h3>
        <div class="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            ${cardData.map(createDashboardCard).join('')}
        </div>
        <div class="mt-8 bg-slate-800/50 p-6 rounded-xl border border-slate-700">
                <h4 class="text-xl font-semibold mb-4 text-white">Recent Acquisitions</h4>
                <div class="space-y-3">
                    ${recentAcquisitions.length > 0 ? recentAcquisitions.map(acq => `
                        <div class="p-3 bg-slate-800 rounded-lg flex justify-between items-center">
                            <div><p class="font-semibold text-white">${acq.title}</p><p class="text-xs text-slate-400">by ${acq.author}</p></div>
                            <p class="text-sm text-slate-500">${formatDate(acq.acquiredDate)}</p>
                        </div>
                    `).join('') : '<p class="text-slate-500 italic">No recent acquisition records.</p>'}
                </div>
            </div>

        <!-- START: New Chart Section -->
        <div class="mt-8 bg-slate-800/50 p-4 sm:p-6 rounded-xl border border-slate-700">
            <h4 class="text-xl font-semibold mb-4 text-white">Popular Genres (by borrows)</h4>
            <div class="max-w-sm mx-auto">
                 ${Object.keys(genreCounts).length > 0 ? `<canvas id="genreChart"></canvas>`: `<p class="text-center text-slate-500 py-8">No transaction data available to generate genre chart.</p>`}
            </div>
        </div>
    `;

    // --- 3. (NEW) INITIALIZE THE CHART WITH JAVASCRIPT ---
    // This code runs only if there is data to show.
    if (Object.keys(genreCounts).length > 0) {
        const chartCanvas = document.getElementById('genreChart').getContext('2d');
        new Chart(chartCanvas, {
            type: 'doughnut',
            data: {
                labels: Object.keys(genreCounts),
                datasets: [{
                    label: 'Borrows',
                    data: Object.values(genreCounts),
                    backgroundColor: [ // Colors similar to the image
                        '#4299E1', '#48BB78', '#F56565', '#ED8936', '#9F7AEA',
                        '#ED64A6', '#667EEA', '#38B2AC', '#EF4444', '#FBBF24', '#A78BFA'
                    ],
                    borderColor: '#1E293B', // Background color for spacing
                    borderWidth: 3,
                    hoverOffset: 8
                }]
            },
            options: {
                responsive: true,
                plugins: {
                    legend: {
                        position: 'right',
                        labels: {
                            color: '#CBD5E0', // Light gray text for legend
                            font: {
                                size: 14
                            },
                            boxWidth: 20,
                            padding: 7
                        }
                    }
                }
            }
        });
    }
};

    const renderCatalog = (containerId) => {
        const container = document.getElementById(containerId);
        const isAdmin = currentUser.role === 'Admin' || currentUser.role === 'Librarian';
        document.querySelectorAll('.request-btn').forEach(btn => btn.onclick = async (e) => {
            // Improvement: Immediate UI feedback
            e.target.disabled = true;
            e.target.innerHTML = `<i class="fas fa-clock mr-2"></i>Requested`;

            await apiService.create('library', { bookId: e.target.dataset.bookid, /* ... */ }, 'reservations');
            showToast('Book requested!', 'success');
            // No full refresh needed, UI is already updated
        });

        container.innerHTML = `
            <div class="flex flex-wrap justify-between items-center gap-4 mb-4">
                <input type="text" id="book-search" placeholder="Search by title, author, genre, or ISBN..." class="w-full md:w-1/2 p-2 rounded-lg bg-slate-800 border border-slate-700 focus:ring-2 focus:ring-blue-500 text-white">
                <div class="flex items-center gap-2">
                    ${isAdmin ? `<button id="add-book-btn" class="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg flex items-center gap-2"><i class="fas fa-plus"></i> Add Book</button>` : ''}
                    ${currentUser.role === 'Teacher' ? `<button id="request-acquisition-btn" class="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-lg flex items-center gap-2"><i class="fas fa-bookmark"></i> Request Acquisition</button>` : ''}
                </div>
            </div>
            <div id="catalog-list" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4"></div>`;

        if (document.getElementById('add-book-btn')) {
            document.getElementById('add-book-btn').onclick = () => openBookForm();
        }
        if (document.getElementById('request-acquisition-btn')) {
            document.getElementById('request-acquisition-btn').onclick = () => {
                openFormModal('Request a New Book for Acquisition', [
                    { name: 'title', label: 'Book Title', type: 'text', required: true },
                    { name: 'author', label: 'Author', type: 'text', required: true },
                    { name: 'reason', label: 'Reason for Request (e.g., for course XYZ)', type: 'textarea', required: true },
                ], async (formData) => {
                    const acquisitionRequest = { ...formData, requesterId: currentUser.id, requesterName: currentUser.name, requestDate: new Date().toISOString().slice(0, 10), status: 'Pending' };
                    await apiService.create('library', acquisitionRequest, 'acquisitions');
                    showToast('Acquisition request submitted successfully!', 'success');
                });
            };
        }

        const openBookForm = (book = {}) => {
            const isEditing = !!book.bookId;
            openFormModal(isEditing ? 'Edit Book' : 'Add New Book', [
                { name: 'title', label: 'Book Title', type: 'text', required: true, value: book.title || '' }, { name: 'author', label: 'Author', type: 'text', required: true, value: book.author || '' }, { name: 'publicationYear', label: 'Publication Year', type: 'number', required: true, value: book.publicationYear || '' }, { name: 'isbn', label: 'ISBN', type: 'text', value: book.isbn || '' }, { name: 'genre', label: 'Genre', type: 'text', required: true, value: book.genre || '' }, { name: 'totalCopies', label: 'Total Copies', type: 'number', required: true, value: book.totalCopies || '' },
            ], async (formData) => {
                if (isEditing) {
                    await apiService.update('library', book.bookId, formData, 'books', 'bookId');
                    showToast('Book updated successfully', 'success');
                } else {
                    formData.availableCopies = parseInt(formData.totalCopies);
                    await apiService.create('library', formData, 'books');
                    showToast('Book added successfully', 'success');
                }
                renderLibraryPage();
            });
        };
        
        const handleAddToList = async (bookId) => {
            const myLists = libraryData.readingLists.filter(l => l.teacherId === currentUser.id);
            if (myLists.length === 0) { showToast('Please create a reading list first from the "Reading Lists" tab.', 'info'); return; }
            openFormModal('Add Book to Reading List', [{ name: 'listId', label: 'Select List', type: 'select', options: myLists.map(l => `<option value="${l.id}">${l.name}</option>`).join(''), required: true }, ], async (formData) => {
                const list = myLists.find(l => l.id === formData.listId);
                if (list && !list.bookIds.includes(bookId)) {
                    list.bookIds.push(bookId); await apiService.update('library', list.id, { bookIds: list.bookIds }, 'readingLists', 'id');
                    showToast('Book added to list!', 'success'); renderReadingLists();
                } else if (list) { showToast('This book is already in the selected list.', 'error'); }
            });
        };

        const renderBookList = (books) => {
            const listContainer = document.getElementById('catalog-list');
            if (books.length === 0) { listContainer.innerHTML = `<div class="col-span-full text-center py-10"><p class="text-slate-500">No books found.</p></div>`; return; }
            listContainer.innerHTML = books.map(book => {
                const isRequestedByCurrentUser = libraryData.reservations.some(r => r.bookId === book.bookId && r.memberId === currentUser.id && r.status === 'Pending');
                return `
                <div class="p-4 border border-slate-700 rounded-lg flex flex-col bg-slate-800/50 hover:border-blue-500 transition-all duration-300 shadow-md">
                    <h4 class="font-bold text-lg text-white">${book.title}</h4>
                    <p class="text-slate-400 text-sm">by ${book.author}</p>
                    <p class="text-xs text-slate-500 mt-1">Genre: ${book.genre} | Pub: ${book.publicationYear}</p>
                    <div class="flex-grow my-3"><span class="px-2 py-1 text-xs font-semibold rounded-full ${book.availableCopies > 0 ? 'bg-green-500/20 text-green-300' : 'bg-red-500/20 text-red-300'}">${book.availableCopies > 0 ? `${book.availableCopies} of ${book.totalCopies} Available` : 'Unavailable'}</span></div>
                    <div class="mt-auto pt-3 border-t border-slate-700/50 flex flex-col gap-2">
                        ${!isAdmin ? (book.availableCopies <= 0 ? (isRequestedByCurrentUser ? `<button class="w-full bg-yellow-600 text-white font-bold py-2 px-3 rounded-lg cursor-not-allowed text-sm" disabled><i class="fas fa-clock mr-2"></i>Requested</button>` : `<button class="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-3 rounded-lg request-btn text-sm" data-bookid="${book.bookId}"><i class="fas fa-hand-paper mr-2"></i>Request</button>`) : '') : ''}
                        ${isAdmin ? `<button class="w-full bg-slate-600 hover:bg-slate-700 text-white font-bold py-2 px-3 rounded-lg edit-book-btn text-sm" data-bookid="${book.bookId}"><i class="fas fa-edit mr-2"></i>Edit</button>` : ''}
                        ${currentUser.role === 'Teacher' ? `<button class="w-full bg-teal-600 hover:bg-teal-700 text-white font-bold py-2 px-3 rounded-lg add-to-list-btn text-sm mt-2" data-bookid="${book.bookId}"><i class="fas fa-plus mr-2"></i>Add to Reading List</button>` : ''}
                    </div>
                </div>`;
            }).join('');
            document.querySelectorAll('.request-btn').forEach(btn => btn.onclick = async () => {
                await apiService.create('library', { bookId: btn.dataset.bookid, memberId: currentUser.id, requestDate: new Date().toISOString().slice(0, 10), status: 'Pending' }, 'reservations');
                showToast('Book requested! You will be notified when available.', 'success');
                renderLibraryPage();
            });
            document.querySelectorAll('.edit-book-btn').forEach(btn => { btn.onclick = () => { const bookToEdit = libraryData.books.find(b => b.bookId === btn.dataset.bookid); if (bookToEdit) openBookForm(bookToEdit); } });
            document.querySelectorAll('.add-to-list-btn').forEach(btn => btn.onclick = () => handleAddToList(btn.dataset.bookid));
        };
        document.getElementById('book-search').oninput = (e) => {
            const term = e.target.value.toLowerCase().replace(/-/g, '');
            const filteredBooks = libraryData.books.filter(b => b.title.toLowerCase().includes(term) || b.author.toLowerCase().includes(term) || b.genre.toLowerCase().includes(term) || (b.isbn && b.isbn.replace(/-/g, '').includes(term)));
            renderBookList(filteredBooks);
        };
        renderBookList(libraryData.books);
    };
    
    const renderTransactions = () => {
        const container = document.getElementById('transactions');
        container.innerHTML = `
            <div class="flex justify-end mb-4"><button id="issue-book-btn" class="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-lg flex items-center gap-2"><i class="fas fa-plus-circle"></i> Issue Book</button></div>
            <div class="overflow-x-auto bg-slate-800 rounded-lg"><table class="min-w-full text-sm text-left"><thead class="bg-slate-700 text-slate-300 uppercase"><tr><th class="p-3">Book</th><th class="p-3">Member</th><th class="p-3">Issue Date</th><th class="p-3">Due Date</th><th class="p-3">Status</th><th class="p-3 text-right">Actions</th></tr></thead><tbody class="text-slate-300">${libraryData.transactions.sort((a,b) => new Date(b.issueDate) - new Date(a.issueDate)).map(t => { const overdueDays = calculateOverdueDays(t.dueDate); const member = memberMap.get(t.memberId); return `<tr class="border-b border-slate-700 hover:bg-slate-700/50"><td class="p-3 font-semibold">${bookMap.get(t.bookId)?.title || 'N/A'}</td><td class="p-3">${member?.name || 'N/A'} <span class="text-xs text-slate-500">(${member?.role || 'N/A'})</span></td><td class="p-3">${formatDate(t.issueDate)}</td><td class="p-3 ${t.status === 'Issued' && overdueDays > 0 ? 'text-red-400 font-bold' : ''}">${formatDate(t.dueDate)}</td><td class="p-3"><span class="status-badge status-${t.status.toLowerCase()}">${t.status}</span></td><td class="p-3 text-right">${t.status === 'Issued' ? `<button class="bg-blue-600 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded return-btn text-xs" data-id="${t.transactionId}">Mark Returned</button>` : `<span class="text-slate-500 text-xs">Returned on ${formatDate(t.returnDate)}</span>`}</td></tr>`; }).join('')}</tbody></table></div>`;
        
        document.getElementById('issue-book-btn').onclick = () => {
            const availableBooks = libraryData.books.filter(b => b.availableCopies > 0);
            const allMembers = Array.from(memberMap.values());

            const formFields = [ { name: 'bookId', label: 'Book', type: 'select', options: availableBooks.map(b => `<option value="${b.bookId}">${b.title} (${b.author})</option>`).join(''), required: true }, { name: 'memberId', label: 'Member', type: 'select', options: allMembers.map(m => `<option value="${m.id}" data-role="${m.role}">${m.name} (${m.role})</option>`).join(''), required: true }, { name: 'dueDate', label: 'Due Date', type: 'date', required: true } ];
            
            openFormModal('Issue a Book', formFields, async (formData) => {
                await apiService.create('library', { ...formData, issueDate: new Date().toISOString().slice(0, 10), status: 'Issued', returnDate: null }, 'transactions');
                const book = bookMap.get(formData.bookId); await apiService.update('library', book.bookId, { availableCopies: book.availableCopies - 1 }, 'books', 'bookId');
                showToast('Book issued successfully', 'success'); renderLibraryPage();
            });

            const memberSelect = document.getElementById('memberId'); 
            const dueDateInput = document.getElementById('dueDate');
            const updateDueDate = () => {
                if (!memberSelect || !dueDateInput) return;
                const selectedOption = memberSelect.options[memberSelect.selectedIndex];
                const memberRole = selectedOption.dataset.role;
                let defaultDueDate = new Date();
                const loanDays = (memberRole === 'Teacher') ? 28 : 14;
                defaultDueDate.setDate(defaultDueDate.getDate() + loanDays);
                dueDateInput.value = defaultDueDate.toISOString().slice(0, 10);
            };
            memberSelect.onchange = updateDueDate; 
            updateDueDate(); // Set initial value
        };
        document.querySelectorAll('.return-btn').forEach(btn => btn.onclick = () => handleReturn(btn.dataset.id));
    };

    const renderReservations = () => {
        const container = document.getElementById('reservations');
        const pendingReservations = libraryData.reservations.filter(r => r.status === 'Pending');
        container.innerHTML = `
            <h3 class="text-xl font-semibold mb-4 text-white">Pending Book Requests</h3><div class="space-y-3">${pendingReservations.length > 0 ? pendingReservations.map(r => { const book = bookMap.get(r.bookId); const member = memberMap.get(r.memberId); return `<div class="p-4 rounded-lg bg-slate-800/70 flex flex-wrap justify-between items-center gap-4"><div><span class="font-bold text-white">${book?.title || 'N/A'}</span> requested by <span class="font-semibold text-blue-300">${member?.name || 'N/A'}</span></div><div>${book?.availableCopies > 0 ? `<button class="bg-blue-600 hover:bg-blue-700 text-white font-bold py-1 px-3 rounded issue-from-request-btn" data-resid="${r.reservationId}" data-bookid="${r.bookId}" data-memberid="${r.memberId}">Approve & Issue</button>` : `<span class="text-yellow-400 font-semibold">Book Unavailable</span>`}</div></div>`; }).join('') : '<p class="text-slate-500 italic">There are no pending book requests.</p>'}</div>`;
        document.querySelectorAll('.issue-from-request-btn').forEach(btn => btn.onclick = async (e) => {
            const { resid, bookid, memberid } = e.currentTarget.dataset;
            const member = memberMap.get(memberid);
            const loanDays = (member.role === 'Teacher') ? 28 : 14;
            const dueDate = new Date(new Date().setDate(new Date().getDate() + loanDays)).toISOString().slice(0, 10);

            await apiService.create('library', { bookId: bookid, memberId: memberid, status: 'Issued', issueDate: new Date().toISOString().slice(0, 10), dueDate: dueDate }, 'transactions');
            await apiService.update('library', resid, { status: 'Fulfilled' }, 'reservations', 'reservationId');
            const book = bookMap.get(bookid); await apiService.update('library', bookid, { availableCopies: book.availableCopies - 1 }, 'books', 'bookId');
            showToast(`Book issued to ${member.name}!`, 'success'); renderLibraryPage();
        });
    };

    const renderMemberManagement = () => {
        const container = document.getElementById('members'); 
        const allMembers = Array.from(memberMap.values());
        container.innerHTML = `<input type="text" id="member-search" placeholder="Search by name or email..." class="w-full md:w-1/2 p-2 mb-4 rounded-lg bg-slate-800 border border-slate-700 focus:ring-2 focus:ring-blue-500 text-white"><div id="member-list" class="space-y-3"></div>`;
        const renderMemberList = (members) => {
            document.getElementById('member-list').innerHTML = members.map(member => {
                const transactions = libraryData.transactions.filter(t => t.memberId === member.id);
                const fines = store.get('fees').filter(f => f.studentId === member.id && f.feeType === 'Library Fine' && f.status === 'Unpaid').reduce((sum, f) => sum + f.amount, 0);
                return `<div class="p-4 rounded-lg bg-slate-800/70"><div class="flex justify-between items-start"><div><p class="font-bold text-white">${member.name}</p><p class="text-sm text-slate-400">${member.email}</p><p class="text-xs px-2 py-0.5 mt-1 inline-block rounded-full bg-purple-500/20 text-purple-300">${member.role}</p></div><div class="text-right"><p class="text-sm text-slate-300">Borrowed: ${transactions.length}</p>${fines > 0 ? `<p class="text-sm font-bold text-red-400">Fine: BDT ${fines}</p>` : ''}</div></div></div>`;
            }).join('');
        };
        document.getElementById('member-search').oninput = (e) => { const term = e.target.value.toLowerCase(); const filteredMembers = allMembers.filter(m => m.name.toLowerCase().includes(term) || (m.email && m.email.toLowerCase().includes(term))); renderMemberList(filteredMembers); };
        renderMemberList(allMembers);
    };

    const renderReports = () => {
        const container = document.getElementById('reports');
container.innerHTML = `
        <h3 class="text-xl font-semibold mb-4 text-white">Generate & Export Reports</h3>
        <div class="space-y-6">
            <div class="bg-slate-800 p-4 rounded-lg">
                <h4 class="font-semibold mb-2 text-slate-200">Inventory Reports</h4>
                <button id="export-inventory-btn" class="btn btn-glow bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-lg">Export Full Inventory (.csv)</button>
            </div>
            <div class="bg-slate-800 p-4 rounded-lg">
                <h4 class="font-semibold mb-2 text-slate-200">Financial Reports</h4>
                <button id="export-fines-btn" class="btn btn-glow bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-lg">Export Unpaid Fines (.csv)</button>
            </div>
            <div class="bg-slate-800 p-4 rounded-lg">
                <h4 class="font-semibold mb-2 text-slate-200">Transaction Log</h4>
                <div class="flex flex-col sm:flex-row sm:items-center gap-4">
                    <input type="date" id="report-start-date" class="p-2 rounded-lg bg-slate-700 border-slate-600 text-white w-full sm:w-auto">
                    <span class="text-slate-400 text-center">to</span>
                    <input type="date" id="report-end-date" class="p-2 rounded-lg bg-slate-700 border-slate-600 text-white w-full sm:w-auto">
                    <button id="export-transactions-btn" class="btn btn-glow bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-lg whitespace-nowrap">Export Transactions</button>
                </div>
            </div>
        </div>
    `;

        document.getElementById('export-inventory-btn').onclick = () => { const headers = ['Book_ID', 'Title', 'Author', 'Genre', 'Publication_Year', 'ISBN', 'Total_Copies', 'Available_Copies']; const rows = libraryData.books.map(b => [b.bookId, `"${b.title.replace(/"/g, '""')}"`, `"${b.author.replace(/"/g, '""')}"`, b.genre, b.publicationYear, b.isbn, b.totalCopies, b.availableCopies]); exportToCsv('library_inventory.csv', headers, rows); };
        document.getElementById('export-fines-btn').onclick = () => { const headers = ['Member_Name', 'Member_Email', 'Fee_Type', 'Amount', 'Due_Date']; const rows = store.get('fees').filter(f => f.feeType === 'Library Fine' && f.status === 'Unpaid').map(f => { const member = memberMap.get(f.studentId); return [member?.name, member?.email, f.feeType, f.amount, f.dueDate]; }); exportToCsv('unpaid_library_fines.csv', headers, rows); };
        document.getElementById('export-transactions-btn').onclick = () => { const startDate = document.getElementById('report-start-date').value; const endDate = document.getElementById('report-end-date').value; if(!startDate || !endDate) { showToast('Please select a start and end date for the report.', 'error'); return; } const filteredTransactions = libraryData.transactions.filter(t => { const issueDate = new Date(t.issueDate); return issueDate >= new Date(startDate) && issueDate <= new Date(endDate); }); const headers = ['Transaction_ID', 'Book_Title', 'Member_Name', 'Issue_Date', 'Due_Date', 'Return_Date', 'Status']; const rows = filteredTransactions.map(t => { const book = bookMap.get(t.bookId); const member = memberMap.get(t.memberId); return [t.transactionId, book?.title, member?.name, t.issueDate, t.dueDate, t.returnDate || 'N/A', t.status]; }); exportToCsv(`transactions_${startDate}_to_${endDate}.csv`, headers, rows); };
    };

    const renderMyBooks = () => {
        const container = document.getElementById('my-books');
        const myTransactions = libraryData.transactions.filter(t => t.memberId === currentUser.id);
        const issuedBooks = myTransactions.filter(t => t.status === 'Issued');
        const historyBooks = myTransactions.filter(t => t.status === 'Returned');
        const myReservations = libraryData.reservations.filter(r => r.memberId === currentUser.id && r.status === 'Pending');
        const myFines = store.get('fees').filter(f => f.studentId === currentUser.id && f.feeType === 'Library Fine' && f.status === 'Unpaid');

        container.innerHTML = `
            <div class="space-y-8">
                 <div>
                    <h4 class="text-xl font-semibold mb-3 text-white"><i class="fas fa-book-open mr-2 text-blue-400"></i>Books I Have</h4>
                    <div class="space-y-3">${issuedBooks.length > 0 ? issuedBooks.map(t => { const book = bookMap.get(t.bookId); const overdueDays = calculateOverdueDays(t.dueDate); return `<div class="p-4 rounded-lg ${overdueDays > 0 ? 'bg-red-900/40 border border-red-700' : 'bg-slate-800/70'} flex flex-wrap justify-between items-center gap-4"><div><span class="font-bold text-white">${book?.title || 'N/A'}</span> <span class="text-slate-400">by ${book?.author || 'N/A'}</span></div><div class="text-right ${overdueDays > 0 ? 'text-red-400 font-bold' : 'text-slate-300'}">Due: ${formatDate(t.dueDate)} ${overdueDays > 0 ? `(${overdueDays} days overdue)` : ''}</div></div>`; }).join('') : '<p class="text-slate-500 italic px-4">You have not borrowed any books.</p>'}</div>
                </div>
                <div>
                    <h4 class="text-xl font-semibold mb-3 text-white"><i class="fas fa-clock mr-2 text-yellow-400"></i>My Pending Requests</h4>
                    <div class="space-y-3">${myReservations.length > 0 ? myReservations.map(r => { const book = bookMap.get(r.bookId); return `<div class="p-4 rounded-lg bg-slate-800/70 flex flex-wrap justify-between items-center gap-4"><div><span class="font-bold text-white">${book?.title || 'N/A'}</span></div><div class="flex items-center gap-4"><span class="status-badge status-pending">Pending</span><button class="bg-red-600 hover:bg-red-700 text-white font-bold py-1 px-3 rounded-lg text-sm cancel-request-btn" data-resid="${r.reservationId}">Cancel</button></div></div>`; }).join('') : '<p class="text-slate-500 italic px-4">You have no pending book requests.</p>'}</div>
                </div>
                <div>
                    <h4 class="text-xl font-semibold mb-3 text-white"><i class="fas fa-history mr-2 text-gray-400"></i>Borrowing History</h4>
                    <div class="space-y-3">${historyBooks.length > 0 ? historyBooks.map(t => { const book = bookMap.get(t.bookId); return `<div class="p-4 rounded-lg bg-slate-800/70 flex flex-wrap justify-between items-center gap-4"><div><span class="font-bold text-white">${book?.title || 'N/A'}</span></div><div class="text-slate-400">Returned: ${formatDate(t.returnDate)}</div></div>`; }).join('') : '<p class="text-slate-500 italic px-4">No borrowing history yet.</p>'}</div>
                </div>
                <div>
                    <h4 class="text-xl font-semibold mb-3 text-white"><i class="fas fa-exclamation-triangle mr-2 text-red-500"></i>My Library Fines</h4>
                    <div class="space-y-3">${myFines.length > 0 ? myFines.map(f => `<div class="p-4 rounded-lg bg-red-900/50 border border-red-800 flex flex-wrap justify-between items-center gap-4"><div>Fine for late return. Amount: <span class="font-bold text-white">BDT ${f.amount}</span></div><button class="bg-green-600 hover:bg-green-700 text-white font-bold py-1 px-3 rounded-lg" onclick="alert('Integration with a payment gateway is required.')">Pay Now</button></div>`).join('') : '<p class="text-slate-500 italic px-4">You have no outstanding library fines. Great job!</p>'}</div>
                </div>
            </div>`;
        document.querySelectorAll('.cancel-request-btn').forEach(btn => btn.onclick = () => cancelRequest(btn.dataset.resid));
    };
    
    const renderReadingLists = () => {
        const container = document.getElementById('reading-lists');
        if (currentUser.role === 'Teacher') {
            const myReadingLists = libraryData.readingLists.filter(l => l.teacherId === currentUser.id);
            container.innerHTML = `
                <div class="flex justify-between items-center mb-4"><h3 class="text-xl font-semibold text-white">My Reading Lists</h3><button id="create-list-btn" class="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg">Create New List</button></div>
                <div class="space-y-4">${myReadingLists.length > 0 ? myReadingLists.map(list => `<div class="p-4 bg-slate-800 rounded-lg"><div class="flex justify-between items-center"><h4 class="text-lg font-bold text-white">${list.name}</h4><button class="text-red-500 delete-list-btn" data-listid="${list.id}"><i class="fas fa-trash"></i></button></div><p class="text-sm text-slate-400">Assigned to: ${store.get('classes').find(c => c.id === list.classId)?.name || 'N/A'}</p><ul class="mt-2 space-y-2 list-disc list-inside">${list.bookIds.map(bookId => { const book = bookMap.get(bookId); return book ? `<li class="text-slate-300 ml-4">${book.title}</li>` : ''; }).join('')}</ul></div>`).join('') : '<p class="text-slate-500 italic">You have not created any reading lists.</p>'}</div>`;
            
            document.getElementById('create-list-btn').onclick = () => {
                const myClasses = store.get('classes').filter(c => c.teacherId === currentUser.id);
                if (myClasses.length === 0) { showToast("You must be assigned to a class to create a reading list.", "error"); return; }
                openFormModal('Create New Reading List', [
                    { name: 'name', label: 'List Name (e.g., "History 101 Required Reading")', type: 'text', required: true },
                    { name: 'classId', label: 'Assign to Class', type: 'select', options: myClasses.map(c => `<option value="${c.id}">${c.name}</option>`).join(''), required: true },
                ], async (formData) => {
                    await apiService.create('library', { ...formData, teacherId: currentUser.id, bookIds: [] }, 'readingLists');
                    showToast('Reading list created!', 'success'); renderLibraryPage();
                });
            };
            document.querySelectorAll('.delete-list-btn').forEach(btn => {
                btn.onclick = () => showConfirmationModal('Are you sure you want to delete this list?', async () => {
                    await apiService.remove('library', btn.dataset.listid, 'readingLists', 'id');
                    renderLibraryPage();
                });
            });
        } else { // Student View
            const myClassLists = libraryData.readingLists.filter(list => list.classId === currentUser.classId);
            container.innerHTML = `
                <h3 class="text-2xl font-bold mb-6 text-white">Course Reading Lists</h3>
                <div class="space-y-6">${myClassLists.length > 0 ? myClassLists.map(list => {
                    const teacher = teacherMap.get(list.teacherId);
                    return `<div class="p-4 sm:p-6 bg-slate-800 rounded-lg shadow-md"><div class="border-b border-slate-700 pb-3 mb-3"><h4 class="text-xl font-bold text-white">${list.name}</h4><p class="text-sm text-slate-400">Curated by: ${teacher ? teacher.name : 'N/A'}</p></div><ul class="space-y-3">${list.bookIds.map(bookId => { const book = bookMap.get(bookId); if (!book) return ''; return `<li class="text-slate-300 flex items-center gap-3"><i class="fas fa-book text-teal-400"></i><div><a href="#" class="font-semibold hover:underline view-book-in-catalog" data-book-title="${book.title}">${book.title}</a><span class="text-slate-500 text-sm block">by ${book.author}</span></div></li>`; }).join('')}</ul></div>`}).join('') : '<p class="text-slate-500 italic">Your teachers have not assigned any reading lists for your class yet.</p>'}</div>`;
            document.querySelectorAll('.view-book-in-catalog').forEach(link => {
                link.onclick = (e) => {
                    e.preventDefault();
                    document.querySelector('.tab-link[data-tab="catalog"]').click();
                    const searchInput = document.getElementById('book-search');
                    searchInput.value = link.dataset.bookTitle;
                    searchInput.dispatchEvent(new Event('input'));
                };
            });
        }
    };

    // --- 5. INITIAL TAB ACTIVATION ---
    if (currentUser.role === 'Admin' || currentUser.role === 'Librarian') {
        renderLibrarianDashboard();
        renderCatalog('catalog');
        renderTransactions();
        renderReservations();
        renderMemberManagement();
        renderReports();
    } else { // Student or Teacher
        renderCatalog('catalog');
        renderMyBooks();
        renderReadingLists();
    }

    // Tab switching logic
    document.querySelectorAll('.tab-link').forEach(button => {
        button.addEventListener('click', (e) => {
            const tabButton = e.currentTarget;
            // Deactivate all tabs
            document.querySelectorAll('.tab-link').forEach(btn => {
                btn.classList.remove('active', 'text-blue-400', 'border-blue-400');
                btn.classList.add('text-slate-400', 'border-transparent');
            });
            // Hide all content
            document.querySelectorAll('.tab-content').forEach(content => content.classList.add('hidden'));
            // Activate clicked tab
            tabButton.classList.add('active', 'text-blue-400', 'border-blue-400');
            tabButton.classList.remove('text-slate-400', 'border-transparent');
            // Show clicked tab's content
            document.getElementById(tabButton.dataset.tab).classList.remove('hidden');
        });
    });
}



async function renderTransportPage() {
    const transportData = store.get('transport');
    const studentMap = store.getMap('students');
    const { vehicles, routes, assignments } = transportData;

    const routeMap = routes.reduce((map, route) => ({ ...map, [route.routeId]: route.routeName }), {});
    const vehicleMap = vehicles.reduce((map, vehicle) => ({ ...map, [vehicle.vehicleId]: vehicle.vehicleNumber }), {});

    ui.contentArea.innerHTML = `
        <div class="space-y-6 animate-fade-in">
            <div class="bg-slate-800/50 p-6 rounded-xl border border-slate-700 shadow-md">
                <h3 class="text-xl font-semibold mb-4">Student Assignments</h3>
                <div class="overflow-x-auto max-h-72 custom-scrollbar">
                    <table class="min-w-full text-sm">
                        <thead class="bg-slate-700 sticky top-0"><tr>
                            <th class="p-3 text-left">Student</th><th class="p-3 text-left">Route</th><th class="p-3 text-left">Vehicle No.</th>
                        </tr></thead>
                        <tbody class="text-slate-300 divide-y divide-slate-700">
                        ${assignments.map(a => `
                            <tr class="hover:bg-slate-700/30">
                                <td class="p-3">${studentMap.get(a.studentId)?.name || 'N/A'}</td>
                                <td class="p-3">${routeMap[a.routeId] || 'N/A'}</td>
                                <td class="p-3">${vehicleMap[a.vehicleId] || 'N/A'}</td>
                            </tr>`).join('')}
                        </tbody>
                    </table>
                </div>
            </div>
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div class="bg-slate-800/50 p-6 rounded-xl border border-slate-700 shadow-md">
                    <h3 class="text-xl font-semibold mb-4">Bus Routes</h3>
                    <div class="overflow-x-auto max-h-72 custom-scrollbar">
                        <table class="min-w-full text-sm">
                            <thead class="bg-slate-700 sticky top-0"><tr><th class="p-3 text-left">Route Name</th><th class="p-3 text-left">Stops</th></tr></thead>
                            <tbody class="text-slate-300 divide-y divide-slate-700">
                            ${routes.map(r => `
                                <tr class="hover:bg-slate-700/30"><td class="p-3 align-top">${r.routeName}</td><td class="p-3">${r.stops.join(', ')}</td></tr>
                            `).join('')}
                            </tbody>
                        </table>
                    </div>
                </div>
                <div class="bg-slate-800/50 p-6 rounded-xl border border-slate-700 shadow-md">
                    <h3 class="text-xl font-semibold mb-4">Vehicles</h3>
                    <div class="overflow-x-auto max-h-72 custom-scrollbar">
                        <table class="min-w-full text-sm">
                            <thead class="bg-slate-700 sticky top-0"><tr><th class="p-3 text-left">Vehicle No.</th><th class="p-3 text-left">Driver</th><th class="p-3 text-left">Capacity</th></tr></thead>
                            <tbody class="text-slate-300 divide-y divide-slate-700">
                            ${vehicles.map(v => `
                                <tr class="hover:bg-slate-700/30"><td class="p-3">${v.vehicleNumber}</td><td class="p-3">${v.driverName}</td><td class="p-3">${v.capacity}</td></tr>
                            `).join('')}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    `;
}
async function renderContactTeacherPage() {
    // --- 1. DATA FETCHING & PREPARATION ---
    const classes = store.get('classes');
    const teachers = store.get('teachers');
    const notices = store.get('notices');

    const myClass = classes.find(c => c.id === currentUser.classId);
    const classTeacher = myClass ? teachers.find(t => t.id === myClass.teacherId) : null;
    
    if (!classTeacher) {
        ui.contentArea.innerHTML = `<p class="text-red-400 text-center p-8">Your class teacher information is not available.</p>`;
        return;
    }

    // --- 2. SIMULATE CHAT HISTORY (NOW FILTERED FOR PRIVACY) ---
    const conversationHistory = notices.filter(msg => 
        msg.type === 'private_message' && // <-- Ensures we only get private chats
        ((msg.authorId === currentUser.id && msg.target === classTeacher.id) ||
        (msg.authorId === classTeacher.id && msg.target === currentUser.id))
    ).sort((a, b) => new Date(a.date) - new Date(b.date));

    // --- 3. DYNAMIC HTML RENDERING (No changes here) ---
    ui.contentArea.innerHTML = `
        <div class="max-w-4xl mx-auto animate-fade-in">
            <div class="bg-slate-800/80 border border-slate-700 rounded-2xl shadow-2xl flex flex-col h-[75vh]">
                <div class="flex items-center p-4 border-b border-slate-700">
                    <img src="${classTeacher.profileImage || generateInitialsAvatar(classTeacher.name)}" alt="${classTeacher.name}" class="w-12 h-12 rounded-full object-cover">
                    <div class="ml-4">
                        <h3 class="text-lg font-bold text-white">${classTeacher.name}</h3>
                        <p class="text-xs text-green-400 flex items-center"><span class="w-2 h-2 bg-green-400 rounded-full mr-2"></span>Online</p>
                    </div>
                </div>
                <div id="chat-body" class="flex-1 p-6 space-y-6 overflow-y-auto custom-scrollbar">
                    ${conversationHistory.map(msg => {
                        const isSentByMe = msg.authorId === currentUser.id;
                        const messageText = msg.content.split('\\n\\n(')[0]; 
                        return `
                            <div class="flex items-end gap-3 ${isSentByMe ? 'justify-end' : 'justify-start'}">
                                ${!isSentByMe ? `<img src="${classTeacher.profileImage || generateInitialsAvatar(classTeacher.name)}" alt="T" class="w-8 h-8 rounded-full object-cover flex-shrink-0">` : ''}
                                <div class="max-w-xs md:max-w-md p-3 rounded-2xl ${isSentByMe ? 'bg-blue-600 text-white rounded-br-none' : 'bg-slate-700 text-slate-200 rounded-bl-none'}">
                                    <p class="text-sm">${messageText}</p>
                                    <p class="text-xs opacity-60 mt-1 text-right">${new Date(msg.date).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}</p>
                                </div>
                            </div>
                        `;
                    }).join('') || `<p class="text-slate-500 text-center text-sm">This is the beginning of your conversation with ${classTeacher.name}.</p>`}
                </div>
                <div class="p-4 border-t border-slate-700 bg-slate-800/50 rounded-b-2xl">
                    <form id="contact-teacher-form" class="flex items-center gap-4">
                        <input type="text" id="message-body" placeholder="Type your message here..." autocomplete="off" required class="flex-1 bg-slate-700 border-slate-600 text-white placeholder-slate-400 rounded-full py-3 px-5 focus:outline-none focus:ring-2 focus:ring-blue-500 transition">
                        <button type="submit" class="bg-blue-600 hover:bg-blue-500 text-white rounded-full w-12 h-12 flex-shrink-0 flex items-center justify-center transform transition-transform hover:scale-110">
                            <i class="fas fa-paper-plane text-xl"></i>
                        </button>
                    </form>
                </div>
            </div>
        </div>
    `;

    // --- 4. POST-RENDER LOGIC & EVENT LISTENERS ---
    const chatBody = document.getElementById('chat-body');
    if (chatBody) {
        chatBody.scrollTop = chatBody.scrollHeight;
    }

    const form = document.getElementById('contact-teacher-form');
    if (form) {
        form.addEventListener('submit', async (e) => {
            e.preventDefault();
            const messageInput = document.getElementById('message-body');
            const messageBody = messageInput.value;
            if (!messageBody.trim()) return;

            const submitButton = form.querySelector('button[type="submit"]');
            messageInput.disabled = true;
            submitButton.disabled = true;

            // The 'notices' collection is used as a messaging channel
            await apiService.create('notices', {
                title: `Message from Student: ${currentUser.name}`,
                content: messageBody,
                date: new Date().toISOString(),
                target: classTeacher.id,
                authorId: currentUser.id,
                type: 'private_message' // <-- THIS IS THE CRUCIAL ADDITION
            });
            
            await store.refresh('notices');
            renderContactTeacherPage(); 
        });
    }
}
async function renderProfilePage() {
    let profileData = { ...currentUser };
    
    const createDetailItem = (icon, label, value) => `
        <div class="flex items-start gap-4">
            <i class="fas ${icon} text-slate-400 text-lg w-5 text-center mt-1"></i>
            <div>
                <p class="font-semibold text-slate-400">${label}</p>
                <p class="text-slate-200">${value || 'N/A'}</p>
            </div>
        </div>
    `;

    let contactInfoHtml = '';
    let roleSpecificInfoHtml = '';

    if (currentUser.role === 'Student') {
        const studentDetails = store.getMap('students').get(currentUser.id);
        if (studentDetails) profileData = { ...profileData, ...studentDetails };
        const myClass = store.getMap('classes').get(profileData.classId)?.name || 'N/A';
        contactInfoHtml = `${createDetailItem('fa-envelope', 'Email Address', profileData.email)}${createDetailItem('fa-phone', 'Guardian Contact', profileData.contact)}${createDetailItem('fa-map-marker-alt', 'Address', profileData.address)}`;
        roleSpecificInfoHtml = `${createDetailItem('fa-id-card', 'Roll Number', profileData.rollNo)}${createDetailItem('fa-school', 'Class', myClass)}${createDetailItem('fa-user-shield', 'Guardian Name', profileData.guardianName)}${createDetailItem('fa-calendar-day', 'Date of Birth', profileData.dateOfBirth)}`;
    } else if (currentUser.role === 'Teacher') {
        const teacherDetails = store.getMap('teachers').get(currentUser.id);
        if (teacherDetails) profileData = { ...profileData, ...teacherDetails };
        const myDept = store.getMap('departments').get(profileData.departmentId)?.name || 'N/A';
        contactInfoHtml = `${createDetailItem('fa-envelope', 'Email Address', profileData.email)}${createDetailItem('fa-phone', 'Contact Number', profileData.contact)}${createDetailItem('fa-map-marker-alt', 'Address', profileData.address)}`;
        roleSpecificInfoHtml = `${createDetailItem('fa-building', 'Department', myDept)}${createDetailItem('fa-book', 'Primary Subject', profileData.subject)}${createDetailItem('fa-graduation-cap', 'Qualifications', profileData.qualifications)}${createDetailItem('fa-calendar-plus', 'Joining Date', profileData.joiningDate)}`;
    } else { // Admin, Accountant, Librarian
         contactInfoHtml = `${createDetailItem('fa-envelope', 'Email Address', profileData.email)}${createDetailItem('fa-user-cog', 'Role', profileData.role)}`;
    }

    const profileHtml = `
    <div class="max-w-4xl mx-auto space-y-6 animate-fade-in">
        <div class="bg-slate-800/50 border border-slate-700 p-6 rounded-lg shadow-md flex flex-col sm:flex-row items-center gap-6">
            <div class="flex-shrink-0 text-center relative group">
                <img id="profile-img-preview" src="${profileData.profileImage || generateInitialsAvatar(profileData.name)}" alt="Profile Picture" class="w-28 h-28 rounded-full object-cover border-4 border-slate-700 shadow-lg">
                <label for="profile-image-upload" class="absolute inset-0 flex items-center justify-center bg-black bg-opacity-60 rounded-full cursor-pointer opacity-0 group-hover:opacity-100 transition-opacity">
                    <i class="fas fa-camera text-2xl"></i>
                </label>
                <input type="file" id="profile-image-upload" accept="image/*" class="hidden">
            </div>
            <div class="flex-grow text-center sm:text-left">
                <h3 class="text-3xl font-bold">${profileData.name}</h3>
                <p class="text-blue-400 text-lg">${profileData.role}</p>
            </div>
            <div class="flex-shrink-0 flex flex-col gap-2">
                <button id="edit-profile-btn" class="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors flex items-center justify-center gap-2">
                    <i class="fas fa-edit"></i> Edit Profile
                </button>
                <button id="change-password-btn" class="w-full bg-slate-700 hover:bg-slate-600 text-white font-semibold py-2 px-4 rounded-lg transition-colors flex items-center justify-center gap-2">
                   <i class="fas fa-key"></i> Change Password
                </button>
            </div>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div class="bg-slate-800/50 border border-slate-700 p-6 rounded-lg shadow-md">
                <h4 class="text-xl font-semibold border-b border-slate-700 pb-3 mb-4">Contact & Personal Info</h4>
                <div class="space-y-4">${contactInfoHtml}</div>
            </div>
            <div class="bg-slate-800/50 border border-slate-700 p-6 rounded-lg shadow-md">
                 <h4 class="text-xl font-semibold border-b border-slate-700 pb-3 mb-4">
                    ${currentUser.role === 'Student' ? 'Academic Details' : (currentUser.role === 'Teacher' ? 'Professional Details' : 'System Info')}
                 </h4>
                <div class="space-y-4">${roleSpecificInfoHtml}</div>
            </div>
        </div>
    </div>`;
    ui.contentArea.innerHTML = profileHtml;

    document.getElementById('profile-image-upload').addEventListener('change', function(event) {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = async (e) => {
                const imageData = e.target.result;
                document.getElementById('profile-img-preview').src = imageData;
                ui.headerUserAvatar.src = imageData;
                currentUser.profileImage = imageData;
                sessionStorage.setItem('sms_user_pro', JSON.stringify(currentUser));
                
                let collection = null, id = currentUser.id;
                if (currentUser.role === 'Student') collection = 'students';
                else if (currentUser.role === 'Teacher') collection = 'teachers';
                else { // For Admin, Accountant, Librarian
                    appDatabase.users[currentUser.username].profileImage = imageData;
                    await apiService.save();
                    await store.refresh('users');
                }
                if (collection) {
                    await apiService.update(collection, id, { profileImage: imageData });
                    await store.refresh(collection);
                }
                showToast('Profile image updated!', 'success');
            };
            reader.readAsDataURL(file);
        }
    });

    const editBtn = document.getElementById('edit-profile-btn');
    if (editBtn) {
        editBtn.onclick = () => {
            const nonEditableRoles = ['Admin', 'Accountant', 'Librarian'];
            if (nonEditableRoles.includes(currentUser.role)) {
                showToast('This user role details cannot be edited from here.', 'info');
                return;
            }

            let formFields = [ 
                { name: 'name', label: 'Full Name', type: 'text', required: true },
                { name: 'email', label: 'Email', type: 'email', required: true },
                { name: 'contact', label: 'Contact Number', type: 'tel', required: true },
                { name: 'address', label: 'Address', type: 'textarea' },
            ];
            if (currentUser.role === 'Student') formFields.push({ name: 'guardianName', label: 'Guardian Name', type: 'text', required: true }, { name: 'dateOfBirth', label: 'Date of Birth', type: 'date' });
            else if (currentUser.role === 'Teacher') formFields.push({ name: 'subject', label: 'Primary Subject', type: 'text', required: true }, { name: 'qualifications', label: 'Qualifications', type: 'text' });
            
            openFormModal('Edit Profile', formFields, async (formData) => {
                const collection = currentUser.role === 'Student' ? 'students' : 'teachers';
                await apiService.update(collection, currentUser.id, formData);
                await store.refresh(collection);
                currentUser = {...currentUser, ...formData };
                sessionStorage.setItem('sms_user_pro', JSON.stringify(currentUser));
                showToast('Profile updated successfully!', 'success');
                renderProfilePage();
            }, profileData);
        };
    }

    document.getElementById('change-password-btn').onclick = openChangePasswordModal;
}


// ===================================================================================
// --- ACCOUNTANT PANEL RENDERERS ---
// ===================================================================================
const renderAccountantDashboard = async () => {
    await Promise.all([
        store.refresh('fees'),
        store.refresh('salaries'),
        store.refresh('expenses')
    ]);

    const fees = store.get('fees');
    const salaries = store.get('salaries');
    const expenses = store.get('expenses');

    // Logic to find the most recent month with any financial data remains effective
    const allFinancialMonths = [...new Set([...salaries.map(s => s.month), ...expenses.map(e => e.date.slice(0, 7))])].sort().reverse();
    const targetMonth = allFinancialMonths.length > 0 ? allFinancialMonths[0] : new Date().toISOString().slice(0, 7);
    const monthName = new Date(targetMonth + '-02').toLocaleString('default', { month: 'long', year: 'numeric' });

    const totalFeesCollected = fees.filter(f => f.status === 'Paid').reduce((sum, f) => sum + f.amount, 0);
    const totalFeesDue = fees.filter(f => f.status === 'Unpaid').reduce((sum, f) => sum + f.amount, 0);
    const salariesPaidThisMonth = salaries.filter(s => s.month === targetMonth && s.status === 'Paid').reduce((sum, s) => sum + s.netPay, 0);
    const expensesThisMonth = expenses.filter(e => e.date.startsWith(targetMonth)).reduce((sum, e) => sum + e.amount, 0);
    
    const formatCurrency = (value) => `BDT ${Number(value || 0).toLocaleString()}`;

    const statCards = [
        { title: 'Total Fees Collected (All Time)', value: formatCurrency(totalFeesCollected), icon: 'fa-hand-holding-usd', color: 'green' },
        { title: 'Outstanding Fees (All Time)', value: formatCurrency(totalFeesDue), icon: 'fa-exclamation-circle', color: 'yellow' },
        { title: `Salaries Paid (${monthName})`, value: formatCurrency(salariesPaidThisMonth), icon: 'fa-money-check-alt', color: 'blue' },
        { title: `Expenses (${monthName})`, value: formatCurrency(expensesThisMonth), icon: 'fa-receipt', color: 'indigo' },
    ];

    // Improvement: More actionable quick-action buttons
    ui.contentArea.innerHTML = `
        <div class="animate-fade-in">
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">${statCards.map(createDashboardCard).join('')}</div>
            <div class="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div class="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
                    <h3 class="text-xl font-semibold mb-4 text-white">Financial Summary for ${monthName}</h3>
                    <div id="income-expense-chart-container" class="h-64 flex items-center justify-center">
                        <canvas id="incomeExpenseChart"></canvas>
                    </div>
                </div>
                <div class="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
                     <h3 class="text-xl font-semibold mb-4 text-white">Quick Actions</h3>
                     <div class="space-y-3">
                        <button onclick="navigateTo('fees')" class="quick-action-btn bg-blue-600/20 text-blue-300 border-blue-500"><i class="fas fa-file-invoice-dollar"></i>Manage Fee Collection</button>
                        <button onclick="navigateTo('salaries')" class="quick-action-btn bg-green-600/20 text-green-300 border-green-500"><i class="fas fa-money-check-alt"></i>Process Salaries</button>
                        <button onclick="navigateTo('expenses')" class="quick-action-btn bg-yellow-600/20 text-yellow-300 border-yellow-500"><i class="fas fa-receipt"></i>Log an Expense</button>
                     </div>
                </div>
            </div>
        </div>
    `;

    const incomeExpenseCtx = document.getElementById('incomeExpenseChart')?.getContext('2d');
    const chartContainer = document.getElementById('income-expense-chart-container');
    if (incomeExpenseCtx) {
        // Improvement: Chart now shows income from the target month for a true monthly comparison
        const feesCollectedThisMonth = fees.filter(f => f.paidDate && f.paidDate.startsWith(targetMonth)).reduce((sum, f) => sum + f.amount, 0);
        
        // Improvement: Handle the "no data" case gracefully
        if (feesCollectedThisMonth === 0 && salariesPaidThisMonth === 0 && expensesThisMonth === 0) {
             chartContainer.innerHTML = `<p class="text-slate-500 italic">No financial data for ${monthName} to display.</p>`;
        } else {
            new Chart(incomeExpenseCtx, {
                type: 'bar',
                data: {
                    labels: ['Income (Fees)', 'Outcome (Salaries + Expenses)'],
                    datasets: [{
                        label: `Amount in ${monthName} (BDT)`,
                        data: [feesCollectedThisMonth, salariesPaidThisMonth + expensesThisMonth],
                        backgroundColor: ['rgba(34, 197, 94, 0.6)', 'rgba(239, 68, 68, 0.6)'],
                        borderColor: ['#22c55e', '#ef4444'],
                        borderWidth: 1
                    }]
                },
                options: { responsive: true, maintainAspectRatio: false, plugins: { legend: { display: false } }, scales: { y: { beginAtZero: true, ticks: { color: '#e2e8f0' } }, x: { ticks: { color: '#e2e8f0' } } } }
            });
        }
    }
};


async function renderSalaryPage() {
    const teacherMap = store.getMap('teachers');
    const formatCurrency = (value) => `BDT ${Number(value || 0).toLocaleString()}`;
    
    const config = {
        title: 'Salary',
        collectionName: 'salaries',
        columns: [
            { label: 'Teacher', render: (item) => teacherMap.get(item.teacherId)?.name || 'N/A', key: 'teacherId', sortable: true },
            { label: 'Month', key: 'month', sortable: true },
            { label: 'Net Pay', render: (item) => formatCurrency(item.netPay), key: 'netPay', sortable: true },
            { label: 'Status', render: (item) => `<span class="status-badge ${item.status === 'Paid' ? 'status-paid' : 'status-pending'}">${item.status}</span>`, key: 'status', sortable: true },
            { label: 'Action', render: (item) => item.status === 'Pending' ? `<button class="text-sm bg-green-600 hover:bg-green-700 text-white font-bold py-1 px-3 rounded-lg pay-salary-btn" data-id="${item.id}">Mark as Paid</button>` : `Paid on ${item.paidDate}` },
        ],
        customHeader: `<button id="process-salaries-btn" class="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded-lg">Process Current Month Salaries</button>`,
        customListeners: () => {
            document.getElementById('process-salaries-btn').onclick = async () => {
                const teachers = store.get('teachers');
                const currentMonth = new Date().toISOString().slice(0, 7);
                const existingSalaries = store.get('salaries').filter(s => s.month === currentMonth);
                
                showConfirmationModal(`This will generate salary records for all teachers for ${currentMonth}. Proceed?`, async () => {
                    for (const teacher of teachers) {
                        if (!existingSalaries.some(s => s.teacherId === teacher.id)) {
                             await apiService.create('salaries', {
                                teacherId: teacher.id,
                                baseSalary: teacher.baseSalary || 0,
                                bonus: 0,
                                deductions: 0,
                                netPay: teacher.baseSalary || 0,
                                month: currentMonth,
                                status: 'Pending',
                                paidDate: null
                            });
                        }
                    }
                    showToast('Salaries for the current month have been processed!', 'success');
                    await store.refresh('salaries');
                    renderSalaryPage();
                });
            };
            document.querySelectorAll('.pay-salary-btn').forEach(btn => {
                btn.onclick = async () => {
                    await apiService.update('salaries', btn.dataset.id, { status: 'Paid', paidDate: new Date().toISOString().slice(0,10) });
                    await store.refresh('salaries');
                    renderSalaryPage();
                }
            });
        },
        searchKeys: ['month']
    };
    renderGenericListPage(config);
}
async function renderExpensesPage() {
    const formatCurrency = (value) => `BDT ${Number(value || 0).toLocaleString()}`;
    const config = {
        title: 'Expense',
        collectionName: 'expenses',
        columns: [
            { label: 'Date', key: 'date', sortable: true },
            { label: 'Category', key: 'category', sortable: true },
            { label: 'Amount', render: (item) => formatCurrency(item.amount), key: 'amount', sortable: true },
            { label: 'Description', key: 'description' },
        ],
        formFields: [
            { name: 'date', label: 'Date', type: 'date', required: true },
            { name: 'category', label: 'Category', type: 'text', required: true, placeholder: 'e.g., Utilities, Supplies' },
            { name: 'amount', label: 'Amount (BDT)', type: 'number', required: true },
            { name: 'description', label: 'Description', type: 'textarea' },
        ],
        searchKeys: ['category', 'description']
    };
    renderGenericListPage(config);
}
async function renderFinancialReports() {
    ui.contentArea.innerHTML = `
        <div class="animate-fade-in bg-slate-800/50 p-6 rounded-xl border border-slate-700">
            <h3 class="text-xl font-semibold mb-6">Financial Reports</h3>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                 <div class="bg-slate-800 p-6 rounded-lg border border-slate-700">
                    <h4 class="font-semibold text-lg mb-2 text-slate-200">Fee Collection Report</h4>
                    <p class="text-slate-400 mb-4">Export a detailed list of all paid and unpaid fees for a specific period.</p>
                    <button onclick="exportToCsv('all_fees.csv', ['Student_Name', 'Fee_Type', 'Amount', 'Status', 'Due_Date'], store.get('fees').map(f => [store.getMap('students').get(f.studentId)?.name, f.feeType, f.amount, f.status, f.dueDate]))" class="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg">Export All Fees (.csv)</button>
                </div>
                <div class="bg-slate-800 p-6 rounded-lg border border-slate-700">
                    <h4 class="font-semibold text-lg mb-2 text-slate-200">Salary Payout Report</h4>
                    <p class="text-slate-400 mb-4">Export a list of all salary payments made in a specific period.</p>
                    <button onclick="exportToCsv('all_salaries.csv', ['Teacher_Name', 'Month', 'Net_Pay', 'Status', 'Paid_Date'], store.get('salaries').map(s => [store.getMap('teachers').get(s.teacherId)?.name, s.month, s.netPay, s.status, s.paidDate]))" class="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-lg">Export All Salaries (.csv)</button>
                </div>
                 <div class="bg-slate-800 p-6 rounded-lg border border-slate-700">
                    <h4 class="font-semibold text-lg mb-2 text-slate-200">Expense Report</h4>
                    <p class="text-slate-400 mb-4">Export a full list of all logged school expenses.</p>
                    <button onclick="exportToCsv('all_expenses.csv', ['Date', 'Category', 'Amount', 'Description'], store.get('expenses').map(e => [e.date, e.category, e.amount, e.description]))" class="bg-yellow-600 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded-lg">Export All Expenses (.csv)</button>
                </div>
            </div>
        </div>
    `;
}

// ===================================================================================
// --- REUSABLE UI COMPONENTS & HELPERS ---
// ===================================================================================

function generateInitialsAvatar(name) {
    if (!name) name = 'U';
    const nameParts = name.trim().split(' ');
    let initials = nameParts[0].charAt(0);
    if (nameParts.length > 1) {
        initials += nameParts[nameParts.length - 1].charAt(0);
    }
    initials = initials.toUpperCase();
    const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><circle cx="50" cy="50" r="50" fill="#3b82f6"/><text x="50%" y="50%" text-anchor="middle" dy="0.35em" font-size="45" font-family="Inter, sans-serif" font-weight="bold" fill="#fff">${initials}</text></svg>`;
    return `data:image/svg+xml;base64,${btoa(svg)}`;
}
const createDashboardCard = ({ title, value, icon, color }) => {
    const colorMap = {
        indigo: 'from-indigo-500 to-indigo-700',
        yellow: 'from-yellow-500 to-yellow-600',
        blue: 'from-blue-500 to-blue-700',
        green: 'from-green-500 to-green-700',
        red: 'from-red-500 to-red-700',
        purple: 'from-purple-500 to-purple-700',
    };
    return `
        <div class="dashboard-card bg-gradient-to-br ${colorMap[color] || colorMap.blue} p-6 rounded-xl shadow-lg transform transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl relative overflow-hidden">
            <div class="absolute -right-4 -top-4 text-white text-6xl opacity-20 pointer-events-none"><i class="fas ${icon}"></i></div>
            <div class="relative z-10">
                <p class="text-sm font-medium text-white text-opacity-80">${title}</p>
                <p class="text-3xl font-bold text-white mt-1">${value}</p>
            </div>
        </div>
    `;
};


function createNoticeCard(notice, authorName) {
    let audienceText, borderColorClass;
    const isPrivateMessage = notice.type === 'private_message';

    // --- Determine the Audience and Border Color ---
    if (isPrivateMessage) {
        audienceText = 'Private Message';
        borderColorClass = 'border-purple-500';
    } else if (notice.target === 'All') {
        audienceText = 'For: Everyone';
        borderColorClass = 'border-blue-500';
    } else if (notice.target === 'Student') {
        audienceText = 'For: All Students';
        borderColorClass = 'border-green-500';
    } else if (notice.target === 'Teacher') {
        audienceText = 'For: All Teachers';
        borderColorClass = 'border-yellow-500';
    } else if (notice.target === 'Staff') {
        audienceText = 'For: All Staff';
        borderColorClass = 'border-pink-500';
    } else if (notice.target.startsWith('class_')) {
        const className = store.getMap('classes').get(notice.target.split('_')[1])?.name || 'a Specific Class';
        audienceText = `For: ${className}`;
        borderColorClass = 'border-red-500';
    } else {
        // This handles cases for direct messages to specific users (like 'admin')
        audienceText = `To: ${notice.target}`;
        borderColorClass = 'border-teal-500';
    }

    // --- Determine which buttons to show (Reply/Delete) ---
    let actionButtonsHtml = '';
    if (currentUser.role === 'Teacher' && isPrivateMessage && notice.authorId !== currentUser.id) {
        actionButtonsHtml += `<button class="text-blue-400 hover:text-blue-300 reply-btn p-1" title="Reply" data-author-id="${notice.authorId}" data-author-name="${authorName}"><i class="fas fa-reply fa-fw"></i></button>`;
    }
    if (currentUser.role === 'Admin' || currentUser.id === notice.authorId) {
        actionButtonsHtml += `<button class="text-red-500 hover:text-red-400 delete-btn p-1 ml-2" title="Delete" data-id="${notice.id}"><i class="fas fa-trash-alt fa-fw"></i></button>`;
    }

    const timestamp = new Date(notice.date).toLocaleString('en-US', {
        day: 'numeric', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit'
    });

    return `
        <div class="p-4 border-l-4 ${borderColorClass} bg-slate-800/70 rounded-r-lg shadow-md flex flex-col justify-between transition-shadow duration-300 hover:shadow-lg">
            <div>
                <div class="flex justify-between items-start mb-2">
                    <div>
                        <p class="font-bold text-lg text-white">${notice.title}</p>
                        <div class="flex items-center text-xs text-slate-400 mt-1 space-x-2">
                            <span><i class="fas fa-user-edit mr-1"></i>From: ${authorName}</span>
                            <span class="text-slate-600">|</span>
                            <span><i class="fas fa-bullhorn mr-1"></i>${audienceText}</span>
                            <span class="text-slate-600">|</span>
                            <span><i class="fas fa-clock mr-1"></i>${timestamp}</span>
                        </div>
                    </div>
                    <div class="flex-shrink-0">
                        ${actionButtonsHtml}
                    </div>
                </div>
                <p class="text-slate-300 text-sm mt-3 whitespace-pre-wrap">${notice.content}</p>
            </div>
        </div>`;
}

function attachNoticeActionListeners() {
    // --- Makes the "Delete" buttons work ---
    document.querySelectorAll('.delete-btn').forEach(btn => {
        btn.onclick = () => {
            showConfirmationModal('Are you sure you want to delete this notice/message?', async () => {
                await apiService.remove('notices', btn.dataset.id);
                showToast('Item deleted successfully.', 'success');
                renderNoticesPage(); // Refresh the page to show the updated list
            });
        };
    });

    // --- Makes the "Reply" buttons work ---
    document.querySelectorAll('.reply-btn').forEach(btn => {
        btn.onclick = () => {
            const studentId = btn.dataset.authorId; // The author of the message is the student
            const studentName = btn.dataset.authorName;

            // Open the message modal in "reply mode"
            openAdvancedMessageModal(studentId, studentName);
        };
    });
}


function createUpcomingExamCard(exam, subjectName) {
    return `
        <div class="flex items-center gap-4 bg-slate-700/30 p-3 rounded-lg">
            <div class="text-center bg-blue-900/50 text-blue-300 rounded-lg px-3 py-1">
                <p class="font-bold text-lg">${new Date(exam.date).getDate()}</p>
                <p class="text-xs font-medium">${new Date(exam.date).toLocaleString('default', { month: 'short' })}</p>
            </div>
            <div>
                <p class="font-bold">${exam.name} - ${subjectName}</p>
                <p class="text-sm text-slate-400">${exam.date}</p>
            </div>
        </div>
    `;
}
function renderDashboardCharts(fees, students) {
    const gridColor = 'rgba(255, 255, 255, 0.1)';
    const textColor = '#e2e8f0'; 
    
    // Fees Chart (for Admin)
    const feesCtx = document.getElementById('feesChart')?.getContext('2d');
    if (feesCtx && fees) {
        const paidAmount = fees.filter(f => f.status === 'Paid').reduce((sum, f) => sum + f.amount, 0);
        const unpaidAmount = fees.filter(f => f.status === 'Unpaid').reduce((sum, f) => sum + f.amount, 0);
        new Chart(feesCtx, {
            type: 'bar',
            data: {
                labels: ['Paid', 'Unpaid'],
                datasets: [{
                    label: 'Fee Amount (BDT)', data: [paidAmount, unpaidAmount],
                    backgroundColor: ['rgba(34, 197, 94, 0.6)', 'rgba(239, 68, 68, 0.6)'],
                    borderColor: ['#22c55e', '#ef4444'], borderWidth: 1
                }]
            },
            options: { responsive: true, plugins: { legend: { display: false } }, scales: { y: { beginAtZero: true, ticks: { color: textColor }, grid: { color: gridColor } }, x: { ticks: { color: textColor }, grid: { display: false } } } }
        });
    }

    // Gender Chart (for Admin and Teacher)
    const genderCtx = document.getElementById('genderChart')?.getContext('2d');
    if (genderCtx && students) {
        const maleCount = students.filter(s => s.gender === 'Male').length;
        const femaleCount = students.filter(s => s.gender === 'Female').length;
        new Chart(genderCtx, {
            type: 'doughnut',
            data: {
                labels: ['Male', 'Female'],
                datasets: [{ data: [maleCount, femaleCount], backgroundColor: ['rgba(59, 130, 246, 0.7)', 'rgba(236, 72, 153, 0.7)'], borderColor: ['#3b82f6', '#ec4899'], borderWidth: 1 }]
            },
            options: { responsive: true, plugins: { legend: { position: 'top', labels: { color: textColor } } } }
        });
    }
}

function showImageViewer(imageSrc) {
    const overlay = document.createElement('div');
    overlay.id = 'image-viewer-overlay';
    overlay.className = 'fixed inset-0 bg-black/80 flex justify-center items-center z-50 cursor-pointer animate-fade-in';

    const img = document.createElement('img');
    img.src = imageSrc;
    img.className = 'max-w-[90%] max-h-[90%] object-contain border-4 border-white rounded-lg shadow-2xl cursor-default';

    overlay.appendChild(img);
    document.body.appendChild(overlay);

    overlay.onclick = (e) => {
        if (e.target.id === 'image-viewer-overlay') {
            overlay.classList.remove('animate-fade-in');
            overlay.classList.add('animate-fade-out');
            overlay.addEventListener('animationend', () => document.body.removeChild(overlay), { once: true });
        }
    };
}


async function openAdvancedMessageModal(replyToUserId = null, replyToUserName = null) {
    const classes = store.get('classes');
    const teacherMap = store.getMap('teachers');
    const studentsMap = store.getMap('students');
    const allStaff = Object.values(appDatabase.users)
        .filter(user => user.role !== 'Student')
        .map(user => {
            let staffName = user.name || 'Unnamed Staff';
            if (user.role === 'Teacher' && user.teacherId) {
                const teacherDetails = teacherMap.get(user.teacherId);
                if (teacherDetails) staffName = teacherDetails.name;
            }
            return { id: user.email, name: staffName, role: user.role };
        });

    let modalTitle = 'Send New Notice / Message';
    let isReply = false;
    if (replyToUserId && replyToUserName) {
        modalTitle = `Reply to ${replyToUserName}`;
        isReply = true;
    }

    const groupedOptions = {
        'Broadcasts': [],
        'Classes': [],
        'Direct to Staff': [],
        'Direct to Student': []
    };

    // Populate Broadcast options
    if (currentUser.role === 'Admin') {
        groupedOptions['Broadcasts'].push(
            { value: 'All', label: 'Everyone (All Staff & Students)' },
            { value: 'Staff', label: 'All Staff Members' },
            { value: 'Teacher', label: 'All Teachers' },
            { value: 'Student', label: 'All Students' }
        );
    }

    // Populate Class options
    const classList = (currentUser.role === 'Teacher') ? classes.filter(c => c.teacherId === currentUser.id) : classes;
    classList.forEach(c => groupedOptions['Classes'].push({ value: `class_${c.id}`, label: c.name }));

    // Populate Direct Message options
    if (currentUser.role === 'Admin') {
        allStaff.forEach(s => groupedOptions['Direct to Staff'].push({ value: s.id, label: `${s.name} (${s.role})` }));
    }
    if (currentUser.role === 'Teacher' && !isReply) { // Only show admin if not a reply
         groupedOptions['Direct to Staff'].push({ value: 'admin', label: 'Admin' });
    }
    if (isReply) {
        groupedOptions['Direct to Student'].push({ value: replyToUserId, label: `${replyToUserName} (Student)` });
    }


    const optionsHtml = Object.entries(groupedOptions)
        .filter(([_, options]) => options.length > 0)
        .map(([group, options]) => `<optgroup label="${group}">${options.map(opt => `<option value="${opt.value}" ${isReply && opt.value === replyToUserId ? 'selected' : ''}>${opt.label}</option>`).join('')}</optgroup>`)
        .join('');

    const formFields = [
        { name: 'target', label: 'Recipient', type: 'select', required: true, options: optionsHtml },
        { name: 'title', label: 'Title / Subject', type: 'text', required: true, value: isReply ? `Re: Your message` : '' },
        { name: 'content', label: 'Message Content', type: 'textarea', required: true },
    ];

    openFormModal(modalTitle, formFields, async (formData) => {
        const isPrivate = !['All', 'Staff', 'Teacher', 'Student'].includes(formData.target) && !formData.target.startsWith('class_');

        const noticeData = {
            ...formData,
            authorId: currentUser.id || currentUser.username,
            date: new Date().toISOString(),
            type: isPrivate ? 'private_message' : 'notice'
        };

        await apiService.create('notices', noticeData);
        showToast(`Message sent successfully!`, 'success');

        // Refresh the notice board if it's the current page
        if (document.getElementById('notice-list-container')) {
            renderNoticesPage();
        }
    });

    // If it is a reply, disable the recipient dropdown
    if (isReply) {
         setTimeout(() => { // Use timeout to ensure element exists in DOM
            const targetSelect = document.getElementById('target');
            if (targetSelect) targetSelect.disabled = true;
        }, 100);
    }
}

function getSkeletonLoaderHTML(type) {
    if (type === 'table') {
        return `
            <div class="bg-slate-800/50 p-6 rounded-xl shadow-md border border-slate-700">
                <div class="flex justify-between items-center mb-4">
                    <div class="skeleton h-8 w-1/3"></div>
                    <div class="skeleton h-10 w-32"></div>
                </div>
                <div class="space-y-2">
                    ${Array(5).fill(0).map(() => `
                        <div class="skeleton-table-row">
                            <div class="skeleton skeleton-table-cell"></div> <div class="skeleton skeleton-table-cell"></div>
                            <div class="skeleton skeleton-table-cell"></div> <div class="skeleton skeleton-table-cell"></div>
                        </div>
                    `).join('')}
                </div>
            </div>
        `;
    }
    if (type === 'dashboard') {
        return `
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div class="skeleton skeleton-card"></div> <div class="skeleton skeleton-card"></div>
                <div class="skeleton skeleton-card"></div> <div class="skeleton skeleton-card"></div>
            </div>
            <div class="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div class="lg:col-span-1 skeleton h-64 rounded-xl"></div>
                <div class="skeleton h-64 rounded-xl"></div>
            </div>
        `;
    }
    return '';
}

function openAnimatedModal(modalElement) {
    modalElement.style.display = 'flex';
    setTimeout(() => modalElement.classList.add('show'), 10);
}

function closeAnimatedModal(modalElement) {
    modalElement.classList.remove('show');
    modalElement.addEventListener('transitionend', () => {
        modalElement.style.display = 'none';
    }, { once: true });
}

function showConfirmationModal(text, onConfirm) {
    ui.confirmText.textContent = text;
    
    // Replace the button's event listener to avoid multiple triggers
    const oldBtn = ui.confirmYesBtn;
    const newBtn = oldBtn.cloneNode(true);
    oldBtn.parentNode.replaceChild(newBtn, oldBtn);
    ui.confirmYesBtn = newBtn; 

    ui.confirmYesBtn.onclick = () => {
        if (onConfirm) onConfirm();
        closeAnimatedModal(ui.confirmModal);
    };
    openAnimatedModal(ui.confirmModal);
}

function openChangePasswordModal() {
    const modalTitle = 'Change Your Password';
    const formHtml = `
        <form id="change-password-form" class="space-y-4">
            <div>
                <label for="currentPassword" class="block text-sm font-medium text-slate-300">Current Password</label>
                <input type="password" id="currentPassword" name="currentPassword" required 
                       class="mt-1 block w-full px-3 py-2 bg-slate-800 border border-slate-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
            </div>
            <div>
                <label for="newPassword" class="block text-sm font-medium text-slate-300">New Password</label>
                <input type="password" id="newPassword" name="newPassword" required
                       class="mt-1 block w-full px-3 py-2 bg-slate-800 border border-slate-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
            </div>
            <div>
                <label for="confirmPassword" class="block text-sm font-medium text-slate-300">Confirm New Password</label>
                <input type="password" id="confirmPassword" name="confirmPassword" required
                       class="mt-1 block w-full px-3 py-2 bg-slate-800 border border-slate-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
            </div>
            <div class="pt-4 flex justify-end">
                <button type="submit" class="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg">Update Password</button>
            </div>
        </form>
    `;

    ui.modalTitle.textContent = modalTitle;
    ui.modalBody.innerHTML = formHtml;

    document.getElementById('change-password-form').addEventListener('submit', async (e) => {
        e.preventDefault();
        const currentPassword = e.target.currentPassword.value;
        const newPassword = e.target.newPassword.value;
        const confirmPassword = e.target.confirmPassword.value;

        if (newPassword.length < 4) { showToast('New password must be at least 4 characters long.', 'error'); return; }
        if (newPassword !== confirmPassword) { showToast('New passwords do not match.', 'error'); return; }
        if (newPassword === currentPassword) { showToast('New password cannot be the same as the old one.', 'error'); return; }

        const storedPassword = appDatabase.users[currentUser.username]?.password;
        if (currentPassword !== storedPassword) { showToast('Incorrect current password.', 'error'); return; }

        appDatabase.users[currentUser.username].password = newPassword;
        await apiService.save(); 

        showToast('Password updated successfully!', 'success');
        closeAnimatedModal(ui.modal);
    });

    openAnimatedModal(ui.modal);
}

function showToast(message, type = 'success') {
    const toast = document.createElement('div');
    const iconClass = {
        success: 'fa-check-circle',
        error: 'fa-times-circle',
        info: 'fa-info-circle'
    }[type];

    toast.className = `toast ${type}`;
    toast.innerHTML = `<i class="fas ${iconClass} text-xl"></i><span>${message}</span>`;
    ui.toastContainer.appendChild(toast);
    
    setTimeout(() => toast.classList.add('show'), 100);
    
    setTimeout(() => {
        toast.classList.remove('show');
        toast.addEventListener('transitionend', () => toast.remove(), { once: true });
    }, 3000);
}

const renderGenericListPage = async (config) => {
    window.currentPageConfig = config;
    const { title, collectionName, columns, formFields, searchKeys, hideAddButton = false, hideActions = false, dataFilter, classFilter, classFilterOptions, customHeader, customListeners } = config;

    let items = config.data || await (async () => {
        await store.refresh(collectionName);
        return store.get(collectionName);
    })();

    if (dataFilter) items = items.filter(dataFilter);
    const originalItems = [...items];


    const renderTable = (data) => {
        const tableContainer = document.getElementById('generic-list-container');
        if (!tableContainer) return;
        
        if (data.length === 0) {
            tableContainer.innerHTML = `<p class="text-center text-slate-400 py-8">No ${title.toLowerCase()} data found.</p>`;
            return;
        }

        tableContainer.innerHTML = `
            <div class="overflow-x-auto custom-scrollbar">
                <table class="min-w-full">
                    <thead class="bg-slate-700">
                        <tr>
                            ${columns.map(c => `<th class="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider">${c.label}</th>`).join('')}
                            ${!hideActions && !columns.find(c => c.label === 'Action') ? `<th class="px-4 py-3 text-right text-xs font-medium uppercase tracking-wider">Actions</th>` : ''}
                        </tr>
                    </thead>
                    <tbody class="divide-y divide-slate-700">
                        ${data.map(item => `
                            <tr class="hover:bg-slate-700/30">
                                ${columns.map(c => `<td class="px-4 py-4 whitespace-nowrap text-sm">${c.render ? c.render(item) : (item[c.key] || 'N/A')}</td>`).join('')}
                                ${!hideActions && !columns.find(c => c.label === 'Action') ? `
                                    <td class="px-4 py-4 whitespace-nowrap text-right text-sm font-medium">
                                        <button class="text-blue-400 hover:text-blue-300 edit-btn" data-id="${item.id}">Edit</button>
                                    </td>
                                ` : ''}
                            </tr>
                        `).join('')}
                    </tbody>
                </table>
            </div>`;
        attachActionListeners();
    };

    const attachActionListeners = () => {
        document.querySelectorAll('.edit-btn').forEach(btn => {
            btn.onclick = () => {
                const item = originalItems.find(i => i.id === btn.dataset.id);
                
                config.onDeleteItem = (itemId) => {
                    showConfirmationModal(`Are you sure you want to delete this ${title.toLowerCase()}?`, async () => {
                        await apiService.remove(collectionName, itemId);
                        showToast(`${title} deleted successfully.`, 'success');
                        closeAnimatedModal(ui.modal);
                        renderGenericListPage(config);
                    });
                };
                
                openFormModal(`Edit ${title}`, formFields, async (formData) => {
                    await apiService.update(collectionName, item.id, formData);
                    showToast(`${title} updated successfully!`, 'success');
                    renderGenericListPage(config);
                }, item);
            };
        });
        
        if(customListeners) customListeners();
    };
    
    ui.contentArea.innerHTML = `
        <div class="bg-slate-800/50 p-6 rounded-xl border border-slate-700 shadow-md animate-fade-in">
            <div class="flex flex-wrap justify-between items-center mb-4 gap-4">
                <h3 class="text-xl font-semibold">${title} Management</h3>
                <div class="flex flex-wrap gap-4 items-center">
                    ${customHeader || ''}
                    ${config.search ? `<input type="text" id="search-input" placeholder="${config.searchPlaceholder || `Search...`}" class="p-2 rounded-lg bg-slate-700 border border-slate-600 focus:ring-2 focus:ring-blue-500">` : ''}
                    ${classFilter ? `<select id="class-filter" class="p-2 rounded-lg bg-slate-700 border border-slate-600 focus:ring-2 focus:ring-blue-500">${classFilterOptions.map(opt => `<option value="${opt.value}">${opt.label}</option>`).join('')}</select>` : ''}
                    ${!hideAddButton ? `<button id="add-new-btn" class="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg">Add New ${title}</button>` : ''}
                </div>
            </div>
            <div id="generic-list-container"></div>
        </div>
    `;

    renderTable(items);
    
    const addNewBtn = document.getElementById('add-new-btn');
    if (addNewBtn) {
        addNewBtn.onclick = () => {
            const addFunction = config.customAddFunction || (() => {
                openFormModal(`Add New ${title}`, formFields, async (formData) => {
                    await apiService.create(collectionName, formData);
                    showToast(`${title} added successfully!`, 'success');
                    renderGenericListPage(config);
                });
            });
            addFunction();
        };
    }
    
    const handleFilter = () => {
        const searchTerm = document.getElementById('search-input')?.value.toLowerCase() || '';
        const classFilterValue = document.getElementById('class-filter')?.value || '';
        const roleFilterValue = document.getElementById('role-filter')?.value || '';

        let filteredItems = [...originalItems];

        if (searchTerm && searchKeys.length > 0) {
            filteredItems = filteredItems.filter(item => 
                searchKeys.some(key => item[key] && String(item[key]).toLowerCase().includes(searchTerm))
            );
        }
        if (classFilter && classFilterValue) {
            filteredItems = filteredItems.filter(item => item.classId === classFilterValue);
        }
        if (roleFilterValue) { // For staff page custom filter
             filteredItems = filteredItems.filter(item => item.role === roleFilterValue);
        }
        renderTable(filteredItems);
    };

    if(config.search) document.getElementById('search-input').oninput = handleFilter;
    if(classFilter) document.getElementById('class-filter').onchange = handleFilter;
    if(document.getElementById('role-filter')) document.getElementById('role-filter').onchange = handleFilter;
}



// --- REPLACE YOUR ENTIRE EXISTING openFormModal FUNCTION WITH THIS NEW ONE ---
function openFormModal(title, formFields, onSubmit, initialData = {}) {
    const config = window.currentPageConfig || {};
    const isEditing = Object.keys(initialData).length > 0;
    let newProfileImageData = null;
    let newNidImageData = null;

    // --- MODIFICATION START: More robust check to show profile actions ---
    // The list of titles for which the profile section should NOT be shown.
    const nonProfileTitles = [
        'Notice', 'Exam', 'Timetable', 'Communication', 'Class', 
        'Department', 'Fee', 'Salary', 'Expense', 'Book', 'List'
    ];

    // Determine if this is a profile-related modal.
    // It is a profile modal IF the collection is for users AND the title doesn't match non-profile items.
    let isProfileModal = ['students', 'teachers', 'users'].includes(config.collectionName) && 
                         !nonProfileTitles.some(t => title.toLowerCase().includes(t.toLowerCase()));
    // --- MODIFICATION END ---

    let profileActionsHtml = '';
    if (isProfileModal) {
        let avatarSrc, profileName, subtitleHtml, actionButtonsHtml;

        if (isEditing) {
            avatarSrc = initialData.profileImage || generateInitialsAvatar(initialData.name);
            profileName = initialData.name;
            
            if (config.collectionName === 'students') {
                subtitleHtml = `<p class="text-slate-400 text-sm">Roll: ${initialData.rollNo || 'N/A'}</p>`;
            } else if (config.collectionName === 'teachers') {
                 subtitleHtml = `<p class="text-slate-400 text-sm font-medium">ID: ${initialData.id || 'N/A'}</p><p class="text-slate-500 text-xs">${initialData.email || 'Not Available'}</p>`;
            } else if (config.collectionName === 'users') {
                subtitleHtml = `<p class="text-blue-400">${initialData.role || 'N/A'}</p>`;
            }

            actionButtonsHtml = `
                <div class="space-y-2 pt-4 border-t border-slate-700">
                    <button type="button" id="modal-reset-password-btn" class="w-full text-sm bg-slate-600 hover:bg-slate-700 text-white font-bold py-2 px-3 rounded-lg flex items-center justify-center gap-2"><i class="fas fa-key"></i> Reset Password</button>
                    <button type="button" id="modal-delete-btn" class="w-full text-sm bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-3 rounded-lg flex items-center justify-center gap-2"><i class="fas fa-trash-alt"></i> Delete ${config.title || 'Item'}</button>
                </div>
            `;
        } else {
            avatarSrc = generateInitialsAvatar('?');
            profileName = "New Profile";
            subtitleHtml = `<p class="text-slate-400 text-sm">Upload an image and fill in the details.</p>`;
            actionButtonsHtml = '';
        }
        
        const nidUploadHtml = (config.collectionName === 'users') ? `
            <div class="mt-4">
                <label for="modal-nid-upload" class="w-full text-sm bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-3 rounded-lg flex items-center justify-center gap-2 cursor-pointer">
                    <i class="fas fa-id-card"></i> Upload NID
                </label>
                <input type="file" id="modal-nid-upload" accept="image/*" class="hidden">
                <span id="nid-upload-status" class="text-xs text-slate-400 mt-1 block"></span>
            </div>
        ` : '';

        profileActionsHtml = `
            <div class="md:col-span-1 space-y-4 text-center p-4 bg-slate-900/50 rounded-lg profile-actions-column">
                <h4 class="text-lg font-semibold text-slate-200">Profile Actions</h4>
                <div class="relative group w-24 h-24 mx-auto">
                    <label for="modal-image-upload" class="cursor-pointer">
                        <img id="modal-img-preview" src="${avatarSrc}" alt="Profile Picture" class="w-24 h-24 rounded-full object-cover border-4 border-slate-700 shadow-lg">
                        <div class="absolute inset-0 flex items-center justify-center bg-black bg-opacity-60 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                            <i class="fas fa-camera text-xl text-white"></i>
                        </div>
                    </label>
                    <input type="file" id="modal-image-upload" accept="image/*" class="hidden">
                </div>
                <div>
                    <p class="font-bold text-xl text-white">${profileName}</p>
                    ${subtitleHtml}
                </div>
                ${nidUploadHtml}
                ${actionButtonsHtml}
            </div>
        `;
    }

    let standardFieldsHtml = '';
    const isAddingNew = !isEditing && (title === 'Add New Staff Member' || title === 'Add New Teacher');
    
    const createFieldHtml = (field, data) => {
        const value = data[field.name] || '';
        const labelHtml = `<label for="${field.name}" class="block text-sm font-medium text-slate-300">${field.label}</label>`;
        const inputClasses = "mt-1 block w-full px-3 py-2 bg-slate-800 border border-slate-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500";
        if (field.type === 'textarea') return `<div>${labelHtml}<textarea id="${field.name}" name="${field.name}" rows="3" ${field.required ? 'required' : ''} class="${inputClasses}">${value}</textarea></div>`;
        if (field.type === 'select') return `<div>${labelHtml}<select id="${field.name}" name="${field.name}" ${field.required ? 'required' : ''} class="${inputClasses}">${field.options}</select></div>`;
        return `<div>${labelHtml}<input type="${field.type}" id="${field.name}" name="${field.name}" value="${value}" ${field.required ? 'required' : ''} placeholder="${field.placeholder || ''}" class="${inputClasses}"></div>`;
    };

    if (isAddingNew) {
        let primaryHtml = '';
        let additionalHtml = '';
        let primaryFields = [];

        if (title === 'Add New Staff Member') {
            primaryFields = ['name', 'email', 'role', 'contact', 'password'];
        } else if (title === 'Add New Teacher') {
            primaryFields = ['name', 'email', 'subject', 'departmentId', 'contact', 'baseSalary'];
        }

        formFields.forEach(field => {
            if (primaryFields.includes(field.name)) {
                primaryHtml += createFieldHtml(field, initialData);
            } else {
                additionalHtml += createFieldHtml(field, initialData);
            }
        });
        
        if (additionalHtml.trim() !== '') {
             standardFieldsHtml = `
                ${primaryHtml}
                <div class="pt-2">
                    <button type="button" id="toggle-additional-info-btn" class="w-full text-sm bg-slate-600 hover:bg-slate-700 text-white font-bold py-2 px-3 rounded-lg flex items-center justify-center gap-2">
                        <i class="fas fa-plus"></i> Additional Information
                    </button>
                </div>
                <div id="additional-info-container" class="hidden space-y-4 pt-4 border-t border-slate-700">
                    ${additionalHtml}
                </div>
            `;
        } else {
            standardFieldsHtml = primaryHtml;
        }
       
    } else {
        standardFieldsHtml = formFields.map(field => createFieldHtml(field, initialData)).join('');
    }
    
    const formHtml = `
        <form id="modal-form" class="space-y-4">
            <div class="grid grid-cols-1 ${profileActionsHtml ? 'md:grid-cols-3' : ''} gap-6 max-h-[60vh] overflow-y-auto custom-scrollbar pr-2">
                ${profileActionsHtml}
                <div class="${profileActionsHtml ? 'md:col-span-2' : 'col-span-1'}">
                    <h4 class="text-lg font-semibold text-slate-200">Basic Information</h4>
                    <div class="space-y-4 mt-2">${standardFieldsHtml}</div>
                </div>
            </div>
            <div class="flex justify-end pt-4 border-t border-slate-600">
                <button type="submit" class="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg">Save Changes</button>
            </div>
        </form>
    `;

    ui.modalTitle.textContent = title;
    ui.modalBody.innerHTML = formHtml;
    
    formFields.forEach(field => {
        const el = document.getElementById(field.name);
        if (el && field.type === 'select' && initialData[field.name]) { 
            el.value = initialData[field.name]; 
        }
    });

    if (isProfileModal) {
        document.getElementById('modal-image-upload').addEventListener('change', (event) => { const file = event.target.files[0]; if(file){ const reader = new FileReader(); reader.onload = (e) => { newProfileImageData = e.target.result; document.getElementById('modal-img-preview').src = newProfileImageData; }; reader.readAsDataURL(file); } });
        const nidUploadInput = document.getElementById('modal-nid-upload');
        if (nidUploadInput) {
            nidUploadInput.addEventListener('change', (event) => {
                const file = event.target.files[0];
                const statusEl = document.getElementById('nid-upload-status');
                if(file) {
                    const reader = new FileReader();
                    reader.onload = (e) => { newNidImageData = e.target.result; if(statusEl) statusEl.textContent = "NID image selected."; showToast("NID image has been attached.", "success"); }; 
                    reader.readAsDataURL(file);
                } else { if(statusEl) statusEl.textContent = ""; }
            });
        }
        if (isEditing) {
            document.getElementById('modal-delete-btn').onclick = () => { if (config.onDeleteItem) config.onDeleteItem(initialData.id); };
            document.getElementById('modal-reset-password-btn').onclick = async () => {
                let userAccountEntry;
                if(config.collectionName === 'students') { userAccountEntry = Object.entries(appDatabase.users).find(([key, val]) => val.studentId === initialData.id); } 
                else if (config.collectionName === 'teachers') { userAccountEntry = Object.entries(appDatabase.users).find(([key, val]) => val.teacherId === initialData.id); }
                else { userAccountEntry = Object.entries(appDatabase.users).find(([key, val]) => key === initialData.id); }
                if (!userAccountEntry) { showToast('Could not find linked user account.', 'error'); return; }
                const username = userAccountEntry[0];
                const newPassword = prompt(`Enter a new password for ${initialData.name}.\nLeave blank to cancel.`);
                if (newPassword && newPassword.trim() !== '') { appDatabase.users[username].password = newPassword.trim(); await apiService.save(); showToast('Password reset.', 'success'); }
            };
        }
    }
    
    const toggleBtn = document.getElementById('toggle-additional-info-btn');
    if(toggleBtn) {
        toggleBtn.onclick = () => {
            const container = document.getElementById('additional-info-container');
            const isHidden = container.classList.toggle('hidden');
            toggleBtn.innerHTML = isHidden 
                ? `<i class="fas fa-plus"></i> Additional Information` 
                : `<i class="fas fa-minus"></i> Hide Information`;
        };
    }
    
    document.getElementById('modal-form').addEventListener('submit', async (e) => {
        e.preventDefault();
        const submitButton = e.target.querySelector('button[type="submit"]');
        submitButton.disabled = true;
        submitButton.innerHTML = `<i class="fas fa-spinner fa-spin mr-2"></i> Saving...`;
        const formData = Object.fromEntries(new FormData(e.target));
        if (newProfileImageData) { formData.profileImage = newProfileImageData; }
        if (newNidImageData) { formData.nidImage = newNidImageData; }
        try { 
            await onSubmit(formData); 
        } catch (error) { 
            console.error("Error submitting form:", error);
            showToast('An error occurred while saving.', 'error');
        } finally {
            closeAnimatedModal(ui.modal);
        }
    });

    const modalContent = ui.modal.querySelector('.modal-content');
    modalContent.classList.add('!max-w-4xl');
    openAnimatedModal(ui.modal);
    ui.modal.addEventListener('transitionend', () => { if (!ui.modal.classList.contains('show')) { modalContent.classList.remove('!max-w-4xl'); } }, { once: true });
}

function exportToCsv(filename, headers, rows) {
   const sanitizeCell = (cell) => {
        let strCell = String(cell === null || cell === undefined ? '' : cell);
        // If the cell contains a comma, quote, or newline, enclose it in quotes
        if (strCell.search(/("|,|\n)/g) >= 0) {
            // Also, double up any existing quotes
            strCell = `"${strCell.replace(/"/g, '""')}"`;
        }
        return strCell;
    };

    const sanitizedRows = rows.map(row => row.map(sanitizeCell));
    let csvContent = "data:text/csv;charset=utf-8," 
        + headers.join(",") + "\n" 
        + sanitizedRows.map(e => e.join(",")).join("\n");

    const encodedUri = encodeURI(csvContent); 
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri); 
    link.setAttribute("download", filename);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    showToast(`Report ${filename} downloaded.`, 'success');
}
