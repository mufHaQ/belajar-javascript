#!/usr/bin/env node

console.log("===Prototype===")


// ================================================================================
// Prototype:
// * JavaScript sebelumnya dikenal sebagai bahasa pemrogramman berbasis prototype
// ================================================================================


// ================================================================================
// Prototype Inheritance:
// * Saat kita membuat object dari constructor function, object tersebut disebuat instance, semua property (baik itu value ataupun method) akan berada di dalam instance objectnya
// * Setiap kita membuat sebuah constructor function, maka secara otomatis akan dibuatkan prototypenya, misal ketika kita membuat constructor function Person, maka akan ada Person.prototype
// * Saat kita membuat sebuah object instance, secara otomatis object tersebut adalah turunan dari Constructor.prototype nya
// * Untuk mengakses prototype dari sebuah instance, kita bisa menggunakan __proto__ (kalau ingin melihat isinya bisa menggunakan html dan buka di browser)
// ================================================================================


// ================================================================================
// Menambah Property ke Prototype:
// * Property mirip object, dimana kita bisa menambahkan property baik itu value maupun method
// * Saat kita menambahkan sebuah property ke prototype, secara otomatis semua object instance akan diturunkan ke prototype tersebut
// ================================================================================


// ================================================================================
// Kode Menambah Property ke Instance Object:

// function Person(name) {
//     this.name = name
// }

// // ulhaq
// const ulhaq = new Person("Dliyaulhaq Mufliansyah")
// ulhaq.sayBye = () => console.log("Bye") // Ini hanya akan menambah property kedalam Instance ulhaq, tidak ke function Person
// console.log(ulhaq)


// // budi
// const budi = new Person("Budi")
// // budi.sayBye() // Akan error karena tidak ada method sayBye
// console.log(budi) // Tidak ada method sayBye
// ================================================================================


// ================================================================================
// Kode Menambah Prototype ke Instance Object:

// function Person(name) {
//     this.name = name
// }

// Person.prototype.sayHello = function() {
//     console.log(`Hello ${this.name}`)
// }

// const ulhaq = new Person("Ulhaq")
// const budi = new Person("Budi")
// ulhaq.sayHello()
// budi.sayHello()
// ================================================================================


// ================================================================================
// Cara Kerja Prototype Inheritance:
// * Bagaimana bisa property di prototype diakses dari object instance?
// * Ketika kita mengakses prototype di object instance, pertama akan dicek apakah di object tersebut terdapat property tersebut atau tidak, jika tidak maka akan dicetak di __proto__ (prototype)nya, jika masih tidak ada akan dicetak lagi di __proto__ yang lebih tinggi, begitu seterusnya sampai berakhir di Object Prototype
// ================================================================================
