

// sorting the values in a stack using a temporary stack



function sort(arr){


    let tempStack=[]


    while(arr.length>0){

        let key=arr.pop()

        while(tempStack.length>0 && tempStack[tempStack.length-1]>key){
            
            arr.push(tempStack.pop())
        }

        tempStack.push(key)
    }


    return tempStack



}




// _____________________________________________________




function stackSort(array){


    let tempStack=[]
    while(array.length>0){
        let key=array.pop()
        while(tempStack.length>0 && tempStack[tempStack.length-1]>key){
            array.push(tempStack.pop())
        }
        tempStack.push(key)
    }
    return tempStack



}



let arr=[10,2,5,4]
let array=[10,12,11,13]


console.log(sort(arr))
console.log(stackSort(array))


