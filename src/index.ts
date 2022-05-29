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
let arregloNotasPorAlumno: [string, number, number, number] = new Array (3);
let indice: number = 0;
let resultado: number = 0;

for (indice = 0; indice < 3 ; indice++) {
  arregloNotasPorAlumno[0] = String(prompt(`Ingrese el nombre del alumno`));
  arregloNotasPorAlumno[1] = Number(prompt(`Ingrese la primer nota`));
  arregloNotasPorAlumno[2] = Number(prompt(`Ingrese la segunda nota`));
  arregloNotasPorAlumno[3] = Number(prompt(`Ingrese la tercera nota`));
console.log(`El nombre es: ${arregloNotasPorAlumno[0]}`);
console.log(`Las notas del alumno son: ${arregloNotasPorAlumno[1]}, ${arregloNotasPorAlumno[2]}, ${arregloNotasPorAlumno[3]}`);
resultado = (arregloNotasPorAlumno[1] + arregloNotasPorAlumno[2] + arregloNotasPorAlumno[3]) /3;
console.log("El promedio de notas del alumno es ", resultado);
}

