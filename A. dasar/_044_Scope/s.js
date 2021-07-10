console.log('===Scope===')


// ================================================================================
// Scope:
// * Scope merupakan area akses sebuah data
// * Ada dua jenis scope, yaitu global scope dan local scope
// * Setiap kita membuat function, maka kia akan membuat local scope untuk function tersebut
// * Data di global scope bisa diakses di local scope, namun data di local scope hanya bisa diakses di local scope tersebut atau dibawahnya (seperti dalam kasus function dalam function)
// ================================================================================


// ================================================================================
// Kode Scope:


// Global Scope

// let counter = 0

// function hitMe(n) {
//     // Local Scope function hitMe
//     for (let i = 1; i <= n; i++) {
//         // Local Scope i
//         counter++
//     }

//     // console.log(i) // Akan error
// }

// hitMe(100)

// console.log(counter)
// ================================================================================


// ================================================================================
// Kode Nested Function:

function first() {
    // Ini akan menjadi global function bagi function second()
    let firstVar = "First"

    return function second() {
        console.log(firstVar)
    }
}

first()()
// ================================================================================
