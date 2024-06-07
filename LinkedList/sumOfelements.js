

// Implement a linked list and append the values 10,20,30 then prepend 2 values 15,25 and find the sum of all the elements




class Node{
    constructor(value){
        this.next=null
        this.value=value
    }
}


class LinkedList{
    constructor(){
        this.head=null
        this.tail=null
    }


    append(value){
        
        const node= new Node(value)
        if(this.head==null){
            this.head=node
        }else{
            this.tail.next=node
        }

        this.tail=node
    }



    prepend(value){
        const node = new Node(value)
        if(this.head==null){
            this.head=node
        }else{
            node.next=this.head
        }

        this.head=node
    }


    sum(){
        if(this.head==null){
            console.log("sum is 0")
        }else{
            let temp=this.head
            let sum=0
            while(temp!==null){

                sum+=temp.value

                temp=temp.next
                
            }

            console.log("the sum is:",sum)
        }
    }


    print(){
        if(this.head==null){
            console.log("the list is empty")
        }else{
            let temp=this.head
            while(temp!=null){
                console.log(temp.value)
                temp=temp.next
            }
        }
    }
}




const list=new LinkedList()

list.append(10)
list.append(20)
list.append(30)

list.prepend(15)

list.sum()

list.print()



