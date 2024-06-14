



function  binarySearch(arr,target,left=0,right=arr.length-1){


    if(left>right){
        return
    }


    let mid=Math.floor((left+right)/2)


    if(tar===arr[mid]){
        return mid
    }else if(tar>arr[mid]){

        return binarySearch(arr,tar,mid+1,right)
    }else{
        return binarySearch(arr,mid,left,mid-1)
    }



    return -1




}






Insert (value){
    let node=new Node(value)


    if(this.head==null){
        this.head=node
    }

    else{
        let temp=this.head
        while(temp){
            temp=temp.next
        }
        
         temp.next=node
         node.next=this.head
    }

    this.size++

}



