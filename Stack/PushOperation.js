

class Stack{


    constructor(){
        this.item=[]
    }


    push(element){
        this.item.push(element)
    }


    pop(){
        if(this.item.length===0){
              console.log("Stack is empty")
            return
        }


        this.item.pop()


    }


    display(){

        console.log(this.item)
    }
}




const stack= new Stack()


stack.push(10)
stack.push(20)
stack.push(30)
stack.push(40)
stack.push(50)

stack.display()
stack.pop()
stack.display()