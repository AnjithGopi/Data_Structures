
// sorting an array into ascending order using heap sort algorithm


function sort(arr){

   let length=arr.length

   for(let i= Math.floor(length/2)-1;i>=0;i--){

    heapify(arr,length,i)

   }


   for(let i=arr.length-1;i>0;i--){


    [arr[i],arr[0]]=[arr[0],arr[i]]

    heapify(arr,i,0)


    
   }

   return arr
}




function heapify(arr,length,i){

    let largest=i
    let left=2*i+1
    let right=2*i+2


    if(left<length && arr[left]>arr[largest]){

        largest=left
    }

    if(right<length && arr[right]>arr[largest]){

        largest=right
    }

    if(i!=largest){

        [arr[i],arr[largest]]=[arr[largest],arr[i]]

        heapify(arr,length,largest)
    }





}




const arr=[10,20,15,13,19,21]

console.log(sort(arr))