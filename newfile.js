



function mergeSort(arr){


    let mid= Math.floor(arr.length/2)

    let leftArray= arr.slice(0,mid)
    let rigthArray=arr.slice(mid)


    let sortedLeft= mergeSort(leftArray)
    let sortedRight= mergeSort(rigthArray)

    return merge(sortedLeft,sortedRight)


    function merge(left,right){


        let result=[]

        let leftIndex=0
        let rightIndex=0


        while(leftIndex < left.length && rightIndex < right.length){


            if(left[leftIndex]<right[rightIndex]){
                result.push(left[leftIndex])
                leftIndex++
            }else{
                result.push(right[rightIndex])
                rightIndex++
            }
        }


        return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex))
    }





}


const array=[10,12,11,7]

console.log(mergeSort(array))