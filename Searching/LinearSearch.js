
// Searching a target  element using linear search


function linearSearch(arr,tar){


    for(let i=0;i<arr.length;i++){
        if(arr[i]===tar){
            return i
        }
    }




}



const array=[1,2,3,4,5,6]

const target=4  // output=3

const fn=linearSearch(array,target)

console.log(fn)






