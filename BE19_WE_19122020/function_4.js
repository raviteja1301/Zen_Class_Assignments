var arr=[1,2,3,4,5,6,7,8,9];

// Anonymous Function
var primeNumbers = function (arr) {
    let prime=[];
     for ( let i in arr)
    {
        let number=arr[i];
        let isPrime=true;
       if(number>1)
       {
           for (let j = 2; j < number; j++) 
           {
            if (number % j === 0) 
            {
                isPrime=false;
                break;
            }
           }
           if(isPrime)
           {
               prime.push(number);
           }
        }
    }    
    return prime;
}

let result=primeNumbers(arr);
console.log(result);
// IIFE
let iiferesult=(function (arr) {
    let prime=[];
     for ( let i in arr)
    {
        let number=arr[i];
        let isPrime=true;
       if(number>1)
       {
           for (let j = 2; j < number; j++) 
           {
            if (number % j === 0) 
            {
                isPrime=false;
                break;
            }
           }
           if(isPrime)
           {
               prime.push(number);
           }
        }
    }    
    return prime;
})(arr);

console.log(iiferesult);