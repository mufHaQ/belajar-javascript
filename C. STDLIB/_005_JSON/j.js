#!/usr/bin/env node

console.log("===JSON===");

// ================================================================================
// Pengenalan JSON:
// * JSON adalah singkatan dari JavaScript Object Notation
// * JSON merupakan data String yang bentuknya mirip dengan Object
// * Saat ini JSON banyak sekali digunakan untuk komunikasi antara Server dan client
// * https://www.json.org/json-en.html
// ================================================================================

// ================================================================================
// JSON:
// * JavaScript mendukung konversi data dari String JSON ke Object ataupun sebaliknya
// * JSON.stringify() digunakan untuk melakukan konversi dari Object ke String
// * JSON.parse() digunakan untuk melakukan konversi dari String ke Object
// * https://developer.mozilla.org/en-US/docs/web/javascript/reference/global_objects/JSON

// Kode: JSON
{
  const person = {
    firstName: "Dliyaulhaq",
    lastName: "Mufliansyah",
    address: {
      country: "Indonesia",
      city: "Kudus",
    },
  };

  const json = JSON.stringify(person);
  console.log(json + ": " + typeof json); // String

  const jsonParse = JSON.parse(json);
  console.table(jsonParse); // JSON
  console.table(
    JSON.parse(
      '{"firstName":"Dliyaulhaq","lastName":"Mufliansyah","address":{"country":"Indonesia","city":"Kudus"}}'
    )
  ); // JSON
}
// ================================================================================
