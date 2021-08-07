console.info("===Switch Expression===")


// ================================================================================
// Switch Statement:
// * Switch adalah statement percabangan yang sama dengan if, namun lebih sederhana cara pembuatannya
// * Kondisi di Switch hanya berlaku untuk perbandingan '=='
// * Kita bisa memberikan kondisi dibagian case
// ================================================================================


// ================================================================================
// Contoh Program:

// const nilai = 'C'

// switch (nilai) {
//     case 'A':
//         document.writeln("<p>Anda lulus dengan nilai yang sangat baik</p>")
//         break
//     case 'B':
//     case 'C':
//         document.writeln("<p>Anda lulus</p>")
//         break
//     case 'D':
//         document.writeln("<p>Anda tidak lulus</p>")
//         break
//     default:
//         document.writeln("<p>Ada kesalahan</p>")
// }
// ================================================================================


// ================================================================================
// Case dengan Kondisi:

let names = ["Dliyaulhaq", "Mufliansyah", 1, 2, 3]

switch (true) {
    case names.length >= 5:
        console.log("Maaf, nama anda terlalu panjang!")
        break
    case names.length < 5:
        console.log("Selamat datang!")
        break
    default:
        console.log("Maaf, terjadi kesalahan!")
}
// ================================================================================
