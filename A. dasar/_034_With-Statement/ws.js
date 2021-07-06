console.log("===With Statement===")


// ================================================================================
// With Statement:
// * With Statement merupakan fitur yang digunakan untuk menurunkan sebuah scope data
// * Dengan menggunakan With Statement, kita bisa mengakses property dalam sebuah data tanpa harus menyebut datanya
// ================================================================================


// ================================================================================
// Kode Tanpa With Statement:

// const person = {
//     firstName: "Dliyaulhaq",
//     lastName: "Mufliansyah"
// }

// console.log(person.firstName)
// console.log(person.lastName)
// ================================================================================


// ================================================================================
// Kode Dengan With Statement:

// const person = {
//     firstName: "Dliyaulhaq",
//     lastName: "Mufliansyah"
// }

// with (person) {
//     console.log(firstName);
//     console.log(lastName);
// }
// ================================================================================


// ================================================================================
// With Statement Tidak Direkomendasikan:
// * Walau fitur ini ada, di JavaScript versi baru sudah tidak direkomendasikan untuk digunakan
// * Dikarenakan With Statement kadang membuat sebuah kode menjadi ambigu
// ================================================================================


// ================================================================================
// Contoh Kode Ambigu:

const person = {
    firstName: "Dliyaulhaq",
    lastName: "Mufliansyah"
}

const firstName = "Budi"
const lastName = "Hermawan"

with (person) {
    console.log(firstName); // Dliyaulhaq
    console.log(lastName); // Mufliansyah
}
// ================================================================================