#!/usr/bin/env node

console.log("===Class Property===")


// ================================================================================
// Class Property:
// * Sama seperti pada constructor function, dalam class kita bisa menambahkan property
// * Karena hasil akhirnya adalah object, maka kita bisa menambahkan property di instance objectnya


// Kode: Class Property
class Person {
    constructor(name) {
        this.name = name
    }
}

const ulhaq = new Person("Dliyaulaq Mufliansyah")
console.log(ulhaq.name)
// ================================================================================
