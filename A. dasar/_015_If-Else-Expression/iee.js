console.info("===If Expression===");

// ================================================================================
// If Expression:
// * Dalam JavaScript, if adalah salah satu kata kunci yang digunakan untuk percabangan
// * Percabangan Artinya, kita bisa mengeksekusi kode program tertentu ketika suatu kondisi terpenuhi
// * Hampir semua bahasa pemrogramman mendukung if expression

// Else Expression:
// * Jika kondisi If tidak terpenuhi (false), maka program akan menjalankan kondisi Else

// Else If Expression:
// * Membuat beberapa kondisi If
// * Jika kedua-beberapa If terpenuhi, maka yang akan dijalankan adalah If yang pertama
// ================================================================================

// ================================================================================
const examValue = 80;

if (examValue >= 90) {
  console.info("Good Job: A");
} else if (examValue >= 80) {
  console.info("Good Job: B");
} else if (examValue >= 70) {
  console.info("Good Job: C");
} else {
  console.info("Try Again Next Year!");
}
// ================================================================================
