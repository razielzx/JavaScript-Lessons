class Persona{
    constructor(nombre, apellido){
        this.nombre = nombre; 
        this.apellido = apellido;
    };
};
let persona1 = new Persona('Juan', 'Perez');
console.log( persona1 );

let persona2 = new Persona('Carlos', 'Lara');
console.log( persona2 );


class Animal {
  constructor(name, specie, type) {
    this.name = name;
    this.specie = specie;
    this.type = type;
  };
};

let gato = new Animal("gato", "felino", "mamifero");
console.log(gato)