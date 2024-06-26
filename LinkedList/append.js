


// write a singley linked list and append the values




class Node{
    constructor(value){
        this.value=value
        this.next=null
    }
}



class LinkedList{
    constructor(){
        this.head=null
        this.tail=null
        this.size=0
    }


    isEmpty(){
        return this.size===0
    }


    append(value){
        const node=new Node(value)

        if(this.head==null){
            this.head=node
        }else{
            this.tail.next=node
        }
        this.tail=node
        this.size++
    }


    prepend(value){
        const node= new Node(value)
        if(this.head==null){
            this.head=node
        }else{
            node.next=this.head
        }

        this.head=node
        this.size++
    }


    reverse(){

        if (this.isEmpty()){
            

            return

        }else{


            let prev=null
            let temp=this.head

            while(temp){
                let next=temp.next
                temp.next=prev
                prev=temp
                temp=next
            }

            prev=this.head
        }
    }


    print(){
        if(this.head==null){
            console.log("The list is empty")
        }else{
            let temp=this.head
            while(temp!==null){
                console.log(temp.value)
                temp=temp.next
            }
        }
    }
}



const list= new LinkedList()

list.append(12)
list.append(13)
list.append(14)
list.append(15)



list.print()

list.reverse()
list.print()