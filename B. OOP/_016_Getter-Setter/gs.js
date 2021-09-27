#!/usr/bin/env node

console.log("===Getter & Setter===");

// ================================================================================
// Getter & Setter:
// * Class juga mendukung pembuatan getter dan setter
// * Perlu diingat, getter dan setter ini akan berada di prototype, bukan di instance object

// Kode: Getter & Setter
class Person {
  constructor(fn, ln) {
    this.firstName = fn;
    this.lastName = ln;
  }

  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  set fullName(names) {
    const name = names.split(" ");
    this.firstName = name[0];
    this.lastName = name[1];
  }
}

const ulhaq = new Person("Dliyaulhaq", "Mufliansyah");

console.log(ulhaq);

console.log(ulhaq.fullName);
ulhaq.fullName = "Mufliansyah Dliyaulhaq";
console.log(ulhaq.fullName);
// ================================================================================
