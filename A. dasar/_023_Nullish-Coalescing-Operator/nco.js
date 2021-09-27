console.info("===Nullish Coalescing Operator===");

// ================================================================================
// Nullish Coalescing Operator:
// * Nullist value adalah null dan undefined
// * Nullish Coalescing Operator (??) adalah operator yang mirip dengan ternary operator, yang membedakan adalah pada kondisi, jika bernilai null atau undefined, baru value defaultnya diambil

// Cara 1
let params1;
let data = params1 ?? "Nilai Default";
console.info(data);

// Cara 2
let params2;
params2 ??= "Nilai Default";
console.info(params2);
// ================================================================================
