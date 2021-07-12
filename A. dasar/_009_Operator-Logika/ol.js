document.writeln("Operator Logika")
document.writeln("</br>")

// ================================================================================
// Operator Logika:
// * Operator logika adalah operator untuk dua buah data boolean
// * Hasil dari operator logika adalah boolean

// ------------------
// | && | Dan       |
// | || | Atau      |
// | !  | Kebalikan |
// ------------------

// Operator &&:
// -Nilai 1--OP--Nilai 2--Hasil--
// | true  | && | true  | true  |
// | true  | && | false | false |
// | false | && | true  | false |
// | false | && | false | true  |
// ------------------------------

// Operator ||:
// -Nilai 1--OP--Nilai 2--Hasil--
// | true  | || | true  | true  |
// | true  | || | false | true  |
// | false | || | true  | true  |
// | false | || | false | fasle |
// ------------------------------

// Operator !:
// ----------------------
// | ! | true   | false |
// | ! | false  | true  |
// ----------------------
// ================================================================================


// ================================================================================
const nilaiUjian = 90
const nilaiAbsensi = 70

const lulusUjian = nilaiUjian > 75
const lulusAbsensi = nilaiAbsensi > 75

const lulus = lulusUjian && lulusAbsensi

document.writeln(lulus)
// ================================================================================
