#!/usr/bin/env node

// Membuat Constructor Function

console.log("===Membuat Constructor Function===")


// ================================================================================
// Membuat Object:
// * Sebenarnya kita sudah belajar tipe data object, dengan cara membuat variable dengan tipe data object
// * Namun pembuatan object menggunakan tipe data object, akan membuat object yang selalu unik, sendangkan dalam OOP, biasanya kita akan membuat Class sebagai cetakan, sehingga bisa membuat object dengan karakteristik yang sama berkali-kali tanpa harus mendeklarasikan object berkali-kali seperti menggunakan tipe data Object


// Kode: Membuat Object dengan Object
{
    const ulhaq = {
        first_name: "Dliyaulhaq",
        last_name: "Mufliansyah"
    }

    const budi = {
        first_name: "Budi",
        last_name: "Nugraha"
    }

}
// ================================================================================


// ================================================================================
// Membuat Object dengan Constructor Function:
// * Sebelum ECMAScript 6, pembuatan class biasanya menggunakan function. Hal ini dikarenakan JavaScript sebenarnya bukanlah bahasa yang fokus ke OOP
// * Untuk membuat class di JavaScript lama, kita bisa membuat function
// * Function ini kita sebut dengan Constructor Function
// * Setelah kita membuat class, jika kita ingin membuat object dari calss tersebut, kita bisa menggunakan kata kunci new, diikuti dengan nama constructor functionnya


// Kode: Membuat Object dengan Constructor Function
{
    function Person() { // Sebaiknya menggunakan Uppercase di awal nama, sebagai penanda jika ini adalah Object

    }

    let ulhaq = new Person()
}
// ================================================================================
