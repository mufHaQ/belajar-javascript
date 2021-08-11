#!/usr/bin/env node

console.log("===Class Error===")


// ================================================================================
// Class Error:
// * Walaupun di JavaScript sudah memiliki standard class Error
// * Namun alangkah baiknya kita membedakan tiap jenis error
// * Untuk membuat class error sendiri, kita bisa membuat class turunan dari class Error
// * Dan juga jangan lupa tambahkan message, agar bisa mengirimkan parameter ke constructor class Error


// Kode: Class Error
class ValidationError extends Error {
    constructor(msg, field) {
        super(msg)
        this.field = field
    }

    Number(number) {
        if (number.length === 0) {
            throw new ValidationError(this.message, this.field)
        } else {
            throw new ValidationError("Terjadi kesalahan!", "unknown")
        }
    }
}


class MathUtil {
    static sum(...numbers) {
        new ValidationError("Jumlah parameter harus lebih dari 0", "numbers").Number(numbers)
        return numbers.reduce((prev, curr) => prev + curr)
    }
}


try {
    // console.log(MathUtil.sum())
    console.log(MathUtil.sum("a", 1))
    console.log(MathUtil.sum(1, 2, 3, 4, 5))
} catch (error) {
    // console.log(error)
    console.log(`Terjadi error di field ${error.field} | ${error}`)
}
// ================================================================================
