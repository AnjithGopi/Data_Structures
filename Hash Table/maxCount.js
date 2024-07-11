


// finding the maximum occured element using hashtable



function maxElem(array){


    let hashTable={}

array.forEach(element => {

    if(hashTable[element]){
        hashTable[element]++
    }else{
        hashTable[element]=1
    }
    
    
});

console.log(hashTable)




let maxCount=0
let maxElement=0
for(let elem in hashTable){

    if(hashTable[elem]>maxCount){
        maxCount=hashTable[elem]

        maxElement=elem
    }

    
}


return maxElement

}



const duplicates=[]

function findDupe(arr){


    for(let elem of arr){
        if(arr.indexOf(elem)==arr.lastIndexOf(elem)){

            duplicates.push(elem)

        }
    }


    return duplicates


    
}






const arr=[1,10,20,2,30,2,40,2,50,3,60,3,12,4,12,4,5,5,7,5,5,5,6] //output=5


console.log(maxElem(arr))

console.log(findDupe(arr))