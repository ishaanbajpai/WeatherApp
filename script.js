var button = document.querySelector('.button');
var inputValue = document.querySelector('.inputValue');
var cityName = document.querySelector('.name');
var desc = document.querySelector('.desc');
var temp = document.querySelector('.temp');


button.addEventListener('click', ()=>{
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+inputValue.value+'&appid=0d7e3f9d0962f61191c799862e974b1d')
    .then(response=>response.json())
    .then(data=>{
        var nameValue = data['name'];
        var tempValue_k = data['main']['temp'];
        var descValue = data['weather'][0]['description'];
        var tempValue = (tempValue_k-273.15).toFixed(2);

        cityName.innerHTML = nameValue;
        temp.innerHTML = "Feels Like: "+tempValue+" C";
        desc.innerHTML = "Currently it is "+descValue;
    });

    //.catch(err => alert("Please Check City Name"))
});