


// class Node{
//     constructor(value){
//         this.value=value
//         this.next=null
//     }
// }



// class LinkedList{
//     constructor(){


//         this.head=null
//         this.tail=null

//     }


//     append(value){
//         const node= new Node(value)

//         if(this.head==null){
//             this.head=node
//         }else{
//             this.tail.next=node
//         }

//         this.tail=node
//     }

//     prepend(value){

//         const node=new Node(value)

//         if(this.head==null){
//             this.head=node
//         }else{
//             node.next=this.head
//         }
//         this.head=node

//     }



//     print(){
//         if(this.head==null){
//             console.log("the list is empty")
//         }else{
//             let temp=this.head
//             while(temp!==null){
//                 console.log(temp.value)
//                 temp=temp.next
//             }
//         }
//     }
// }


// const list= new LinkedList()

// list.append(10)

// list.append(20)

// list.prepend(12)

// list.print()
















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



    print(){
        if(this.head==null){
            console.log("list is empty")
        }else{

            let temp=this.head
            while(temp!==null){

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
list.append(40)
list.append(50)


list.print()