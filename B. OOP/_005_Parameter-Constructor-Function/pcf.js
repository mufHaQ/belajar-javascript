#!/usr/bin/env node

console.log("===Parameter di Constructor Function===")

// ================================================================================
// Parameter di Constructor Function:
// * Karena dalam javascript, class berbentuk function, jadi secara default function tersebut bisa memiliki parameter
// * Constructor function sama seperti function biasanya, bisa memiliki parameter, hal ini membuat kita ketika membuat object, kita bisa mengirim langsung data lewat parameter di constructor function

// Kode: Parameter di Constructor Function
{
    function Person(first_name, last_name) {
        this.first_name = first_name
        this.last_name = last_name
        this.sayHello = name => {
            console.log(`Hello ${name}, my name is ${this.first_name} ${this.last_name}`)
        }
    }

    const ulhaq = new Person("Dliyaulhaq", "Mufliansyah")
    ulhaq.sayHello("Budi")
}
// ================================================================================
