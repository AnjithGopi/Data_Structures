



/// create a hashtable and handle collision





class Hashtable{


    constructor(){
        this.table= new Array(20)
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

        let index= this.hash(key)

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

        let index= this.hash(key)

        if(this.table[index]){
            for(let i=0;i<this.table[index].length;i++){

                if(this.table[index][i][0]===key){
                    return this.table[index][i][1]
                }
            }
        }

            return "No value found"
        }
    



    remove(key){

        let index=this.hash(key)

        if(this.table[index]){
            for(let i=0;i<this.table[index].length;i++){

                if(this.table[index][i][0]===key){

                    this.table[index].splice(i,1)
                    return "Deleted successfully"
                }
            }
        }else{

            return "No data found"
        }
    }
}



const ht= new Hashtable()

ht.set("Messi",10)
ht.set("Ronaldo",7)
ht.set("Rohit",45)


console.log(ht.get("Messi"))
console.log(ht.get("Rohit"))
console.log(ht.remove("Ronaldo"))
console.log(ht.get("Ronaldo"))


// function to remove duplicates using hashtable


function remove(arr){

    let hashtable={}

    let result=[]


    for(let elem of arr){

        if(hashtable[elem]){
            hashtable[elem]++
        }else{
            hashtable[elem]=1
        }
    }


    for(let elem in hashtable){

        if(hashtable[elem]<2){

            result.push(elem)


        }
    }


    return result



}










let arr=[10,20,30,20,10,40]
console.log(remove(arr))













function removeMiddle(arr){


    let mid= Math.floor(arr.length/2)

    for(let i=0;i<mid;i++){


        tempStack.push(arr.pop())
    }


    arr.pop()

    while(tempStack.length>0){

        arr.push(tempStack.pop())
    }

    return arr


   




}









const stack=[10,20,30,40,50]
let tempStack=[]
console.log(removeMiddle(stack))
