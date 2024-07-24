


// creating a heap


class Minheap{
    constructor(){
        this.heap=[]
    }



    push(value){

        this.heap.push(value)

        let currentIndex=this.heap.length-1

        while (currentIndex>0){

            let parent= Math.floor((currentIndex-1)/2)

            if(this.heap[parent]>this.heap[currentIndex]){

                [this.heap[parent],this.heap[currentIndex]]= [this.heap[currentIndex],this.heap[parent]]

                currentIndex=parent
            }else{
                break
            }
        }
        return this.heap
    }

   
}



const heap= new Minheap()



console.log(heap.push(3))
console.log(heap.push(13))
console.log(heap.push(19))
console.log(heap.push(33))
console.log(heap.push(42))
console.log(heap.push(23))
console.log(heap.push(21))
console.log(heap.push(7))