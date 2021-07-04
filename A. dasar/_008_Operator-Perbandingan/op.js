document.writeln("Operator Perbandingan")
document.writeln("</br>")

// ================================================================================
// Operasi Perbandingan:
// * Operasi perbandingan adalah operasi untuk membandingakan dua data
// * Operasi perbandingan adalah operasi yang menghasilkan nilai boolean (true or false)
// ================================================================================


// ================================================================================
// Operator Perbandingan:
// -----------------------------------------------
// | >   | Lebih Dari                            |
// | <   | Kurang Dari                           |
// | >=  | Lebih Dari Sama Dengan                |
// | <=  | Kurang Dari Sama Dengan               |
// | ==  | Sama Dengan                           |
// | === | Sama Dengan dan Sama Tipe             |
// | !=  | Tidak Sama Dengan                     |
// | !== | Tidak Sama Dengan dan Tidak Sama Tipe |
// -----------------------------------------------
// ================================================================================


// ================================================================================
let result = 5 == "5" // true
document.writeln("<p>" + result + "</p>")

result = 5 === "5" // false
document.writeln("<p>" + result + "</p>")

result = 5 < "10" // true
document.writeln("<p>" + result + "</p>")

result = 5 > "10" // false
document.writeln("<p>" + result + "</p>")
// ================================================================================