console.log("===For In===");

// ================================================================================
// For In:
// * For In merupakan perulangan for yang digunakan untuk mengiterasi seluruh data property di dalam Object ada index di Array
// * Walaupun For In bisa digunakan untuk Array, namun tidak direkomendasikan untuk Array, karena biasanya kita jarang sekali butuh data index untuk Array
// * Di Object akan mereturn nama propertynya, di Array akan mereturn nomor indexnya
// ================================================================================

// ================================================================================
// Kode For In:

// const person = {
//     firstName: "Dliyaulhaq",
//     lastName: "Mufliansyah"
// }

// for (const property in person) {
//     console.info(`Property ${property}: ${person[property]}`) // Tidak bisa menggunakan person.property karena mereturn string
// }
// ================================================================================

// ================================================================================
// Contoh pada Array:

const nama = ["Dliyaulhaq", "Mufliansyah"];

for (const index in nama) {
  console.info(`Index ke-${index}: ${nama[index]}`);
}
// ================================================================================
