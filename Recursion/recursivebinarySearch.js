


// binary search using recursion



 
 function binarySearch(arr,tar,left=0,right=arr.length-1){
        
    if(left>right){
        return -1
    }
        let mid= Math.floor((left+right)/2)

        if(tar===arr[mid]){
            return mid
        }else if(tar>arr[mid]){
            return binarySearch(arr,tar,mid+1,right)
        }else {
            return binarySearch(arr,tar,left,mid-1)
        }

    }



    

    


 






 const array= new Array(1,2,3,4,5,6,7,8)

 const target=5 // output= 4


 console.log(binarySearch(array,5))