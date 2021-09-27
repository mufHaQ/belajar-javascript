#!/usr/bin/env node

console.log("===String===");

// ================================================================================
// String:
// * Tipe data String sudah kita bahas di JavaScript Dasar
// * Namun kita belum membahas instance method atau juga instance properties yang terdapat di String
// * https://developer.mozilla.org/en-US/docs/web/javascript/reference/global_objects/String
// ================================================================================

// ================================================================================
// String Instance Method dan Properties:
// * String sendiri banyak sekali instance method dan properties
// * Hal ini membuat manipulasi data string menjadi sangat mudah, seperti mengubah menjadi lowercase, UPPERCASE, memotong string menjadi Array, dll
// * https://developer.mozilla.org/en-US/docs/web/javascript/reference/global_objects/String#instance_methods

// Kode: String Instance Method dan Properties
const myName = "Dliyaulhaq Mufliansyah";
console.log(myName.length);
console.log(myName.toLowerCase());
console.log(myName.toUpperCase());
console.log(myName.split(" "));

const input = "     Input Data     ";
console.log(input.trim());
console.log(input.trimEnd());
console.log(input.trimStart());
// ================================================================================
