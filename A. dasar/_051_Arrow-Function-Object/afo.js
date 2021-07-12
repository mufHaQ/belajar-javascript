console.log("===Arrow Function di Object===")


// ================================================================================
// Arrow Function di Object:
// * Arrow Function juga bisa digunakan untuk method dalam object
// * Namun, Arrow Function tidak bisa digunakan untuk mengakses Arguments Object, Function Generator, kata kunci 'this' dan super (OOP)
// * Jadi pastikan kita tidak membutuhkan fitur diatas jiak ingin menggunakan Arrow Function
// ================================================================================


// ================================================================================
// Kode Arrow Function di Object:

const person = {
    name: "Dliyaulhaq",
    sayHello: name => {
        console.log(`Hello ${name}`)
    },
    arrowThis: () => {
        console.log(this)
    },
    anonThis: function() {
        console.log(this)
    }
}

person.sayHello(person.name)
person.arrowThis() // Window
person.anonThis() // Object person
// ================================================================================
