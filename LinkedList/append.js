


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
    }


    append(value){
        const node=new Node(value)

        if(this.head==null){
            this.head=node
        }else{
            this.tail.next=node
        }
        this.tail=node
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