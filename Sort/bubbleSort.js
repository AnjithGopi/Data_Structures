


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






const array= new Array(-6,7,-4,5,2,0,1,6,2)


console.log(bubbleSort(array))