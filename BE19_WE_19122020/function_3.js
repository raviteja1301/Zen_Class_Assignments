var arr=[1,2,3,4,5];

// Anonymous Function
var sumOfNumbers= function (arr) {
    let sum=0;
     for ( let i in arr)
    {
       sum+=arr[i];
    }
    console.log(sum);
}

sumOfNumbers(arr);

// IIFE
(function (arr) {
    let sum=0;
     for ( let i in arr)
    {
       sum+=arr[i];
    }
    console.log(sum);
 
} )(arr);