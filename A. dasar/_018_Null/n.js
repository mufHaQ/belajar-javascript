console.info("===Null===");

// ================================================================================
// Null:
// * Null merupakan representasi dari data kosong
// * Berbeda dengan undefined, Null adalah variable yang sudah ada valuenya, hanya saja valuenya null
// * Sedangkan undefined adalah variable yang belum ada valuenya
// ================================================================================

// ================================================================================
let nama = null;

if (nama === undefined) {
  alert("Hello UNDEFINED");
} else if (nama === null) {
  alert("Hello NULL");
} else {
  alert(`Hello ${nama}`);
}
// ================================================================================
