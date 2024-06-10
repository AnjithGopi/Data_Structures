



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
        const node= new Node(value)


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
            console.log("The list is empty")
        }else{
            node.next=this.head
        }

        this.head=node
    }


    sum(){
        if(this.head==null){
            console.log("Sum:0")
        }else{
            let temp=this.head
            let sum=0
            while(temp){
                sum+=temp.value
                temp=temp.next
            }
            console.log("sum:",sum)
        }
    }



    print(){
        if(this.head==null){
            console.log("The List is empty")
        }else{
            let temp=this.head
            while(temp){
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