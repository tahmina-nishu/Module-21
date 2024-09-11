/*
You are given an array of numbers. Count how many times the a number is repeated in the array.

sample-input: numbers = [5,6,11,12,98, 5]

find: 5

output: 2


sample-input:

numbers = [5,6,11,12,98, 5]

find: 25

output: 0
*/

function findRepeated(arr, num)
{
    var cnt = 0;
    for(const nmbr of arr)
    {
        if(nmbr === num)
            cnt++;
    }
    return cnt;
}

var numbers = [5,6,11,12,98, 5];
var numbers2 = [5,6,11,12,98, 5];

console.log(findRepeated(numbers, 5));
console.log(findRepeated(numbers2, 25));