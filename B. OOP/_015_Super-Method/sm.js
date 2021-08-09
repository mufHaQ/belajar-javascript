#!/usr/bin/env node

console.log("===Super Method===")


// ================================================================================
// Super Method:
// * Selain digunakan untuk memanggil constructor milik parent class, kata kunci super juga bisa digunakan untuk mengakses method milik parent class
// * Caranya dengan menggunakan 'super.method_name()'
// * Dengan kata lain, super adalah reference ke parent prototype, mirip seperti __proto__


// Kode: Super Method
class Shape {
    paint() {
        console.log("Paint Shape")
    }
}

class Circle extends Shape {
    paint() {
        super.paint() // Memanggil method paint() pada parent class
        console.log("Paint Circle")
    }
}

const circle = new Circle()
console.log(circle)
circle.paint()
// ================================================================================
