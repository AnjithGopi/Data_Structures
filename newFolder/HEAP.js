

// implementation and operations in heap



class Minheap{

    constructor(){

        this.heap=[]
    }



    insert(value){

        this.heap.push(value)

        let currentIndex=this.heap.length-1

        while(currentIndex>0){

            let parent= Math.floor((currentIndex-1)/2)

            if(this.heap[parent]>this.heap[currentIndex]){

                [this.heap[parent],this.heap[currentIndex]]=[this.heap[currentIndex],this.heap[parent]]

                currentIndex=parent
            }else{
                break
            }
        }

        return this.heap




    }



    pop(){
        [this.heap[0],this.heap[this.heap.length-1]]=[this.heap[this.heap.length-1],this.heap[0]]

        let removed = this.heap.pop()

        let currentIndex=0

        while(2*currentIndex+1<this.heap.length){

            let left= 2*currentIndex+1
            let right=2*currentIndex+2
            let minIndex

            if(this.heap[left]<this.heap[right]){

                minIndex=left
            }if(this.heap[right]<this.heap[left]){

                minIndex=right
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



const minheap= new Minheap()

console.log(minheap.insert(10))
console.log(minheap.insert(20))
console.log(minheap.insert(15))
console.log(minheap.insert(5))


minheap.pop(5)

console.log(minheap.insert(25))