console.log("===Function Dalam Function===")


// ================================================================================
// Function Dalam Function:
// * Tidak ada batasan untuk kita membuat sebuah function
// * Termasuk jika kita ingin membuat function di dalam sebuah function
// * Function yang berada di dalam function disebut inner function
// * Inner function hanya bisa diakses di tempat kita membuat functionnya
// ================================================================================


// ================================================================================
// Kode Function Dalam Function:

function outer() {
    return function inner() {
        console.log('Inner')
    }
    // inner()
}
outer()()
// outer()
// ================================================================================
