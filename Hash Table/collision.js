

class Hashtable{

    constructor(size=50){
        this.size=size
        this.buckets= new Array(size).fill(null).map(()=>[])
    }


    hash(key){

        let hash=0
        for(let char of key){
            hash+=char.charCodeAt(0)
        }

        return hash%this.size
    }


    set (key,value){

        let index= this.hash(key)
        let bucket=this.buckets[index]


        const exist= bucket.find(item=>item.key===key)

        if(exist){
            exist.value=value
        }else{

            bucket.push({key,value})
        }
    }



    get(key){

        let index= this.hash(key)
        let bucket= this.buckets[index]

        const found= bucket.find(item=>item.key===key)

        if(found){
            return found.value
        }else{
            return undefined
        }
    }
}



const hashtable= new Hashtable()

hashtable.set("name","Anjth")
hashtable.set("age",26)


console.log(hashtable.get("age"))