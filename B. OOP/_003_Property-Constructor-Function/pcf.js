#!/usr/bin/env node

console.log("===Property di Constructor Function===");

// ================================================================================
// Property di Constructor Function:
// * Sebenarnya setelah kita membuat object, kita bisa dengan mudah menambahkan property ke dalam object tersebut hanya dengan menggunakan nama variablenya, diikuti tanda titik dan nama property
// * Namun jika seperti itu, alhasil constructor function yang sudah kita buat tidak terlalu berguna, karena propertynya hanya ada di object yang kita tambahkan property
// * Untuk menambahkan property di dalam semua object yang dibuat dari constructor function, kita bisa menggunakan kata kunci this lalu diikuti dengan nama propertynya

// Kode: Property di Constructor Function
{
  function Person() {
    this.firstName = "";
    // this.lastName = ""
  }

  const ulhaq = new Person();
  const budi = new Person();

  ulhaq.firstName = "Dliyaulhaq";
  ulhaq.lastName = "Mufliansyah";

  console.log(ulhaq);
  console.log(budi);
}
// ================================================================================
