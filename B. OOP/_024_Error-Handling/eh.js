#!/usr/bin/env node

console.log("===Error Handling===");

// ================================================================================
// Error Handling:
// * Saat terjadi error, program akan langsung dihentikan
// * Di JavaScript, kita bisa menangkap error
// * Dengan menggunakan try-catch statement, kita bisa menangkap error
// * Pada block try, kita akan mencoba mengakses kode program yang bisa menyebabkan error, dan jika terjadi error, block try akan berhenti, dan block catch akan dijalankan
// * Dalam try catch, kita bisa menambahkan block finally, block ini akan selalu dieksekusi diakhir, entah terjadi error atau tidak, block ini akan tetap dieksekusi

// Kode: Error Handling
{
  console.log("MathUtil");
  class MathUtil {
    static sum(...numbers) {
      if (numbers.length === 0) {
        throw new Error("Jumlah parameter harus lebih dari 0"); // Melempar Error
      }

      return numbers.reduce((prev, curr) => prev + curr);
    }
  }

  try {
    console.log(MathUtil.sum()); // Error
    console.log(MathUtil.sum(1, 2, 3, 4, 5)); // Tidak akan dijalankan
  } catch (error) {
    // Menangkap Error
    // console.log(`Error: ${error.message}`)
    console.log(`${error}`);
  } finally {
    console.log("Exit Program\n");
  }
}
// ================================================================================

// ================================================================================
// Try Finally:
// * kata kunci finally juga bisa digunakan tanpa perlu menggunakan catch
// * Biasanya ini digunakan dalam kasus tertentu

// Kode: Try Finally
{
  console.log("Counter");
  class Counter {
    static #value = 1;

    static next() {
      try {
        return this.#value;
      } finally {
        this.#value++;
      }
    }
  }

  console.log(Counter.next());
  console.log(Counter.next());
}
// ================================================================================
