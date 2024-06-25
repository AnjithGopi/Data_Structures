


function binarySearch(arr,tar){


    let left=0
    let right=arr.length-1

    while(left<=right){

        let mid= Math.floor((left+right)/2)


        if(tar===arr[mid]){
            return mid
        }else if(tar<arr[mid]){
            right=mid-1
        }else{
            left=mid+1
        }
    }


    return -1




}




// sorting using bubble sort






function bubble(arr){

    let swapped


    do {


        swapped=false
        for(let i=0;i<arr.length;i++){

            if(arr[i]>arr[i+1]){
                let temp=arr[i]
                arr[i]=arr[i+1]
                arr[i+1]=temp
                swapped =true
            }

        

        }
        
    } while (swapped);


    return arr

}


// sorting the same array using insertion sort algorithm





function insertion(arr){


    for(let i=1;i<arr.length;i++){
        let key=arr[i]

        let j=i-1


        while(j>=0 && arr[j]>key){

            arr[j+1]=arr[j]

            j--

        }

        arr[j+1]=key
    }


     return arr

}



// sort the given array using quick sort algorithm




function quickSort(arr){


    if(arr.length<2)
        return arr

    let pivot= arr[arr.length-1]

    let left=[]
    let right=[]


    for(let i=0;i<arr.length-1;i++){

        if(arr[i]<pivot){
            left.push(arr[i])
        }else{
            right.push(arr[i])
        }
    }


    return [...quickSort(left),pivot,...quickSort(right)]




}







const arr= new Array(1,2,3,4,5)

const tar= 4 


console.log(bubble(arr))
console.log(insertion(arr))
console.log(quickSort(arr))
console.log(binarySearch(arr,tar))



// implementation of stack using linked list



class Node{
    constructor(value){
        this.value=value
        this.next=null
    }
}



class Stack{


    constructor(){
        this.head=null
        this.size=0
    }



    isEmpty(){
        return this.size===0
    }



    push(value){

        let node=new Node(value)

        if(this.isEmpty()){
            this.head=node
        }else{


            node.next=this.head
            this.head=node
        }
        this.size++
    }



    peek(){

        console.log(this.head.value)
    }



    pop(){
        if(this.isEmpty()){
            console.log("The stack is empty")
        }else{


            let value=this.head.value

            this.head=this.head.next
            this.size--

            console.log(value)
        }

        
    }




    display(){


        if(this.isEmpty()){
            console.log("the stack is empty")
        }else{


            let temp=this.head

            let str=""
            while(temp){

                str+=temp.value+ " "

                temp=temp.next
            }

            console.log(str)
        }
    }
}



const stack=new Stack()

for(let i=0;i<=10;i++){
    stack.push(i)
}


stack.display()
stack.pop()
stack.display()
stack.peek()



// implementation of merge sort




function mergeSort(arr){


    if(arr.length<=1){
        return arr
    }



    const mid= Math.floor(arr.length/2)

    const leftHalf= arr.slice(0,mid)
    const rightHalf=arr.slice(mid)


    const sortedLeft=mergeSort(leftHalf)
    const sortedRight=mergeSort(rightHalf)

    return merge(sortedLeft,sortedRight)



    function merge(left,right){


        let result=[]

        
    }




}










const unsorted= new Array(10,12,11,9,13,7,20)

console.log(mergeSort(unsorted))


// hashtable implementation 







class Hashtable{

    constructor(size=50){

        this.size=size
        this.buckets= new Array(size).fill(null).map(()=>[])
    }



    hash(key){

        let hash=0
        for(let char of key){

            hash+=char.charCodeAt(0)
        }

        return hash%this.size
    }



    set(key,value){

        let index= this.hash(key)

        let bucket= this.buckets[index]

        const existing= bucket.find(item=>item.key===key)

        if(existing){

            existing.value=value
        }else{

            bucket.push({key,value})
        }
    }



    get(key){

        let index= this.hash(key)
        let bucket= this.buckets[index]


        const found= bucket.find(item=>item.key===key)

        if(found){

            return found.value

            
            
        }else{
          
            return undefined
        }
    }



    remove(key){


        let index= this.hash(key)

        let bucket= this.buckets[index]

        const indextoremove= bucket.findIndex(item=>item.key===key)

        if(indextoremove){

            bucket.splice(indextoremove,1)

        }

        
    }
}



const hashtable= new Hashtable()

hashtable.set("name","gopesh")
hashtable.set("age",26)
hashtable.set("place","kochi")

hashtable.get("name")