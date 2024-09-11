let a = 5;
let b = 7;
console.log('Before swap :');
console.log('a = ' + a);
console.log('b = ' + b);

let temp = a;
a = b;
b = temp;

console.log('After swap :');
console.log('a = ' + a);
console.log('b = ' + b);

// ---swapping with destruction---

let x = 2;
let y = 3;

console.log('Before swap :');
console.log('x = ' + x);
console.log('y = ' + y);

[x,y] = [y,x];
console.log('After swap :');
console.log('x = ' + x);
console.log('y = ' + y);