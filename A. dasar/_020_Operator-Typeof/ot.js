console.info("===Operator Typeof===");

// ================================================================================
// Operator Typeof:
// * Operator Typeof adalah operator yang digunakan untuk melihat tipe data apa yang terdapat pada sebuah variable
// * Hasil dari Typeof adalah string dari tipe datanya

let data = null;

switch (typeof data) {
  case "undefined":
  case "object":
  case "boolean":
  case "number":
  case "bigint":
  case "string":
  case "symbol":
  case "function":
    console.info(`data = ${typeof data}`);
    break;
  default:
    console.info("Error");
}
// ================================================================================
