#!/usr/bin/env node

console.log("===Boolean===")


// ================================================================================
// Boolean:
// * Boolean merupakan wrapper class untuk tipe data primitif boolean
// * Boolean memiliki method toString() untuk mengkonfersi ke string
// * Dan memiliki method valueOf() untuk mengkonversi ke boolean primitif
// * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean


// Kode: Boolean
{
    // const bool = new Boolean(true) // object
    const bool = Boolean(true) // boolean

    console.log(bool) // true
    console.log(typeof bool) // boolean, jika kita membuat instance object, maka tipe datanya akan menjadi object
    console.log(bool.toString()) // String 'true'
    console.log(bool.valueOf()) // true
}
// ================================================================================
