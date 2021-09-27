console.log("===Getter dan Setter===");

// ================================================================================
// Getter dan Setter:
// * Getter dan Setter adalah kemampuan membuat function yang berbeda untuk mengambil data (Getter) dan menetapkan/mengubah data (Setter) pada sebuah property di dalam Object
// * Dengan menggunakan Getter dan Setter, kita bisa melakukan hal apapun di dalam function sebelum sebuah property diakses atau diubah, misal menambahkan validasi dll.
// ================================================================================

// ================================================================================
// Kode Getter dan Setter:

const person = {
  firstName: "Dliyaulhaq",
  lastName: "Mufliansyah",
  // Getter
  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  },
  // Setter
  set fullName(name) {
    const n = name.split(" ");
    this.firstName = n[0];
    this.lastName = n[1] ?? "";
  },
};
console.table(person);
person.fullName = "Budi Kurniawan";
console.table(person);
person.fullName = "Sandi";
console.table(person);
// ================================================================================
