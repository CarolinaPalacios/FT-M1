'use strict';

/*
 Implementar la clase BinarySearchTree, definiendo los siguientes métodos recursivos:
  - size: retorna la cantidad total de nodos del árbol
  - insert: agrega un nodo en el lugar correspondiente
  - contains: retorna true o false luego de evaluar si cierto valor existe dentro del árbol
  - depthFirstForEach: recorre el árbol siguiendo el orden depth first (DFS) en cualquiera de sus variantes, según se indique por parámetro ("post-order", "pre-order", o "in-order"). Nota: si no se provee ningún parámetro, hará el recorrido "in-order" por defecto.
  - breadthFirstForEach: recorre el árbol siguiendo el orden breadth first (BFS)
  El ábrol utilizado para hacer los tests se encuentra representado en la imagen bst.png dentro del directorio homework.
*/
function BinarySearchTree(value) {
   this.value = value;
   this.right = null;
   this.left = null;
}


BinarySearchTree.prototype.size = function () {
   if(this.value === null){
      return null;
   } 
   let leftSize = 0;
   if(this.left !== null){
      leftSize = this.left.size();
   }
   let rightSize = 0;
   if(this.right !== null){
      rightSize = this.right.size()
   }
   return leftSize + rightSize + 1;
};

BinarySearchTree.prototype.insert = function (value) {
   if(value > this.value){
      if(this.right !== null){
         this.right.insert(value);
      } else {
         this.right = new BinarySearchTree(value);
      }
   } else if(value < this.value){
      if(this.left !== null){
         this.left.insert(value);
      } else {
         this.left = new BinarySearchTree(value);
      }
   }
};

BinarySearchTree.prototype.contains = function (value) {
   if(value === this.value){
      return true;
   }
   if(value > this.value){
      if(this.right !== null){
      return this.right.contains(value);
      }
   }
   if(value < this.value){
      if(this.left !== null){
      return this.left.contains(value);
      }
   }
   return false;
};

BinarySearchTree.prototype.depthFirstForEach = function (cb, order) {
	switch(order){
      case "post-order":
         this.left && this.left.depthFirstForEach(cb, order);
         this.right && this.right.depthFirstForEach(cb, order);
         cb(this.value);
         break;
      case "pre-order":
         cb(this.value);
         this.left && this.left.depthFirstForEach(cb, order);
         this.right && this.right.depthFirstForEach(cb, order);
         break;
      default:
         this.left && this.left.depthFirstForEach(cb, order);
         cb(this.value);
         this.right && this.right.depthFirstForEach(cb, order);
         break;
      }
   };
   

BinarySearchTree.prototype.breadthFirstForEach = function (callback) {
   let queue = [this];
   while(queue.length > 0) {
      let node = queue.shift();
      callback(node.value);
      if(node.left) queue.push(node.left);
      if(node.right) queue.push(node.right);
         }
      }
   
// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
   BinarySearchTree,
};
