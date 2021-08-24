#!/usr/bin/env node

console.log("===Base64===")


// ================================================================================
// Base64:
// * Merupakan binary to text encoding, representasi binary data dalam format string
// * Merupakan format text data yang aman untuk dikirim web
// * Merupakan encoding yang biasanya digunakan ketika perlu mengirim data dari client ke server
// * karena encoding Base64 merupakan text, oleh karena itu sangat aman digunakan pada query param URL atau text body dalam form
// * https://developer.mozilla.org/en-US/docs/Glossary/Base64


// Base64 Function:
// |----Function----|----------Keterangan---------|
// | btoa(value)    | Encode ke base64 dari value |
// | atob(encoded)  | Decode dari base64 ke value |
// |----------------|-----------------------------|
// Catatan: Function ini akan error jika dijalankan di node.js tetapi tidak jika di browser


// Kode: Base64
{
    console.log("\nBase64:")
    const ori = "Dliayulhaq Mufliansyah"
    const encoded = btoa(ori)
    const decoded = atob(encoded)

    const obj = {
        ori: ori,
        encoded: encoded,
        decoded: decoded
    }

    console.table(obj)
}
// ================================================================================
