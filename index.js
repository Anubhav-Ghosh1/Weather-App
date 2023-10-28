let searchInput = document.getElementById("search");
let submitButton = document.getElementById("submitButton");
const API_KEY = "d1845658f92b31c64bd94f06f7188c9c";
submitButton.addEventListener("click", getValue);

function getValue() {
  let value = searchInput.value;
  fetchData(value);
}

async function fetchData(city) {
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
  );
  const data = await response.json();
  console.log(data);
  renderInfo(data);
}

function renderInfo(data) {
    const cityName = document.getElementById("cityName");
  const weatherIcon = document.querySelector("[data-weatherIcon]");
  const desc = document.querySelector("[data-weatherDesc]");
  const temp = document.querySelector("[data-temp]");
  const humidity = document.querySelector("[data-humidity]");
  const windspeed = document.querySelector("[data-windspeed]");
  cityName.innerHTML = data?.name;
  
  
  if(data?.weather?.[0]?.icon == "Clouds")
  {
    weatherIcon.src = "./images/clouds.png";
  }
  else if(data?.weather?.[0]?.icon == "Mist")
  {
    weatherIcon.src = "./images/mist.png";
  }
  else if(data?.weather?.[0]?.icon == "Clear")
  {
    weatherIcon.src = "./images/clear.png";
  }
  else if(data?.weather?.[0]?.icon == "Rain")
  {
    weatherIcon.src = "./images/rain.png";
  }
  else if(data?.weather?.[0]?.icon == "Drizzle")
  {
    weatherIcon.src = "./images/drizzle.png";
  }
  else if(data?.weather?.[0]?.icon == "Snow")
  {
    weatherIcon.src = "./images/snow.png";
  }
// weatherIcon.src = `http://openweathermap.org/img/w/${data?.weather?.[0]?.icon}.png`;
  
  
  
  
  
  
  
  
  windspeed.innerText = `${data?.wind?.speed} m/s`;
  humidity.innerText = `${data?.main?.humidity}%`;
  temp.innerText = `${data?.main?.temp} °C`;
}
fetchData("jabalpur")