#!/usr/bin/env node

console.log("===Super Constructor===")


// ================================================================================
// Super Constructor:
// * Class inheritance sifatnya seperti prototype inheritance
// * Bagaimana dengan constructor inheritance? Sebenarnya constructor inheritance hanyalah melakukan eksekusi constructor lain dengan tujuan agar property di constructor lain bisa ditambahkan ke instance object ini
// * Dalam kasus ini, jika kita ingin mencapai hasil yang sama, kita bisa menggunakan kata kunci 'super(this, property_name)' di dalam constructor
// * Kata kunci 'super' digunakan untuk memanggil constructor super class
// * Jika di child class kita membuat constructor, maka kita wajib memanggil parent constructor, walaupun di parent tidak ada constructor


// Kode: Super Constructor
class Employee {
    constructor(name) {
        this.name = name
    }

    sayHello(name) {
        console.log(`Hi ${name}, my name is Employee ${this.name}`)
    }
}

class Manager extends Employee {
    constructor(name, age) {
        super(name) // Akan mengirim 'name' pada class ini ke parent calss | Wajib jika kita ingin membuat constructor di child class walaupun tidak ada constructor di super class (parent class)
        this.age = age
    }

    sayHello(name) {
        console.log(`Hi ${name}, my name is Manager ${this.name}`)
    }
}

const budi = new Employee("Budi")
budi.sayHello("Ulhaq")

const joko = new Manager("Joko", 29)
joko.sayHello("Budi")
// ================================================================================
