


class Stack{


    constructor(){
        this.item=[]
    }



    push(element){

        this.item.push(element)
    }



    isEmpty(){

        this.item.size===0
    }



    peek(){

        if(this.isEmpty()){

            console.log("Stack is empty")
            return
        }

        return this.item[this.item.length-1]
    }



    pop(){

        if(this.isEmpty()){
            console.log("Empty stack")
            return 
        }

        return this.item.pop()
    }




    display(){


        let values=""
        for(let i=0;i<this.item.length;i++){

            values+=this.item[i]+" "
        }


        console.log(values)
    }
}



const stack = new Stack()

stack.push(10)
stack.push(20)
stack.push(30)
stack.push(40)
stack.push(50)

stack.display()
stack.pop()
stack.display()
console.log(stack.peek())