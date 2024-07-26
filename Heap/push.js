


// given below is a min heap add a new value into the heap




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



function pop(heap){


    [heap[0],heap[heap.length-1]]=[heap[heap.length-1],heap[0]]

    let removed=heap.pop()

    let current=0

    while(2*current+1<heap.length){

        let left=2*current+1
        let right=2*current+2

        let minIndex

        if(right<heap.length && heap[right]>heap[left]){

            minIndex=left
        }else{
            minIndex=right
        }


        if(heap[current]>heap[minIndex]){

            [heap[current],heap[minIndex]]=[heap[minIndex],heap[current]]
            current=minIndex
        }else{

            break
        }

       


    }



    return heap



}



let minHeap= [3,13,19,33,42,23,21]
let value=7
console.log(push(minHeap,value))
console.log(pop(minHeap))