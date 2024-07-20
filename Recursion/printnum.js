

// write a function to print n numbers using recursion





function print(num){

    if(num%2!==0){
        
     console.log(num)

    }
   

    if(num==10){

        return num
    }


    return print(num+1)



}





print(1)