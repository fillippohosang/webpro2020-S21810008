//Destructuring 

//memecahkan array atau properti pada object

//Array

const colors = ["Red", "Blue", "Yellow", "Black"]

// let satu = color[0];
// let dua = color[1];
// let tiga = color[2];

// let [satu,dua,tiga] = colors;
// console.log(satu,dua,tiga);

// let [satu, , ,empat] = colors
// console.log(satu, empat)

//Object 
//  const user = {
//      nama : "dubu",
//      umur : 20,
//      marga : "Kim"
//  };

//  let {nama,umur,marga, position = "rapper"} = user
//  console.log(nama, marga, position);

//  let {nama,umur,marga : last_name, position = "rapper"} = user
//  console.log(nama, last_name, position );

//  const user = [
//      {id : 1 , name : "Momo"},
//      {id : 2 , name : "Mina"},
//      {id : 3 , name : "Sana"},
//  ];

//  let [user1,user2,user3] = user;
//  console.log(user1,user2,user3);

//  let [, , {id , name}] = user;
//  console.log(id, name);

//Kombinasi dengan rest operator
const color = ["Merah", "Kuning", "Hijau", "Putih"]
let [satu, ...lainnya];

console.log(satu);
console.log(lainnya);
