
// implementation and operations in trie datastructure



class Node{
    constructor(){
        this.child={}
        this.isEnd=false
    }
}



class Trie{

    constructor(){
        this.root=new Node()
    }



    insert(word){

        let current=this.root

        for(let char of word){

            if(!current.child[char]){

                current.child[char]=new Node()
            }

            current=current.child[char]
        }


        current.isEnd=true

      
    }


    search(word){

        let current=this.root

        for(let char of word){

            if(!current.child[char]){

                return "Word not found"
            }
            current=current.child[char]
        }

        return current.isEnd?"word found":"Word not found"
    }


    startsWith(word){


        let current=this.root

        for(let i=0;i<word.length;i++){

           let char= word[i]

           if(!current.child[char]){
            return "Word not found"
           }
        }

        return  "word found"
    }
}




const trie= new Trie()

trie.insert("Anjith")
trie.insert("Amal")
trie.insert("Anjitha")
trie.insert("ball")

console.log(trie.search("Anjith"))
console.log(trie.search("abhi"))
console.log(trie.startsWith("A"))
console.log(trie.startsWith("B"))
console.log(trie.startsWith("b"))