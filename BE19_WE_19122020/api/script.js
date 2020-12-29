var request = new XMLHttpRequest();

request.open('GET','https://restcountries.eu/rest/v2/all',true);

request.send();

var country="India";
request.onload=function () {
    var data=JSON.parse(this.response);
    //console.log(data);
    for (let i in data)
    {
        if(data[i].name==country)
        {
            var lat=data[i].latlng[0];
            var long=data[i].latlng[1];
        }
     
    } 
    getweather(lat,long); 
}

function getweather(lat,long){
    let weatherrequest = new XMLHttpRequest();
    request.open('GET','http://api.openweathermap.org/data/2.5/weather?lat='+lat+'&lon='+long+'&appid=5d8019dfdf4c5ac7235c673fb6ae51b2',true);
    request.send();
    request.onload=function(){
    let data=JSON.parse(this.response);
    console.log(data);
    }
}