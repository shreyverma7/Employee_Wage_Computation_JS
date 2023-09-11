let origDogs = ["BullDog","Beagle","Labrador"];
let cats = ["American Curl","Bengal"];
let birds = ["Falcons","Ducks","Flamingoes"];

//Array copy elements
let slicedDogs = origDogs.slice(1,2);
let copyDogs = [...origDogs];
let dogs = origDogs.slice(0);

//Stack
let pushDog = origDogs.push("Goldern Retriver");
let popDog = origDogs.pop();
dogs[dogs.length] = "Poodle";
console.log(dogs);

//Add and remove from first
let addFirst = dogs.unshift("Golder Retriver");
//console.log(addFirst);
//console.log(dogs);
let removeFirst = dogs.shift();
console.log(dogs);

//Automatic add and remove elements

 dogs.splice(2,1,"pug","Boxer");
console.log("--->" +dogs);

//concat
let animals = dogs.concat(cats,birds);
let newAnimals = [...dogs,...cats,...birds];
let sortDogs = dogs.slice(0).sort();
console.log("===>"+newAnimals);
console.log(sortDogs);

function scanArray([first,second]){
    console.log(first +" "+ second);
}
scanArray(animals);

let allAnimals = "";
for(let animal in newAnimals){
    allAnimals += animal;
}
console.log("--->"+allAnimals);



