#!/usr/bin/env node

console.log("===Encode===");

// ================================================================================
// Encode:
// * Saat kita menulis URL, kadang kita ingin menambah informasi tambahan seperti query parameter misalnya
// * URL sendiri sudah memiliki standard encoding penulisan URL
// * Standard encoding ini dilakukan agar penulisan URL aman ketika diterima oleh sever
// * Aman disini dalam artian informasi URL tidak berubah
// * Contoh paling sederhana misal, walaupun kita bisa mengirim spasi dalam url, tapi disarankan untuk dinencode agar nilai spasi tidak benar-benar terlihat seperti spasi pada URL nya
// ================================================================================

// ================================================================================
// Contoh Masalah Jika Kita Tidak Menggunakan Encode:
// * Misal ada query parameter dengan nama data, lalu kita ingin mengirimkan nilai
// * Misal nilainya adalah &ulhaq=ulhaq&, alhasil URLnya akan seperti berikut
// * https://contoh.com?data=&ulhaq=ulhaq& | menjadi -> data = "" | ulhaq = "ulhaq"
// * URL diatas terlihat tidak ada masalah, tapi sebenarnya ketika diterima oleh server, parameter data bernilai kosong, kenapa? Karena tanda '&' dianggap sebagai pemisah antar parameter
// * Artinya tanda seperi '&' dll, perlu diencode agar tidak terjadi kesalahan data yang kita kirim
// ================================================================================

// ================================================================================
// Encode Function:
// |-----------Function-------------|-----------------------Keterangan---------------------|
// | encodeURI(value)               | Melakukan encode value, kecuali karakter ;,/?:@&=+$# |
// | encodeURIComponent(value)      | Melakukan encode value semua karakter                |
// | decodeURI(encoded)             | Melakukan decode value hasil encodeURI()             |
// | decodeURIComponent(encoded)    | Melakukan decode value hasil encodeURIComponent()    |
// |--------------------------------|------------------------------------------------------|
// ================================================================================

// ================================================================================
// Kode: encodeURI & decodeURI
{
  console.log("\nencodeURI & decodeURI:");

  const url = "http://www.contoh.com/?name=Dliyaulhaq Mufliansyah";
  const encoded = encodeURI(url);
  const decoded = decodeURI(encoded);

  const obj = {
    url: url,
    encoded: encoded,
    decoded: decoded,
  };

  console.table(obj);
}
// ================================================================================

// ================================================================================
// encodeURIComponent & decodeURIComponent:
// * Untuk ini, sebaiknya dipisah antara query dan url, karena nanti semuanya bagian url akan terencode
// * http://www.contoh.com/?name=Dliyaulhaq Mufliansyah -> http%3a%2f%2fwww.contoh.com%2f%3fname%3dDliyaulhaq+Mufliansyah

// Kode: encodeURIComponent & decodeURIComponent
{
  console.log("\nencodeURIComponent & decodeURIComponent:");

  const name = "Dliyaulhaq Mufliansyah";
  const email = "email@mail.com";
  const encodeName = encodeURIComponent(name);
  const encodeEmail = encodeURIComponent(email);
  const decodeName = decodeURIComponent(encodeName);
  const decodeEmail = decodeURIComponent(encodeEmail);

  const url = `http://www.contoh.com/?name=${name}&email=${email}`;
  const encoded = `http://www.contoh.com/?name=${encodeName}&email=${encodeEmail}`;
  const decoded = `http://www.contoh.com/?name=${decodeName}&email=${decodeEmail}`;

  const obj = {
    url: url,
    encoded: encoded,
    decoded: decoded,
  };

  console.table(obj);
}
// ================================================================================
