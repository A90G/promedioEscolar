/*• Desarrolle un algoritmo que
permita cargar alumnos y sus
notas en los tres trimestres
• Se debe permitir obtener el
promedio anual (es decir, de sus
tres notas) de un alumno
(ingresado por el usuario)
• Luego de resolverlo, pensar en
aprovechar métodos y discutir
como representar la información*/

let nombresArreglo: string[] = new Array(3);
let iNombres: number = 0;
let notasArreglo: number[] = new Array(3);
let iNotas: number = 0;
let resultado: number = 0;

for (iNombres = 0; iNombres < nombresArreglo.length; iNombres++) {
  nombresArreglo[iNombres] = prompt(`Ingrese el nombre del alumno ${iNombres}`);
}

for (iNombres = 0; iNombres < nombresArreglo.length; iNombres++) {
  console.log(`Los nombres son: ${nombresArreglo[iNombres]}`);
}

for (iNotas = 0; iNotas < notasArreglo.length; iNotas++) {
  notasArreglo[iNotas] = prompt(`Ingrese las notas del trimestre ${iNotas}`);
}

for (iNotas = 0; iNotas < notasArreglo.length; iNotas++) {
  console.log(`Las notas del alumno son: ${notasArreglo[iNotas]}`);
  resultado = notasArreglo[0] + notasArreglo[1] + notasArreglo[2];
}

console.log(`La suma de las notas es: ${resultado}`);
