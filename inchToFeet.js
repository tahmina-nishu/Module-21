function inchToFeet(h)
{
    return h / 12;
}

const height = 70;
const inFeet = inchToFeet(height);
console.log(inFeet);


// inch & feet alada kore dekhate hole 

function inchToFeet2(h)
{
    const feet = parseInt(h / 12);      //"parseInt" diye number ta k int e ney
    const inch = h % 12;
    const result = feet + " Feet " + inch + " inch";
    return result;
}

const height2 = 66, height3 = 68;
const inFeet2 = inchToFeet2(height2);
console.log(inFeet2);
const inFeet3 = inchToFeet2(height3);
console.log(inFeet3);