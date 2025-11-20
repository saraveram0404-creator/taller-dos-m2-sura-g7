//Ejer 1
let puntos = [10, 20, 30, 40];

let puntosDoble = puntos.map(function(numero){
    return numero * 2;
});

console.log(puntos);
console.log(puntosDoble);

//Ejer 2
let usuarios = [{id: 1, nombre: "Ana"}, {id: 2, nombre: "Luis"}, {id: 3, nombre: "Carlos"}];

let nombres = usuarios.map(function(usuario) {
  return usuario.nombre;
});

console.log(nombres);
