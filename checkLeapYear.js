var x = 2025;
if(x % 400 === 0 || (x % 4 === 0 && x % 100 != 0))
    console.log("Leap Year");
else
    console.log("Not Leap Year");

//Check it with function

function isLeapYear(year)
{
    if(year % 400 === 0 || (year % 4 === 0 && year % 100 != 0))
        return true;
    else
        return false;
}

const a = 2013, b = 2012;
if(isLeapYear(a))
    console.log("Leap Year");
else
    console.log("Not Leap Year");
if(isLeapYear(b))
    console.log("Leap Year");
else
    console.log("Not Leap Year");