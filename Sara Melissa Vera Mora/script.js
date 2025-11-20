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


//Ejer 3
let notas = [8, 5, 10, 3, 7];

let aprobadas = notas.filter(function(nota) {
  return nota >= 6;
});

console.log(aprobadas);

//Ejer 4
let productos = [{nombre: "Camisa", stock: 10}, {nombre: "Zapatos", stock: 0}, {nombre: "Pantalón", stock: 5}];

let enStock = productos.filter(function(producto){
    return producto.stock > 0;
});

console.log(enStock);


