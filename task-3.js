/*
Write a function to count the number of vowels in a string.
*/

function findVowels(string)
{
    var cnt = 0;
    var string = string.toLowerCase();
    for(letter of string)
    {
        if(letter === 'a' || letter === 'e' || letter === 'i' || letter === 'o' || letter === 'u')
            cnt++;
    }
    return cnt;
}

var str = 'I lovE javascript';
var n = findVowels(str);
console.log('There are ' + n + " Vowels in the string '" + str + "'");