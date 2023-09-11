//Problem2
let arr = new Array();
var i;
for (i = 0; i < 10; i++) {
  let randomvalue = Math.floor(Math.random() * 900 + 100);
  arr[i] = randomvalue;
}
let sortedArray = arr.sort();
console.log(sortedArray);
console.log("second smallest " + arr[1]);
console.log("second largest " + arr[arr.length - 2]);
console.log("------PROBLEM 1----------");
