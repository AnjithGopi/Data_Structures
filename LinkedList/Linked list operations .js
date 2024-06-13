

// Sample workout on a singly linked list and its operations



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


    isEmpty(){ //function to check whether the list is empty?
        return this.size==0
    }


    getSize(){ // function to get the size of the list
        console.log("size:",this.size)
        return this.size
    }



    append(value){ // appending the values

        const node =new Node(value)
        
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



    prepend(value){  // function to prepend the values into the list

        const node=new Node(value)

        if(this.isEmpty()){
            this.head=node
        }else{

            node.next=this.head
            this.head=node
        }

        this.size++

    }


    sum(){ // function to find the sum of the elements in the linked list

        if(this.isEmpty()){
            console.log("sum:0")

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


    insert(value,index){  // function to insert a value to a particular index

        if(index<0||index>this.size){
            console.log("index out of bound")
        }else if(index===0){
            this.head=node
        }else{

            const node=new Node(value)

            let temp=this.head
            for(let i=0;i<index-1;i++){
                temp=temp.next
            }
            node.next=temp.next
            temp.next=node
        }

        this.size++

    }


    removeIndex(index){ // function to remove a particular index in a list

        if(index<0 || index>this.size){
            console.log("Index out of bound")
        }else if(index===0){
            this.head=this.head.next
        }else{
            let temp=this.head
            for(let i=0;i<index-1;i++){
                temp=temp.next
               
            }
            temp.next=temp.next.next
            this.size--
        }

    }


    search(value){ // function to find the index of a particular element

       if(this.isEmpty()){
        console.log("The list is empty")
       }

        let temp=this.head
        let i=0

        while(temp){
            if(temp.value===value){
                console.log("value found at index:",i)
                return i
            }
            temp=temp.next
            i++
        }



    }


    reverse(){ // function to reverse a linked list

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



    hasCycle(){ // checking whether the list has cycle

        if(this.isEmpty()){
            return 
        }else{
            let slow=this.head
            let fast=this.head.next

            while(fast && fast.next){

                if(slow===fast){
                   
                    return true
                }

                slow=slow.next
                fast=fast.next.next
            }
        }

        return false
    }



    print(){  // printing the list

        if(this.isEmpty()){

            console.log("The list is empty")

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

for(let i=1;i<=10;i++){
    list.append(i*10)
}


for(let i=0;i<=10;i++){
    list.prepend(i*5)
}
list.print()
list.sum()
list.getSize()
list.insert(11,2)
list.print()
list.removeIndex(2)
list.search(10)
list.print()
list.reverse()
list.print()
console.log(list.hasCycle())
list.print()


