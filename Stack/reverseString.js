

// write a function to reverse a string using stack


function reverse(str){

    let tempStack=[]


    for(let i=0;i<str.length;i++){

        tempStack.push(str[i])
    }

      
    


    let reversed=""

    while(tempStack.length>0){

        reversed+=tempStack.pop()
    }


    return reversed


}









const str="ANJITH"

console.log(reverse(str))