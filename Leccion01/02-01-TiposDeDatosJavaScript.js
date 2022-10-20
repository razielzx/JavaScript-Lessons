// Tipo de dato String
var names = "Andres";
console.log(names);

console.log(typeof names);

//Tipo de dato numerico
var number = 1000;
console.log(number);

console.log(typeof number);

//Tipo de dato Objeto
var object = {
  name: "Andres",
  lastName: "Botello",
  telephoneNumber: "3315501660"
};

console.log(object);

console.log(typeof object);

//Tipo de dato Boolean (true, false)
var flag = true;
console.log(flag);
console.log(typeof flag);

//Tipo de dato Function
function myFunction() {};
console.log(myFunction);
console.log(typeof myFunction);

//Tipo Symbol
var mySymbol = Symbol("My Symbol");
console.log(mySymbol);
console.log(typeof mySymbol);

//Tipo de dato Clase

class Person {
    constructor(name, lastName) {
      this.name = name;
      this.lastName = lastName;
    };
};

console.log(Person);
console.log(typeof Person );

//Tipo Undefined
var x ;
console.log(x);
console.log(typeof x);

//null  = aucencia de valores
var y = null;
console.log(y)
console.log(typeof y)

//Los arrays son Objetos en JavaScript
var autos = ["BMW", "AUDI", "VOLVO"];
console.log(autos);
console.log(typeof autos);

//El tipo de dato de una cadena vacia sigue siendo un String
var z = '';
console.log(z);
console.log(typeof z);

//Concatenacion de strings
var myName = "Andres";
var myLastName = "Botello";

var fullyName = myName + " " + myLastName;

console.log(fullyName)

var nameWithnumber = myName + 18 + 4;
console.log(nameWithnumber);

nameWithnumber = myName + (18 + 5);

console.log(nameWithnumber);

nameWithnumber = 30 + 5 + myName;
console.log(nameWithnumber)

let constantVariable = 10;
constantVariable = 3
console.log(constantVariable)