#!/usr/bin/env node

console.log("===Map===");

// ================================================================================
// Map:
// * Merupakan representasi dari struktur data key-value
// * Map mirip dengan object, hanya saja, pada map semua method untuk manipulasi data sudah disediakan
// * Map mengikuti kontrak iterable, sehingga secara default bisa di iterasi
// * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map

// Perbedaan Map & Object
// |--------------------Map-----------------------------|---------------------------Object--------------------------|
// | Pertama dibuat, tidak memiliki key                 | Karena memiliki prototype, jadi bisa memiliki default key |
// |                                                    | ketika pertama dibuat.                                    |
// | Key bisa tipe data apapun                          | Key hanya bisa string atau symbol.                        |
// | Jumlah key bisa diketahui dengan mudah             | Tidak bisa diketahui, harus manual menggunakan iterasi.   |
// | dengan attrubute size                              |                                                           |
// | Secara default tidak bisa dikonversikan ke JSON    | Bisa dikonversi ke JSON secara otomatis.                  |
// |----------------------------------------------------|-----------------------------------------------------------|

// Map Instance Method & Property:
// |-----Method & Property------|--------------------Ketarangan---------------------|
// | size                       | Panjang Map                                       |
// | clear()                    | Menghapus semua data Map                          |
// | delete(key)                | Menghapus data Map berdasarkan key                |
// | get(key): value            | Mendapatkan data Map berdasarkan key              |
// | has(key): bool             | Mengecek apakah ada key di dalam Map              |
// | set(key, value)            | Mengubah/Menetapkan data Map dengan key = value   |
// | forEach((value, key) => )  | Melakukan iterasi Map                             |
// |----------------------------|---------------------------------------------------|

// Kode: Map
{
  const map = new Map();

  map.set("Name", "Dliyaulhaq Mufliansyah");
  map.set("Address", "Indonesia");

  console.table(map);
  console.log(map.get("Name")); // Dliyaulhaq Mufliansyah
  console.log(map.size); // 2
  console.log(typeof map); // object

  console.log("\nIterasi:");
  // for (const elemenet of map) {
  //     console.log(`${elemenet[0]}: ${elemenet[1]}`)
  // }
  map.forEach((val, key) => console.log(`${key}: ${val}`));

  console.log();
  map.delete("Address");
  console.table(map);
}
// ================================================================================
