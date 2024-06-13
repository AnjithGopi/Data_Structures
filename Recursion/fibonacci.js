

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


 