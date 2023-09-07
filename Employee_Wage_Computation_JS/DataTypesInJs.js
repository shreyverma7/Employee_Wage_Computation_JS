var val;
let datatype1 = typeof val;
console.log(datatype1);

var val1=167
let datatype2 = typeof val1;
console.log(datatype2);

var val2 = 10n;
let datatype3 = typeof val2;
console.log(datatype3);

var val3 = "shrey";
let datatype4 = typeof val3;
console.log(datatype4);

var val4 = true;
let datatype5 = typeof val4;
console.log(datatype5);

let datatype6 = typeof Symbol("id");
console.log(datatype6);

let datatype7 = typeof Math;
console.log(datatype7);

let datatype8 = typeof null;
console.log(datatype8);

let sayHi = function(){
    console.log.apply("Say Hi");
}
let datatype9 =  typeof sayHi;
console.log(datatype9);


