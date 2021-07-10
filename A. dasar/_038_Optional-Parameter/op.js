console.log("===Optional Parameter===")


// ================================================================================
// Optional Parameter:
// * Secara default, parameter di function itu optional
// * Artinya kita tidak wajib mengisi valuenya ketika memanggil function
// * Jika tidak ada value yang kita kirim, maka secara otomatis parameter tersebut bernilai undefined
// ================================================================================


// ================================================================================
// Kode Optional Parameter:

function sayHello(firstName, middleName, lastName) {
    console.log(`Hello ${firstName} ${middleName ?? ''} ${lastName ?? ''}`)
}

sayHello("Dliyaulhaq", "Mufliansyah")
// ================================================================================