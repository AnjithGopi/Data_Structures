// BST


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



   search(value){

    if(this.isEmpty()){
        return "The tree is empty"
    }else{

      let currentNode=this.root

      while(currentNode){

        if(value===currentNode.value){
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


   inOrder(root){

   

    if(root){

        this.inOrder(root.left)
        console.log(root.value)
        this.inOrder(root.right)
    }


   }


   postOrder(root){
    if(root){
        this.postOrder(root.left)
        this.postOrder(root.right)
        console.log(root.value)
    }

   }


   preOrder(root){
    if(root){

       console.log(root.value)
        this.preOrder(root.left)
        this.preOrder(root.right)
    }

   }



   delete(value){
    this.root=this.deleteNode(this.root,value)
   }



   deleteNode(root,value){

    if(!this.root==null){
        return null
    }else if(value<root.value){

        root.left=this.deleteNode(root.left,value)
    }else if(value>root.value){
        root.right=this.deleteNode(root.right,value)
    }else{

        if(!root.left && !root.right){
            return null
        }else if(!root.left){
            return root.right
        }else if(!root.right){
            return root.left
        }else{
            root.value=min(root.right)

            root.right=this.deleteNode(root.right,root.value)
        }
    }


    return root


   }



}




 const bst= new Bst()

 bst.insert(10)
 bst.insert(8)
 bst.insert(13)
 bst.insert(9)


 console.log(bst.search(9))

 bst.inOrder(bst.root)
 bst.postOrder(bst.root)
 bst.preOrder(bst.root)

