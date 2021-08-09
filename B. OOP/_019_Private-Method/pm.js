#!/usr/bin/env node

console.log("===Private Method===")


// ================================================================================
// Private Method:
// * Sama seperti field, terdapat proposal juga untuk menambahkan fitur private method di ES
// * Dengan demikian, access modifier private juga bisa digunakan di method
// * Caranya sama seperti private field, dengan menambahkan tanda '#' di depan nama method
// * https://github.com/tc39/proposal-private-methods


// Kode: Private Method
class Person {
    sayHello(name) {
        if (name) {
            this.#sayHelloWithName(name)
        } else {
            this.#sayHelloWithoutName()
        }
    }

    #sayHelloWithName(name) {
        console.log(`Hello ${name}`)
    }

    #sayHelloWithoutName() {
        console.log('Hello')
    }
}

const ulhaq = new Person()
ulhaq.sayHello()
ulhaq.sayHello("Ulhaq")
// ================================================================================
