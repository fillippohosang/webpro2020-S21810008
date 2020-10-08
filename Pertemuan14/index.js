/* Desturisasi Array */

// --- Old way ---
// let buah = ["mangga", "pisang", "anggur"];

// let buah1 = buah[0];
// let buah2 = buah[1];
// let buah3 = buah[2];

// console.log(buah1); // Output: mangga
// console.log(buah2); // Output: pisang
// console.log(buah3); // Output: anggur
// console.log(hitung(1, 2, 3, 4, 5, 6, 7));

// --- New way ---
// let buah = ["mangga", "pisang", "anggur"];

// lakukan destrukturisasi array
// let [buah1, buah2, buah3] = buah;

// console.log(buah1); // Output: mangga
// console.log(buah2); // Output: pisang
// console.log(buah3); // Output: anggur

// Destrukturisasi Objek
// -------- Cara Lama --------------
// let orang = {
//   nama: "Joko",
//   umur: 18,
//   sudahMenikah: false
// };

// let nama = orang.nama;
// let umur = orang.umur;
// let sudahMenikah = orang.sudahMenikah;

// console.log(nama); // Output: Joko
// console.log(umur); // Output: 22
// console.log(sudahMenikah); // Output: false

//--------- Cara Baru ---------
// let orang = {
//   nama: "Dubu",
//   umur: 20,
//   sudahMenikah: false
// };

// Destrukturisasi Objek
// let { nama, umur, statusMenikah } = orang;

// console.log(nama); // Output: Dubu
// console.log(umur); // Output: 20
// console.log(statusMenikah); // Output: undefined karena nama variabel dan properti berbeda