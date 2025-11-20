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






