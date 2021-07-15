console.log("===Parameter di Constructor Function===")


// ================================================================================
// Parameter di Constructor Function:
// * Karena di dalam JavaScript class adalah bentuk function, jadi secara default function tersebut bisa memiliki parameter
// * Constructor function sama seperti function biasa, bisa memiliki parameter, hal ini membuat ketika kita membuat object, kita bisa mengirim langsung data lewat parameter di constructor function tersebut
// ================================================================================


// ================================================================================
// Kode Parameter di Constructor Function:

function Person(firstName, lastName) {
    this.firstName = firstName ?? "UNKNOWN"
    this.lastName = lastName ?? "UNKNOWN"
    this.sayHello = function() {
        console.log(`Hello ${this.firstName} ${this.lastName}`)
    }
}

const ulhaq = new Person("Dliyaulhaq", "Mufliansyah")
ulhaq.sayHello()

const budi = new Person()
budi.firstName = "Budi"
budi.lastName = "Setiawan"
budi.sayHello()
// ================================================================================
