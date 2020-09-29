// fungsi dengan parameter
const operasiPenjumlahan = (bilangan1, bilangan2) => {
    const hasil =  bilangan1 * bilangan2;
    return hasil;
  };
  
  console.log(operasiPenjumlahan(10, 20));

// fungsi yang tidak memiliki parameter
const no_Student = () => {
    const student = ["Mina", "Sana", "Momo", "Jihyo"];
    return student[Math.floor(Math.random()*(student.length))];
  }
  
  console.log(no_Student())

//Exercise

// let yearUntilRetirement = (year, firstName) {
//     var age = 28;
//     var retirement = 65 - age;
//     if (retirement > 0) {
//         console.log(firstName + " retired in " + retirement + " years ");
//     } else {
//         console.log(firstName + " is already retired.");
//     }
// }


//ES6 Syntax
//excercise
//excercise
const yearsUntilRetirement = (year , firstName ="Dubu") => { // Arrow Function & Default
    const age =`${20}`;  //Template Literal
    const retirement = 50 - age;
    if (retirement > 0) {
      console.log(` ${firstName} retired in ${retirement} years` );
    }
    else {
      console.log(`${firstName} is already retired`);
    }
  }

yearsUntilRetirement(2001);