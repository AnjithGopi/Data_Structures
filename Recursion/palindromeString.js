


function palindrome(str){

    if(str.length<=1)
        return true
    if(str[0]!==str[str.length-1])
        return false


    return palindrome(str.slice(1,-1))

}




const str="racecar"

console.log(palindrome(str))