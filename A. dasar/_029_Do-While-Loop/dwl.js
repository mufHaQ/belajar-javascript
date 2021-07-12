console.info("===Do While Loop===")

// ================================================================================
// Do While Loop:
// * Do While Loop adalah perulangan yang mirip dengan While Loop, perbedaanya hanya pada pengecekan kondisi
// * Pengecekan kondisi di While Loop dilakukan diawal sebelum perulangan dilakukan, sedangkan di Do While Loop dilakukan setelah perulangan dilakukan
// * Oleh karena itu dalam Do While Loop, minimal pasti sekali perulangan dilakukan walaupun kondisi tidak bernilai true
// ================================================================================


// ================================================================================
let counter = 1

do {
    console.info(`Perulangan ke-${counter}`)
    counter++
} while (counter <= 10)
// ================================================================================