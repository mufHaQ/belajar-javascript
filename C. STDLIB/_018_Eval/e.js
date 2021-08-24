#!/usr/bin/env node

console.log("===Eval===")


// ================================================================================
// Eval:
// * Merupakan function yang digunakan untuk mengeksekusi kode JS dari String
// * Fitur ini sangat menarik, namun perlu hati-hati ketika menggunakannya
// * Jika sampai salah penggunaan, maka bisa jadi kita malah mengeksekusi kode program yang bisa menyebabkan masalah keamanan pada website kita
// * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/eval


// Kode: Eval
{
    const script1 = "console.log(\"Hello, World!!\")"
    const script2 = `(function() {
        console.log("Hai")
    })()`

    eval(script1) // Hello, World!!
    eval(script2) // Hai
}
// ================================================================================
