console.log("===Tipe Data Array===");

// ================================================================================
// Tipe Data Array:
// * Array adalah tipe data yang berisikan kumpulan data
// * Di JavaScript, array memiliki sifat dinamis, tidak ada batasan
// * Kita bisa memasukkan tipe data apapun secara bersamaan
// ================================================================================

// ================================================================================
// Membuat Array

// let arrayKosong = Array() // Cara 1
// let arrayKosong = [] // Cara 2

// let arryNama = ["Dliyaulhaq", "Mufliansyah"]
// console.log(arryNama)
// ================================================================================

// ================================================================================
// Cara Kerja Array:
// * Setiap data pada Array disimpan dalam posisi berurutan, dimana urutan pertama dimulai dari nomor 0
// * Urutan Array kita sebut dengan index
// * Setiap kita menambah data ke Array, otomatis data akan disimpan di urutan terakhir
// ================================================================================

// ================================================================================
// let names = []
// names.push("Dliyaulhaq")
// names.push("Mufliansyah")

// console.table(names)
// ================================================================================

// ================================================================================
// Operasi di Array:
// ---------------------------------------------------------------------------------------
// | array.push(value)      | Menambah data ke bagian belakang Array                     |
// | array.length           | Mendapatkan panjang Array                                  |
// | array[index]           | Mendapatkan data di posisi index                           |
// | array[index] = value   | Mengubah data di posisi index                              |
// | delete array[index]    | Menghapus data di posisi index, namun index tidak bergeser |
// ---------------------------------------------------------------------------------------

let names = [];
names.push("Dliyaulhaq", "Mufliansyah", "Orang");

console.table(names);

// console.info(names[0])
// console.info(names[1])

names = [names[1], names[0], names[2]];

// console.info(names[0])
// console.info(names[1])

console.table(names);

delete names[1];

console.table(names); // index ke 1 hilang, tetapi posisi index 2 tetap, dan panjang array aslinya akan tetap sama

names.push("Ulhaq"); // Tidak mengisi index yang kosong, tetapi masuk pada bagian akhir

console.table(names);

names[1] = "Data Baru";

console.table(names);

names.push(1, 2, 3, true, 5, false, 7, [8, 9, 10]);

console.table(names);
// ================================================================================
