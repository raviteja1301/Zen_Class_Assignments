var arr=[1,2,3,4,5,6,7,8,9];

// Anonymous Function
var oddNumbers= function (arr) {
    let odd=[];
     for ( let i in arr)
    {
        if(arr[i]%2!==0)
        {
           odd.push(arr[i]);
        }
    }
    console.log(odd);
}

oddNumbers(arr);

// IIFE
(function (arr) {
    let odd=[];
     for ( let i in arr)
    {
        if(arr[i]%2!==0)
        {
           odd.push(arr[i]);
        }
    }
    console.log(odd);
})(arr);