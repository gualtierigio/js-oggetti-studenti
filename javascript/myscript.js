

let student = {
    name : "Gino",
    surname : "Bello",
    age : 31,
};

for (let studentData in student){
    console.log(student[studentData]);
};

let students = [ "",
    student1 = {
        name : "Baby",
        surname : "Shark",
        age : 32,
    },
    student2 = {
        name : "Rosita",
        surname : "Gallo",
        age : 22,
    },
    student3 = {
        name : "Pablo",
        surname : "Escolab",
        age : undefined,
    }
];

for (let studentsData in students){
    console.log(students[1][studentsData.name]);
};