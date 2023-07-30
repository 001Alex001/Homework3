//  1. Given an array. Determine whether it consists only from uniques or not.

function isUniq(arr) {
    for (let i = 1; i < arr.length; i++) {
        let firstNum = arr[0];
        if (arr[i] !== firstNum) {
            return false;
        }
    }
    return true
}
isUniq([1, 1, 1, 1]); // true
isUniq([1, 1, 1, 1, 2]); // false


//--------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------\

//  2. Given an array of integers. All numbers are unique. Find the count of missing numbers
//     between minimum and maximum elements to make integers sequence.

function findBiggestNumber(arr) {
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }

    return max;
}


function missingNumbersCount(arr) {
    for (let i = 0; i <= arr.length; i++) {
        return findBiggestNumber(arr) - arr.length
    }
}
missingNumbersCount([1, 5, 7, 9]) //  My version 

//------------------------------------------------

function countMissingNum(arr){
    let count = arr[arr.length - 1] - arr[0] + 1 - arr.length;
    return count
}
countMissingNum([1,2,3,4,9]) // Version with the help of the Internet