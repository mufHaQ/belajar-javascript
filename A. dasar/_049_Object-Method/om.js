console.log("===Object Method===")


// ================================================================================
// Object Method:
// * Function adalah tipe data, jadi function bisa ditambahkan sebagai property di dalam Object
// * Cara pembuatannya pun sama dengan Function sebagai value
// * Function di Object kadang disebut juga sebagai Object Method
// ================================================================================


// ================================================================================
// Kode Object Method:

// function sayHello(name) {
//     console.log(`Hello ${name}`)
// }

// const person = {
//     name: "Ulhaq",
//     // sayHello: sayHello // Cara 1
//     sayHello: function(name) {
//         console.log(`Hello ${name}`) // Cara 2
//     }
// }

// person.sayHello(person.name)
// ================================================================================


// ================================================================================
// Kode Menambahkan Method ke Object:

// const person = {
//     name: "Ulhaq"
// }

// person.sayHello = function(name) {
//     console.log(`Hello ${name}`)
// }

// person.sayHello("Alksdnlkansdlansldn")
// ================================================================================
