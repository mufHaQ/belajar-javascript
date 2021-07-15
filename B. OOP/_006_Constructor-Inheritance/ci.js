#!/usr/bin/env node

console.log("===Constructor Inheritance===")


// ================================================================================
// Constructor Inheritance:
// * Dalam constructor, kita biasanya membuat property baik berisi value ataupun function
// * Di dalam constructor, kita bisa memanggil constructor lain, dengan begitu kita bisa mewarisi semua property yang dibuat di constructor lain
// * Untuk memanggil constructor lain, kita bisa menggunakan NamaConstructor.call(this, parameter)
// ================================================================================


// ================================================================================
// Kode Constructor Inheritance:

function Person(firstName, lastName, age = "UNKNOWN") {
    this.firstName = firstName
    this.lastName = lastName
    this.age = age
}

function Student(firstName, lastName, age) {
    Person.call(this, firstName, lastName, age)
    this.job = "Student"
}

const ulhaq = new Student("Dliyaulhaq", "Mufliansyah", 16)
console.log(ulhaq.job)
console.log(ulhaq.age)
// ================================================================================
