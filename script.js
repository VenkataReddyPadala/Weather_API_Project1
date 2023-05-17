const cityName = document.querySelector('.textfield');
const btn = document.querySelector('.btn')
const temp = document.querySelector('.temp');
const minTemp = document.querySelector('.mintemp');
const maxTemp = document.querySelector('.maxtemp');
const main = document.querySelector('.main');
const cityHeading = document.querySelector('.city');
const errorMsg = document.querySelector('.error');


const getweather = async (city) => {
  var API_KEY = '89cd371ee77769e4f3aab158f14032dc';
  var url = 'https://api.openweathermap.org/data/2.5/weather?q=';
  const response = await fetch(url+city+`&appid=${API_KEY}&units=metric`)
  const data = await response.json();
  if(response.status == 404) {
  cityHeading.innerText = '----';
  main.innerText = '----';
  temp.innerText = '---';
  minTemp.innerHTML = '---';
  maxTemp.innerHTML = '---';
  errorMsg.innerText = 'Enter Valid City Name';
  }
  else {
  cityHeading.innerText = data.name;
  main.innerText = data.weather[0].main;
  temp.innerText = Math.round(data.main.temp);
  minTemp.innerHTML = Math.round(data.main.temp_min);
  maxTemp.innerHTML = Math.round(data.main.temp_max);
  errorMsg.innerText = '';
  }
 //console.log(data)
};

btn.onclick = () => {
    getweather(cityName.value);
    btn.classList.toggle('shadow')
};