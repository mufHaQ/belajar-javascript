#!/usr/bin/env node

console.log("===Number===")


// ================================================================================
// Number:
// * Number merupakan function yang digunakan untuk melakukan konversi tipe data lain ke tipe data number
// * Jika data tidak bisa dikonversi ke number, maka hasilnya akan menjadi NaN
// * https://developer.mozilla.org/en-US/Web/JavaScript/Reference/Global_Objects/Number


// Kode: Number
{
    console.log("Number:")
    const input = "12345"
    const number = Number(input)

    console.log(typeof input)   // string
    console.log(typeof number)  // number
    console.log(Number("NaN"))  // NaN
}
// ================================================================================


// ================================================================================
// Number Static Properties:
// * Number memiliki banyak static properties, seperti:
//      1. Number.MIN_VALUE untuk mendapatkan number minimal
//      2. Number.MAX_VALUE untuk mendapatkan number maksimal
// * https://developer.mozilla.org/en-US/docs/web/javascript/reference/global_objects/number#static_properties


// Kode: Number Static Properties
{
    console.log("\nNumber Static Properties:")
    console.log(Number.MAX_VALUE)
    console.log(Number.MIN_VALUE)
    console.log(Number.MAX_SAFE_INTEGER)
    console.log(Number.MIN_SAFE_INTEGER)
    console.log(Number.NaN)
}
// ================================================================================


// ================================================================================
// Number Static Methods:
// * Number memiliki banyak static method, seperti:
//      1. Number.isNaN(value) untuk mengecek apakah value == NaN
//      2. Number.isInteger(value) untuk mengecek apakah value berupa integer atau bukan
// * https://developer.mozilla.org/en-US/docs/web/javascript/reference/global_objects/number#static_methods


// Kode: Number Static Methods
{
    console.log("\nNumber Static Methods:")

    const data = Number("12345")
    
    console.log(Number.isInteger(data))
    console.log(Number.isNaN(data))
}
// ================================================================================


// ================================================================================
// Number Instance Methods:
// * Number memiliki banyak instance method, seperti:
//      1. Number.toLocaleString(locale) untuk mengubah number menjadi string sesuai local:
//          https://www.lansweeper.com/knowledgebase/list-of-currency-culture-codes
//      2. Number.toString(radix) untuk mengubah number menjadi string sesuai radix
// * https://developer.mozilla.org/en-US/docs/web/javascript/reference/global_objects/number#instance_methods


// Kode: Number Instance Methods
{
    console.log("Number Instance Methods:")

    const val = Number(12345)
    console.log(val.toString(2)) // Binary
    console.log(val.toLocaleString("id-ID")) // 12.345
    console.log(val.toLocaleString("en-US")) // 12,345
}
// ================================================================================
