var object = {name: "RajiniKanth", age: 33, hasPets : false};
function printAllKeys(obj) {
     let output=[];
     for (let i in obj)
     {
          output.push(i);
     }
     return output;
    }

    console.log(printAllKeys(object));