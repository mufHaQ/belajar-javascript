#!/usr/bin/env node

console.info('===Operator In===')


// ================================================================================
// Operator In:
// * In adalah operator untuk mengecek apakah sebuah property/index ada di dalam object/array atau tidak
// * In operator menghasilkan boolean

const person = {
    nama: "Dliyaulhaq",
    alamat: "Indonesia"
}

const result = "alamat" in person // true
console.info(result)
// ================================================================================


// ================================================================================
// Peringatan:
// * In operator hanya akan mengecek apakah sebuah property/index ada atau tidak
// * Jadi jika nilai property/indexnya undefined atau null, akan dianggap ada
// ================================================================================


// ================================================================================
const arr = [null, "Ulhaq", undefined]
const hasil = 2 in arr // true, karena index 2 ada isinya walaupun undefined
console.info(hasil)
// ================================================================================
