


// Binary Search


function binarySearch(arr,tar){

    
    let left=0
    let right=arr.length-1


    while(left<right){

        let mid= Math.floor((left+right)/2)

        if(tar===arr[mid]){
            return mid
        }else if(tar>arr[mid]){
            left=mid+1
        }else if(tar<arr[mid]){
            right=mid-1
        }

        

    }


    return -1




}




const array= new Array(1,2,3,4,5)
const target=4 // output=3


console.log(binarySearch(array,target))