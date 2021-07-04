console.log("===String Template===")

// ================================================================================
// String Template:
// * JavaString memiliki fitur bernama string template, dimana kita bisa mensubstitusi data dari luar String ke dalam String, seperti mengambil data variable, atau bahkan operasi matematika
// * Untuk menggunakan String Template, kita menggunakan tanda ` (backtick)
// ================================================================================


// ================================================================================
// Mengambil Variable:
const firstName = "Dliyaulhaq"
const lastName = "Mufliansyah"
const fullName = `${firstName} ${lastName}`
console.info(fullName)
// ================================================================================


// ================================================================================
// Expression di String Template
const name = "Dliyaulhaq Mufliansyah"
const value = 80
const lulus = `Nama: ${name}, Lulus: ${value > 70}`
console.log(lulus)
// ================================================================================


// ================================================================================
// Multiline String
const multilineString = `Halo
Dunia
`
console.log(multilineString)
// ================================================================================
