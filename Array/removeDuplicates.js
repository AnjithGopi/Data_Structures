
// removing duplicates from an array , program executes in the timecomplexity of O(n)

function removeDuplicate(arr){


    let unique=[]

    for(let i=0;i<arr.length;i++){
        if(!unique.includes(arr[i])){
            unique.push(arr[i])
        }
    }


    return unique

}




const array= [1,1,2,2,3,3,4,5,6,6]

console.log(removeDuplicate(array))


////////////////////////////////////////////////////////////////////////////////// Alternative way , which has time complexity 0(1) \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\




function deleteDuplicate(array){


    let obj={}
    let result=[]


    for(let i=0;i<array.length;i++){
        if(!obj[array[i]]){
            obj[array[i]]=true
            result.push(array[i])
        }
    }


    return result

}




console.log(deleteDuplicate(array))






