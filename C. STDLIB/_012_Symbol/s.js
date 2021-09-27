#!/usr/bin/env node

console.log("===Symbol===");

// ================================================================================
// Symbol:
// * Merupakan tipe data yang digaransi akan selalu unique setiap kali kita membuat data symbol
// * Kadang banyak digunakan untuk membuat key pada object
// * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol

// Kode: Symbol
{
  console.log("\nSymbol:");

  console.log(Symbol("firstName") === Symbol("firstName")); // false

  const firstName = Symbol("firstName");
  const lastName = Symbol("lastName");
  const person = {};

  person[firstName] = "Dliyaulhaq";
  person[lastName] = "Mufliansyah";

  console.table(person); // Tidak akan ada isinya jika menggunakan nodejs, gunakan browser jika ingin melihat isinya
  console.table(person[firstName]); // Dliyaulhaq
}
// ================================================================================

// ================================================================================
// Symbol For:
// * Kadang agak sulit membuat Symbol karena harus selalu menggunakan variable
// * Pembuatan Symbol juga bisa menggunakan static method Symbol.for(key)
// * Jika kita menggunakan key yang sama, Symbol yang sama akan selalu dikembalikan

// Kode: Symbol For
{
  console.log("\nSymbol For:");
  console.log(Symbol.for("firstName") === Symbol.for("firstName")); // true

  const person = {};
  person[Symbol.for("firstName")] = "Mufliansyah";
  person[Symbol.for("firstName")] = "Dliyaulhaq"; // Menimpa Symbol sebelumnnya
  person[Symbol.for("lastName")] = "Mufliansyah";

  console.table(person); // Tidak akan ada isinya jika menggunakan nodejs, gunakan browser jika ingin melihat isinya
  console.log(person[Symbol.for("firstName")]); // Dliyaulhaq
}
// ================================================================================
