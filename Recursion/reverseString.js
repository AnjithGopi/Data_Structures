


// reverse a string using recursion




function reverse(str){
    
    if(str===""){
        return ""
    }

    return reverse(str.substr(1))+str.charAt(0)

}






const str="hello"

console.log(reverse(str))