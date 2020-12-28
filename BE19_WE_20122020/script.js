var request = new XMLHttpRequest();

request.open('GET','https://restcountries.eu/rest/v2/all',true);

request.send();

request.onload=function () {
    var data=JSON.parse(this.response);
    //Task 1
    var asia=data.filter((item)=>item.region=='Asia');
    console.log(asia);

    //Task 2
    var population=data.filter((item)=>item.population<200000);
    console.log(population);

    //Task 3
    data.forEach(element => console.log("name : "+element.name+" capital : "+element.capital+" flag : "+element.flag));

    //Task 4
    var totalpopulation=data.reduce((accu,item)=>accu+item.population,0);
    console.log(totalpopulation);

    //Task 5
    var currency=data.filter((item)=>item.currencies[0].code=="USD");
    currency.forEach(element => console.log(element.name));
}