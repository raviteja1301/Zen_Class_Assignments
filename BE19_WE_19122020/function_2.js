var arr=["ravi","teja","guvi","zen"];

// Anonymous Function
var titleCaps= function (arr) {
    let result=[];
     for ( let i in arr)
    {
        let temp = arr[i][0].toUpperCase()+arr[i].slice(1);
        result.push(temp);
    }
    console.log(result);
}

titleCaps(arr);

// IIFE
(function (arr) {
    let result=[];
     for ( let i in arr)
    {
        let temp = arr[i][0].toUpperCase()+arr[i].slice(1);
        result.push(temp);
    }
    console.log(result);
 
} )(arr);