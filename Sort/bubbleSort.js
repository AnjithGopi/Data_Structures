



function bubbleSort(arr){



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




const arr= new Array(-5,-1,-8,0,2,-7,5,6,4,9)

console.log(bubbleSort(arr))