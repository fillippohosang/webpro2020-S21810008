//function declaration
let a = 8;
let b = 3;

let luasA = a * a;
let luasB = b * b;

let total = luasA + luasB ;

console.log(total);

// function expresion
const penjumlahan = function(a){
    let total2;
    total2 = a * a;
    return total2;
};
    console.log(penjumlahan(3));
