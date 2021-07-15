console.log("===Method di Constructor Function===")


// ================================================================================
// Method di Constructor Function:
// * Sama seperti pada tipe data object biasanya, kita juga bisa menambahkan method di dalam constructor function
// * Jika kita menambahkan method di constructor function, secara otomatis object yang dibuat akan memiliki method tersebut
// ================================================================================


// ================================================================================
// Kode Method di Constructor Function:

function Person() {
    this.sayHello = name => {
        console.log(`Hello ${name}`)
    }
}

const ulhaq = new Person()
ulhaq.sayHello("Dliyaulhaq")
// ================================================================================
