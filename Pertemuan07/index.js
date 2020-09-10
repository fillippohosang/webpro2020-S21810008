//JavaScript Conditional 
//1.)if,else if,else

let nilaiDubu = 66;

if (nilaiDubu > 91){
    console.log("A")
}
else if (nilaiDubu > 86){
    console.log("A-")
}
else if (nilaiDubu > 81){
    console.log("B+")
}
else if (nilaiDubu > 76){
    console.log("B")
}
else if (nilaiDubu > 71){
    console.log("B-")
}
else if (nilaiDubu > 69){
    console.log("C+")
}
else if (nilaiDubu > 61){
    console.log("C")
}
else {
    console.log("Eror")
}

//2.)Switch dan Case
let JadwalKuliah;
let hari = "kamis";

switch (hari) {
  case "senin":
    JadwalKuliah = "Daniel-HCI-OOAD-ERPS";
    break;
  case "selasa":
    JadwalKuliah = "DM-MoPro-WebPro-RW";
    break;
  case "rabu":
    JadwalKuliah = "Daniel-HCI-OOAD-ERPS";
    break;
  case "kamis":
    JadwalKuliah = "DM-MoPro-Kuliah Umum-WebPro";
    break;
  case "jumat":
    JadwalKuliah = "FREE";
    break;
  default:
    JadwalKuliah = "Sibuk";
}

console.log(JadwalKuliah); 

//JS Loop
//1.For Loop
for (let i = 1; i <= 5; i++) {
    console.log(i);
  }

//2.For/in Loop
const s21810008 = {
    Nama : "Hosang, Fillippo Reiyan",
    Fakultas : "Fakultas Ilmu Komputer",
    umur : 19
 };
 for (x in s21810008) {
   console.log(x, ':', s21810008[x]);
 }
 
 //3.For/of Loop
 const twice = ["TWICE - Sana",  
               "TWICE - Mina ", 
               "TWICE - Momo"
];

for (x of twice) {
  console.log(x);
}

//4. While loop
let i = 1;

while (i <= 9) {
  console.log("TWICE JJANG");
  i++;
}

//5.Do while loop
let c = 1;

do {
  console.log("Corona");
  c++;
} while (c <= 2020);

