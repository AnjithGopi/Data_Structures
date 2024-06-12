



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
        const node=new Node(value)

        if(this.isEmpty()){
            this.head=node
        }else{

            let temp=this.head
            while(temp.next!==null){
                temp=temp.next
            }
            temp.next=node
            
        }

        this.size++
        
    }


    sum(){


        if(this.isEmpty()){
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


    insert(value,index){

       if(index<0||index>this.size){
        console.log("index Out of bound")
        return
       }

       if(index===0){
         node.next=this.head
         this.head=node
       }else{
         let node=new Node(value)
         let temp=this.head
         for(let i=0;i<index-1;i++){
            temp=temp.next
         }
         node.next=temp.next
         temp.next=node
       }

       this.size++

      

      
    }




    search(value){
        if(this.isEmpty()){
            console.log("The list is empty")
        }

        let i=0
        let temp=this.head
        while(temp){
            if(temp.value===value){
                console.log("value found at index:",i)
                return i
            }

            temp=temp.next
            i++
        }
    }



    reverse(){

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
    
        
       



   


    remove(index){
        if(index<0||index>this.size){
            return null
        }

        
        if(index===0){
        
            this.head=this.head.next
        }else{
            let temp=this.head
            for(let i=0;i<index-1;i++){
                temp=temp.next
            }

            temp.next=temp.next.next
        }
        this.size--
    }


   




    print(){
        if(this.isEmpty()){
            console.log("List is empty")
        }else{
            let temp=this.head
            let values=""
            while(temp){
                values+=`${temp.value}  `
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


list.print()
list.search(5)
list.reverse()
list.print()