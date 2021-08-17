#!/usr/bin/env node

console.log("===Object===")


// ================================================================================
// Object:
// * Tipe data object sudah sering kita bahas di JavaScript Dasar dan OOP
// * https://developer.mozilla.org/en-US/docs/web/javascript/reference/global_objects/object
// ================================================================================


console.log("========================================")


// ================================================================================
// Object Freeze & Seal:
// * Secara default, object bisa diubah atau dihapus property nya
// * Jika kita ingin mengubah sebuah object menjadi object yang tidak bisa diubah atau dihapus, kita bisa menggunakan beberapa static methods
// * Object.freeze() digunakan untuk mengubah object menjadi object yang tidak bisa diubah atau dihapus attributenya
// * Object.seal() digunakan untuk mengubah object menjadi object yang tidak bisa dihapus attributenya
// * Dan di seal/freeze kita tidak bisa menambahkan lagi attribute ke dalam object


// Kode: Object Freeze & Seal
// Freeze
{
    console.log("Freeze:")
    const person = {
        first_name: "Dliyaulhaq",
        last_name: "Mufliansyah"
    }

    Object.freeze(person)
    person.first_name = "Test" // Tidak diubah
    delete person.last_name // Tidak dihapus
    console.table(person)
}

// Seal
{
    console.log("\nSeal:")
    const person = {
        first_name: "Dliyaulhaq",
        last_name: "Mufliansyah"
    }

    Object.seal(person)
    person.first_name = "Test" // Diubah
    delete person.last_name // Tidak dihapus
    console.table(person)
}
// ================================================================================


console.log("========================================")


// ================================================================================
// Object Assign:
// * Kadang kita ada kasus menggabungkan semua attribute dari sebuah object ke object lain
// * Hal ini bisa kita lakukan dengan menggunakan Object.assign(target, source)
// * Jika di dalam source memiliki attribute yang sama dengan target, maka attribute target akan ditimpa


// Kode: Object Assign
{
    console.log("Object Assign:")
    const target = { first_name: "Dliyaulhaq" }
    const source = { last_name: "Mufliansyah" }

    Object.assign(target, source)

    console.table(target) // Assign first_name & last_name
    console.table(source)
}
// ================================================================================


console.log("========================================")


// ================================================================================
// Object Property Name & Value:
// * Object juga memiliki static method untuk digunakan mengambil semua properties names dan values
// * Object.value() digunakan untuk mengambil semua property value
// * Object.getOwnPropertyNames() digunakan untuk mengambil semua property name
// * Kedua method tersebut akan mereturn data berbentuk array


// Kode: Object Property Name & Value
{
    console.log("Object Property Name & Value:")
    const person = Object.freeze({
        first_name: "Dliyaulhaq",
        last_name: "Mufliansyah"
    })

    console.table(Object.values(person))
    console.table(Object.getOwnPropertyNames(person))
}
// ================================================================================


console.log("========================================")


// ================================================================================
// Dll:
// * https://developer.mozilla.org/en-US/docs/web/javascript/reference/global_objects/object
// ================================================================================
