

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



// ascending order sort using insertion sort algorithms




function ascending(arr){


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






// insertion sort 



function insertion(arr){


    for(let i=1;i<arr.length;i++){

        let key= arr[i]

        let j=i-1

        while(arr[j]>key){

            arr[j+1]=arr[j]

            j--
        }

        arr[j+1]=key
    }


    return arr




   
}


// insertion sort using while loop only



function insertWhile(arr){

let i=1

while(i<arr.length){

    let j=i-1
    let key=arr[i]

    while(arr[j]>key){

        arr[j+1]=arr[j]

        j--
    }

    arr[j+1]=key
    i++

}



return arr



   
}

// .....................




function newFn(arr){


    for(let i=1;i<arr.length;i++){


        let j=i-1
        
        let temp=arr[i]



        while(j>=0 && arr[j]>temp){


            arr[j+1]=arr[j]

            j--
        }

        arr[j+1]=temp
    }


    return arr

}



const array= new Array(10,4,5,2,3,7,6,8)
console.log(insertionSort(array))
console.log(insertionSortDescending(array))
console.log(ascending(array))
console.log(insertion(array))
console.log(".....................")
console.log(insertWhile(array))


console.log(newFn(array))