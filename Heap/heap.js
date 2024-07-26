


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


    pop(){


        if (this.heap.length === 0) {
            return null;
        }
        

        [this.heap[0],this.heap[this.heap.length-1]]=[this.heap[this.heap.length-1],this.heap[0]]

        let removed=this.heap.pop()

        let currentIndex=0

        while(2*currentIndex+1<this.heap.length){

            let left=2*currentIndex+1
            let right=2*currentIndex+2
            let minIndex;
            if (this.heap[right] < this.heap[left]) {
                minIndex = right;
            } else {
                minIndex = left;
            }

          

            if(this.heap[currentIndex]>this.heap[minIndex]){

                [this.heap[currentIndex],this.heap[minIndex]]=[this.heap[minIndex],this.heap[currentIndex]]
                currentIndex=minIndex
            }else{
                break
            }
        }



        return this.heap


    }

   
}



const heap= new Minheap()



console.log(heap.push(3))
console.log(heap.push(17))
console.log(heap.push(19))
console.log(heap.push(13))
console.log(heap.push(42))
console.log(heap.push(23))
console.log(heap.push(21))
console.log(heap.push(7))
console.log(heap.pop())