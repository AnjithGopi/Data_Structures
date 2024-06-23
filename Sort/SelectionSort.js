


// selection sort




function selectionSort(arr) {
    const len = arr.length;
    
    for (let i = 0; i < len - 1; i++) {
        let minIndex = i;
        
        for (let j = i + 1; j < len; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }
        
        if (minIndex !== i) {
            // Swap elements
            const temp = arr[i];
            arr[i] = arr[minIndex];
            arr[minIndex] = temp;
        }
    }
    
    return arr;
}

// Example usage
const numbers = [5, 3, 8, 1, 9, 2];
const sortedNumbers = selectionSort(numbers);
console.log(sortedNumbers); // Output: [1, 2, 3, 5, 8, 9]
