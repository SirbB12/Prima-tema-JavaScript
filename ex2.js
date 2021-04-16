class Utilizator {
    constructor(nume, prenume, varsta, hobbiuri) {
        this.nume = nume
        this.prenume = prenume
        this.varsta = varsta
        this.hobbiuri = hobbiuri
    }


}

const utilizator1 = new Utilizator("Ionescu", "Ana", 20, ["volley", "Front-end Developer"])
const utilizator2 = new Utilizator("Popescu", "Mihai", 25, ["fotbal", "inot", "pescuit"])
const utilizator3 = new Utilizator("Dumitrescu", "Denisa", 18, ["muzica", "dans", "Front-end Developer", "jocuri"])
const utilizator4 = new Utilizator("Stanciu", "Mihai", 16, ["tenis", "parasutism"])
const utilizator5 = new Utilizator("Popa", "Iulia", 17, ["gatit", "arta", "Front-end Developer"])

let users = [];
users.push(utilizator1, utilizator2, utilizator3, utilizator4, utilizator5);
console.log(users);
console.log("");
console.log("Toti utilizatorii cu prenumele Mihai");
console.log("");
for (let i = 0; i < users.length; i++) {
    if (users[i].prenume === "Mihai") {
        console.log(users[i]);
    }
}
console.log("");
console.log("Toti utilizatorii cu varsta mai mare de 18 ani");
console.log("");
for (let i = 0; i < users.length; i++) {
    if (users[i].varsta > 18) {
        console.log(users[i]);
    }
}
console.log("");
console.log("Toti utilizatorii cu hobiul Front-end Developer")
console.log("");
for (let i = 0; i < users.length; i++) {
    if (users[i].hobbiuri.includes("Front-end Developer")) {
        console.log(users[i]);
    }
}

console.log("");
console.log("Toate prenumele")
console.log("");
for (let i = 0; i < users.length; i++) {

    console.log(users[i].prenume);

}