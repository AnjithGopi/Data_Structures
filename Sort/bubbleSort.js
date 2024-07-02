


// Sorting the array in the increasing order , using bubble sort



function sort(arr){


    let swapped


    do {

        swapped =false


        
    for(let i=0;i<arr.length-1;i++){
        if(arr[i]>arr[i+1]){
            let temp=arr[i]
            arr[i]=arr[i+1]
            arr[i+1]=temp

            swapped=true
        }
    }

        
    } while (swapped);



    return arr  


}



// bubble sort in descending order 



function descending(arr){

    let swapped

    do {


        swapped=false


        for(let i=0;i<arr.length-1;i++){
            if(arr[i]<arr[i+1]){
                let temp=arr[i]
                arr[i]=arr[i+1]
                arr[i+1]=temp

                swapped=true
            }
        }
        
    } while (swapped);

    return arr

}




// implementing bubble sort in ascending order


function bubble(arr){


    let swapped

    do {


        swapped=false


        for(let i=0;i<arr.length-1;i++){

            if(arr[i]>arr[i+1]){
                let temp=arr[i]
    
                arr[i]=arr[i+1]
    
                arr[i+1]=temp

                swapped=true
            }   
    
        }
        
    } while (swapped);


    return arr



    

}


// using only for loop




function sort(arr){


    for(let i=0;i<arr.length-1;i++){
        for(let j=0;j<arr.length-1-1;j++){



            if(arr[j]>arr[j+1]){

                let temp=arr[j]
                arr[j]=arr[j+1]
                arr[j+1]=temp
            }
        }
    }



    return arr




}










const newArray= new Array(10,20,5,7,9,2,0,-1,-5)


console.log(sort(newArray))

console.log(descending(newArray))
console.log(bubble(newArray))

console.log(sort(newArray))

