function heapSort(arr) {
    let n = arr.length;

    // Build a max heap
    for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
        heapify(arr, n, i);
    }

    // Extract elements from the heap one by one
    for (let i = n - 1; i > 0; i--) {
        // Move current root to the end
        [arr[0], arr[i]] = [arr[i], arr[0]];

        // Call max heapify on the reduced heap
        heapify(arr, i, 0);
    }
}

function heapify(arr, n, i) {
    let largest = i;
    let left = 2 * i + 1;
    let right = 2 * i + 2;

    // If left child is larger than root
    if (left < n && arr[left] > arr[largest]) {
        largest = left;
    }

    // If right child is larger than the largest so far
    if (right < n && arr[right] > arr[largest]) {
        largest = right;
    }

    // If largest is not root
    if (largest !== i) {
        [arr[i], arr[largest]] = [arr[largest], arr[i]];

        // Recursively heapify the affected sub-tree
        heapify(arr, n, largest);
    }
}

// Example usage
let arr = [4, 10, 3, 5, 1];
heapSort(arr);
console.log("Sorted array:", arr);
