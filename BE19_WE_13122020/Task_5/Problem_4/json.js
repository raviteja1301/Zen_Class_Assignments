var arr = ["GUVI", "I", "am", "Geek"];
function transformFirstAndLast(arr) {
     let key=arr[0];
     let val=arr[arr.length-1];
     var obj= new Object();
     obj[key] = val;
     return obj;
}
console.log(transformFirstAndLast(arr));