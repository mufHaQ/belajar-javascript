#!/usr/bin/env node

console.log("===RegExp Lanjutan")


// ================================================================================
// Fitur lain Regex:
// * Assersions : indikasi awal dan akhir teks
//      https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Assertions
// * Character Classes : membedakan antara huruf dan angka
//      https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Character_Classes
// * Group dan Range : melakukan grouping atau range huruf atau angka
//      https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Groups_and_Ranges
// * Quantifiers : menentukan jumlah huruf atau angka
//      https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Quantifiers
// ================================================================================


// ================================================================================
// Kode: RegExp Lanjutan
{
    console.log("\nRegExp Lanjutan:")
    const name = "Dliyaulhaq Mufliansyah\nMufliansyah Dliyaulhaq"

    const reg1 = /^Mufliansyah/igm // Mereturn kata yang posisinya berada pada awal kalimat saja, contoh: "Mufliansyah Dliyaulhaq" -> Jika mencari Dliyaulhaq, maka akan mereturn null
    const reg2 = /\b[m-u]/ig
    const reg3 = /\bm.+h\b/ig

    let result
    while((result = reg3.exec(name)) !== null) {
        console.log(result)
    }
}
// ================================================================================


// ================================================================================
// RegExp String:
// * Di JS, tipe data String memiliki instance method yang dapat memanfaatkan RegExp untuk melakukan pencarian
// |--------String Method-------|-----------------------Keterangan--------------------------|
// | match(regex): Array        | Mencari semua data dan menjadikannya Array sesuai regex   |
// | search(regex): Index       | Mencari index data yang sesuai regex                      |
// | replace(regex, value)      | Mencari data regex dan mengubahnya                        |
// | replaceAll(regex, value)   | Mencari data semua regex dan mengubahnya                  | -> Sepertinya dihapus karena tidak bisa digunakan
// | split(regex): Array        | Memotong String dengan regex                              |
// |----------------------------|-----------------------------------------------------------|


// Kode: RegExp String
{
    console.log("\nRegExp String:")

    const name = "Dliyaulhaq Mufliansyah"

    console.log(name.match(/\b.+q\b/i))
    console.log(name.search(/\b.+q\b/i))
    console.log(name.replace(/[aiueo]+/ig, "i"))
    console.log(name.split(/[aiueo]/).join("-"))
    // console.log(name.replaceAll(/[aiueo]+/ig, "i")) // Tidak bisa digunakan di nodejs tetapi bisa di browser
}
// ================================================================================
