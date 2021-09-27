#!/usr/bin/env node

console.log("===Math===");

// ================================================================================
// Math:
// * Math merupakan class di JavaScript yang berisikan static property/method untuk operasi matematika
// * Ada banyak sekali static property dan method di Math
// * Math hanya bisa digunakan untuk tipe data Number, tidak untuk data BigInt
// * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math

// Kode: Math
{
  console.log(Math.max(10, 5, 15, 20, 35, 25)); // 35
  console.log(Math.min(10, 5, 15, 20, 35, 25)); // 5
  console.log(Math.round(10.5)); // 11
  console.log(Math.round(10.4)); // 10
  console.log(Math.ceil(10.5)); // 11
  console.log(Math.floor(10.5)); // 10
}
// ================================================================================
