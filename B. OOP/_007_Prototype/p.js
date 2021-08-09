#!/usr/bin/env node

console.log("===Prototype===")


// ================================================================================
// Prototype:
// * JavaScript sebelumnya dikenal dengan pemrograman berbasis prototype
// * Memang agak sedikit membingungkan, dan tidak dipungkiri, banyak sekali yang bingung dengan konsep prototype di JavaScript
// ================================================================================


// ================================================================================
// Prototype Inheritance: 
// * Saat kita membuat object dari function, object tersebut disebut instance, semua property (baik value atau method) akan berada di dalam instance objectnya
// * Setiap kita membuat sebuah constructor function, maka secara otomatis akan dibuatkan prototypenya, misal ketika kita membuat constructor function 'Person', maka akan ada 'Person.prototype'
// * Saat kita membuat sebuah object instance, secara otomatis object tersebuat adalah turunan Constructor.prototypenya
// * Untuk mengakses prototype milik sebuah instance, kita bisa menggunakan __proto__
// ================================================================================


// ================================================================================
// Kode: Object Instance
function Person(first_name, last_name) {
    this.first_name = first_name
    this.last_name = last_name
    this.sayHello = name => {
        console.log(`Hello ${name}, my name is ${this.first_name} ${this.last_name}`)
    }
}

{
    const ulhaq = new Person("Dliyaulhaq", "Mufliansyah")
    console.log(ulhaq)
    // console.log(ulhaq.sayBye()) // Error
}
// ================================================================================


// ================================================================================
// Menambah Property ke Prototype:
// * Property mirip object, dimana kita bisa menambahkan property (value maupun method)
// * Saat kiat menambah sebuah property ke Prototype, secara otomatis semua object instance yang diturunkan dari prototype tersebuat akan memiliki property tersebut
// ================================================================================


// ================================================================================
// Kode: Menambah Property ke Instance Object
{
    const ulhaq = new Person("Dliyaulhaq", "Mufliansyah")
    ulhaq.sayBye = () => console.log("Good bye")
    console.log(ulhaq)
}
// ================================================================================


// ================================================================================
// Kode: Menambahkan Property ke Prototype
{
    Person.prototype.sayBye = () => console.log("Good Bye!")
    const ulhaq = new Person("Dliyaulhaq", "Mufliansyah")
    console.log(ulhaq.sayBye())
}
// ================================================================================


// ================================================================================
// Cara kerja Prototype Inheritance:
// * Bagaimana bisa property di prototype diakses dari object instance?
// * Ketika kita mengakses property di object instance, pertama akan di cek, apakah di object tersebut ada property yang kita inginkan atau tidak, jika tidak maka akan di cek di __proto__ (prototype), jika masih tidak ada, akan dicek lagi di __proto__ (prototype) yang lebih tinggi, begitu seterusnya, sampai berakhir di Object Prototype
// ================================================================================

