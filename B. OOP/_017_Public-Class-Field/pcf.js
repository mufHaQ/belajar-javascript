#!/usr/bin/env node

console.log("===Public Class Field===");

// ================================================================================
// Class Field:
// * Biasanya, saat kita ingin menambahkan field (property yang berisi value), kita akan menambahkannya di constructor
// * Namun ada proposal di ES yang mengajukan pembuatan public class field ditempatkan diluar constructor, selevel dengan penempatan method
// * Mungkin sudah didukung di beberapa browser
// * https://github.com/tc39/proposal-class-fields
// ================================================================================

// ================================================================================
// Public Class Field:
// * Dalam proposal tersebut juga disebutkan bahwa ES akan mendukung access modifier public dan private
// * Public artinya kita bisa mengakses property dari luar class, private artinya hanya bisa diakses di dalam class
// * Untuk membuat public class field, kita bisa langsung buat nama field dengan value yang selevel dengan method
// * Jika kita tidak memasukkan value ke dalam field tersebut, field tersebut akan bernilai undefined

// Kode: Public Class Field
{
  class Customer {
    firstName;
    lastName;
    balance = 0;
  }

  const ulhaq = new Customer();
  // console.log(ulhaq)
}
// ================================================================================

// ================================================================================
// Kode: Public Class Field dan Constructor
{
  class Customer {
    firstName;
    lastName;
    balance = 0;

    constructor(fn, ln) {
      this.firstName = fn;
      this.lastName = ln;
    }
  }

  const ulhaq = new Customer("Dliyaulhaq", "Mufliansyah");
  console.log(ulhaq);
}
// ================================================================================
