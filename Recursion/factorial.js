

// find the factorial of a numbers using recursion






function factorial(n){


    if(n===0){
        return 1
    }

    return factorial(n-1)*n

}



const fn=factorial(5) // output=120

console.log(fn)