#!/usr/bin/env node

console.log("===Proxy===");

// ================================================================================
// Proxy:
// * Merupakan fitur yang bisa digunakan sebagai wakil sebuah data
// * Dengan menggunakan Proxy, semua interaksi ke data akan selalu melalui Proxy terlebih dahulu
// * Kita bisa melakukan apapun sebelum interaksi dilakukan ke data yang dituju
// * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy
// ================================================================================

// ================================================================================
// Proxy Handler:
// * Pembuatan Proxy perlu menggunakan handler, dimana dalam handler, kita bisa membuat function yang dinamakan iterceptor yang digunakan ketika mengambil data atau mengubah data ke terget
// * Untuk membuat Proxy, kita bisa menggunakan new Proxy(target, handler)

// Kode: Proxy Handler
{
  const target = {
    name: "target",
  };

  const handler = {
    get: (target, property) => {
      return target[property];
    },
    set: (target, property, value) => {
      target[property] = value;
    },
  };

  const proxy = new Proxy(target, handler);

  proxy.firstName = "Dliyaulhaq";
  proxy.lastName = "Mufliansyah";

  // console.log(proxy)
  // console.log(target)
}
// ================================================================================

// ================================================================================
// Proxy dan Handler:
// * Saat kita mengubah data proxy, secara otomatis data akan dikirim ke target melalui handler dengan memanggil function set(target, property, value)
// * Saat kita mengambil data proxy, secara otomatis data akan diambil dari target melalui handler dengan memanggil function get(target, property)
// * Artinya, jika kita ingin melakukan sesuatu sebelum dan sesudah, bisa kita lakukan di handler

// Kode: Proxy dan Handler
{
  const target = {
    name: "target",
  };

  class ValueValidator extends Error {
    constructor(msg, field, value) {
      super(msg);
      this.field = field;
      this.value = value;
    }

    Null() {
      if (this.value == null) {
        try {
          throw new ValueValidator(this.message, this.field);
        } catch (err) {
          console.log(err.message);
        }
      }

      return;
    }
  }

  const handler = {
    get: (target, property) => {
      return target[property];
    },
    set: (target, property, value) => {
      new ValueValidator(`Property "${property}" tidak boleh null`, property, value).Null();
      target[property] = value;
    },
  };

  const proxy = new Proxy(target, handler);

  proxy.firstName = "Dliyaulhaq";
  proxy.middleName = null;
  proxy.lastName = "Mufliansyah";

  console.log(proxy.firstName);
}
// ================================================================================
