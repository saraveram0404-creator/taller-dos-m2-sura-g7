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

//Ejer 5 
let ventas = [150, 300, 100, 50];

let totalVentas = ventas.reduce(function(acumulado, venta){
    return acumulado + venta;
})

console.log("total: ", totalVentas);

//Ejer 6
 let grupos = [["Ana", "Luis"], ["Maria", "Juan"], ["Pedro"]];

 let listaPlana = grupos.reduce(function(acumulado, grupo){
  return acumulado.concat(grupo);
 })
console.log(grupos);
console.log(listaPlana);

//Ejer 7
let original = ["A", "B", "C"];

let clon = original.slice()

clon.push("D")

console.log(original);
console.log(clon);

//Ejer 8
let competidores = ["Oro", "Plata", "Bronce", "Mención 1", "Mención 2"];

let podio = competidores.slice(0, 3)

console.log(podio);

//Ejer 9
let equipoDev = ["Ana", "Juan"]; let equipoQA = ["Carlos", "Maria"];

let equipoCompleto = equipoDev.concat(equipoQA)

console.log(equipoCompleto);

//Ejer 10
let carrito = ["Manzana"];


let nuevoCarrito = carrito.slice()

nuevoCarrito.push("Pera")

console.log(carrito);
console.log(nuevoCarrito);

//Ejer 11
let roles = ["USER", "EDITOR"];

let tieneAdmin = roles.includes("ADMIN");

let tieneEditor = roles.includes("EDITOR");

console.log("Tiene ADMIN?:", tieneAdmin);
console.log("Tiene EDITOR?:", tieneEditor);

//Ejer 12
let usuarios1 = [{id: 101, nombre: "Ana"}, {id: 102, nombre: "Luis"}, {id: 103, nombre: "Carlos"}];

let usuarioLuis = usuarios1.find(function(usuario){
  if (usuario.id === 102) {
    return true;
  }
});

console.log("Lista completa:", usuarios1);
console.log(usuarioLuis);

//Ejer 13
let invitados = ["Zapata", "Alvarez", "Gomez", "Bernal"];

let invitadosOrdenados = [...invitados].sort()

console.log(invitados);
console.log(invitadosOrdenados);

//Ejer 14
let receta = ["Paso 1", "Paso 2", "Paso 3"];

let recetaInversa = [...receta].reverse()

console.log(receta);
console.log(recetaInversa);

//Ejer 15
let fila = ["Ana", "Luis", "Carlos", "Maria"];

let eliminar = "Luis"

let nuevaFila = [...fila].filter(function(nombreFila){
  return nombreFila !== eliminar
})

console.log(fila);
console.log(nuevaFila);

//Ejer 16
let fila1 = ["Ana", "Luis", "Carlos", "Maria"];

let nuevaFilaConJorge = [...fila.slice(0, 1), "Jorge", ...fila.slice(1)]

console.log(fila1);
console.log(nuevaFilaConJorge);









