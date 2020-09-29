//Arrow Function'


//single
// const calAge = (currentYear) => {
//     return = currentYear
// };
// console.log(calAge(2020));

// //multi
// const calAge = (birthYear , currentYear) => {
//     return = currentYear-birthYear;
// };
// console.log(calAge(2020,2001));

// //implicit
// const calAge = () => 2020 - 2001 
// console.log(calAge());

// const years = [1990,1999,2000,2001]
// const calAge5 = years.map(function (el){
//     return 2020 - el 
// });

// const calAg6 = years.map ((el) => 2020 - el)
// console.log (calAg6)

//Default Parameter
const calAge = (birthYear , currentYear) => currentYear - birthYear
console.log(calAge(2020));
