



const str= "i  am  anjith"


const arr= str.split("")

for(let i=0 ;i<arr.length;i++){

    if(arr[i]==" " && arr[i+1]== " "){

        arr.splice(i,1)
    }
}


console.log(arr.join(""))