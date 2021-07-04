document.writeln("Variable");
document.writeln("</br>");


// ================================================================================
// Variable:
// * Variable adalah tempat untuk menyimpan data
// * Dengan menyimpan data ke Variable, kita bisa menggunakannya berkali-kali
// * Kita menggunakan kata kunci var untuk membuat Variable
// * JavaScript adalah dynamic language, yang artinya kita bisa mengubah tipe data pada Variable sesuka kita, dari string ke number. Tidak seperti bahasa pemrogramman lain (C/C++ dan Golang)

// var fullName;
// var firstName;
// var lastName;

// Mengubah Value di Variable:
// * Setelah Variable di deklarasikan, kita bisa mengubah nilai dari Variable tersebut
// * Untuk mengubahnya, kita bisa menuliskan nama Variable diteruskan dengan tanda '=' dan nilainya

// firstName = "Dliyaulhaq";
// lastName = "Mufliansyah";
// fullName = firstName + ' ' + lastName;

// document.writeln(fullName);
// document.writeln("</br>");

// firstName = "ASDlaknsd";
// lastName = "Onsadjnak";
// fullName = firstName + ' ' + lastName;

// document.writeln(fullName);
// ================================================================================


// ================================================================================
// Membuat Variable Langsung Dengan Value:
// * Di JavaScript, kita bisa mendeklarasikan Variable langsung dengan Valuenya
// * Kita menggunakan kata kunci var diikuti tanda '=' dan nilainya

// var alamat = "Kudus"
// document.writeln("</br>");
// document.writeln(alamat)
// ================================================================================


// ================================================================================
// Kata Kunci let:
// * Sebelum tahun 2015, Variable hanya bisa dibuat menggunakan kata kunci 'var'
// * Pada tahun 2015, ECMAScript 2015 rilis, diperkenalkan kata kunci baru, yaitu let dan const
// * JavaScript sekarang tidak merekomendasikan menggunakan kata kunci 'var' untuk membuat Variable dan diganti menggunakan kata kunci 'let, hal ini dikarenakan ada masalah dari desain awal var

// let firstName = "Dliyaulhaq"
// let lastName = "Mufliansyah"
// let fullName = firstName + ' ' + lastName
// document.writeln(fullName)
// ================================================================================


// ================================================================================
// Kata Kunci const:
// * Kata kunci 'const' Variable yang ketika sudah diisi dengan value, tidak bisa diubah lagi
// * Variable ini juga bisa dibilang constant

const fullName = "Dliyaulhaq Mufliansyah"
// fullName = "Test" // Akan terjadi error
document.writeln(fullName)
// ================================================================================