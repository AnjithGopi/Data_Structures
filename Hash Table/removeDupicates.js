

// write a function to remove the duplicates from an array using a hashtable



function removeDuplicates(arr){

    let result=[]
    let hashTable={}


    for(let element of arr){

        if(!hashTable[element]){
            result.push(element)
            hashTable[element]=true
        }
    }

    return result


}



function findDuplicates(arr){

    let duplicates=[]
    let result=[]
    let hashtable={}


    for(let element of arr){

        if(hashtable[element]){
            hashtable[element]++
        }else{

            hashtable[element]=1
        }
    }


    for(let element in hashtable){

        if(hashtable[element]==1){

            result.push(element)
        }
    }


    return result

   

}
















const array=[10,20,30,10,20,40,50]

console.log(removeDuplicates(array))
console.log(findDuplicates(array))