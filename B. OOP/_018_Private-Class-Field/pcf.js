#!/usr/bin/env node

console.log("===Private Class Field===")


// ================================================================================
// Private Class Field:
// * Secara default, jika kita menambahkan field, maka field tersebut bisa diakses dari manapun
// * Jika kita ingin membuat field bersifat private (hanya bisa diakses di dalam class), maka kita bisa menambahkan tanda '#' di depan nama fieldnya


// Kode: Private Class Field
class Person {
    #firstName
    #lastName
    #age

    constructor(fn, ln, age) {
        this.#firstName = fn
        this.#lastName = ln
        this.#age = age
    }

    get Data() {
        return {
            firstName: this.#firstName,
            lastName: this.#lastName,
            age: this.#age
        }
    }
}

const ulhaq = new Person("Dliyaulhaq", "Mufliansyah", 16)
console.log(ulhaq.Data)

// console.log(ulhaq.firstName) // Undefined
// console.log(ulhaq.#firstName) // Error
// ================================================================================
