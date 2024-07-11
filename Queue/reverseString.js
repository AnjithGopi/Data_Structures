



// function to reverse a string using queue


function reverse(str){


    let queue=[]


    for(let i=0;i<str.length;i++){


        queue.unshift(str[i])


    }

    console.log("queue:",queue)



    let reversed=""


    while(queue.length>0){

        reversed+=queue.shift()
    }

    return reversed






}













const str="Hello"

console.log(reverse(str))