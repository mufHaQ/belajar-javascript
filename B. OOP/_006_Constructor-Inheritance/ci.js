#!/usr/bin/env node

console.log("===Constructor Inheritance===");

// ================================================================================
// Constructor Inheritance:
// * Dalam constructor, kita bisa membuat property baik itu berisi value ataupun function
// * Di dalam constructor, kita bisa memanggil constructor lain, dengan begitu kita bisa mewarisi semua property yang dibuat di constructor lain
// * Untuk memanggil constructor lain, kita bisa menggunakan NamaConstructor.call(this, params)

// Kode: Constructor Inheritance:
{
  function Employee(fn) {
    this.firstName = fn;
    this.sayHello = (name) => {
      console.log(`Hello ${name}, my name is ${this.firstName}`);
    };
  }

  function Manager(fn, ln) {
    Employee.call(this, fn);
    this.lastName = ln;
  }

  const employee = new Employee("Budi");
  const manager = new Manager("Joko", "Susilo");

  // employee.sayHello(manager.firstName)
  // manager.sayHello(employee.firstName)

  console.info("Employee: ");
  console.table(employee);
  console.info("\nManager: ");
  console.table(manager);
}
// ================================================================================
