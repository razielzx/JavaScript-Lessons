let persona = {
    nombre: 'Juan',
    apellido: 'Perez',
    email: 'jperez@mail.com',
    edad: 28,
    nombreCompleto: function(){
        return this.nombre + ' ' + this.apellido;
    }
}

console.log( persona.nombre);
console.log( persona['apellido'] );

//for in
for( propiedades in persona){
    console.log( propiedades );
    console.log( persona[propiedades]);
}