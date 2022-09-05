//Given two sorted arrays, write a function called merge which accepts two sorted arrays and returns a new array with values from both arrays sorted.
//This function should run in O(n + m) time and O(n + m) space and should not modify the parameters passed to it.
//Implement the merge sort algorithm. Given an array, this algorithm will sort the values in the array.

function merge(arr1, arr2) {
    const results = [];
    let i = 0;
    let j = 0;
    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            results.push(arr1[i]);
            i++;
        } else {
            results.push(arr2[j]);
            j++;
        }
    }
    while (i < arr1.length) {
        results.push(arr1[i]);
        i++;
    }
    while (j < arr2.length) {
        results.push(arr2[j]);
        j++;
    }
    return results;
}

function mergeSort(arr) {
    //base case
    if (arr.length <= 1) return arr;

    //get the midpoint of the array
    const middle = Math.floor(arr.length / 2);

    //slice the array from the first index to the middle
    const left = mergeSort(arr.slice(0, middle));

    //slice the array from the middle onwards
    const right = mergeSort(arr.slice(middle));

    return merge(left, right);

}

module.exports = { merge, mergeSort };