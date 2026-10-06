const inv = new Inventario();
const divDetalles = document.getElementById("detalles");
const btnAdd = document.getElementById("btnAdd");
const btnListar = document.getElementById("btnListar");
const btnListarInverso = document.getElementById("btnListarInverso");

btnAdd.addEventListener("click", () => {
  let codigo = document.getElementById("txtCod").value;
  let nombre = document.getElementById("txtNom").value;
  let cantidad = document.getElementById("txtCant").value;
  let precio = document.getElementById("txtPrice").value;

  let nuevo = new Producto(codigo, nombre, cantidad, precio);
  inv.agregar(nuevo);

  divDetalles.innerHTML += "<div><h3>Se agregó</h3>" + nuevo.infoHtml() + "</div>";
});

btnListar.addEventListener("click", () => {
  divDetalles.innerHTML = "<h3>Listado de Productos</h3>" + inv.listar();
});

btnListarInverso.addEventListener("click", () => {
  divDetalles.innerHTML = "<h3>Listado Inverso</h3>" + inv.listarInverso();
});
