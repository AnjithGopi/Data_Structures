



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
        return this.size==0
    }



    enque(value){


        const node= new Node(value)

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

            return "list is empty"
        }else{


            this.head=this.head.next
        }

        this.size--
    }



    print(){

        let temp=this.head

        let val=""

        while(temp){

            val+=temp.value+ " "
            temp=temp.next
        }
       


        console.log(val)



    }


        
}



const queue= new Queue()


queue.enque(10)
queue.enque(20)
queue.enque(10)
queue.enque(20)
queue.enque(10)
queue.enque(20)
queue.print()