//let autos = new Array('BMW','Mercedes Benz','Volvo');
const autos = ['BMW','Mercedes Benz','Volvo'];
console.log(autos);

console.log(autos[0]);
console.log(autos[2]);

for(let i = 0; i < autos.length; i++){
    console.log(i + ' : ' + autos[i] );
}

autos[1] = 'MerecedesBenz';
console.log(autos[1]);

autos.push('Audi'); //Agrega Elementos al Final del Arreglo
console.log(autos);

console.log(autos.length); // Muestra la cantidad de elementos de un arreglo
autos[autos.length] = 'Cadillac'; //Asi se agregan elementos al siguiente indice

console.log(autos);

autos[6] = 'Porshe'; // Se pueden agregar elementos a indices especificos, pero no es recomendable
console.log(autos);