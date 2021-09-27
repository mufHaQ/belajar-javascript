console.log("===Debugger===");

// ================================================================================
// Debugger:
// * Debugger digunakan untuk melakukan proses debugging
// * Debugging adalah proses mencari bug (masalah) yang biasa terjadi di kode program kita
// * Dengan menggunakan debugger, kita bisa menghentikan kode program di posisi yang kita inginkan (breakpoint), lalu melihat semua isi variable yang ada pada saat kode program sedang berhenti
// * Dan mungkin tidak semua browser mendukung proses debugging
// ================================================================================

// ================================================================================
function createFullName(firstName, lastName) {
  // debugger // Akan masuk ke mode debugger
  return `${firstName} ${firstName}`;
}

const myName = createFullName("Dliyaulhaq", "Mufliansyah");
console.log(myName);
// ================================================================================
