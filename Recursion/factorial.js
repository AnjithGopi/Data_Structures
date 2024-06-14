

// find the factorial of a numbers using recursion






function factorial(n){


    if(n===0){
        return 1
    }

    return factorial(n-1)*n

}



const fn=factorial(5) // output=120
console.log(fn)


/////////


function fibonnacci(n){
    if(n==0 ||n==1){
        return n
    }

    return fibonnacci(n-1)+fibonnacci(n-2)
}



function print(count){
    for(let i=0;i<=count;i++){
        console.log(fibonnacci(i))
    }
}



print(10)



