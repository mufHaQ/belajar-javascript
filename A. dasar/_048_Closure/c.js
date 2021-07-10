console.log("===Closure===")


// ================================================================================
// Closure:
// * Closure adalah kombinasi function dan bundel referensi ke data disekitarnya
// * Kita sudah tahu bahwa scope tidak dapat diakses dari luar scopenya
// * Dengan kemampuan closure, kita bisa membuat sebuah function di local scope dan referensi ke data di sekitar local scope tersebut, keluar dari scopenya
// ================================================================================


// ================================================================================
// Kode Closure:

// Program akan berjalan 2 kali
function bayar(nama, namaBarang, uang) {
    return harga => {
        let kembalian = uang - harga
        return `${nama} membeli ${namaBarang} dengan uang ${uang} | Harga sabun ${harga} | Kembalian ${kembalian}`
    }
}

// Cara 1
// const sabun = bayar("Ulhaq", "sabun", 10000) // Run 1
// console.log(sabun(7000)) // Run 2

// Cara 2
console.log(bayar("Ulhaq", "sabun", 10000)(7000))
// ================================================================================
