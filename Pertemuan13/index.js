//Rest & Spread 

//1.Rest
// const hitung = (a,b,c,d,e,f,g) => {
//     const angka = [a,b,c,d,e,f,g];
//     let total =0
//     for(let i = 0;i=7;i++){
//         total = total +angka[i]
//     }
//     return total;
// };

// const hitung = (...angka) =>{
//     let total = 0
//     angka.forEach((el)=>{
//         total = total + el;
//     });
//     return total;
// }

// console.log(hitung(1,2,3,4,5,6,7,8,9,10));

// const hitung = (p1,p2,...pangka) =>{
//     console.log(p1);
//     console.log(p2);
//     console.log(pangka);

//     let total = 0
//     pangka.forEach((el)=>{
//         total = total + el;
//     });
//     return total;
// }

// console.log(hitung(1,2,3,4,5,6,7,8,9,10));

// //2.Spread
// const num = [1,2,3,4,5]
// const num2 = [...num]
// num[0]=9
// console.log(num)
// console.log(num2)

//2.Menggabungkan Array 
// const num1 = [1,2,3,4,5]
// const num2 = [11,22,33,44,55]
// const num3 = [111,222,333,444,555]

// const comb5 = num1.concat(num2)
// console.log(comb5)

// const comb6 = [...num1,'-',...num2,"-",...num3]
// console.log(comb6)

//Tambah 
let orang = {
    nama : "Dubu",
    umur : 21
};

orang = {...orang, position : "Rapper"}
console.log(orang)

const o1 = {a:1,b:2}
const o2 = {c:3,d:4}

const oGabung = {...o1,...o2}
console.log(oGabung)