#!/usr/bin/env node

console.log("===Super Constructor===")


// ================================================================================
// Super Constructor:
// * Class inheritance sifatnya seperti prototype inheritance
// * Bagaimana dengan constructor inheritance? Sebenarnya constructor inheritance hanyalah melakukan eksekusi constructor lain dengan tujuan agar property di constructor lain bisa ditambahkan ke instance object ini
// * Dalam kasus ini, jika kita ingin mencapai hasil yang sama, kiat bisa menggunakan kata kunci 'super' di dalam constructor
// * Kata kunci 'super' digunakan untuk memanggil constructor super class
// * Jika di child class kita membuat constructor, maka kita wajib memanggil parent constructor, walaupun di parent tidak ada constructor
// ================================================================================


// ================================================================================
// Kode Super Constructor:

class Employee
{
    constructor(name)
    {
        this.name = name
    }

    sayHello(name)
    {
        console.log(`Employee: Hello ${name}, my name is ${this.name}`)
    }
}

class Manager extends Employee
{
    // constructor(name) // Karena saya tidak membuat property baru, jadi saya tidak perlu keyword 'super'
    // {
    //     super(name)
    // }

    sayHello(name)
    {
        console.log(`Manager: Hello ${name}, my name is ${this.name}`)
    }
}

const employee = new Employee("Employ")
employee.sayHello("Manager")

const manager = new Manager("Manag")
manager.sayHello("Employ")
// ================================================================================
