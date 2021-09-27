console.info("===Tipe Data Object===");

// ================================================================================
// Associative Array:
// * Di bahasa pemrogramman lain seperti PHP, kita bisa menggunakan tipe data lain sebagai indexnya, misalnya String
// * Fitur ini biasa disebut Associative Array
// * Di JavaScript, tidak ada Associative Array
// * Jika kita memaksakan memasukkan data bukan number di index Array, maka JavaScript akan merubah tipe data Array menjadi Object, dan ini bisa berbahaya, kerena beberapa operasi di Array mungkin bisa berubah hasilnya
// ================================================================================

// ================================================================================
// Tipe Data Object:
// * Tipe data Object adalah tipe data yang mirip dengan tipe data Array
// * Yang membedakan adalah, index pada tipe data Object bisa menggunakan string
// * Index di Object biasanya disebut attributes atau properties, bukan index
// ================================================================================

// ================================================================================
// Membuat Object:
// const objectKosong = {}

// const orang = {}

// // Ubah property/attrubute
// orang['nama'] = 'Dliyaulhaq Mufliansyah'
// orang['alamat'] = 'Kudus'
// orang['umur'] = 16

// console.table(orang)

// delete orang['umur']

// console.table(orang)
// ================================================================================

// ================================================================================
// Membuat Object dengan Propertes:

// const orang = {
//     nama: "Dliyaulhaq Mufliansyah",
//     alamat: "Indonesia",
//     umur: 16
// }

// console.table(orang)

// delete orang['umur']

// console.table(orang)
// ================================================================================

// ================================================================================
// Mengakses Property Object:

const orang = {
  nama: "Dliyaulhaq Mufliansyah",
  alamat: "Indonesia",
  umur: 16,
};

console.info(`Nama: ${orang["nama"]}`); // Bisa seperti ini
console.info(`Alamat: ${orang.alamat}`); // Bisa seperti ini
console.info(`Umur: ${orang.umur}`);
// ================================================================================
