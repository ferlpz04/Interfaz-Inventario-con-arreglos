class Inventario {
  constructor() {
    this.productos = [];
  }

  agregar(producto) {
    this.productos.push(producto);
  }

  agregarInicio(producto) {
    for (let i = this.productos.length; i > 0; i--) {
      this.productos[i] = this.productos[i - 1];
    }
    this.productos[0] = producto;
  }

  insertar(producto, posicion) {
    if (posicion < 0 || posicion > this.productos.length) return;
    for (let i = this.productos.length; i > posicion; i--) {
      this.productos[i] = this.productos[i - 1];
    }
    this.productos[posicion] = producto;
  }

  buscar(codigo) {
    for (let i = 0; i < this.productos.length; i++) {
      if (this.productos[i].codigo === codigo) {
        return this.productos[i];
      }
    }
    return null;
  }

  eliminar(codigo) {
    let posicion = -1;
    for (let i = 0; i < this.productos.length; i++) {
      if (this.productos[i].codigo === codigo) {
        posicion = i;
        break;
      }
    }

    if (posicion !== -1) {
      let eliminado = this.productos[posicion];
      for (let i = posicion; i < this.productos.length - 1; i++) {
        this.productos[i] = this.productos[i + 1];
      }
      this.productos.pop();
      return eliminado;
    }
    return null;
  }

  extraerPrimero() {
    if (this.productos.length === 0) return null;
    let primero = this.productos[0];
    for (let i = 0; i < this.productos.length - 1; i++) {
      this.productos[i] = this.productos[i + 1];
    }
    this.productos.pop();
    return primero;
  }

  listar() {
    let texto = "";
    for (let i = 0; i < this.productos.length; i++) {
      texto += this.productos[i].infoHtml();
    }
    return texto;
  }

  listarInverso() {
    let texto = "";
    for (let i = this.productos.length - 1; i >= 0; i--) {
      texto += this.productos[i].infoHtml();
    }
    return texto;
  }
}