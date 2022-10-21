class DispositivoEntrada {

  constructor(tipoEntrada, marca) {
    this._tipoEntrada = tipoEntrada;
    this._marca = marca
  }

  get tipoEntrada() {
    return this._tipoEntrada;
  }

  set tipoEntrada(tipoEntrada) {
    this._tipoEntrada = tipoEntrada;
  }

  get marca() {
    return this._marca;
  }

  set marca(marca) {
    this._marca = marca;
  }
}

class Raton extends DispositivoEntrada {

  static contadorRatones = 0

  constructor(tipoEntrada, marca) {
    super(tipoEntrada, marca);

    this._idRaton = ++Raton.contadorRatones;
  }

  get idRaton() {
    return this._idRaton;
  }

  toString() {
    return `Raton: [IdRaton${this.idRaton}, TipoEntrada: ${this._tipoEntrada}, Marca: ${this._marca}]`;
  }
}

class Teclado extends DispositivoEntrada {

  static contadorTeclado = 0;

  constructor(tipoEntrada, marca) {
    super(tipoEntrada, marca);
    this._idTeclado = ++Teclado.contadorTeclado;
  }

  get idTeclado() {
    return this._idTeclado;
  }

  toString() {
    return `Teclado: [idTeclado: ${this._idTeclado}, TipoEntrada: ${this._tipoEntrada}, Marca: ${this._marca}]`
  }
}

class Monitor {

  static contadorMonitores = 0;

  constructor(marca, tamano) {
    this._idMonitor = ++Monitor.contadorMonitores;
    this._marca = marca;
    this._tamano = tamano;
  }

  get idMonitor() {
    return this._idMonitor;
  }

  toString() {
    return `Monitor: [idMonitor: ${this._idMonitor}, Marca: ${this._marca}, Tamano: ${this._tamano}]`;
  }
}

class Computadora {

  static contadorComputadoras = 0;

  constructor(nombre, monitor, teclado, raton) {
    this._idComputadora = ++Computadora.contadorComputadoras;
    this._nombre = nombre;
    this._monitor = monitor;
    this._raton = raton;
    this._teclado = teclado;
  }

  toString() {
    return `Computadora: ${this._idComputadora}: ${this._nombre} \n ${this._monitor} \n ${this._raton} \n ${this._teclado}`
  }
}

class Orden {

  static contadorOrdenes = 0

  constructor() {
    this._idOrden = ++Orden.contadorOrdenes;
    this._computadoras = [];
  }

  get idOrden() {
    return this._idOrden;
  }

  agregarComputadora(computadora) {
    this._computadoras.push(computadora)
  }

  mostrarOrden() {
    let computadorasOrden = '';
    
    for(let computadora of this._computadoras) {
      computadorasOrden += ` \n${computadora}`;
    }

    console.log(`Orden: ${this._idOrden}, Computadoras: ${computadorasOrden}`)
  }
}

let raton1 = new Raton('usb', 'hp');
let raton2 = new Raton('bluetooth', 'dell');
let teclado1 = new Teclado('bluetooth', 'MSI');
let teclado2 = new Teclado('USB', 'ACER');
let monitor1 = new Monitor('HP', 15);
let monitor2 = new Monitor('Dell', 27);
let computadora1 = new Computadora('HP', monitor1, raton1, teclado1);
let computadora2 = new Computadora('Armada', monitor2, raton2, teclado2);
let orden1 = new Orden();
let orden2 = new Orden();
orden1.agregarComputadora(computadora1);
orden1.agregarComputadora(computadora2);
orden1.agregarComputadora(computadora1);

orden2.agregarComputadora(computadora2);
orden2.agregarComputadora(computadora1);

orden1.mostrarOrden();
orden2.mostrarOrden();

