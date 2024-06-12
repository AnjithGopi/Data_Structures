

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
        return this.size==0
    }



    append(value){
        const node=new Node(value)


        if(this.isEmpty()){
            this.head=node

        }else{

            let temp=this.head
            while(temp.next){

                temp=temp.next

            }

            temp.next=node

        }

        this.size++



        
    }


    middle(){ // function to find the middle value of the linked list

        let slow=this.head
        let fast=this.head

        while(fast && fast.next){
            slow=slow.next
            fast=fast.next.next
        }


        console.log("Middle element:",slow.value)

        

        return  
    }


    deleteMiddle(){

        let slow=this.head
        let fast=this.head
        let prev=null

        while(fast && fast.next){

            fast=fast.next.next
            prev=slow
            slow=slow.next
        }

        
        prev.next=slow.next


       

       
        this.size--

        return

    }



    print(){
        if(this.isEmpty()){
            console.log("the list is empty")
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






const list= new LinkedList()

for(let  i=0;i<=10;i++){
    list.append(i*10)
}

list.print()

list.middle()
list.deleteMiddle()

list.print()
