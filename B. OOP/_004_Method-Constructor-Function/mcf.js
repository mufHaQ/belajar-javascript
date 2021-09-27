#!/usr/bin/env node

console.log("===Method di Constructor Function===");

// ================================================================================
// Method di Constructor Function:
// * Sama seperti pada tipe data object, kita juga bisa menambahkan method ke dalam constructor function
// * Jika kita menambahkan method di constructor function, secara otomatis object yang dibuat akan memiliki method tersebut

// Kode: Method di Constructor Function
{
  function Person() {
    this.first_name = "";
    this.last_name = "";
    this.sayHello = (name) => {
      console.log(`Hello ${name}, my name is ${this.first_name}`);
    };
  }

  const ulhaq = new Person();
  ulhaq.first_name = "Dliyaulhaq";
  ulhaq.last_name = "Mufliansyah";

  ulhaq.sayHello("Budi");
}
// ================================================================================
