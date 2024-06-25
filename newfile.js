




class Node{


    constructor(value){
        this.value=value
        this.size=0
    }
}



class stack{



    constructor(){

        this.head=null
        this.next=null
        
    }


    isempty(){
        return this.size===0
    }


    push(element){

        const node=new Node(element)

        if(this.isempty()){

            this.head=node
        }else{

            node.next=this.head
            this.head=node
        }

        this.size++






    }



    print(){

        if(this.isempty()){
            console.log("the stack is empty")
        }else{


            let temp=this.head
            let values=""

            while(tem)
        }
    }
}