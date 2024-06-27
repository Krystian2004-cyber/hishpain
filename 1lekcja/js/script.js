console.log("asfasfas")

// Crear una matriz bidimensional vacía
let twoDimensionalArray = [];

// Definir el tamaño de la matriz
const rows = 3;
const cols = 3;

// Llenar la matriz con números aleatorios
for (let i = 0; i < rows; i++) {
  twoDimensionalArray[i] = [];
  for (let j = 0; j < cols; j++) {
    twoDimensionalArray[i][j] = Math.floor(Math.random() * 100); // Número aleatorio entre 0 y 99
  }
}

// Mostrar la matriz en la consola
console.log(twoDimensionalArray);



console.log("test")