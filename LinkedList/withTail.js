

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


    prepend(value){
        const node=new Node(value)

        if(this.isEmpty()){

            this.head=node
            this.tail=node

            
        }else{

            node.next=this.head
            this.head=node
            
            
        }

        this.size++
    }



    append(value){
        const node=new Node(value)

        if(this.isEmpty()){
            this.head=node
            this.tail=node
        }else{

            this.tail.next=node
            this.tail=node
        }

        this.size++


    }


    reverse(){
        if(this.isEmpty()){
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

            this.head=prev

        }
    }


    print(){
        if(this.isEmpty()){
            console.log("THe list is empty")
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


for(let i=1;i<=5;i++){
    list.append(i*5)

}

list.print()


for(let i=1;i<=5;i++){
    list.prepend(i*2)

}
list.print()


list.reverse()
list.print()



