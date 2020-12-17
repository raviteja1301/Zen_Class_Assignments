var object = {name: "RajiniKanth", age: 33, hasPets : false};
function printAllValues(obj) {
     let output=[];
     for (let i in obj)
     {
          output.push(obj[i]);
     }
     return output;
    }

    console.log(printAllValues(object));