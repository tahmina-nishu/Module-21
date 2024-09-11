/*
Write a function to find the longest word in a given string.

sample-input: I am learning Programming to become a programmer

sample-output: Programming
*/

function longestWord(str)
{
    var longest = [];
    var largestLength = 0;
    var string = str.split(" ");

    for(word of string)
    {
        var len = word.length;
        if(largestLength < len)
        {
            largestLength = len;
            longest = word;
        }
    }
    return longest;
}

console.log(longestWord('i love javascript'));