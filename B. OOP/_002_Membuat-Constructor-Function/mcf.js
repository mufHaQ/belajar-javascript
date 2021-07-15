console.log("===Membuat Constructor Function===")


// ================================================================================
// Membuat object:
// * Sebelumnya membuat object dengan cara membuat variable dengan tipe data object
// * Namun membuat object menggunakan tipe data object akan membuat object yang selalu unik
// * Sedangkan dalam OOP, biasanya kita akan membuat class sebagai cetakan sehingga kita bisa membuat object dengan karakteristik yang sama berkali-kali tanpa harus mendeklarasikan object berkali-kali seperti menggunakan tipe data object
// ================================================================================


// ================================================================================
// Kode Membuat Object Dengan Tipe Data Object:

// const budi = {
//     name: "Budiono"
// }

// const yanto = {
//     name: "Haryanto"
// }
// ================================================================================


// ================================================================================
// Membuat Constructor Function:
// * Sebelum ECMAScript 6, pembuatan class biasanya menggunakan constructor function. Hal ini dikarenakan sebenarnya JavaScript bukanlah bahasa program yang fokus ke OOP
// * Untuk membuat class di JavaScript lama, kita bisa membuat function
// * Function ini kita sebut dengan Constructor Function
// ================================================================================


// ================================================================================
// Kode Membuat Constructor Function:

// function Person() {
//     // Seperti function biasa
// }
// ================================================================================


// ================================================================================
// Membuat Object dari Constructor Function:
// * Setelah kita membuat class, jika kita ingin membuat object dari class tersebut, kita bisa menggunakan kata kunci 'new', lalu diikuti dengan nama constructor functionnya
// ================================================================================


// ================================================================================
// Kode Membuat Object dari Constructor Function:

// function Person() {

// }

// const ulhaq = new Person()
// console.log(typeof(ulhaq))
// ================================================================================
