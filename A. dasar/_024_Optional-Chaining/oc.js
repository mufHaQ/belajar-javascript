console.info("===Optional Chaining===");

// ================================================================================
// Optional Chaining:
// * Optional Chaining (?) merupakan operator yang digunakan untuk mengamankan ketika kita ingin mengakses property sebuah object dari data nullish
// * Jika kita mencoba mengakses property object dari data nullish tanpa menggunakan optional chaining operator, maka akan terhadi error
// ================================================================================

// ================================================================================
// Contoh Penanganan Error Menggunakan If Expression:

// const person = {}
// console.log("Start") // Dijalankan

// ----------------------------------------
// const country = person.address.country // Terjadi kesalahan sehingga membuat program berhenti

// console.log("Sukses") // Tidak akan dijalankan
// console.info(country) // Tidak akan dijalankan, karena memang datanya tidak ada
// console.log("Sukses") // Tidak akan dijalankan
// ----------------------------------------

// ----------------------------------------
// Maka kita harus melakukan pengecekan
// let country

// if (person.address != undefined && person.address != null) {
//     country = person.address.country
// }

// console.info(country) // undefined
// ----------------------------------------
// ================================================================================

// ================================================================================
// Penggunaan Optional Chaining Operator:

let person = {
  address: {
    country: "Indonesia",
  },
};

let country = person.address?.country ?? "Data Tidak Ada";
console.info(country);
// ================================================================================
