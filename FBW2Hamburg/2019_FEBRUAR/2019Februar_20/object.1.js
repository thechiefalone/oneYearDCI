function Person(first, last, birth, hair, isMarried) {
    this.firstName = first;
    this.lastName = last;
    this.birthYear = birth;
    this.hairColor = hair;
    this.status = isMarried;
    // function 
    this.fullName = function () {
        return this.firstName + " " + this.lastName;
    }
    this.familyStatus=function(){
    //     return (this.status?"Married":"Single");
    // }
    if (this.status) {
        return "Married";
    }
    return "Single";
}
}

let trainer = new Person("alperen", "ozkan", 1984, "black", true);
let participant1 = new Person("ahmad", "osman", 1986, "brown", true);
let participant2 = new Person("petros", "paulos", 1992, "black", false);

console.log(trainer, participant1, participant2);

console.log(participant1.birthYear);



console.log(trainer.fullName());
console.log(participant1.fullName());
console.log(participant2.familyStatus());
console.log(trainer.familyStatus());