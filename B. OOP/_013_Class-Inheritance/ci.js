#!/usr/bin/env node

console.log("===Class Inheritance===")


// ================================================================================
// Class Inheritance:
// * Sebuah class bisa melakukan pewarisan dari class lainnya dengan menggunakan kata kunci 'extends'
// * Di JavaScript, class inheritance sama seperti prototype inheritance, hanya bisa memiliki satu parent class
// ================================================================================


// ================================================================================
// Kode Class Inheritance:

class Employee
{   
    sayHello() {
        console.log('Employee')
    }
}

class Manager extends Employee
{
    // Akan otomatis meng-override method 'sayHello' milik class Employee, tetapi jika tidak ada maka akan menggunakan method milik class Employee
    sayHello()
    {
        console.log('Manager')
    }
}

const employee = new Employee()
const manager = new Manager()

employee.sayHello()
manager.sayHello()
// ================================================================================
