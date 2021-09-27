#!/usr/bin/env node

console.log("===Array===");

// ================================================================================
// Array:
// * Tipe data array juga sudah dibahas di JavaScript Dasar
// * Namun kita hanya membahas beberapa instance method yang ada di Array
// * Sebenarnya, terdapat banyak sekali Instance Method yang ada di Array
// * https://developer.mozilla.org/en-US/docs/web/javascript/reference/global_objects/Array
// ================================================================================

// ================================================================================
// Array Loop:
// * Sebelumnya kita bisa menggunakan for..in dan for..of untuk melakukan iterasi Array, namun array juga memiliki method yang bernama forEach()
// * Method forEach() bisa digunakan juga untuk melakukan iterasi data Array

// Kode: Array Loop
{
  console.log("Array Loop:");
  const arr = ["Dliyaulhaq", "Mufliansyah"];
  arr.forEach((value, index) => console.log(`Index ke-${index}: ${value}`));
  // arr.forEach(value => console.log(value)) // Tanpa index
}
// ================================================================================

// ================================================================================
// Array Queue:
// * Dalam struktur data, tedapat tuipe struktur data bernama Queue (Antrian)
// * Dimana data masuk akan diposisikan di urutan paling belakang
// * Sedangkan data keluar akan diposisikan di urutan paling depan
// * Mirip sekali dengan antrian, atau istilahnya FIFO (First In First Out)
// * Kita bisa menggunakan Array dengan bantuan function push() untuk menambah data dari depan-belakang, dan shift() untuk mengambil dan menghapus data paling depan

// Kode: Array Queue
{
  console.log("\nArray Queue:");

  const queue = [];

  // Masukkan data secara berurutan depan-belakang
  queue.push("Dliyaulhaq");
  queue.push("Mufliansyah");

  for (let index = 1; index <= queue.length + 1; index++) {
    console.log(`shift ke-${index}:`, queue.shift()); // Akan mereturn dan menghapus nilai index pertama dari Array
  }
}
// ================================================================================

// ================================================================================
// Array Stack:
// * Struktur data stack (tumpukan) merupakan kebalikan dari queue, dengan aturannya mirip dengan tumpukan kartu
// * Stack ini bisa juga disebut LIFO (Last In First Out)
// * Saat kita memasukkan data, kita akan memasukkan di urutan paling belakang (atau atas)
// * Sedangkan saat kita mengambil data, kita akan mengambil data dari yang paling belakang (atau atas) terlebih dahulu
// * Dan kita bisa menggunakan pop() untuk menghapus index paling belakang

// Kode: Array Stack
{
  console.log("\nArray Stack:");

  const stack = [];

  stack.push("Dliyaulhaq");
  stack.push("Mufliansyah");

  for (let index = 1; index <= stack.length + 1; index++) {
    console.log(`pop ke-${index}:`, stack.pop()); // Akan mereturn dan menghapus nilai index terakhir dari Array
  }
}
// ================================================================================

// ================================================================================
// Array Search:
// * Array memiliki banyak function untuk melakukan pencarian:
// |--------------Function-----------------------|----------Keterangan---------------------------|
// | find(value => boolean): value               | Mencari data sesuai dengan kondisi            |
// |                                             | dan mereturnvalue yang pertama ditemukan      |
// | findIndex(value => boolean): index of value | sama seperti yang atas, tetapi ini mereturn   |
// |                                             | indexnya                                      |
// | includes(value): boolean                    | Mengecek apakah terdapat data                 |
// | indexOf(value): index                       | Mengecek posisi index data                    |
// | lastIndexOf(value): index                   | Mengecek posisi index data terakhir           |
// |---------------------------------------------|-----------------------------------------------|

// Kode: Array Search:
{
  console.log("\nArray Search");

  const source = [1, 2, 3, 4, 5, 1, 2, 3, 4, 5];

  console.log(source.find((value) => value > 3)); // 4
  console.log(source.findIndex((value) => value > 3)); // index-3
  console.log(source.includes(6)); // false
  console.log(source.indexOf(5)); // 4
  console.log(source.lastIndexOf(5)); // 9
}
// ================================================================================

// ================================================================================
// Array Filter:
// * Array memiliki function untuk melakukan filter data
// |------------Function------------|--------------------Keterangan-----------------------|
// | fiter(value => boolean): Array | Melakukan filter data yang kondisinya bernilai true |
// |--------------------------------|-----------------------------------------------------|

// Kode: Array Filter:
{
  console.log("\n Array Filter:");
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  console.log(numbers.filter((value) => value % 2 == 0)); // [ 2, 4, 6, 8, 10 ]
  console.log(numbers.filter((value) => value % 2 == 1)); // [ 1, 3, 5, 7, 9 ]
}
// ================================================================================

// ================================================================================
// Array Transform:
// * Array juga memiliki function yang digunakan untuk melakukan transformasi
// |-------------------Function-------------------------|------------------------Keterangan-----------------------------|
// | map(value => result): Array<result>                | Melakukan transform tiap value dan menghasilkan array result  |
// | reduce((accumulator, current) => result): result   | Melakukan transform dengan menggunakan value array dan value  |
// |                                                    | selanjutnya, lalu hasilnya dilanjutkan ke iterasi selanjutnya |
// | reduceRight((accumulator, value) => result)        | Sama seperti reduce(), namun dilakukan dari belakang          |
// |----------------------------------------------------|---------------------------------------------------------------|

// Kode: Array Transform
{
  console.log("\nArray Transform:");

  let alph = ["ab", "cd", "ef", "gh", "ij", "kl", "mn", "op", "qr", "st", "uv", "wx", "yz"];
  alph = alph.map((val) => val.toUpperCase());
  console.log(alph.reduce((acc, curr) => acc + " " + curr));
  console.log(alph.reduceRight((acc, curr) => acc + " " + curr));
}
// ================================================================================

// ================================================================================
// Dan Function lainya:
// * https://developer.mozilla.org/en-US/docs/web/javascript/reference/global_objects/array#instance_methods
// ================================================================================
