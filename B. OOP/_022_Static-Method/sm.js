#!/usr/bin/env node

console.log("===Static Method===");

// ================================================================================
// Static Method:
// * Kata kunci static juga tidak hanya bisa digunakan untuk field saja, tapi juga bisa digunakan untuk method
// * Jika kita menambahkan static pada method, artinya method tersebut jadi milik classnya, bukan prototype
// * Dan untuk mengakses method tersebut, kita bisa menggunakan cara yang sama seperti di static field

// Kode: Static Method
class MathUtil {
  static sum(...numbers) {
    return numbers.reduce((prev, curr) => prev + curr);
  }
}

console.log(MathUtil.sum(1, 2, 3, 4, 5));
console.log(MathUtil.sum(1, 1, 1, 1, 1));
// ================================================================================
