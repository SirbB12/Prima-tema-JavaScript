let Animal1 = {
    name: "Aki",
    type: "Dog",
    age: 5,
    race: "Shiba Inu",
    getAnimal1Speak: function() {
        console.log("Bark!", "Bark!", "Bark!")

    },

    getAnimal1Details() {
        console.log("Type:" + this.type, +"Name:" + this.name + "Age:" + this.age + "Race:" + this.race);
    }
}
console.log(Animal1);
let animal2 = {
    name: "Biiiird",
    type: "Parrot",
    age: 1,
    race: "Lovebird"
}