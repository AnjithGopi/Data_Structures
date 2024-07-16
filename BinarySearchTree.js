// Basic implementation of binary search tree



class Node{
    constructor(value){
        this.value=value
        this.left=null
        this.right=null
    }

    
}

class BinarySearchTree{
    constructor(){
        this.root=null
    }


    isEmpty(){

        return this.root===null
    }


    insert(value){

        let node= new Node(value)

        if(this.isEmpty()){

            this.root=node
        }else{

            let currentNode=this.root
            let parentNode=null

            while(currentNode){

                parentNode=currentNode

                if(value<currentNode.value){

                    currentNode=currentNode.left
                }else{

                    currentNode=currentNode.right
                }
            }


            if(value<parentNode.value){

                parentNode.left=node
            }else{
                parentNode.right=node
            }
        }
    }



}




const bst=new BinarySearchTree()
console.log(bst.isEmpty())

bst.insert(10)
bst.insert(15)
bst.insert(16)
bst.insert(25)
bst.insert(24)
bst.insert(45)
console.log(JSON.stringify(bst, null, 2));






