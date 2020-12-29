var arr=[1,2,3,8,8,8,8,9,10];

// Anonymous Function
var duplicates= function (arr) {
    let result=[];
    for(let i in arr)
    {
        if(!result.includes(arr[i]))
        {
            result.push(arr[i]);
        }
    }
return result;
}
console.log(duplicates(arr));

// IIFE
let duplicatesIIFE = (function (arr) {
    let result=[];
    for(let i in arr)
    {
        if(!result.includes(arr[i]))
        {
            result.push(arr[i]);
        }
    }
return result;})(arr);

console.log(duplicatesIIFE);

