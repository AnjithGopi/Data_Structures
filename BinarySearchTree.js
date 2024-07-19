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


    min(root){
        if(!root.left){
            return root
        }else{
            return this.min(root.left)
        }
    }


    max(root){

        if(!root.right){
            return root
        }else{

            return this.max(root.right)
        }
    }


    delete(value){

        this.root= this.deleteNode(this.root,value)
    }


    deleteNode(root,value){

        if(this.root===null){
            return null
        }else if(value<root.value){

            root.left=this.deleteNode(root.left,value)
        }else if(value>root.value){

            root.right=this.deleteNode(root.right,value)
        }else{

            if(!root.left&&!root.right){
                return null
            }else if(!root.left){
                return root.right
            }else if(!root.right){
                return root.left
            }else{

                root.value=this.min(root.right)
                root.right=this.deleteNode(root.right,root.value)
            }


        }

        return root
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

console.log(bst.min(bst.root))
console.log(bst.max(bst.root))
bst.delete(15)

console.log(bst.search(15))