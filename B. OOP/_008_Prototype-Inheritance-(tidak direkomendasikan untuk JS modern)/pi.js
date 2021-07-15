#!/usr/bin/env node

console.log("===Prototype Inheritance===")


// ================================================================================
// Prototype Inheritance:
// * Sekarang kita sudah tahu bahwa prototype selalu memiliki parent, artinya dia adalah turunan, parent tertinggi adalah Object Prototype
// * pertanyaannya, bagaimana jika kita ingin melakukan inheritance ke prototype lain?
// * Hal ini bisa dilakukan, namun agak sedikit tricky, karena hal ini sebenarnya untuk JavaScript modern, tidak direkomendasikan lagi menggunakan OOP Prototype, karena di ES6 sudah dikenalkan kata kunci class
// ================================================================================


// ================================================================================
// Kode Prototype Inheritance:

function Person(name, lastName) {
    this.name = name
}

function Student(name) {
    this.name = name
    this.job = "Student"
}

// Person.prototype = Student.prototype // Salah
Person.prototype = Object.create(Student.prototype)

Person.prototype.sayHello = function() {
    console.log(`Hello ${this.name}`)
}

Student.prototype.sayHello = function() {
    console.log(`Hello ${this.name}, I am a ${this.job}`)
}

const person = new Person("Person")
person.sayHello()
console.log(person)

const student = new Student("Student")
student.sayHello()
console.log(student)
// ================================================================================
