/*
Write a function to convert temperature from Celsius to Fahrenheit.
*/

function toFarenheit(T)
{
    var result;
    result = ((T * 9) / 5) + 32;
    return result;
}

var celsius = 25;
var fahrenheit = toFarenheit(celsius);
console.log(celsius + "° C = " + fahrenheit + "° F");