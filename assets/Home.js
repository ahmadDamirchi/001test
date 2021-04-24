function myFunction() {
    if (document.getElementById('myDiv2').style.display != 'none') {
        document.getElementById('myDiv2').style.display = 'none';
        document.getElementById('myBtn').innerHTML = 'show';
    } else {
        document.getElementById('myDiv2').style.display = 'block';
        document.getElementById('myBtn').innerHTML = 'hide';
    }
};

// let x = '';
// for (let i = 0; i < 5; i++) {
//     x+='*'
//     console.log(x);
// };

// let x = '';
// for (let i = 1; i < 5; i++) {
//     x += i
//     console.log(x);
// };

// for (let i = 1; i < 5; i++) {
//     let x = '';
//     x += i
//     console.log(x);
// };

// for (let i = 1; i < 5; i++) {
//     let x = '';
//     for (let j = 1; j <= i; j++) {
//         x += i
//     }
//     console.log(x);
// };

// let input = 3;
// let x = 1;
// for (let i = 1; i < input; i++) {
//     x = x * i
// }
// console.log(x);

/*
var myArr = { a: 1, b: 2 };
// var myArr = [1, 2];

// var copy = myArr.slice();
var copy = { ...myArr };
// copy[0] = 5;
// copy.a=5
myArr.a = 5
console.log(copy);
console.log(myArr);
*/

/*
let obj01 = {
    a: 1,
    b: { c: 2 },
};

let obj02 = { ...obj01 };

obj02.a = 3;
obj02.b.c = 4;

console.log(obj01);
console.log(obj02);
*/

/*
let arr = [5, 7, 2, 5, 1, 2, 2];
let dob = [];
for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j <= arr.length; j++) {
        let index = dob.indexOf(arr[i])
        if (arr[i] === arr[j] && index === -1 && i !== j) {
            dob.push(arr[i])
        }
    }
};
console.log(dob);
*/

// let arr = [1, 2, 3];
// let sum = 0;
// arr.forEach(a => sum += a);
// console.log(sum);

// let x=1;
// let y = x;
// y=2;
// console.log(x);
// console.log(y);

// let a ={
//     b:1,
//     c:2
// };

// let d={...a};

// d.b=3;

// console.log(a);
// console.log(d);

// let a =[1,2,3,4];
// for (let x of a) {
//     console.log(x);
// }

// let myObj = {
//     a: 1,
//     b: 2
// };

// for (const x in myObj) {
//     console.log(x);
// }

let a = [1, 2, 3, 4];
let b = a.slice(1, 2);
console.log(a);
console.log(b);
