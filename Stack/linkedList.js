// Implementation of stack using linked list


class Node{
    constructor(value){
        this.value=value
        this.next=null
    }
}



class Stack{
    constructor(){
        this.head=null
        this.size=0
    }



    push(value){

        const node = new Node(value)

        if(this.head){
            node.next=this.head
        }

        this.head=node
        this.size++

    }

    isEmpty(){
        return this.size===0
    }


    middle(){

        let midIndex=Math.floor(this.size)/2
        let temp=this.head
        let prev=null

        for(let i=0;i<midIndex;i++){

            prev=temp

            temp=temp.next

        }

        console.log("midlle:",prev.value)
    }


    removeMiddle(){

        let midIndex= Math.floor((this.size)/2)

        let temp=this.head
        let prev=null

        for(let i=0;i<midIndex;i++){
            prev=temp
            temp=temp.next
        }

        if(prev){
            prev.next=temp.next

        }

        
        this.size--


    
        
    }


    pop(){

        if(this.isEmpty()){
            console.log("Stack is empty")
            return
        }

        if(this.head){
            let value=this.head.value
            this.head=this.head.next
            this.size--

            return value
        }

        


    }


    peek(){

        console.log(this.head.value)
        return
    }



    display(){

        if(this.isEmpty()){
            console.log("The stack is empty")
        }else{


            let temp=this.head
             let str=""
            while(temp){

               
                str+=temp.value + " "
                temp=temp.next
            }

            console.log(str)

            
        }
    }
}




const stack= new Stack()


for(let i=0;i<=10;i++){
    stack.push(i)

}




stack.display()
stack.middle()
stack.removeMiddle()
stack.display()
stack.peek()
stack.pop()
stack.display()









