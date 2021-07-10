console.log("===Label===")


// ================================================================================
// Label:
// * Label merupakan penanda yang bisa digunakan dengan kata kunci break dan continue
// * Secara default saat kita melakukan break atau continue, dia akan melakukan terhadap perulangan dimana kode break dan continue itu digunakan
// * Dengan menggunakan label, kita bisa melakukan break dan continue terhadap perulangan yang kita inginkan, asalkan pada perulangannya kita gunakan label
// * Untuk membuat label, kita bisa menggunakan nama label lalu diikuti dengan : (titik dua)
// ================================================================================


// ================================================================================
// Contoh Label:

// loopi:
// for (let i = 1 ; i <= 10 ; i++) {
//     loopj:
//     for (let j = 1 ; j <= 100 ; j++) {
//         console.log(`${i} - ${j}`)
//     }
// }
// ================================================================================


// ================================================================================
// Continue atau Break di Label:

loopi: for (let i = 1; i <= 10; i++) {
    loopj: for (let j = 1; j <= 100; j++) {
        if (j > 10) {
            continue loopi
        }
        console.log(`${i} - ${j}`)
    }
}
// ================================================================================