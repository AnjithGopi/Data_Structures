



// Sum of elements in an Array using recursion




function sumArray(array){

    if(array.length==0){
        return 0
    }

    return array[0]+sumArray(array.slice(1))

}



const arr= new Array(1,2,3,4,5)
console.log(sumArray(arr))


