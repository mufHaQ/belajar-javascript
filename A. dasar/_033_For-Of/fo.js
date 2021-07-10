console.log("===For Of===")


// ================================================================================
// For Of:
// * Jika For In digunakan untuk melakukan iterasi property/index, maka For Of digunakan untuk melakukan iterasi terhadap isi value dari iterable object, seperti Array dan String
// * For Of tidak bisa digunakan untuk melakukan iterasi pada tipe data Object, karena Object bukanlan iterable
// ================================================================================


// ================================================================================
// Kode For Of:

const names = ["Dliyaulhaq", "Mufliansyah"]

for (const value of names) {
    // console.log(`${value}`)
    for (const char of value) {
        console.log(char)
    }
    console.log('\n')
}
// ================================================================================