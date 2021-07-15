#!/usr/bin/env node

console.log("===Class Property===")


// ================================================================================
// Class Property:
// * Sama seperti constructor function, di dalam class kita bisa menambahkan property
// * Karena hasil akhirnya adalah sebuah object, jadi menambahkan property di object bisa juga dilakukan di instance objectnya
// ================================================================================


// ================================================================================
// Kode Class Property:

class Person
{
    constructor(name)
    {
        this.name = name
    }
}

const ulhaq = new Person("Ulhaq")
console.log(ulhaq)
// ================================================================================
