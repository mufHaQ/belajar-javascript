console.log('===Strict Mode===')


// ================================================================================
// Strict Mode:
// * Secara default saat kita menjalankan JavaScript, kode kita akan berjalana pada sloppy mode
// * Pada ECMAScript 5, diperkenalkan Strict Mode, yang ketika digunakan akan mengubah cara kerja beberapa kode JavaScript, seperti:
    // 1. Merubah beberapa JavaScipt error, yang tadinya silent error menjadi throw error (terlihat)
    // 2. Memperbaiki beberapa kesalahan engine JavaScript untuk optimasi
    // 3. Menolak beberapa kode perintah yang kedepannya akan digunakan ECMAScript
// * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode/Transitioning_to_strict_mode

// Cara Menjalankan Strict Mode:
// * Kita bisa menambahkan 'use strict' pada baris awal file JavaScript
// * Atau juga di awal function
// ================================================================================


// ================================================================================
// Kode Strict Mode:

function withStrictMode() { // Akan error
    'use strict'
    const person = {
        firstName: "Dliyaulhaq"
    }

    with (person) {
        console.log(firstName)
    }
}

// ================================================================================
