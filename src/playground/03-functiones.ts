// Functiones básicas
function sumar(a: number, b: number): number {
  return a + b
}

const sumarFlecha = (a: number, b: number): number => {
  return a + b
}

function multiplicar(numero: number, otroNumero?: number, base: number = 2): number {
  return numero * base;
}

// Funciones con objetos como argumentos
interface PersonajeLOR {
  nombre: string;
  pv: number;
  mostrarHP: () => void
}

function curar(personaje: PersonajeLOR, curarX: number): void {
  personaje.pv += curarX
  console.log(personaje); 
}

const nuevoPersonaje: PersonajeLOR = {
  nombre: "Ricardo",
  pv: 50,
  mostrarHP() {
      console.log("Puntos de vida", this.pv);
  }
}

curar(nuevoPersonaje, 20)
nuevoPersonaje.mostrarHP()