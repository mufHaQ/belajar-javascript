console.info("===Falsy dan Truthy===")


// ================================================================================
// Falsy:
// * Fasly atau falsey, adalah value yang ketika dalam konteks boolean, dia dianggap false
// * Ini adalah salah satu fitur unik JavaScript, yang berguna, namun kadang juga sering membingungkan
// * Jadi di JavaScript, kondisi itu tidak hanya bisa boolean, tapi diluar boolean pun bisa, namun kita harus tahu beberapa data falsy, atau dianggap false

// Data Falsy:
// ----------------------------------------------------------
// | false          | Boolean false                         |
// | 0, -0          | Number 0 dan -0 dianggap false        |
// | "", '', ``     | Semua String kosong dianggap false    |
// | null           | Null dianggap false                   |
// | undefined      | Undefined dinaggap false              |
// | NaN            | Not a Number dianggap false           |
// ----------------------------------------------------------


// Contoh Falsy:

// let data = false
// let data = 0
// let data = -0
// let data = ""
// let data = null
// let data = undefined
// let data = NaN

// if (data) {
//     console.log("TRUE")
// } else {
//     console.log("FALSE")
// }
// ================================================================================


// ================================================================================
// Truthy:
// * Truthy adalah kebalikan dari Falsy, dimana datanya dianggap bernilai true

// Data Truthy:
// --------------------------------------------------------------------------
// | true           | Boolean true                                          |
// | > 0 && < -0    | Semua number kecuali 0 dan -0                         |
// | "String"       | Semua String yang tidak kosong                        |
// | Not null       | Yang tidak null, seperti object/array (walau kosong)  |
// | Not undefined  | Yang tidak undefined                                  |
// | Not NaN        | Yang tidak NaN                                        |
// --------------------------------------------------------------------------


// Contoh Truthy:

// let data = true
// let data = 1
// let data = -1
// let data = "String"
// let data = !null
// let data = !undefined
// let data = !NaN

// if (data) {
//     console.log("TRUE")
// } else {
//     console.log("FALSE")
// }
// ================================================================================