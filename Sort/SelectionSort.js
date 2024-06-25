
// selection sort

function selectionSort(arr) {


    for(let i=0;i<arr.length;i++){

        let min=i

        for(let j=i+1;j<arr.length;j++){

           if(arr[j]<arr[min]){
            min=j
           }


           
            let temp=arr[i]
            arr[i]=arr[min]
            arr[min]=temp
           



        }
    }


    return arr




}
    

const numbers = [5, 3, 8, 1, 9, 2];
console.log(selectionSort(numbers));

