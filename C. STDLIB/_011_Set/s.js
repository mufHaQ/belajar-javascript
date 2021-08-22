#!/usr/bin/env node

console.log("===Set===")


// ================================================================================
// Set:
// * Merupakan implementasi dari struktur data yang berisikan data-data unique
// * Set mirip seperti Array, hanya saja isi datanya selalu unique
// * Jika kita menambahkan data yang sama, maka data hanya akan diterima satu saja
// * Set mengimplementasikan kontrak iterable, sehingga bisa diiterasi secara default
// * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set


// Set Instance Method & Property:
// |--Method & Property-|---------------Keterangan--------------|
// | size               | Panjang Set                           |
// | add(value)         | Menambahkan data ke Set               |
// | has(value)         | Mengecek apakah Set memiliki value    |
// | delete(value)      | Menghapus value dari Set              |
// | forEach(value =>)  | Melakukan iterasi Set                 |
// |--------------------|---------------------------------------|


// Kode: Set
{
    const set = new Set()

    set.add("Dliyaulhaq")
    set.add("Mufliansyah")
    set.add("Mufliansyah") // Menimpa data sebelumnya

    console.table(set)
    console.log(set.has("Dliyaulhaq")) // true
    console.log(set.size) // 2

    console.log("\nIterasi Set:")
    set.forEach(val => console.log(val))
}
// ================================================================================
