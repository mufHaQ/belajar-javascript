console.info("===For Loop===");

// ================================================================================
// For Loop:
// * For adalah salah satu kata kunci yang bisa kita gunakan untuk perulangan
// * Blok kode yang terdapat pada for akan selalu diulangi selama kondisi for terpenuhi
// ================================================================================

// ================================================================================
// Sintak Perulangan For:

// for (init statement; kondisi; post statement) {
//     // block perulangan
// }

// * Init Statement hanya akan dieksekusi sekali diawal
// * Kondisi akan dilakukan pengecekan dalam setiap perulangan, jika true perulangan akan dilakukan, jika false perulangan akan berhenti
// * Post Statement akan dieksekusi setiap akhir perulangan
// * Init Statement, Kodisi, dan Post Statement tidak wajib diisi, jika kondisi tidak diisi, berarti kondisi selalu bernilai true
// ================================================================================

// ================================================================================
// Perulangan Dengan Kondisi:

// let counter = 1

// for (; counter <= 10 ;) {
//     console.info(`Perulangan ke-${counter}`)
//     counter++
// }
// ================================================================================

// ================================================================================
// Perulangan Dengan Init Statement:

// for (let i = 1; i <= 10 ;) {
//     console.info(`Perulangan ke-${i}`)
//     i++
// }
// ================================================================================

// ================================================================================
// Perulangan Dengan Post Statement:

for (let i = 1; i <= 10; i++) {
  console.info(`Perulangan ke-${i}`);
}
// ================================================================================
