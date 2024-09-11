function average(arr)
{  
    let sum = 0;
    let cnt = 0;
    for(num of arr)
    {
        if(num % 2 === 1)
        {
            console.log(num);
            cnt++;
            sum += num;
        }
    }
    const avg = sum / cnt;
    return avg;
}
let numbers = [2,8,3,19,24,12,1,5];
const result = average(numbers);
console.log("The average is : " + result);