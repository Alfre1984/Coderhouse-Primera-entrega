let carrito = [];
class Mercaderia {
  constructor(nombre, talle, precio) {
    this.nombre = nombre;
    this.talle = talle;
    this.precio = precio;
  }
}
const producto1 = new Mercaderia("Remeras", "XL", 15);

const producto2 = new Mercaderia("Calzoncillos", "L", 10);

const producto3 = new Mercaderia("Medias", "M", 12);

let productoIngresado = prompt(
  "Ingresa el producto que deseas:\nRemeras\nCalzoncillos,\nMedias\nPRESIONA CANCELAR PARA SALIR"
);

while (productoIngresado != null) {
  alert("Has ingresado " + productoIngresado.toUpperCase());
  if (
    productoIngresado === "remeras" ||
    productoIngresado === "Remeras" ||
    productoIngresado === "REMERAS"
  ) {
    carrito.push(producto1);
  } else if (
    productoIngresado === "calzoncillos" ||
    productoIngresado === "Calzoncillos" ||
    productoIngresado === "CALZONCILLOS"
  ) {
    carrito.push(producto2);
  } else if (
    productoIngresado === "medias" ||
    productoIngresado === "Medias" ||
    productoIngresado === "MEDIAS"
  ) {
    carrito.push(producto3);
  }

  productoIngresado = prompt(
    "Ingresa otro producto\nRemeras\nCalzoncillos,\nMedias\nPRESIONA CANCELAR PARA SALIR"
  );
}
function presentarProducto() {
  for (let i = 0; i < carrito.length; i++) {
    console.log(
      "Tu carrito contiene " +
        carrito[i].nombre +
        " y cuestan $" +
        carrito[i].precio
    );
  }
}
presentarProducto();
console.log(carrito);
