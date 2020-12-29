var arr1=[1,2,3,7,8,9,10];
var arr2=[4,5,6,11,12,13,14];



// Anonymous Function
var median= function (arr1,arr2) {
    let arr=arr1.concat(arr2);
    let result=arr.sort(function(a, b){return a - b});
    let arrLength=result.length;
    let medianOutput=(result[(arrLength/2)-1]+result[(arrLength/2)])/2;
    return medianOutput;
}
console.log(median(arr1,arr2));

// IIFE
let medianIIFE = (function (arr1,arr2) {
    let arr=arr1.concat(arr2);
    let result=arr.sort(function(a, b){return a - b});
    let arrLength=result.length;
    let medianOutput=(result[(arrLength/2)-1]+result[(arrLength/2)])/2;
    return medianOutput;
} )(arr1,arr2);

console.log(medianIIFE);

