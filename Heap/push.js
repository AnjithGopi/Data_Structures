
function push(heap,key){

    heap.push(key)
    
    let currentIndex=heap.length-1

    while(currentIndex>0){

        let parent= Math.floor((currentIndex-1)/2)

        if(heap[parent]>heap[currentIndex]){

            [heap[parent],heap[currentIndex]]=[heap[currentIndex],heap[parent]]

            currentIndex=parent
            
        }else{

            break
        }
    }


    return heap


}

















let heap= [3,13,19,33,42,23,21]
let value=7
console.log(push(heap,value))