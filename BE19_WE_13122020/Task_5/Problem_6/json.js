var arr = [[["firstName", "Vasanth"], ["lastName", "Raja"], ["age", 24], ["role", "JSWizard"]], [["firstName", "Sri"], ["lastName", "Devi"], ["age", 28], ["role", "Coder"]]];
function transformGeekData(arr) {
     var transformGeekList=[];
     for (let i in arr)
     {
          var obj= new Object();
          for (let j in arr[i])
          {
          obj[arr[i][j][0]]=arr[i][j][1];
          } 
          transformGeekList.push(obj);
     }
     return transformGeekList;
}
console.log(transformGeekData(arr));