class Person {
    static species = "human"
    constructor(name, age) {
        this.name = name
        this.age = age
    }

    info() {
        console.log(`Name: ${this.name}, Age: ${this.age}, Species: ${Person.species}`)
    }

    // Setter Getter / new attributes
    set setAge(newAge) {
        this.age = newAge
    }
    get getAge() {
        return this.age
    }
}

const person1 = new Person("Ankit", 30)
console.log(Person.species) // Accessing static property
person1.info() // Calling method

person1.setAge = 67 // Using setter to set new age
console.log(person1.getAge) // Using getter to get age

// Inheritance
class Student extends Person {
    constructor(name, age, grade) {
        super(name, age) // calling parent class constructor
        this.grade = grade
    }
    gradeInfo() {
        console.log(`Name: ${this.name}, Grade: ${this.grade}`)
    }
}

const student1 = new Student("Binnol", 20, "A")
student1.info() // calling parent class method
student1.gradeInfo() // calling child class method