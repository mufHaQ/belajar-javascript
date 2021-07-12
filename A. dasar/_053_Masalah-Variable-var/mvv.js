console.log("===Masalah Variable var===")


// ================================================================================
// Masalah Variable var:
// * Kita sudah tidak direkomendasikan lagi menggunakan kata kunci var
// * Alasannya karena var tidak memiliki block scope, artinya dia tidak mengikat ke local scope
// * Karena itu kita tidak bisa memprediksi var
// ================================================================================


// ================================================================================
// Kode Menggunakan let

// Global
// let i = 20

// for (let i = 0; i < 10; i++) {
//     // Local
//     console.log(`Local: ${i}`)
// }

// console.log(`Global: ${i}`)
// ================================================================================


// ================================================================================
// Kode Menggunakan var

// Global
var i = 20

for (var i = 0; i < 10; i++) {
    // Local
    console.log(`Local: ${i}`)
}

console.log(`Global: ${i}`)
// ================================================================================