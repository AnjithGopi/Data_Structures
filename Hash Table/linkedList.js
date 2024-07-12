

// create a hashtable and handle collision using linked list





class Node{

    constructor(key,value){

        this.key=key
        this.value=value
        this.next=null
    }
}


class Linkedlist{


    constructor(){

        this.table= new Array(20)
        
    }


    hash(key){

        return key.length%this.table.length
    }



    set(key,value){

        const index= this.hash(key)
        const node= new Node(key,value)

        if(!this.table[index]){

            this.table[index]=node
        }else{

            let temp=this.table[index]

            while(temp.next){
                temp=temp.next
            }

            temp.next=node
        }
    }


    get(key){

        const index= this.hash(key)

        let temp=this.table[index]

        while(temp){
            if(temp.key===key){

                return temp.value
            }

            temp=temp.next
        }


        return "no value found"

       


    }


}



const list= new Linkedlist()

list.set("Messi",10)
list.set("Ronaldo",11)
list.set("Neymar",7)

