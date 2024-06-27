

// implementation of stack using array


class Stack{
    constructor(){
        this.items=[]
    }




    push(element){  // Adding a new element into the stack

        this.items.push(element)
    }


    pop(){   // Removing the last added element into the stack
        return this.items.pop()
    }


    peek(){   // finding the top most or recently added element into the stack

        console.log(this.items[this.items.length-1])
        return
    }


    middle(){  // finding the middle element in the stack

        let left=0
        let right= this.items.length-1
        let mid= Math.floor((left+right)/2)
       console.log(this.items[mid])
       return this.items[mid]
    }


    removeMiddle(){ // deleting the middle element of the stack

        
        let left=0
        let right= this.items.length-1
        let mid= Math.floor((left+right)/2)
        this.items.splice(mid,1)
        let str=""
        for(let i=0;i<this.items.length;i++){
            str+=this.items[i]+" "
        }

        console.log(str)





    }


    reverse(){ // reversing the stack

        let str=""

       for(let i=this.items.length-1;i>=0;i--){

        str+=this.items[i]+" "


       }

       console.log(str)
    }


    printStack(){  // print the values stored in the stack


        let str=""

        for(let i=0;i<this.items.length;i++){
            str+=this.items[i]+" "
        }
        console.log(str)
    }
}


const stack= new Stack()
for(let i=0;i<=10;i++){
    stack.push(i*10)

}

stack.printStack()
stack.removeMiddle()
stack.pop()
stack.printStack()
stack.peek()
stack.middle()
stack.reverse()

