


// finding the maximum occured element using hashtable



function maxElem(array){


    let hashTable={}


    for(let elem of array){

        if(hashTable[elem]){

            hashTable[elem]++
        }else{
            hashTable[elem]=1
        }
    }


       let maxCout=0
       let maxElement=0

       for(let elem in hashTable){

        if(hashTable[elem]>maxCout){

            maxCout=hashTable[elem]
            maxElement=elem
        }
       }


       return maxElement



}










const arr=[1,10,20,2,30,2,40,2,50,3,60,3,12,4,12,4,5,5,7,5,5,5,6] //output=5


console.log(maxElem(arr))

