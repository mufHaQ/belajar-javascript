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
// * Dalam menggunakan tipe data waktu, biasanya disemua bahasa pemrograman akan mendukung yang namanya Epoch & Unix Timestamp
// * Epoch & Unix Timestamp merupakan hitungan miliseconds setelah tanggal 1 januari 1970
// * JavaScript mendukung pembuatan waktu dalam bentuk Epoch & Unix Timestamp
// * Untuk mendapatkan waktu saat ini dalama Epoch & Unix Timestamp, kita bisa menggunakan Date.now()
// * Untuk mengubah dari object date ke Epoch & Unix Timestamp, kita bisa menggunakan function getTime()


// Kode: Epoch & Unix Timestamp
{
    console.log("\nEpoch & Unix Timestamp:")

    const UnixTimestamp = Date.now()
    console.log(UnixTimestamp)

    const dateUnix = new Date(UnixTimestamp)
    // Outputnya sama
    console.log(dateUnix.getTime())

    console.log(dateUnix.toLocaleString("id-id"))
}
// ================================================================================


// ================================================================================
// Parsing Date:
// * Kita juga bisa melakukan parsing untuk membuat Date dari String menggunakan method Date.parse(value<String>)
// * Format String harus YYYY-MM-DDTHH:mm:ss.sssZ // 2004-10-14T18:00:00.000_07:00
// * Dimana jika kita hanya membuat date berisi tanggal saja, kita cukup gunakan YYYY-MM-DD
// * Jika Date dengan tanggal dan waktu, gunakan YYYY-MM-DDTHH:mm:ss.sss
// * Jika Date dengan tanggal, waktu dan timezone, gunakan YYYY-MM-DDTHH:mm:ss.sssZ
// * Hasil parsing adalah Unix Timestamp, bukan object Date


// |--------|---------------------------|
// | YYYY   | Tahun                     |
// | MM     | Bulan                     |
// | DD     | Hari                      |
// | T      | Pemisah Tanggal dan Waktu |
// | HH     | Jam                       |
// | MM     | Menit                     |
// | SS     | Detik                     |
// | SSS    | Milidetik                 |
// | Z      | Timezone                  |
// |--------|---------------------------|


// Kode: Parsing Date
{
    console.log("\nParsing Date:")
    const toUnixTimestamp = Date.parse("2004-10-14T18:20:00.000")
    // const toUnixTimestamp = Date.parse(new Date())
    console.log(toUnixTimestamp)

    const toLocaleString = new Date(toUnixTimestamp)
    console.log(toLocaleString.toLocaleString("id-id"))
}
// ================================================================================


// ================================================================================
// Date Getter & Setter
// * Date juga memiliki banya sekali method untuk mendapatkan informasi date dan juga mengubah informasi date, atau istilahnya adalah Getter & Setter
// * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date#instance_methods


// Kode: Date Getter & Setter
{
    console.log("\nDate Getter & Setter:")
    const date = new Date()

    console.log(date.getDate())
    console.log(date.getMonth()) // Start from index-0
    console.log(date.getFullYear())
    console.log(date.getHours())
    console.log(date.getMinutes())
    console.log(date.getSeconds())
    console.log(date.getTimezoneOffset()) // Current Locale time to UTC

    date.setFullYear("2004", 10, 14)
    date.setHours(18, 20, 00, 0000)

    console.log(date.toLocaleString("id-id"))
}
// ================================================================================
