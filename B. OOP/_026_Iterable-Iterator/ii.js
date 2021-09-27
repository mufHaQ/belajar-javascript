#!/usr/bin/env node

console.log("===Iterable & Iterator===");

// ================================================================================
// Iterable & Iterator:
// * Iterable merupakan fitur terbaru dari ES6
// * Iterable adalah special object yang memiliki standarisasi
// * Dengan mengikuti standarisasi iterable, secara otomatis kita bisa melakukan iterasi terhadap data tersebut dengan menggunakan perulangan for...of
// * Contoh yang sudah mengikuti standarisasi iterable adalah String, Array, Object, dll
// * https://youtu.be/aviAyIK5oSU?t=9185 | Membingungkan
// ================================================================================

// ================================================================================
// Cara Kerja Iterable dan Iterator:
// * Jika kita mengikuti kontrak iterable, maka object yang kita bisa diiterasi menggunakan for..of
// * Setiap kita melakukan perulangan, object iterator akan dibuat
// * Hal ini menjadi aman jika kita melakukan iterasi berulang-ulang, karena, iterator baru akan dibuat terus menerus
// ================================================================================

// ================================================================================
// Kode: Membuat Counter Iterator Result
class CounterIteratorResult {
  constructor(value, done) {
    this.value = value;
    this.done = done;
  }
}

// Kode: Membuat Counter Iterator
class CounterIterator {
  constructor(value, max) {
    this.value = value;
    this.max = max;
  }

  next() {
    try {
      if (this.value > this.max) {
        return new CounterIteratorResult(this.value, true);
      } else {
        return new CounterIteratorResult(this.value, false);
      }
    } finally {
      this.value++;
    }
  }
}

// Kode: Membuat Counter Iterable
class CounterIterable {
  constructor(value, max) {
    this.value = value;
    this.max = max;
  }

  [Symbol.iterator]() {
    return new CounterIterator(this.value, this.max);
  }
}

// Kode: Menggunakan Counter Iterable
const counter = new CounterIterable(10, 20);
for (const val of counter) {
  console.log(val);
}
// ================================================================================
