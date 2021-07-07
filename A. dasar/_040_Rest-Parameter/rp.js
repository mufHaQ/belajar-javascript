console.log("===Rest Parameter===")


// ================================================================================
// Rest Parameter:
// * Rest Parameter adalah fitur dimana kita bisa mengirim data sebanyak-banyaknya pada satu paraneter, dan secara otomatis dikonversi mennjadi Array
// * Rest Parameter hanya boleh ada satu untuk satu function
// * Rest Parameter harus ditempatkan diposisi paling akhir, tidak boleh ditengah/depan kecuali memang hanya satu parameter
// * Di bahasa pemrogramman lain, ada juga yang menyebutnya variable argument
// ================================================================================


// ================================================================================
// Kode Rest Parameter:

// function sum(name, ...data) {
//     let total = 0
//     for (const item of data) {
//         total += item
//     }
//     console.log(`Total ${name} is ${total}`)
// }
// sum("Jagung", 1, 2, 3, 10, 99, 19, 100)
// ================================================================================


// ================================================================================
// Spread Syntax:
// * Kadang kita terlanjur memiliki data berupa Array
// * Tapi untungnya kita juga bisa mengirim Array ke Rest Parameter
// * Kita bisa gunakan '...' diikuti dengan Arraynya ketika memanggil function
// ================================================================================


// ================================================================================
// Kode Spread Syntax:

// function sum(name, ...data) {
//     let total = 0
//     for (const item of data) {
//         total += item
//     }
//     console.log(`Total ${name} is ${total}`)
// }

// const values = [10, 10, 10, 10, 10]
// sum("Banana", ...values) // Spread Syntax
// ================================================================================


// ================================================================================
// Arguments Object:
// * Sebelum ada fitur rest parameter, di JavaScript sudah ada fitur yang bernama Arguments Object
// * Ini adalah fitur dimana kita bisa mengambil semua parameter dalam bentuk array dengan menggunakan object bernama arguments
// * Namun perlu diingat, bahwa untuk JavaScript saat ini, disarankan untuk lebih menggunakan Rest Parameters dibandingkan dengan Arguments Object
// ================================================================================


// ================================================================================
// Kode Arguments Object:

function oldSum(name) {
    let total = 0
    for (const item of arguments) {
        if (item === name) {
            continue
        }
        total += item
    }
    console.log(`Total ${name} is ${total}`)
}
oldSum("Durian", ...[10, 10, 10, 10, 10])
// ================================================================================
