

// Implement a linked list and prepend a value            (linked list without tail)




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



    prepend(value){
        let node= new Node(value)
        if(this.isEmpty()){
            this.head=node
        }else{
            node.next=this.head
            this.head=node
        }

        this.size++
    }

    
    append(value){
        let node= new Node(value)
        if(this.isEmpty()){
            this.head=node
        }else{
            let temp=this.head
            while(temp.next!==null){
               temp=temp.next
              
            }
            temp.next=node

           this.size++

            
        }
    }


    getsize(){

        return this.size

    }


    print(){
        if(this.isEmpty()){
            console.log("Empty list")
        }else{
            let temp= this.head
            let values=""

            while(temp){
                values+=`${temp.value} `
                temp=temp.next
            }

            console.log(values)
        }
    }
}




const list =new LinkedList()

list.prepend(10)
list.prepend(20)
list.prepend(30)
list.append(15)
list.append(13)

console.log("size:",list.getsize())

list.print()


