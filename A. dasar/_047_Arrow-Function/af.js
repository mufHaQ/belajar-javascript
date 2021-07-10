console.log("===Arrow Function===")


// ================================================================================
// Arrow Function:
// * Arrow Function adalah alternatif dari function biasa dan lebih sederhana
// * Namun terdapat limitasi dan juga tidak bisa digunakan disemua situasi
// * Dinamakan Arrow Function karena menggunakan tanda '=>' (mirip seperti anak panah)
// * Berikut beberapa kekurangan dari Arrow Function:
//      1. Tidak memiliki fitur Arguments Object
//      2. Tidak bisa menggunakan Function Generator
//      3. Tidak bisa mengakses this (yang biasanya ada didalam Object)
//      4. Tidak bisa mengakses super (yang biasanya ada didalam Object)
// ================================================================================


// ================================================================================
// Kode Arrow Function:

// const sayHello = name => { // Jika ada lebih dari satu parameter, maka menggunakan '()', contoh: const sh = (name, age) => {}
//     console.log(`Hello ${name}`)
// }

// sayHello("Ulhaq")
// ================================================================================


// ================================================================================
// Arrot Function Tanpa Block '{}':
// * Jika sebuah Arrow Function isinya sederhana, kita bisa membuat Arrow Function tanpa block
// * Bisa langsung mereturn nilai tanpa kata kunci 'return'
// ================================================================================


// ================================================================================
// Kode Arrot Function Tanpa Block:

// const sayHello = name => console.log(`Hello ${name}`)
// sayHello("Dliyaulhaq")
// ================================================================================


// ================================================================================
// Kode Arrot Function Tanpa Block, Return Value:

// const sum = (a, b) => a + b
// console.log(sum(100, 100))
// ================================================================================


// ================================================================================
// Arrow Function Sebagai Prameter:
// * Karena Arrow Function seprti Anonymous Function
// * Jadi kita juga bisa menggunakan Arrow Function sebagai parameter di function lain
// ================================================================================


// ================================================================================
// Kode Arrow Function Sebagai Prameter:

function sayHello(name, callback) {
    return callback(name)
}

let sh = sayHello("Ulhaq", name => name)

console.log(sh)
// ================================================================================
