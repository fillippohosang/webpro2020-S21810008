//var,let,const

// let nama = "Kim"
// let nama = "Dubu"

// console.log(nama);

//scope dalam javascript
//1. Function scope (var)
//2. Block scope

// for (var i=0;i<10;i++)
// {
//     console.log(i);
// }

// function tes(){
//     for (var i=0; i<10; i++)
//     {
//         console.log(i);
//     }
// }
// tes();
// console.log(i);

//console.log(i);

// {
// let i;
// for (i = 0; i<10; i++)
// {
//     console.log(i);
// }
// }
// console.log(i);

//template Literal

const person = {
    firstName: "Dubu",
    lastName: "Kim",
    age: 20,
};

console.log("Hello nama saya " + person.firstName + " " + person.lastName + "." + " umur saya adalah " + person.age)

console.log(`Hello nama saya ${person.firsName} ${person.lastName}. Umur saya adalah ${person.age}`);