function removeDuplicate(arr)
{
    const unique = [];
    for(const item of arr)
    {
        if(unique.includes(item) === false)
            unique.push(item);
    }
    return unique;
}

var numbers = [1,2,3,4,5,2,4,6,7,7,8,9,5,6,1,9];
console.log(numbers);
var newArray = removeDuplicate(numbers);
console.log(newArray);