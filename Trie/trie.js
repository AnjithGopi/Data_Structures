

// implementation of trie datastructure


class Node{

    constructor(){
        this.child={}
        this.isEndOfWord=false
    }
}



class Trie{

    constructor(){

        this.root= new Node()
    }

    

    insert(word){

        let current =this.root
        for(let char of word){

            if(!current.child[char]){

                current.child[char]=new Node()
            }

            current=current.child[char]
        }

        this.isEndOfWord=true
    }



    search(word){
        let current =this.root

        for(let char of word){

            if(!current.child[char]){

                return false
            }

            current=current.child[char]
        }

        return "word is found"
    }
}




const trie= new Trie()

trie.insert("Anjith")
trie.insert("Apple")
trie.insert("Orange")

console.log(trie.search("Anjith"))