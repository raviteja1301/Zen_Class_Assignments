var arr=[1,2,3,4,5];
var k=3;
// Anonymous Function
var rotate= function (arr,k) {
    let result=[];
    for(let i=0;i<k;i++)
    {
     arr.unshift(arr.pop());
    }
return arr;
}
console.log(rotate(arr,k));

var arr=[1,2,3,4,5];
var k=3;
// IIFE
let rotateIIFE = (function (arr,k) {
    let result=[];
    for(let i=0;i<k;i++)
    {
     arr.unshift(arr.pop());
    }
return arr;
})(arr,k);

console.log(rotateIIFE);