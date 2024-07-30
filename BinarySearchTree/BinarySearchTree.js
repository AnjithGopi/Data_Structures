// implementation of binary search tree


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

        console.log("values Added successfully")
        return

    }



    search(value){

        let currentNode=this.root


        while(currentNode){

            if(currentNode.value===value){

                return currentNode
            }else if(value<currentNode.value){
                currentNode=currentNode.left
            }else{

                currentNode=currentNode.right
            }
        }


        return "value not found"




    }




}




const bst= new BinarySearchTree()

bst.insert(10)
bst.insert(5)
bst.insert(15)
bst.insert(2)
bst.insert(7)
bst.insert(12)
bst.insert(17)


console.log(bst.search(15))
console.log(bst.search(30))