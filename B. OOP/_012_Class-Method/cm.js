#!/usr/bin/env node

console.log("===Class Method===")


// ================================================================================
// Class Method:
// * Membuat method di class sebenarnya bisa dilakukan dengan cara seperti menambahkan method di constructor function
// * Namun, hal tersebut sebenarnya menambahkan method ke dalam instance object
// * Khusus untuk method sebaiknya kita menambahkan ke prototype, bukan ke instance object
// * Untungnya di class ada cara yang lebih mudah untuk menambahkan method secara otomatis ke dalam prototype
// ================================================================================


// ================================================================================
// Kode Class Method:

class Person
{
    constructor(name) 
    {
        this.name = name
    }

    sayHello() // Method
    {
        console.log(`Hello ${this.name}`)
    }
}

const ulhaq = new Person("Ulhaq")
ulhaq.sayHello()
// ================================================================================
