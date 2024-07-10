

// // Hash table can be implemented mainly using 3 steps

// // creating the hashtable with table and size as its initial properties

// // adding hash function to transform key to indeces
// // set and get methods for adding and retreving the data from the hashtable


// ////////////////////////////////////////////////////////////////////////////////////////////






// class Hashtable{

//     constructor(){
//         this.table=new Array(100)
//         this.size=0
//     }


//     hash(key){

//         let hash=0

//         for(let i=0;i<key.length;i++){

//             hash+=key.charCodeAt(i)
//         }

        

//         return hash%this.table.length
//     }


//     set(key,value){

//         let index= this.hash(key)
//         this.table[index]=[key,value]
//         this.size++
//     }

//     get(key){

//         let index= this.hash(key)

//        return this.table[index]
//     }


//     remove(key){

//         let index= this.hash(key)

//         if(this.table[index] && this.table[index].length){
//             this.table[index]=undefined
//             this.size--
//             return true
//         }else{

//            return "No Data found"
//         }
//     }
// }




// // mentioned above is the basic implementation of a hashtable  , given down is the method to handle the collision also






class Hashtable{
    constructor(){
        this.table=new Array(100)
        this.size=0
    }


    hash(key){
        let hash=0
        for(let i=0;i<key.length;i++){
            hash+=key.charCodeAt(i)
        }

        return hash%this.table.length
    }


    set(key,value){

        let index=this.hash(key)
        if(this.table[index]){
            for(let i=0;i<this.table[index].length;i++){

                if(this.table[index][i][0]===key){
                    this.table[index][i][1]=value
                    return
                }

               
            }
            this.table[index].push([key,value])
        }else{
            this.table[index]=[]
            this.table[index].push([key,value])
        }
    }


    get(key){
        let index=this.hash(key)
        if(this.table[index]){
            for(let i=0;i<this.table[index].length;i++){
                if(this.table[index][i][0]===key){
                    return this.table[index][i][1]
                }
            }
        }
        return "Value not found"
    }


    remove(key){

        let index= this.hash(key)
        if(this.table[index]){
            for(let i=0;i<this.table[index].length;i++){
                if (this.table[index][i][0]===key){
                    this.table[index].splice(i,1)
                    this.size--
                    return "Deleted successfully"
                }
            }
        }else{
            return "No item to remove"
        }
    }

}

let ht= new Hashtable()
ht.set("Messi",10)
ht.set("Ronaldo",7)
ht.set("Sachin",10)

console.log(ht.get("Messi"))
console.log(ht.get("Ronaldo"))
console.log(ht.remove("Ronaldo"))
console.log(ht.get("Ronaldo"))





