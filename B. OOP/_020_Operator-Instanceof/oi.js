#!/usr/bin/env node

console.log("===Operator Instanceof===");

// ================================================================================
// Operator Instanceof:
// * Kadang ada kasus kita ingin mengecek apakah sebuah object merupakan instance dari class tertentu atau bukan
// * Kita tidak bisa menggunakan operator typeof, typeof adalah operator untuk mengecek tipe data, jika kita menggunakan operator typeof, maka hasilnya akan menjadi 'object'
// * Operator instanceof akan menghasilkan boolean

// Kode: Operator Instanceof
{
  class Employee {}
  class Manager {}

  const employee = new Employee();
  const manager = new Manager();

  // console.log(`employee instanceof Employee: ${employee instanceof Employee}`) // true
  // console.log(`manager instanceof Employee: ${manager instanceof Employee}`) // false
  // console.log(`manager instanceof Manager: ${manager instanceof Manager}`) // true
  // console.log(`employee instanceof Manager: ${employee instanceof Manager}`) // false
}
// ================================================================================

// ================================================================================
// Operator Instanceof di Class Inheritance
// * Operator instanceof mendukung class inheritance, arinya instanceof juga bisa digunakan untuk mengecek, apakah sebuah object merupakan instance dari class tertentu atau turunan dari class tertentu

// Kode: Operator Instanceof di Class Inheritance
{
  class Employee {}
  class Manager extends Employee {}

  const employee = new Employee();
  const manager = new Manager();

  console.log(`employee instanceof Employee: ${employee instanceof Employee}`); // true
  console.log(`manager instanceof Employee: ${manager instanceof Employee}`); // true
  console.log(`manager instanceof Manager: ${manager instanceof Manager}`); // true
  console.log(`employee instanceof Manager: ${employee instanceof Manager}`); // false
}
// ================================================================================
