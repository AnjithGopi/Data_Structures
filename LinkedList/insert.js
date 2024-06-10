



// implement a linked list and insert a value in the second index



class Node{
    constructor(value){
        this.value=value
        this.next=null
    }
}



class LinkedList{
    constructor(){
        this.head=null
        this.size=0
    }


    isEmpty(){
        return this.size===0
    }



    append(value){
        const node= new Node(value)

        if(this.isEmpty()){
            this.head=node
        }else{
            let temp= this.head
            while(temp.next){
                temp=temp.next
            }
            temp.next=node
        }


        this.size++
    }


    insert(value,index){
        if(index<0||index>this.size){
            console.log("out of bound")
            return
        }

        if(index==0){
            node.next=this.head
            this.head=node
        }else{

            const node=new Node(value)
            let temp=this.head
            for(let i=0;i<index-1;i++){

                temp=temp.next
            }

            node.next=temp.next
            temp.next=node
        }
    }


    print(){
        if(this.isEmpty()){
            console.log("The list is empty")
        }else{
            let temp=this.head
            let values=""
            while(temp){
                values+=`${temp.value} `
                temp=temp.next
            }
            
        console.log(values)
    }

           
        }




}



const list=new LinkedList()

list.append(10)
list.append(20)
list.append(30)
list.insert(2,2)
list.print()