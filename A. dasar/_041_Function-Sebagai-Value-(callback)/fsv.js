console.log("===Function Sebagai Value===");

// ================================================================================
// Function Sebagai Value:
// * Function tidak hanya bisa digunakan sebagai kode program dieksekusi, tapi juga bisa sebagai value
// * Artinya, function bisa disimpan di variable, bisa juga dikirim melalui parameter ke function lainnya
// ================================================================================

// ================================================================================
// Kode Function Sebagai Value:

// function sayHello(name) {
//     console.log(`Hello ${name}`)
// }

// let say = sayHello
// sayHello("Dliya")
// say("Ulhaq")
// ================================================================================

// ================================================================================
// Kode Function di Parameter:

function sayHello(name) {
  console.log(`Hello ${name}`);
}

function giveMeName(name, callback) {
  callback(name); // Akan jadi seperit ini: sayHello(name)
}

let say = sayHello;

giveMeName("Dliya", sayHello);
giveMeName("Ulhaq", say);
// ================================================================================
