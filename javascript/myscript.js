

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

for (let j = 0; j < 3; j++){

    let nomeAllievo = prompt("inserisci il nome");

    let cognomeAllievo = prompt("inserisci il cognnome");

    let etaAllievo = prompt("inserisci l'età");

    let allievo = nuovoAllievo(nomeAllievo, cognomeAllievo,etaAllievo);

    newStudents.push(allievo);
}

function nuovoAllievo(nome, cognome, anni){

    let allievo = {
        nome : nome,
        cognome : cognome,
        anni,
    };
    return allievo;
}

for (let k = 0; k < newStudents.length; k++){

    console.log("nome: "  + newStudents[k].nome + " " + "cognome: "  + newStudents[k].cognome 
    + " " + "anni: "  + newStudents[k].anni);
};