// example of an empty list

class Node{
    constructor(value){
        this.value=value
        this.head=null
    }
}



class LinkedList{
    constructor(){
        this.head=null
        this.size=0
    }


    getSize(){
        return this.size
    }

    isEmpty(){
        return this.size===0
    }
}




const list=new LinkedList()

console.log("Is the list empty?:",list.isEmpty())
console.log("size",list.getSize())