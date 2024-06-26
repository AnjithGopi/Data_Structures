


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




    append(value){


        const node= new Node(value)

        if(!this.head){
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



    print(){

        if(!this.head){
            console.log("The list is empty")
        }else{


            let temp=this.head
            let values= ""

            while(temp){

                values+=temp.value+" "
                temp=temp.next
            }

            console.log(values)
        }

    }




}



const list= new LinkedList()

list.append(10)
list.append(20)
list.append(30)


list.print()