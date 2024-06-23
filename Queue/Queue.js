

//  Queue is a sequential collection of elements that follows the first in first out principle 




class Node{

    constructor(value){
        this.value=value
        this.next=null
    }


   
}


class Queue{

    constructor(){

        this.head=null
        this.tail=null
        this.size=0
        
    }


    isEmpty(){
        return this.size===0
    }



    enque(value){

        let node =new Node(value)

        if(this.isEmpty()){

            this.head=node
            this.tail=node
        }else{
            this.tail.next=node
            this.tail=node
        }

        this.size++
    }



    deque(){

        if(this.isEmpty()){
            return 
        }else{

            console.log(this.head.value)

            this.head=this.head.next
        }
        this.size--

       
        return
    }


    print(){

        if(this.isEmpty()){
            console.log("Empty queue")
        }else{

            let str=""
            let temp=this.head

            while(temp){

                str+=temp.value+" "
                temp=temp.next
            }
            console.log(str)
        }
    }
}



const queue= new Queue()


for(let i=0;i<=10;i++){
    queue.enque(i)

}

queue.print()
queue.deque()
queue.print()
