

class Hashtable{

    constructor(size=10){

        this.size=size
        this.buckets= new Array(size).fill(null).map(()=>[])
    }



    hash(key){


        let hash=0

        for(let i=0;i<key.length;i++){
            
            hash+=key.charCodeAt(i)
        }

        return hash%this.size



    }


    set(key,value){

        let index= this.hash(key)

        let bucket= this.buckets[index]


        let exist= bucket.find(item=>item.key===key)

        if(exist){
            exist.value=value
        }else{
            bucket.push({key,value})
        }
    }



    get(key){

        let index= this.hash(key)
        let bucket=this.buckets[index]

        let exist= bucket.find(item=>item.key===key)

        if(exist){
            return exist.value
        }else{
            return undefined
        }
    }



    remove(key){

        let index= this.hash(key)
        let bucket= this.buckets[index]

        let removeIndex= bucket.findIndex(item=>item.key===key)

        if(removeIndex){
            bucket.splice(removeIndex,1)
        }

    }
}



const hashtable= new Hashtable()

hashtable.set("Name","Anjith")
hashtable.set("Age",25)
hashtable.set("city","kochi")



console.log(hashtable.get("Age"))
console.log(hashtable.get("Name"))
