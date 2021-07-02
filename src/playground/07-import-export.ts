import { calculaISV, Producto } from './06-desestructuracion-funcion';

const carritoCompras: Producto[] = [
    {
        desc: "Telf 1",
        precio: 100
    },
    {
        desc: "Telf 2",
        precio: 150
    }
]

const [total, isv] = calculaISV(carritoCompras)

console.log("Total", total)
console.log("ISV", isv)