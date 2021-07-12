console.info("===Operator Logika di Non Boolean===")


// ================================================================================
// Operator Logika di Non Boolean:
// * Sebelumnya kita sudah tahu bahwa operator logika AND (&&) dan OR (||) digunakan untuk tipe data boolean
// * Namun di JavaScript, kita bisa menggunakan operator AND dan OR untuk tipe data non-boolean
// ================================================================================


// ================================================================================
// Operator OR di Non-Boolean:
// * Operator logika OR (||), membaca dari kiri ke kanan
// * Operato ini akan mengambil nilai pertama yang truthy
// * Jika tidak ada satupun yang bernilai truthy, maka yang terakhir yang akan diambil

// console.info("Hello" || '') // "Hello"
// console.info("" || []) // []
// console.info("0" || "NOL") // "0"
// console.info(0 || "NOL") // "NOL"
// console.info(null || "NULL") // "NULL"
// console.info(undefined || "UNDEFINED") // "UNDEFINED"
// console.info(0 || false) // false
// ================================================================================


// ================================================================================
// Operator AND di Non-Boolean:
// * Operator logika AND (&&), membaca dari kiri ke kanan
// * Operato ini akan mengambil nilai pertama yang falsy
// * Jika tidak ada satupun yang bernilai falsy, maka yang terakhir yang akan diambil

console.info("hello" && "") // ""
console.info("" && []) // ""
console.info("0" && "NOL") // "NOL"
console.info(0 && "NOL") // 0
console.info(null && "NULL") // null
console.info(undefined && "UNDEFINED") // undefined
console.info("undefined" && "null") // "null"
// ================================================================================