var arr = [["make", "Ford"], ["model", "Mustang"], ["year", 1964]];
function fromListToObject(arr) {
     var obj= new Object();
     for (let i in arr)
     {
          obj[arr[i][0]]=arr[i][1];
     }
     return obj;
}
console.log(fromListToObject(arr));