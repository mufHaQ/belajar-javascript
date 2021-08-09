#!/usr/bin/env node

console.log("===Prototype Inheritance===")


// ================================================================================
// Prototype Inheritance:
// * Sekarang kita sudah tahu bahwa prototype selalu memiliki parent, artinya dia adalah turunan, parent tertinggi adalah Object Prototype
// * Pertanyaanya, bagaimana jika kita ingin melakukan inheritance ke Prototype lain?
// * Hal ini juga bisa dilakukan, namun agak sedikit sulit, karena hal ini sebenarnya untuk JavaScript modern, kita tidak lagi direkomendasikan menggunakan OOP dengan prototype, karena di ES6 sudah dikenalkan kata kunci 'class'
// ================================================================================


function Employee(name) {
    this.name = name
}

function Manager(name) {
    this.name = name
}


// ================================================================================
// Kode: Prototype Inheritance yang Salah
{
    Manager.prototype = Employee.prototype // Salah!! Akan diambil dari yang paling terakhir menambahkan prototype
    Employee.prototype.sayHello = function(name) {console.log(`Hello ${name}, my name is Employee ${this.name}`)}
    Manager.prototype.sayHello = function(name) {console.log(`Hello ${name}, my name is Manager ${this.name}`)} // Ini yang akan diambil

    console.log("Salah: ")
    
    const employee = new Employee("Budi")
    employee.sayHello("Ulhaq") // Hello Ulhaq, my name is Manager Budi
    
    const manager = new Manager("Ulhaq")
    manager.sayHello("Budi") // Hello Budi, my name is Manager Ulhaq

    console.log(employee)
    console.log(manager)
}
// ================================================================================


// ================================================================================
// Kode: Prototype Inheritance yang Benar
{
    Manager.prototype = Object.create(Employee.prototype) // Benar!!
    Employee.prototype.sayHello = function(name) {console.log(`Hello ${name}, my name is Employee ${this.name}`)}
    Manager.prototype.sayHello = function(name) {console.log(`Hello ${name}, my name is Manager ${this.name}`)}

    console.log("\nBenar: ")
    
    const employee = new Employee("Budi")
    employee.sayHello("Ulhaq") // Hello Ulhaq, my name is Employee Budi
    
    const manager = new Manager("Ulhaq")
    manager.sayHello("Budi") // Hello Budi, my name is Manager Ulhaq

    console.log(employee)
    console.log(manager)
}
// ================================================================================
