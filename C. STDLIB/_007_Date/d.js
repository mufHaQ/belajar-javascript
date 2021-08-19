#!/usr/bin/env node

console.log("===Date===")


// ================================================================================
// Date:
// * JavaScipt memiliki tipe data untuk merepresentasikan waktu dan tanggal, yaitu Date
// * Date merupakan representasi milisecond sejak tanggal 1 Januari 1970, atau dikenal dengan Epoch & Unix Timestamp
// * https://developer.mozilla.org/en-US/docs/web/javascript/reference/global_objects/date
// ================================================================================


// ================================================================================
// Membuat Object Date:
// * Untuk membuat Object Date, kita bisa menggunakan new Date(), dimana terdapat constructor parameter
// |----------------------------Function----------------------------|---------------Keterangan------------------|
// | new Date()                                                     | Membuat date saat ini                     |
// | new Date(year, month, date)                                    | Membuat date dengan tanggal               |
// | new Date(year, month, date?, hour?, minute?, second?, mili?)   | Membaut date dengan parameter sampai mili |
// | new Date(timestamp)                                            | Membuat date dari Epoch/Unix Timestamp    |
// |----------------------------------------------------------------|-------------------------------------------|


// Kode: Membuat Object Date
{
    console.log("Membuat Object Date:")
    const date1 = new Date().toLocaleString("id-id")
    console.log(date1.split("/").join("-"))

    const date2 = new Date(2021, 08, 18).toLocaleString("id-id")
    console.log(date2)
}
// ================================================================================


// ================================================================================
// Epoch & Unix Timestamp:

// https://youtu.be/sP_QbKeifm4?t=4626
// ================================================================================
