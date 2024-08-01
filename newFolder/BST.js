
// Binary search tree implementation and operations

class Node{

    constructor(value){

        this.value=value
        this.left=null
        this.right=null
    }
}



class Bst{

    constructor(){

        this.root=null
    }


    isEmpty(){

        return this.root===null
    }


    insert(value){  // Adding new values into the tree

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

        return "value Added Successfully"
    }


    inOrder(root){ // Inorder Traversal


        if(root){

            this.inOrder(root.left)
            console.log(root.value)
            this.inOrder(root.right)
        }
    }


    preOrder(root){  // preOrder Traversal

        if(root){
            console.log(root.value)
            this.preOrder(root.left)
            this.preOrder(root.right)
        }
    }

    postOrder(root){  // postOrder Traversal

        if(root){

            this.postOrder(root.left)
            this.postOrder(root.right)
            console.log(root.value)
        }
    }



    isValid(root){  // checking whether a tree is valid binary search tree

        if(!root){

            return true
        }else{

            let currentNode= this.root
            let prev=-Infinity
            let stack=[]

            while(currentNode || stack.length>0){

               while(currentNode){

                stack.push(currentNode)
                currentNode=currentNode.left
               
               }


               currentNode=stack.pop()

               if(currentNode.value<=prev){

                return false
               }

               prev=currentNode.value
               currentNode=currentNode.right
            }

            return true
        }
    }


    maxDepth(root){  // finding the maximum depth of the bst

        if(!root){
            return 0
        }else{

            let leftDepth=this.maxDepth(root.left)
            let rightDepth=this.maxDepth(root.right)
            return Math.max(leftDepth,rightDepth)+1
        }
    }


    findLCA(root,p,q){  // the lowest common ancestor of the tree

        if(!root){
            return null
        }

        if(p<root.value && q<root.value){

            return this.findLCA(root.left,p,q)
        }

        if(p>root.value && q>root.value){

            return this.findLCA(root.right,p,q)
        }

        return root

    }



    search(value){  // searching a value in a bst

            let currentNode=this.root

            while(currentNode){

                if(value===currentNode.value){

                    console.log("value found at :",currentNode)
                    return currentNode
                }else if(value<currentNode.value){

                    currentNode=currentNode.left
                }else if(value>currentNode.value){

                    currentNode=currentNode.right
                }
            }
        
           
            return "Value not found"
    }


    min(root){ // minimum value in a bst

        if(!root.left){
            return root
        }else{

            this.min(root.left)
        }
    }

    max(root){ // maximum value in a bst

        if(!root.right){

            return root
        }else{

            this.max(root.right)
        }
    }


    delete(value){ // deleting a value from a bst

        this.root=this.deleteNode(this.root,value)

    }


    deleteNode(root,value){

        if(root==null){
            return null
        }else if(value<root.value){

            root.left=this.deleteNode(root.left,root.value)
        }else if(value>root.value){

            root.right=this.deleteNode(root.right,root.value)
        }else{

            if(!root.left && !root.right){

                return null
            }


           else if(!root.left){

                return root.right
            }else if(!root.right){

                return root.left
            }else{


                root.value= this.min(root.right)

                root.right= this.deleteNode(root.right,root.value)



            }



        }
    }



}



const bst = new Bst() // creating an instance of bst


// insertion of values in to the bst

console.log(bst.insert(10))
console.log(bst.insert(12))
console.log(bst.insert(7))
console.log(bst.insert(1))
console.log(bst.insert(9))
console.log(bst.insert(15))


// traversal Methods


bst.inOrder(bst.root)
bst.preOrder(bst.root)
bst.postOrder(bst.root)


console.log(bst.isValid(bst.root))
console.log(bst.maxDepth(bst.root))


// lowest common Ancestor(LCA)

console.log(bst.findLCA(bst.root,1,9))

bst.search(7)
bst.delete(12)
console.log(bst.search(12))













