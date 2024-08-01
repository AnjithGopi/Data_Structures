




function sort(arr){
  
    let length=arr.length
    
    for(let i=Math.floor(length/2)-1; i>=0;i--){
      
      heapify(arr,length,i)
    }
    
    for(let i=arr.length-1;i>0;i--){


        [arr[0],arr[i]]=[arr[i],arr[0]]
      
      heapify(arr,i,0)
    }

    return arr
  }
  
  
  
  
  
  function heapify(arr,length,i){
    
  
    let largest=i
    
    let left= 2*i+1
    let right=2*i+2
    
    
    if(left<length && arr[left]>arr[largest]){
      
      largest=left
    }
    
    if(right<length && arr[right]>arr[largest]){
      
      largest=right
    }
    
    
    
    if(largest!=i){
      
      [arr[i],arr[largest]]=[arr[largest],arr[i]]
      
      heapify(arr,length,largest)
      
      
    }
    
    
  
  }
  
  
  
  
  
  
  let arr=[10,2,5,17,13]
  
  console.log(sort(arr))