




// find the second largest element of an array



function secondLargest(arr){


    let largest=0
    let secondLargest=0


    for(let i=0;i<arr.length;i++){

        if(arr[i]>largest){
            secondLargest=largest
            largest=arr[i]
        }

    }


    return secondLargest





}




const arr= new Array(1,2,3,4,5,6)

console.log(secondLargest(arr))