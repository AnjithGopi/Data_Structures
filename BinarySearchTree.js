// implementation of binary search tree  and its operations



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

        console.log("value Added successfully")
        return
    }



    search(value){

        let currentNode=this.root

        while(currentNode){

            if(currentNode.value===value){

                console.log("value found")
               
                return currentNode
            }else if(value<currentNode.value){

                currentNode=currentNode.left
               
            
            }else{
                currentNode=currentNode.right
                
                
            }
        }

        return "Value not found"
    }


}





const bst= new BinarySearchTree()

bst.insert(10)
bst.insert(15)
bst.insert(13)
bst.insert(14)
bst.insert(20)


console.log(bst.search(13))
console.log(bst.search(14))
console.log(bst.search(20))
