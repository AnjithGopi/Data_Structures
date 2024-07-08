

// finding an element with maximum count using hashtable



function maxElement(arr){

    let count={}


    for(elem of arr){

        if(!count[elem]){
            count[elem]=1
        }else{
            count[elem]++
        }
    }



    let maxCount=0
    let maxElem=null



    for(const elem in count){


        if(maxCount>count[elem])

            maxCount=count[elem]
            maxElem=elem


    }


    return maxElem

}





const arr=[0,0,1,1,1,2,2,2,2,3,3,3,3,3]

console.log( maxElement(arr))