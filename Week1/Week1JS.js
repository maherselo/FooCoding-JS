//1
console.log("Hello world!");
console.log("مرحبا يا عالم");
console.log("Hej världen!")
//2
console.log("I'm awesome");
//3.1
let x;
//3.2
console.log("the value of my variable x will be: undefined");
//3.3
console.log(x)
x = 10;
console.log("the value of x wil be: 10");
console.log(x);
//4
let string = "AboubakerAlsdeeq"
//4.1
y = "AboubakerAlsdeeq"
//4.2
console.log("the value of my string will be: AboubakerAlsdeeq")
//4.3
console.log(string);
//4.4
console.log("AboubakerAlsdeek")
//5
let z = 7.25;
//5.1
console.log(z);
//5.2
let a = Math.round(z);
//5.3
console.log(a);
//5.4
let highestNumber =Math.max(a, z);
//5.5
console.log =("higher number by Math.max", highestNumber);
//5.6
let higherNumberByIf;
if (a < z) {
  higherMumberByIf = z;
}
else {
  higherNumberByIf = a;
}
console.log("higher number by if", higherNumberByIf);
//6.1
let MaherFavoritePlace =[];
//6.2
console.log("Value of MaherFavoritePlace []");
//6.3
console.log(MaherFavoritePlace);
//6.4
let MaherFavoriteAnimals =["cat", "camel", "horse"];
//6.5
console.log(MaherFavoriteAnimals)
//6.6
MaherFavoriteAnimals.push("baby pig");
//6.7
console.log(MaherFavoriteAnimals);
//7.1
let myString = "this is a test";
console.log(myString);
//7.2
console.log ("myString.length", myString.length)
//8.1
let printString= "string";
console.log("the value of printString is", printString, "and print string");
//8.2
let printNumber =10;
console.log("the value of print number is", printNumber,"and print number");
let writeBoolean = true;
console.log("the value of writeBoolean", writeBoolean,"and type boolean");
//8.3
let typeObject = {bar:"foo"};
//8.4
console.log (typeof printNumber, typeof printString, typeof writeBoolean, typeof typeObject);
//8.5
function compareType(type1,type2) {
  console.log("same type")
}
else {
  console.log(typeof type1, "and", typeof type2, "are not the same type")
}
//8.6
compareTypes(printString,printNumber)
comparetypes(writeBoolean,typeObject)
comparetypes(printNumber,4)
//9.1
let x = 7
console.log("x % 3== 0");
x = x % 3
console.log(x);
console.log("x%1==0")
console.log(m % 1);
//10.1
letmultipleTypes = [2, 'six', { number: 3 }]
for (let number of multipleTypes) {
  if (typeof number === 'number') {
    console.log(number += number);
  }
}
console.log(multipleTypes);

console.log('result of 6/0 === 10/0 is', 6 / 0 === 10 / 0, 'because both sides result in infinity', 6 / 0, 10 / 0);