#!/usr/bin/env node

console.log("===Class Method===")


// ================================================================================
// Class Method:
// * Membuat method di class sebenarnya bisa dilakukan dengan cara seperti menambahkan method di constructor function
// * Namun, sebenarnya hal tersebut menambahkan method ke dalam instance object
// * Khusus untuk method sebaiknya kita menambahkan method ke prototype, bukan ke instance object
// * Untungnya di class, ada cara mudah untuk menambahkan method dan secara otomatis ditambahkan ke dalam prototype


// Kode: Class Method
class Person {
    constructor(name) {
        this.name = name
        // this.sayHello = () => { } // Tidak direkomendasikan membuat method di sini karena akan masuk menjadi instance object
    }

    sayHello(name) { // Masuk ke prototype
        console.log(`Hi ${name}, my name is ${this.name}`)
    }
}

const ulhaq = new Person("Dliyaulhaq Mufliansyah")
console.log(ulhaq)
ulhaq.sayHello("Budi")
// ================================================================================
