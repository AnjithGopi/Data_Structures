

// fibonnacci series


function fibonnacci(n){

    if(n===0||n==1){
        return n
    }

    return fibonnacci(n-2)+fibonnacci(n-1)

   

}

function print(count){

    for(let i=0;i<count;i++){
        console.log(fibonnacci(i))
    }

}




 print(6)




 ////////////////////



 function figo(limit,n1=0,n2=1,result=[]){
    if(n1>limit){
        return result
    }

    result.push(n1)
    let next= n1+n2;
    return figo(limit,n2,next,result)
 }

 console.log(figo(100));

 