'use strict'
// No cambies los nombres de las funciones.

function quickSort(array) {
  // Implementar el método conocido como quickSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:

  if(array.length <= 1) return array;    //Caso base.
  
  let pivot = array[Math.floor(Math.random() * array.length)];  //Buscamos un número random, en cada recursión va a tomar un indice distinto                 
  
  let equals = [];
  let left = [];
  let right = [];

  for (let i = 0; i < array.length; i++) {
    if(array[i] !== pivot){
      if(array[i] < pivot){
       left.push(array[i])
      }else{
       right.push(array[i]);
      }    
      } else {
       equals.push(array[i]);
  }
}
  return quickSort(left).concat(equals).concat(quickSort(right));
}


function mergeSort(array) {
  // Implementar el método conocido como mergeSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  if(array.length < 2) return array;     //Caso base

  const half = Math.floor(array.length / 2);
  let left = array.slice(0, half); // [] corto mi array y lo va a cortar hasta la mitad de half desde el indice 0
  let right = array.slice(half);// [] corto mi array desde la mitad con lo restante. tmb podría poner (mitad, arr.length) ya que es lo mismo
  
  array = [];                     //como ya corté mis arreglos ya los tengo guardados ahí, entonces lo piso para poder para reutilizarlo
 
  left = mergeSort(left);          //hace recursion y va dividiento todo hasta q se tope con el caso base
  right = mergeSort(right);       // que es 1 solo obj.
  
  while(left.length && right.length){ // mientras que tenga algo
    if(left[0] < right[0]){         // comparo 
      array.push(left.shift());     // si se cumple la cond saco y agrego
    }else{
      array.push(right.shift());
    }
  }
 
  array = array.concat(left, right);   //cuando termine concateno todo ordenado en el array
  return array;
}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  quickSort,
  mergeSort,
};
