console.info("===Break dan Continue===");

// ================================================================================
// Break dan Continue:
// * Pada Swith Statement, kita sudah mengenal kata kunci break, yaitu untuk menghentikan case
// * Sama dengan perulangan, break juga digunakan untuk menghentikan seluruh perulangan
// * Namun berbeda dengan continue, continue digunakan untuk menghentikan perulangan saat ini, lalu melanjutkan ke perulangan berikutnya
// ================================================================================

// ================================================================================
// Break:

// let counter = 1

// while (true) {
//     console.log(`Perulangan ke-${counter}`)
//     counter++

//     if (counter > 10) {
//         break
//     }
// }
// ================================================================================

// ================================================================================
// Continue:

for (let i = 1; i <= 100; i++) {
  if (i % 2 === 0) {
    continue;
  }

  console.log(`Perulangan Ganjil ke-${i}`);
}
// ================================================================================
