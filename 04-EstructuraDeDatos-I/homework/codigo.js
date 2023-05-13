// function LinkedList(){
//     this.head = null;
// }

// function Node(value){
//     this.value = value;
//     this.next = null;
// }

// LinkedList.prototype.add = function(value){
//     let newNode = new Node(value);
//     let current = this.head;
//     if(!current){
//         this.head = newNode;
//         return value;
//     }
//     while (current.next){
//         current = current.next;
//     }
//     current.next = newNode
//     return value;
// }

// LinkedList.prototype.remove = function(){
//     let current = this.head
//     let previous = null;
// while (current.next !== null) {
//      previous = current;
//      current = current.next;
// }
//     let lastNode = current;
//     if(previous === null){
//         this.head = null
//     }else {
//         previous.next = null
//     }
//     return lastNode;
// }

// LinkedList.prototype.search = function (value) {
//     let current = this.head;
    
//     while(current !== null){
//         if(current.value === value){
//             return current
//         }
//         current = current.next;
//     }
//     return null
// }
// let newList = new LinkedList();

//  newList.add(10);
//  newList.add(3)
//  newList.add(5);
//  newList.add(8);
//  newList.remove()
// newList.search()

//  console.log(newList);



//  remove: elimina el último nodo de la lista y retorna su valor (tener en cuenta el caso particular de una lista de un solo nodo y de una lista vacía);
//  - search: recibe un parámetro y lo busca dentro de la lista, con una particularidad: el parámetro puede ser un valor o un callback. En el primer caso, buscamos un nodo cuyo valor coincida con lo buscado; en el segundo, buscamos un nodo cuyo valor, al ser pasado como parámetro del callback, retorne true. 
//  EJEMPLO 
//  search(3) busca un nodo cuyo valor sea 3;
//  search(isEven), donde isEven es una función que retorna true cuando recibe por parámetro un número par, busca un nodo cuyo valor sea un número par.
//  En caso de que la búsqueda no arroje resultados, search debe retornar null.
// */



function LinkedList(){
    this.head = null;
  }
  
  function Node(value) {
    this.value = value;
    this.next = null;
  }
  
  LinkedList.prototype.add = function(value){
    let newNode = new Node(value);
    let current = this.head;
    if(!current){
        this.head = newNode;
        return value;
    }
    while (current.next){
        current = current.next;
    }
    current.next = newNode
    return value;
  }
  
  LinkedList.prototype.remove = function(){
    if(this.head === null){
      return null;
    }
  
    let current = this.head
    let previous = null;
  
  while (current.next !== null) {
     previous = current;
     current = current.next;
  }
      if (previous === null) {
      this.head = null;
    } else {
      previous.next = null;
    }
    
     return current.value;
  }
  
  LinkedList.prototype.search = function (value) {
      if(this.head.value === value){
         return true
    }else {
        let current = this.head
        while(current.next !== null){
            if(current.next.value === value){
                return true
            }
            current = current.next
        }
    }
    return false;
}
  
  let newList = new LinkedList();
  
  newList.add("pepe");
  newList.add(5)
  newList.add("pepe");
  newList.add(7);
  newList.remove()
  newList.search()
  newList.search("pepe")
  newList.search()
console.log(newList.search(5))