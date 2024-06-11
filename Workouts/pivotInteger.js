

// find the pivot integer of the Given a positive integer n, find the pivot integer x such that:

//The sum of all elements between 1 and x inclusively equals the sum of all elements between x and n inclusively.
//Return the pivot integer x. If no such integer exists, return -1. It is guaranteed that there will be at most one pivot index for the given input.





function pivotInteger(n){

   

    let totalSum=(n*(n+1))/2
    let leftSum=0

    for(let i=1;i<=n;i++){

        leftSum+=i
        let rightSum=totalSum-leftSum+i
        if(leftSum===rightSum){
            return i
        }

    }


    return -1

}








const fn=pivotInteger(8) //here the pivot Index is 6  program is executed in timecomplexity of O(n)
console.log(fn)