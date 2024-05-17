


// Search an element in an array using Binay search




function binarySearch(arr,tar){


    let left=0
    let right=arr.length-1

    while(left<=right){

        let mid=Math.floor((left+right)/2)

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






const array=[10,20,30,45,75,68]
const target=45  // output=3
const fn=binarySearch(array,target)
console.log(fn)