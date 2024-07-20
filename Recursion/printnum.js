

// write a function to print n numbers using recursion





function print(num){


    if(num==10){

        return num
    }

    console.log(num)

    return print(num+1)



}





console.log(print(1))