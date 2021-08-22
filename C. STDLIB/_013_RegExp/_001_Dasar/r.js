#!/usr/bin/env node

console.log("===RegExp Dasar===")


// ================================================================================
// RegExp:
// * Singkatan dari Regular Expression (atau juga biasa disebut Regex)
// * Merupakan fitur untuk mencari text dengan pola
// * Membuat RegExp di JS bisa dilakukan dengan dua cara, yaitu menggunakan literal notation atau membuat Object RegExp
// * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp


// Kode: Membuat RegExp
{
    const regex1 = /ulhaq/
    const regex2 = new RegExp("ulhaq")
    const regex3 = new RegExp(/ulhaq/)
}
// ================================================================================


// ================================================================================
// RegExp Instance Method:
// |-----Instance Method----|----------------------------------------Keterangan-----------------------------------------|
// | exec(value): result    | Eksekusi regex, jika menemukan data sesuai pola, return result, jika tidak, return null   |
// | test(value): boolean   | Eksekusi regex, jika menemukan data sesuai pola, return true, jika tidak, return false    |
// |------------------------|-------------------------------------------------------------------------------------------|


// Kode: RegExp Instance Method
{
    console.log("\nRegExp Instance Method:")
    const name = "Dliyaulhaq Muflinsyah"
    const regex = /ulhaq/

    console.log(regex.exec(name))
    console.log(regex.test(name))
}
// ================================================================================


// ================================================================================
// RegExp Modifier:
// * RegExp memiliki modifier untuk mengubah sifat cara pencarian
// |Modifier|---------------------------------Keterangan----------------------------------------|
// | i      | Regex menjadi case insensitive                                                    |
// | g      | Melakukan pencarian global, secara default setelah menemukan data, akan berhenti  |
// | m      | Multiline, pencarian dilakukan tiap baris (enter)                                 |
// |--------|-----------------------------------------------------------------------------------|


// Kode: RegExp Modifier
{
    console.log("\nRegExp Modifier:")

    const name   = "Dliyaulhaq Muflinsyah\nMufliansyah Dliyaulhaq"
    const regex1 = /Ulhaq/                  // false
    const regex2 = /Ulhaq/i                 // true
    const regex3 = /ulhaq/igm

    console.log(regex1.test(name))
    console.log(regex2.test(name))


    // Mencari dengan modifier 'g'
    let result
    while((result = regex3.exec(name)) !== null) {
        console.log(result)
    }

    // Regex to Array
    // console.log(name.match(regex3))

    // Loop value regex
    // name.match(regex3).forEach(value => console.log(value))
}
// ================================================================================
