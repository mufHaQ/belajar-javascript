#!/usr/bin/env node

console.log("===Class Constructor===")


// ================================================================================
// Class Constructor:
// * Karena bentuk contructor function mirip dengan function biasa, jadi kita bisa menambahkan parameter pada constructor function, lantas bagaimana dengan class?
// * Di class juga bisa menambahkan parameter, dengan membuat method bernama 'contructor'


// Kode: Class Constructor
class Person {
    constructor(name) {
        this.name = name
    }
}

const ulhaq = new Person("Dliyaulhaq Mufliansyah")
console.log(ulhaq)
// ================================================================================
