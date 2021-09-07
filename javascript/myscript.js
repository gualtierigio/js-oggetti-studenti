

let student = {
    name : "Gino",
    surname : "Bello",
    age : 31,
};

for (let studentData in student){
    console.log(student[studentData]);
};

let students = [
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

for (let i = 0; i < students.length; i++){

    console.log(students[i].name + " " + students[i].surname);
}

let newStudents = [];

for (let j = 0; j < 1; j++){

    newStudents.push(nuovoAllievo());
}

function nuovoAllievo(allievoNumero, nome, cognome, anni){

    allievoNumero = {nome : prompt("inserisci il nome dello studente"),
    cognome : prompt("inserisci il cognome dello studente"),
    anni : prompt("inserisci l'età dello studente"),
};
}

for (let k = 0; k < newStudents.length; k++){

    console.log(newStudents[k].nome + " " + newStudents[k].cognome);
};