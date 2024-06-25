


// implementing hashtable with collision handling




class Hashtable{


    constructor(size=50){

        this.size=size
        this.buckets = new Array(size).fill(null).map(() => []);
       
    }



    hash(key){


        let hash=0

        for(let char of key){
            hash+=char.charCodeAt(0)
        }

        return hash%this.size
    }



    set(key,value){

        let index= this.hash(key)
        let bucket=this.buckets[index]

        const existing= bucket.find(item=>item.key===key)

        if(existing){

            existing.value=value
        }else{
            bucket.push({key,value})
        }
    }



    get(key){

        let index= this.hash(key)
        const bucket= this.buckets[index]


        const found= bucket.find(item=>item.key===key)

        if(found){
            return found
        }else{
            return undefined
        }
    }



    remove(key){

        let index= this.hash(key)
        const bucket=this.buckets[index]

        const removeIndex= bucket.findIndex(item=>item.key===key)

        if(removeIndex){
            bucket.splice(removeIndex,1)
        }
    }
}



const hashtable= new Hashtable()

hashtable.set("name","Anjith")
hashtable.set("age",26)
hashtable.set("place","kochi")

console.log(hashtable.get("name"))