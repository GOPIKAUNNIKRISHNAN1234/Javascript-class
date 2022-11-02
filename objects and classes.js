//objects
function Person(firstName, lastName, DOB) {
    this.firstName = firstName
    this.lastName = lastName
    this.DOB = new Date(DOB)
    this.getFullName = function () {
        return this.firstName + " " + this.lastName
    }
}

const person1 = new Person("mio", "bakery", "4-5-1998")
//console.log(person1.getFullName())


//class

class Personc {
    constructor(firstName, lastName, DOB) {
        this.firstName = firstName
        this.lastName = lastName
        this.DOB = new Date(DOB)
    }
    getFullName() {
        return this.firstName + " " + this.lastName
    }
    getFullYear(){
        return this.DOB.getFullYear()
    }
}

const person1c = new Personc("Ajay", "U", "4-5-1998")
console.log(person1c.getFullYear(),person1c.getFullName())