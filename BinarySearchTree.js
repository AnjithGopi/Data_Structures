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


    inOrder(root,nodes=[]){

         
        if(root){
            this.inOrder(root.left,nodes)
            nodes.push(root.value)
            console.log(root.value)
            this.inOrder(root.right,nodes)
        }

        return nodes
    }


    preOrder(root,nodes=[]){

        if(root){

            nodes.push(root.value)
            this.preOrder(root.left,nodes)
            this.preOrder(root.right,nodes)

        }

        return nodes
    }


    postOrder(root,nodes=[]){

        if(root){

            this.preOrder(root.left,nodes)
            this.preOrder(root.right,nodes)
            nodes.push(root.value)
        }

        return nodes

    }

   


}





const bst= new BinarySearchTree()

bst.insert(10)
bst.insert(15)
bst.insert(13)
bst.insert(14)
bst.insert(20)
bst.insert(25)
bst.insert(18)
bst.insert(30)



console.log(bst.search(13))
console.log(bst.search(14))
console.log(bst.search(100))

console.log(bst.inOrder(bst.root))
console.log(bst.preOrder(bst.root))
console.log(bst.postOrder(bst.root))
