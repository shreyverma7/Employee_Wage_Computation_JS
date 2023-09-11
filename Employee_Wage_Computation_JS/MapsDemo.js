let keyString = 'a string';
let keyObj = {};
let keyFunc = function(){};
//Setting up the villages
let myMap = new Map();
myMap.set(keyString,"value assosiated with 'a string'");
myMap.set(keyObj,"value assosiated with keyObj");
myMap.set(keyFunc,"value assosiated with keyFunc");
//Getting the values
let size = myMap.size;
let valStr = myMap.get(keyString);
console.log(valStr);
let isKeyExist = myMap.has('a string');
console.log(isKeyExist);
//loop
for(let [key,value] of myMap){
    console.log("Loop1:"+key+"="+value);
}
for(let[key,value] of myMap.entries())
console.log("Loop2:"+key+"="+value);
for(let key in myMap.keys)
console.log("Loop3"+key);
 
for(let value in myMap.values)
console.log("Loop4"+value);
 
let first = new Map([[1,'One'],[2,'Two'],[3,'Three']]);
let second = new Map([[1,'a'],[2,'b']]);
let merged = new Map([...first,...second,[3,'c']]);
console.log(merged);
 
let haskey = merged.has(1);
console.log(haskey)
 
let delkey = merged.delete(1);
console.log(delkey);
 
console.log(merged.size);