

// merge 2 singly linked lists



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


    getsize(){
        
        console.log("size:",this.size)
        return
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
            while(temp.next){
                temp=temp.next
            }
            temp.next=node
        }
        this.size++
    }


    merge(otherList){ // function to merge 2 lists

        if(this.isEmpty()){
            this.head=otherList.head
        }else{
            let temp=this.head
            while(temp.next){
                temp=temp.next
            }
            temp.next=otherList.head
        }

        this.size++

    }


    print(){
        if(this.isEmpty()){
            console.log("list is empty")
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



const list1= new LinkedList()


for(let i=0;i<=10;i++){
    list1.append(i*10)

}




list1.print()





const list2= new LinkedList()

for(let i=0;i<=10;i++){
    list2.append(i)
}


 list2.print()

 list1.merge(list2)
list1.print()