#!/usr/bin/env node

console.log("===Class Inheritance===");

// ================================================================================
// Class Inheritance:
// * Sebelumnya kita sudah tahu bahwa prototype mendukung pewarisan, walaupun agak sedikit sulit cara pembuatannya
// * Untungnya diperbaiki di ES6 dengan fitur class
// * Sebuah class bisa melakukan pewarisan dari class lainnya dengan menggunakan kata kunci 'extends'
// * Di JavaScript, class inheritance hanya bisa memiliki satu parent class seperti pada prototype inheritance

// Kode: Class Inheritance
class Employee {
  sayHello(name) {
    console.log(`Hi ${name}, my name is Employee ${this.name}`);
  }
}

class Manager extends Employee {
  sayHello(name) {
    console.log(`Hi ${name}, my name is Manager ${this.name}`);
  }
}

const budi = new Employee();
budi.name = "Budi";
console.log(budi);
budi.sayHello("Ulhaq");

const ulhaq = new Manager();
ulhaq.name = "Ulhaq";
console.log(ulhaq);
ulhaq.sayHello("Budi");
// ================================================================================
