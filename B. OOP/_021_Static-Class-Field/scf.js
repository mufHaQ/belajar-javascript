#!/usr/bin/env node

console.log("===Static Class Field===")


// ================================================================================
// Kata Kunci Static:
// * Static adalah kata kunci yang bisa kita tambahkan sebelum nama field atau method, biasanya ketika kita membuat field atau method, secara otomatis field akan menjadi property di instance object dan method akan menjadi function di prototype
// * Jika kita tambahkan static, hal tersebut tidak akan terjadi
// ================================================================================


// ================================================================================
// Static Class Field:
// * Jika kita tambahkan static dalam class field, maka secara otomatis field tersebut bukan lagi milik instance object, tapi milik classnya itu sendiri
// * Biasanya static digunakan jika kita ingin membuat utility field atau function
// * Cara mengakses static field pun tidak lagi melalui object, melainkan lewat classnya
// * Static class field bisa diartikan sifatnya global, tidak peduli diakses dimana atau siapa yang mengakses, hasilnya akan sama


// Kode: Static Class Field
class Configuration {
    static name = "Belajar Javascript"
    static version = 1.0
    static author = "Dliyaulhaq Mufliansyah"
}

console.log(Configuration)
console.log(Configuration.author)
// ================================================================================
