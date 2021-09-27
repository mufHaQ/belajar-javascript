console.log("===Function Return Value===");

// ================================================================================
// Function Return Value:
// * Secara default, function tidak menghasilkan value apapun, namun jika kita ingin, kita bisa membuat sebuah function mengembalikan value
// * Agar function bisa menghasilkan value, kita bisa menggunakan kata kunci 'return' di dalam functionnya
// * Dan di dalama blok function, untuk menghasilkan nilai tersebut, kita harus menggunakan kata kunci return dan diikuti dengan data yang ingin kita return
// * Function hanya bisa mengembalikan satu data, jika kita ingin lebih, kita bisa menggunakan Array sebagai return valuenya
// ================================================================================

// ================================================================================
// Kode Function Return Value:

// function sayHello(firstName, lastName) {
//     return `Hello ${firstName} ${lastName}`
// }

// const res = sayHello("Dliyaulhaq", "Mufliansyah")
// console.log(res)
// ================================================================================

// ================================================================================
// Kode Return Value Lebih Dari Satu:

// function getFinalScore(value) {
//     if (value > 89) {
//         return "A"
//     } else if (value > 79) {
//         return "B"
//     } else if (value > 69) {
//         return "C"
//     } else if (value > 59) {
//         return "D"
//     } else {
//         return "E"
//     }
// }

// console.log(getFinalScore(80))
// ================================================================================

// ================================================================================
// Menghentikan Eksekusi Dengan Return
// * Saat kita menggunakan kata kunci return, maka kode setelahnya tidak akan dieksekusi
// * Kita bisa menggunakan return untuk menghentikan eksekusi sebuah function
// ================================================================================

// ================================================================================
// Kode Menghentikan Eksekusi Dengan Return:

function isContains(array, searchValue) {
  for (const element of array) {
    console.log(`Iterasi ke-${element}`);
    if (element === searchValue) {
      console.log(`element ${searchValue} ditemukan`);
      return true; // Function akan dihentikan setelah menemukan value yang sama
    }
  }
  console.log(`element ${searchValue} tidak ditemukan`);
  return false; // Function berhenti jika tidak menemukan value yang sama
}

console.log(isContains([1, 2, 3, 4, 5], 2));
// ================================================================================
