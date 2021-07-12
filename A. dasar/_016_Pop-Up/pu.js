console.info("===Pop Up===")

// ================================================================================
// Alert, Promt dan Confirm:
// * Alert digunakan untuk memberikan peringatan berupa pop up text di browser
// * Prompt digunakan untuk meminta input String dari pengguna browser berupa pop up
// * Confirm digunakan untuk meminta input berupa boolean dari pengguna browser berupa pop up
// ================================================================================


// ================================================================================
// Alert:

// alert("Hello, World!")
// ================================================================================


// ================================================================================
// Prompt:

// const nama = prompt("Masukkan nama anda: ")
// alert(`Halo ${nama}`)
// ================================================================================


// ================================================================================
// Confirm:

const masuk = confirm("Yakin ingin masuk?") 

if (masuk) {
    const name = prompt("Siapa nama anda?: ")
    alert(`Halo ${name}`)
} else {
    alert("Selamat Tinggal!")
}
// ================================================================================