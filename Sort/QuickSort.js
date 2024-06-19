



// sort the given array in non decreasing order using quick sort algorithm




function quickSort(arr){

    if(arr.length<2){
        return arr
    }


    let pivot= arr[arr.length-1]

    let left=[]
    let right=[]


    for(let i=0;i<arr.length-1;i++){
        if(arr[i]<pivot){
            left.push(arr[i])
        }else{
            right.push(arr[i])
        }
    }



    return [...quickSort(left),pivot,...quickSort(right)]

}



// sort the given array in non increasing order 



function ascending(array){


    if(array.length<2){
        return array
    }


    let pivot= array[array.length-1]
    let left=[]
    let right=[]

    for(let i=0;i<array.length-1;i++){

        if(array[i]>pivot){

          left.push(array[i])

        }else{
            right.push(array[i])
        }

    }


    return [...ascending(left),pivot,...ascending(right)]



}






const array= new Array(10,12,11,3,0,-6,7,6)

console.log(quickSort(array))
console.log(ascending(array))