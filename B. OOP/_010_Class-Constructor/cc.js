#!/usr/bin/env node

console.log("===Class Constructor===")


// ================================================================================
// Class Constructor:
// * Di class kita bisa menambahkan constructor, dengan menggunakan constructor kita juga bisa menambahkan parameter saat pertamakali membuat objectnya
// * Untuk membuat constructor di class, kita bisa menggunakan kata kunci construcotr
// ================================================================================


// ================================================================================
// Kode Class Constructor:

class Person {
    constructor(name) {
        // Kode di dalam sini akan langsung dieksekusi
        this.name = name
    }
}

const ulhaq = new Person("Ulhaq")
console.log(ulhaq)

const budi = new Person("Budi")
console.log(budi)
// ================================================================================
