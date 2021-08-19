#!/usr/bin/env node

console.log("===BigInt===")


// ================================================================================
// BigInt:
// * Merupakan tipe data Number yang bisa mencakup data angka lebih dari Number.MAX_SAFE_INTEGER
// * Untuk kasus number yang lebih dari itu, sangat disarankan menggunakan tipe data BigInt
// * Cara menggunakan BigInt sama saja dengan penggunaan Number dan juga operatonya
// * https://developer.mozilla.org/en-us/docs/web/javascript/reference/global_objects/bigint


// Kode: BigInt
{
    const a = BigInt(Number.MAX_SAFE_INTEGER)
    const b = BigInt(Number.MAX_SAFE_INTEGER)

    const c = a + b

    console.log(c.toLocaleString("id-ID"))
    console.log(typeof c)
}
// ================================================================================
