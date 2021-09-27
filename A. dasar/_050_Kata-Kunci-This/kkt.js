console.log("===Kata Kunci This==");

// ================================================================================
// Kata Kunci This:
// * Kata kunci 'this' mengacu pada siapa pemilik property/method dari object tersebut
// * Tiap lokasi, kata kunci 'this' bisa berbeda-beda referensi pemiliknya:
// 1. Dalam Object Method, 'this' merupakan referensi ke object pemilik functionnya
// 2. Di Global Scope dan Function, this merupakan referensi ke Global Object (biasanya bernama Window jika di browser)
// 3. Di Function dengan strict mode, this adalah undefined
// 4. Dalam Event, this merupakan referensi ke element yang menerima event (Document Object Model atau DOM)
// ================================================================================

// ================================================================================
// Kode Kata Kunci This:

// Global
console.log(this); // Window

// Function
(function () {
  console.log(this); // Window
  (function () {
    console.log(this); // Window
  })();
})();

// Object
const person = {
  name: "Ulhaq", // Diakses menggunakan kata kunci this
  sayHello: function () {
    console.log(`Hello ${this.name}`); // Akan mengambil nilai dari property nama
  },
  getThis: function () {
    console.log(this); // Semua property/method yang ada pada object person
  },
};
person.sayHello();
person.getThis();
// ================================================================================
