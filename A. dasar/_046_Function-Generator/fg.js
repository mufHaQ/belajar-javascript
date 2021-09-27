console.log("===Function Generator===");

// ================================================================================
// Function Generator:
// * Function generator adalah function yang digunakan untuk membuat data generator
// * Generator adalah data yang bisa diiterasi seperti Array
// * Untuk membuat function generator, kita perlu menggunakan tanda * (bintang) setelah kata function
// * Untuk mengembalikan data ditiap iterasi, bisa bisa menggunakan kata kunci yield diikuti datanya
// * Tidak bisa digunakan secara langsung seperti Array
// ================================================================================

// ================================================================================
// Kode Function Generator:

// function* createNames() {
//     yield "Dliyaulhaq"
//     yield "Mufliansyah"
// }

// let names = createNames()

// // console.log(names[0]) // undefined

// for(const name of names) {
//     console.log(name)
// }
// ================================================================================

// ================================================================================
// Contoh Komplels:

// function* angkaGanjil(value) {
//     for (let i = 0; i <= value; i++) {
//         if (i % 2 !== 0) {
//             yield i
//         }
//     }
// }

// const ganjil = angkaGanjil(100)

// for (const gj of ganjil) {
//     console.log(gj)
// }
// ================================================================================

// ================================================================================
// Lazy Evaluation:
// * Generator bersifat Lazy
// * Jadi artinya jika data belum kita ambil dari generator, maka yield selanjutnya tidak akan dieksekusi
// ================================================================================

// ================================================================================
// Contoh

// Lazy
// function* buatGanjil(value) { // Ketika mengambil data, langsung meng-Generate String dan Number secara bersamaan
//     for (let i = 1; i <= value; i++) {
//         if (i % 2 !== 0) {
//             console.log(`Yield ke-${i}`)
//             yield i
//         }
//     }
// }

// // Eager
// function buatGanjilArray(value) { // Ditampilkan String dulu baru Number, karena harus memasukkan 1-1 Number ke dalam Array 'res', di return dan baru ditampilkan di dalam for loop
//     let res = []
//     for (let i = 1; i <= value; i++) {
//         if (i % 2 !== 0) {
//             console.log(`Yield ke-${i}`) // Akan langsung di-print jika function ini dipanggil
//             res.push(i)
//         }
//     }
//     return res
// }

// const angkaGanjil = buatGanjilArray(50) // Akan menjalankan console.log(`Yield ke-${i}`)

// const angkaGanjil = buatGanjil(50) // Akan menjalankan console.log(`Yield ke-${i}`) dan yield

// for (const ganjil of angkaGanjil) {
//     console.log(ganjil)
// }

// let angkaGanjil = buatGanjil(50) // Tidak akan dieksekusi
// let angkaGanjil = buatGanjilArray(50) // Akan dieksekusi
// ================================================================================

// ================================================================================
// Kode Lazy Generator:

function* buatGanjil(value) {
  for (let i = 1; i <= value; i++) {
    if (i % 2 !== 0) {
      console.log(`Perulangan ke-${i}`);
      yield i;
    }
  }
}

const angkaGanjil = buatGanjil(100);

console.log(angkaGanjil.next().value); // 1
console.log(angkaGanjil.next().value); // 3
console.log(angkaGanjil.next().value); // 5
// ================================================================================
