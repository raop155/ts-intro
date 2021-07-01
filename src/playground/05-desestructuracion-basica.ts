interface Reproductor {
  volumen: number;
  segundo: number;
  cancion: string;
  detalles: Detalles
}

interface Detalles {
  autor: string;
  anio: number
}

const reproductor: Reproductor = {
  volumen: 90,
  segundo: 36,
  cancion: "Mes",
  detalles: {
      autor: "Ed Sheeran",
      anio: 2015
  }
}

// Desestructuración de objetos

const { volumen, segundo, cancion, detalles } = reproductor
const { autor } = detalles;

console.log("El volumen actual es", volumen);
console.log("El segundo actual es", segundo);
console.log("La canción actual es", cancion);
console.log("El autor es", autor);


// Desestructuración de arreglos

const dbz: string[] = ["Goku", "Vegeta", "Trunks"]
const [, , p3] = dbz

console.log("Personaje 3", p3);