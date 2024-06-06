

// write a singley linked list and append the values 10 ,20,30 and prepend the value 5



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
        const node = new Node(value)
        if(this.head==null){
            this.head=node
        }else{
            this.tail.next=node
        }

        this.tail=node
    }


    prepend(value){
        const node= new Node(value)
        if(this.head==null){
            this.head=node
        }else{
            node.next=this.head
        }
        this.head=node
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



const list = new LinkedList()



list.append(10)
list.append(20)
list.append(30)


list.prepend(5)

list.print()


