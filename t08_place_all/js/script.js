let arr = [6, 2, 15, 5, 1, 3, 8, 1, 8, 10, 7, 11]; 
sortEvenOdd(arr); 
console.log(arr);

function sortEvenOdd(passedArray) {
    arr = 
    arr.filter(item => item % 2 == 0).concat(
            arr.filter(item => item % 2 !== 0)
        )
}