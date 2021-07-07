console.log("===Anonymous Function===")


// ================================================================================
// Anonymous Function:
// * Anonymous Function adalah function tanpa nama
// * Anonymous Function biasanya dibuat di dalam variable kosong, atau juga dibagian parameter
// ================================================================================


// ================================================================================
// Kode Anonymous Function:

// let say = function(name) {
//     console.log(`Hello ${name}`)
// }

// say("Ulhaq")
// ================================================================================

// ================================================================================
// Kode Anonymous Function di dalam Parameter:

function giveMeName(name, callback) {
    callback(name)
}

giveMeName("Ulhaq", function(name) {
    console.log(`Hello ${name}`)
})
// ================================================================================