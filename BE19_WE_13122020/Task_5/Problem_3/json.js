var obj = {name: "ISRO", age: 35, role: "Scientist"};
function convertObjectToList(obj) {
     let output=[];
     for (let i in obj)
     {
          output.push([i,obj[i]]);
     }
     return output;
}
console.log(convertObjectToList(obj));