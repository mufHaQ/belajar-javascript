console.log("===Destructuring===");

// ================================================================================
// Destructuring:
// * Destructuring fitur yang bisa digunakan untuk membongkar value-value di Array atau Object ke dalam variable-variable
// * Fitur ini sangat mempermudah kita ketika ingin mengambil data dari Array atau Object tanpa harus melakukan pengambilan data satu persatu
// ================================================================================

// ================================================================================
// Kode Destructuring Array:

// const person = ["Dliyaulhaq", "Mufliansyah", 16, "Kudus"]
// const [firstName, lastName, ...others] = person // Spread Syntax akan menjadi Array

// console.log(lastName)
// console.log("Alamat: " + others[1])
// ================================================================================

// ================================================================================
// Kode Destructuring Object:

// const person = {
//     firstName: "Dliyaulhaq",
//     lastName: "Mufliansyah",
//     address: {
//         street: "Jalan Buntu No. 01",
//         city: "Kudus",
//         country: "Indonesia"
//     },
//     hobby: "Game",
//     web: "https://mufhaq.com"
// }

// const {firstName, lastName, ...others} = person // Spread Syntax akan menjadi Object
// const {address, web} = others
// const {street, city, country} = address

// console.log(`${firstName} ${lastName}`)
// console.log(country)
// console.log(web)
// ================================================================================

// ================================================================================
// Kode Destructuring Object Nested:

// const person = {
//     firstName: "Dliyaulhaq",
//     lastName: "Mufliansyah",
//     address: {
//         street: "Jalan Buntu No. 01",
//         city: "Kudus",
//         country: "Indonesia"
//     },
//     hobby: "Game",
//     web: "https://mufhaq.com"
// }

// const {firstName, lastName, ...others} = person
// const {address: {street, city, country}, hobby, web} = others // Nested, tapi address tidak bisa digunakan karena address digunakan untuk men-Destructuring data yang ada di dalamnya

// console.log(`${firstName} ${lastName}`)
// console.log(country)
// console.log(web)
// ================================================================================

// ================================================================================
// Destructuring Function Parameter:
// * Destructuring juga bisa digunakan untuk function parameter
// * Ini akan membuat kita menjadi mudah ketika ingin mengambil data pada Array/Object
// ================================================================================

// ================================================================================
// Kode Destructuring Function Parameter Array:

// function sum([first, second]) {
//     return first + second
// }

// console.log(sum([10, 100]))
// ================================================================================

// ================================================================================
// Kode Destructuring Function Parameter Object:

// function displayPerson({firstName, lastName}) {
//     console.log(`Name: ${firstName} ${lastName}`)
// }

// const person = {
//     firstName: "Dliyaulhaq",
//     lastName: "Mufliansyah"
// }

// displayPerson(person)
// ================================================================================

// ================================================================================
// Default Value Destructuring:
// * Kita bisa menambahkan default value
// * Misal jika kita ingin melakukan destructuring Array tetapi yang diberikan bukan Array, maka kita bisa memberikan nilai default
// * Begitu juga pada Object, jika ternyata property tidak ada, maka kita bisa menambahkan default value
// ================================================================================

// ================================================================================
// Kode Default Value Destructuring Array:

// const names = ['Dliyaulhaq', 'Mufliansyah']
// const [firstName, lastName, age = "Tidak diketahui"] = names

// console.log(`Data diri:`)
// console.log(`Nama: ${firstName} ${lastName}`)
// if (age == "Tidak diketahui") {
//     console.log(`Umur: ${age}`)
// } else {
//     console.log(`Umur: ${age} Tahun`)
// }
// ================================================================================

// ================================================================================
// Kode Default Value Destructuring Object:

// const person = {
//     firstName: "Dliyaulhaq",
//     lastName: "Mufliansyah"
// }

// const {firstName, lastName, age = "Tidak diketahui"} = person
// console.log(`Name: ${firstName} ${lastName}`)
// console.log(`Umur: ${age}`)
// ================================================================================

// ================================================================================
// Destructuring Menggunakan Nama Variable Lain:
// * Saat melakukan destructuring di Array, kita bisa dengan mudah membuat nama variable sesuka kita
// * Namun di Object, kita harus menggunakan nama variable yang sama dengan nama property di Object yang kita inginkan
// * Tetapi kita sebenarnya juga bisa menggunakan nama variable lain
// ================================================================================

// ================================================================================
// Kode Destructuring Menggunakan Nama Variable Lain:

const person = {
  firstName: "Dliyaulhaq",
  lastName: "Mufliansyah",
  address: {
    street: "Jalan Buntu No. 10",
    city: "Kudus",
    country: "Indonesia",
  },
};

const {
  firstName: fn,
  lastName: ln,
  address: { street: st, city: ct, country: cn },
  hobby: hb = "UNKNOWN",
} = person;

console.log(`Name: ${fn} ${ln}
Address: 
    Street: ${st}
    City: ${ct}
    Country: ${cn}
    Hobby: ${hb}
`);
// ================================================================================
