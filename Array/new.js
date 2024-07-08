




function duplicate(array){


    for(item of array){

        if(array.indexOf(item)!==array.lastIndexOf(item)){

            return item

        }
        
    }

    return "no duplicates"

}



const arr= new Array(110,20,30,40,100,40)

console.log(duplicate(arr))

 