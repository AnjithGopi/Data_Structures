

class Stack{

    constructor(){

        this.items=[]
    }




push(element){

    this.items.push(element)
}


display(){

    console.log(this.items)
}



}





const stack = new Stack()


stack.push(10)
stack.push(20)
stack.push(30)
stack.push(40)


stack.display()

