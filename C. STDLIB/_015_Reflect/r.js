#!/usr/bin/env node

console.log("===Reflect===")


// ================================================================================
// Reflect:
// * Merupakan class yang digunakan untuk mengeksekusi JS function
// * Tidak memiliki constructor, dan cara menggunakannya tidak dengan membuat object dengan new Reflect()
// * Bentuknya adalah static, menggunakan banyak sekali static method
// * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Reflect


// Kode: Reflect
{
    const person = {}

    Reflect.set(person, "firstName", "Dliyaulhaq")
    Reflect.set(person, "lastName", "Mufliansyah")

    console.log(person)

    console.log(Reflect.has(person, "firstName")) // true
    console.log(Reflect.has(person, "middleName")) // false
    console.log(Reflect.has(person, "lastName")) // true

    console.log(Reflect.get(person, "firstName")) // Dliyaulhaq
}
// ================================================================================
