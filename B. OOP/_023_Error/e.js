#!/usr/bin/env node

console.log("===Error===");

// ================================================================================
// Error:
// * Saat membuat aplikasi, sudah tentu kita tidak bisa terhindar dari yang namanya error
// * Di JavaScript, Error merupakan sesuatu yang sudah standar
// * Banyak sekali class error di JavaScript, namun semua class error di JavaScript selalu berujung di class Error, artinya class Error adalah superclass untuk semua jenis error di JavaScript
// * Contoh class error yang ada di JavaScript adalah SyntaxError, TypeError, EvalError, dll
// * https://developer.mozilla.org/en-US/Web/JavaScript/Reference/Global_Objects/Error#error_types
// ================================================================================

// ================================================================================
// Throw Error:
// * Saat kita membuat instance object dari class Error, tidak lantas otomatis terjadi error
// * Kita perlu memberitahu program kita, bahwa kita akan mentrigger sebuah error terjadi, atau istilahnya adalah melempar error (Throw Error)
// * Untuk melempar error, kita bisa menggunakan kata kunci 'throw', diikuti dengan instance object errornya
// * Jika terjadi error, maka secara otomatis kode program kita akan terhenti, dan kita bisa melihat detail errornya di console browser

// Kode: Throw Error
class MathUtil {
  static sum(...numbers) {
    if (numbers.length === 0) {
      throw new Error("Total parameter harus lebih dari 0");
    }
    return numbers.reduce((prev, curr) => prev + curr);
  }
}

console.log(MathUtil.sum(1, 2, 3, 4, 5));
console.log(MathUtil.sum());
// ================================================================================
