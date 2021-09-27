console.log("===Default Parameter===");

// ================================================================================
// Default Parameter:
// * Parameter bisa kita beri nilai default, artinya jika kita tidak mengirimkan data atau undefined, maka data akan diisi dengan nilai default
// ================================================================================

// ================================================================================
// Kode Default Parameter:

function register(name, gender = "UNKNOWN") {
  console.log(name);
  console.log(gender);
}

register("Ulhaq", "MALE");
console.log("----------");
register("Diya");
console.log("----------");
register("Mufhaq", undefined);
// ================================================================================
