


function binarySearch(arr,tar){


    let left=0
    let right=arr.length-1

    while(left<=right){

        let mid= Math.floor((left+right)/2)


        if(tar===arr[mid]){
            return mid
        }else if(tar<arr[mid]){
            right=mid-1
        }else{
            left=mid+1
        }
    }


    return -1




}




// sorting using bubble sort






function bubble(arr){

    let swapped


    do {


        swapped=false
        for(let i=0;i<arr.length;i++){

            if(arr[i]>arr[i+1]){
                let temp=arr[i]
                arr[i]=arr[i+1]
                arr[i+1]=temp
                swapped =true
            }

        

        }
        
    } while (swapped);


    return arr

}


// sorting the same array using insertion sort algorithm





function insertion(arr){


    for(let i=1;i<arr.length;i++){
        let key=arr[i]

        let j=i-1


        while(j>=0 && arr[j]>key){

            arr[j+1]=arr[j]

            j--

        }

        arr[j+1]=key
    }


     return arr

}







const arr= new Array(1,2,3,4,5)

const tar= 4 


console.log(bubble(arr))
console.log(insertion(arr))
console.log(binarySearch(arr,tar))




