///////////////////////////////
// 1) STRINGS
//////////////////////////////
//1.1
let myString = "hello,this,is,a,difficult,to,read,sentence";
console.log (myString.length);
//1.3: replace the commas to spaces
var stringWithSpaces = myString.replace(/,/g, ' ');
console.log(stringWithSpaces);
////////////////////////////////
// 2) ARRAY
////////////////////////////////
let favoriteAnimals = ["blowfish", "capricorn", "giraffe"];
//2.1: add Mauro's favorite animal
favoriteAnimals.push("turtle");
console.log(favoriteAnimals);
//2.3: add Jim´s favorite animal
favoriteAnimals.splice(1, 0, "meerkat");
console.log ("I think that the value of the array will be: blowfish, meerkat, capricorn, giraffe, turtle");
console.log (favoriteAnimals);
//2.6: length of the array
console.log("The array has a length of: " + (favoriteAnimals.length));
//2.7: delete "giraffe"
favoriteAnimals.splice(3,1);
console.log(favoriteAnimals);
//2.9: index of "meerkat" in the array
let indexOfMeerkat = favoriteAnimals.indexOf("meerkat");
//2.10
console.log("The item you are looking for is at index: " + indexOfMeerkat);
///////////////////////////////////////
//EXERCISES MORE JAVASCRIPT
//////////////////////////////////////
//1: sum of three arguments
let threeArguments = function (argument1, argument2, argument3) {
    let result = (argument1 + argument2 + argument3);
    return result;
 };
 let argument1 = " It's ";
 let argument2 = "nice wither";
 let argument3 = " today.";
 console.log(threeArguments(argument1, argument2, argument3));
 
 //2: colourful car
 let colorCar2 = "red";
console.log ("A " + colorCar2 + " car");
 
 //3: create an object and a function
 let city = {
     name: "Maher",
     country: "Syria",
     City : "Aleppo",
     Age: "32"
 };
 for (let entries of Object.entries(city)){
     console.log(entries);
 };
 
 //4: function vehicleType
 let vehicleType = function (color, code){
     let type = "";
     if (code === 1){
         type = " car";
     } else if (code === 2){
         type = " motorbike";
     } else {
         type = " what?";
     };
     let message = "A " + color + type;
     console.log(message);
     return message;
 };
 let color = "blue";
 let code = 2;
 let returnedMessage = vehicleType(color, code);
 //5: replacement of if (3 === 3) ??????
 console.log("yes");

 //6: function vehicle
 let vehicle = function (color, code, age){
     let type = "";
     if (code === 1){
         type = " car";
     } else if (code === 2){
         type = " motorbike";
     } else {
         type = " what?";
     };
     let status =" used";
     if (age <= 1){
         status = " new";
     };
     let message = "a " + color + status + type;
     console.log(message);
     return message;
 };
 let age = 1;
 let returnedMessage2 = vehicle(color, code, age); 

 //7: list of vehicles
 let vehicles = ["motorbike", "caravan", "car", "bike", "plane"];
 
 //8:third element in a list
 console.log(vehicles[2]);
 
 //9: function vehicle2
 let vehicle2 = function (color, idx, age){
     let status =" used";
     if (age === 0){
         status = " new";
     };
     let message = "a " + color + status + " " + vehicles[idx];
     console.log(message);
     return message;
 };
 returnedMessage2 = vehicle2(color, 4 , age);
 
 //10: Advertisement >> to do
 
 //11: One more vehicle >> to do
 
 //12: Empty object
 let emptyObject = {
 };
 
 //13: Teachers
 let teachers = {
     names: ["Albert", "Katja", "Baraa", "Tommy"]
 };
 //14: add property to Teachers
 teachers.languages = ["Git and GitHub", "Javascript", "Html", "HTML and Javascript"];
 
 //15: Equality in two arrays
 let x = [1, 2, 3];
 let y = [1, 2, 3];
 let z = y;
 console.log(x == y); //false
 console.log(x === y); //false
 console.log(z == y); //true
 console.log(z == x); //false
 
 //16: Code to check
 let o1 = { foo: "bar" };
 let o2 = { foo: "bar" };
 let o3 = o2;
 console.log(o1 == o3); //false
 console.log(o1 == o2); //false
 console.log(o2 == o1); //false
 console.log(o3 == o2); //true
 console.log(o2 == o3); //true

 //17: One more code to check
 let bar = 42;
 console.log (typeof bar);
 // (expected output: "number") becaouse bar=42 and typeof = bar
 
 /* console.log(typeof 42);
(expected output: "number") 
console.log(typeof 'blubber');
(expected output: "string") 
console.log(typeof true);
(expected output: "boolean")
console.log(typeof declaredButUndefinedVariable);
(expected output: "undefined";) */
