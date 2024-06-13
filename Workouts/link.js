

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

    prepend(value){
        const node=new Node(value)

        if(this.isEmpty()){
            this.head=node
        }else{
            node.next=this.head
            this.head=node
        }

        this.size++
    }


    reverse(){

        let temp=this.head
       let prev=null

        while(temp){
            let next=temp.next

            temp.next=prev
            prev=temp
            temp=next
        }

        this.head=prev


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



const list=new LinkedList()


for(let i=0;i<=10;i++){
    list.append(i*10)
}


list.print()
list.reverse()
list.print()
list.prepend(10)
list.print()