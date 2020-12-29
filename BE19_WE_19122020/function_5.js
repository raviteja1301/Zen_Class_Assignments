var arr=["ravi","madam","tenet","zen","civic"];

// Anonymous Function
var palindrome= function (arr) {
    let result=[];
     for ( let i in arr)
    {
        let reverse=arr[i].split('').reverse().join('');
        if(arr[i]==reverse)
        {
            result.push(arr[i]);
        }
    }
    return result;
}

console.log(palindrome(arr));

// IIFE
let palindromeIIFE = (function (arr) {
    let result=[];
     for ( let i in arr)
    {
        let reverse=arr[i].split('').reverse().join('');
        if(arr[i]==reverse)
        {
            result.push(arr[i]);
        }
    }
    return result;
 
} )(arr);

console.log(palindromeIIFE);

