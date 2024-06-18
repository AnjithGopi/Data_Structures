

// Sort the given array in ascending order using insertion sort 




function insertionSort(arr){


    for(let i=1;i<arr.length;i++){

        let key= arr[i]
        let j=i-1  
                  
        while(j>=0 && arr[j]>key){

            arr[j+1]=arr[j]

            j--
        }
                   
        arr[j+1]=key

    }

    return arr

}





function insertionSortDescending(arr){


    for(let i=1;i<arr.length;i++){


        let key=arr[i]
        let j=i-1

        while(j>=0 && arr[j]<key){

            arr[j+1]=arr[j]

            j--
        }

        arr[j+1]=key

    }

    return arr  

}




const array= new Array(10,4,5,2,3,7,6,8)


console.log(insertionSort(array))
console.log(insertionSortDescending(array))