console.log("===Recursive Function===")


// ================================================================================
// Recursive Function:
// * Recursive Function adalah kemampuan function untuk memanggil dirinya sendiri
// * Kadang memang ada banyak problem, yang lebih mudah diselesaikan menggunakan Recursive Function, seperti contohnya kasus factorial
// ================================================================================


// ================================================================================
// Kode Facotrial Loop:

// function factorial(value) {
//     let result = 1
//     for (let i = 1; i<=value; i++) {
//         result *= i
//     }
//     return result
// }
// console.log(factorial(5))
// ================================================================================


// ================================================================================
// Kode Factorial Function:

function factorial(value) {
    if (value === 1) {
        return 1
    } else {
        return value * factorial(value - 1)
    }
}
// console.log(factorial(5))
// 5 * factorial(4)
// 5 * 4 * factorial(3)
// 5 * 4 * 3 * factorial(2)
// 5 * 4 * 3 * 2 * factorial(1)
// 5 * 4 * 3 * 2 * 1
// ================================================================================


// ================================================================================
// Contoh Rekursif:

function perluangan(value, max) {
    if (value <= max) {
        console.log(value)
        value++
        perluangan(value, max)
    }
}

perluangan(1, 10)
// ================================================================================