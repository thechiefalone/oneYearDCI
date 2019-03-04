var Person = {
    firstName: "Alperen",
    lastName: "Ozkan",
    birthYear: 1984,
    hair: "black",
    married: true,

    fullName: function () {
        return this.firstName + " " + this.lastName;

    },
    age: function () {
        let today = new Date();
        return today.getFullYear() - this.birthYear;
    },
    familyStatus: function () {
        if (this.married == true) {
            return ("married");
        } else {
            return ("single");
        }
    }

}

console.log(Person.firstName);
console.log(Person.fullName());
console.log(Person.age());
console.log(Person.familyStatus());