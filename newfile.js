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


   inOrder(root ,nodes=[]){

   

    if(root){

        this.inOrder(root.left)
        nodes.push(root.value)
        this.inOrder(root.right)
    }


    return nodes
   }



}




 const bst= new Bst()

 bst.insert(10)
 bst.insert(8)
 bst.insert(13)
 bst.insert(9)


 console.log(bst.search(9))
 console.log(bst.search(100))
 console.log(bst.inOrder(bst.root))

