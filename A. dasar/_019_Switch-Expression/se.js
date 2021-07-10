console.info("===Switch Expression===")


// ================================================================================
// Switch Statement:
// * Switch adalah statement percabangan yang sama dengan if, namun lebih sederhana cara pembuatannya
// * Kondisi di Switch hanya berlaku untuk perbandingan ==
// ================================================================================


// ================================================================================
// Contoh Program:

const nilai = 'C'

switch (nilai) {
    case 'A':
        document.writeln("<p>Anda lulus dengan nilai yang sangat baik</p>")
        break
    case 'B':
    case 'C':
        document.writeln("<p>Anda lulus</p>")
        break
    case 'D':
        document.writeln("<p>Anda tidak lulus</p>")
        break
    default:
        document.writeln("<p>Ada kesalahan</p>")
}
// ================================================================================