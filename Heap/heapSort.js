


function sort(arr){

    let length=arr.length
    for(let i= Math.floor(length/2)-1;i>=0;i--){

        heapify(arr,length,i)
    }


    for(let i=arr.length-1;i>=0;i--){

        [arr[i],arr[0]]=[arr[0],arr[i]]
        heapify(arr,i,0)
    }

    return arr
}


function heapify(arr,length,i){

    let left=2*i+1
    let right=2*i+2

    let largest=i


    if(left<length && arr[left]>arr[right]){

        largest=left
    }

    if(right<length && arr[right]>arr[left]){
        largest=right
    }



    if(largest!=i){

        [arr[i],arr[largest]]=[arr[largest],arr[i]]

        heapify(arr,length,largest)
    }
}



















let arr=[12, 11, 13, 5, 6, 7]
console.log(sort(arr))