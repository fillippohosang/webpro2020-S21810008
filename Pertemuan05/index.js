
//Array Declaration using []
let angka = [1,2,3,4,5,6,7,8];
let buah = ["Apple", "Momo","Dubu"];
console.log(angka);
console.log(buah);

//akses element dalam array
let myfunc = function (){
    return "Twice";
};
let arr = [angka, buah, myfunc(), [7,7,1]];
console.log(arr[2]);
console.log(arr[3][2]);
 
//manipulasi array
//1. menambah
let student = [];
student[0] = "Dahyun";
student[1] = "Sana";
student[2] = "Jeongyeon";
student[3] = "JYP";
console.log(student);

//2. ubah 
student[3] = "Mina";
console.log(student);

//3. hapus
student[3] = undefined;
console.log(student);

//4.looping
let student = ["Jihyo", "Nayeon", "Tzuyu"];
for (let i = 1 ; i < student.length ; i++){
    console.log("Student ke-" + (i+1) + "adalah" + student);
}

//1.methode array to string
let student = ["Jihyo", "Nayeon", "Tzuyu"];
console.log(student.toString());

//2.methode join 
console.log(student.join("-")); 

//3.methode push,pop,unshift,shift
student.push("Chaeyeong");
console.log(student.join("-"));
student.pop();
console.log(student)

student.unshift("Momo");
console.log(student.join("-"));
student.shift();
console.log(student)

//5. concat
let ma = ["Kim", "Kang" , "Song", "Lee"]
let mu = ["Lia" , "Daniel", "Mina", "Minho"]

let nama = mu.concat(ma)
console.log(nama)

//a. spilce b.slice
//a.
let buah = ["Pisang", "Mangga", "Chery", "Nangka", "Jeruk"]
buah.splice(2,0,"Melon", "Kelapa")
console.log(buah.join("-"))
//b.
let buah2 = buah.slice(0,3)
console.log(buah2.join("-"))



//7. a.forEach
//for (let = 0 ; i < student.length ; i++;){
 //   console.log("Student ke-" + (i+1) + "adalah" + student);
//}
let angka = [1,2,3,4,5,6,7,8];

let tampilAngka = function (el){
    return el;
}
console.log(angka.forEach(tampilAngka));

angka.foreach(tampilangka);

//b. map
let angka2 = angka.map(function(el){
    return el;
});
console.log(angka2);


//8.sort
let angka = [1,100,2,20,5,3,2,1]
let student = ["Nayeon", "Mina", "Sana"]
student.sort();
console.log(student);
angka.sort(function(a,b){
    return a - b;
});
console.log(angka);



//9.filter
let angka = [1,100,2,10,20,102,11]
let angka2 = angka.filter(function(el){
    return el > 20
});
console.log(angka2)
