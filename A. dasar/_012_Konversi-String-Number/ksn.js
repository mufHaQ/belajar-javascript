console.log("===Konversi String dan Numer===")

// ================================================================================
// Konversi String dan Number:
// * Saat membuat aplikasi, kadang input dari pengguna adalah string
// * Sedangkan kita ingin mengelola datanya dalam bentuk Number
// * Maka kita harus melakukan konversi tipe data

// const val1 = "1"
// const val2 = 1
// const sum = val1 + val2
// console.log(sum) // 11
// ================================================================================


// ================================================================================
// ------------------------------------------------------------------------------------------
// | parseInt(String)   | Mengkonversi dari String ke Number (bilangan bulat)               |
// | parseFloat(String) | Mengkonversi dari String ke Number (bilangan pecahan)             |
// | Number(String)     | Mengkonversi dari String ke Number (bilangan bulat atau pecahan)  |
// | number.toString()  | Mengkonversi dari Number ke String                                |
// ------------------------------------------------------------------------------------------

// const val1 = parseInt("1.1") // Angka dibelakang koma dihilangkan (bukan dibulatkan)
// const val2 = parseFloat(2) // Akan menjadi 2.0
// const sum = Number(val1 + val2)
// console.log(sum.toString())
// ================================================================================


// ================================================================================
// NaN:
// * Jika terjadi konversi yang tidak valid, maka hasil dari konversi akan menjadi NaN (Not a Number)
// * NaN adalah number spesial yang menyebutkan bahwa ini bukanlah number
// * Jika dibelakang ada String, maka akan dihilangkan, dan akan di tolelir
// * Number tidak akan mentolelir jika terjadi kesalahan sedikitpun

// Mentolelir kesalahan jika pada bagian belakang
// console.log(parseInt("Salah")) // NaN
// console.log(parseFloat("1.1ulhaq")) // 1.1

// Tidak mentolelir kesalahan
// console.log(Number("Salah")) // NaN
// console.log(Number("1.1ulhaq")) // NaN
// ================================================================================


// ================================================================================
// Operasi Pada NaN:

// const vala = Number("Salah") // NaN
// const valb = 2
// const sum$ = vala + valb // NaN
// console.log(sum$)
// ================================================================================


// ================================================================================
// isNaN() Function:
// * Untuk mengecek apakah sebuah value itu NaN atau bukan
// * Hasilnya berupa boolean

const nan = Number("NaN")
console.log(isNaN(nan)) // true
// ================================================================================
