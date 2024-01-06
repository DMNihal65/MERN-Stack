/*
  Write a function `findLargestElement` that takes an array of numbers and returns the largest element.
  Example:
  - Input: [3, 7, 2, 9, 1]
  - Output: 9
*/

function findLargestElement(numbers) {
    let largest = 0;
    // if(numbers.length === 0){
    //     return false
    // }

    for(let i=0;i<=numbers.length;i++){
        if(numbers[i] > largest){
            largest = numbers[i]
            console.log(largest)
        }
    }

    return largest



    
}
numbers=[3, 7, 2, 9, 1]

// module.exports = findLargestElement;