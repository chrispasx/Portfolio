const apiKey = "0f395ba1b60dd2cbd17ca62ff09ea80b";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";
const cityDisplay = document.getElementById('city');
const cityTemp = document.getElementById('temp');
const feelsLike = document.getElementById('feels');
const humidity = document.getElementById('humidity');
const wind = document.getElementById('wind');
const img = document.getElementById('img');
const inputValue = document.getElementById('input');
const searchBtn = document.getElementById('btn');
const weatherIcon = document.getElementById('weatherIcon');
console.log(weatherIcon);

async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);


    if (response.status == 404) {
        document.getElementById('error-p').style.display = 'block';
        document.querySelector('.weather').style.display = 'none';
        inputValue.value = '';
    }
    else {
        document.getElementById('error-p').style.display = 'none';
        let data = await response.json();
        cityDisplay.innerHTML = data.name;
        cityTemp.innerHTML = `${Math.round(data.main.temp)}°C`;
        feelsLike.innerHTML = `Feels Like: ${Math.round(data.main.feels_like)}°C`;
        humidity.innerHTML = `Humidity: ${data.main.humidity}%`;
        wind.innerHTML = `Wind Speed: ${data.wind.speed} m/s`;

        if (data.weather[0].main === 'Clouds') {
            weatherIcon.src = 'photos/clouds.png';
        }
        else if (data.weather[0].main === 'Clear') {
            weatherIcon.src = 'photos/clear.png';
        }
        else if (data.weather[0].main === 'Rain') {
            weatherIcon.src = 'photos/rain.png';
        }
        else if (data.weather[0].main === 'Drizzle') {
            weatherIcon.src = 'photos/drizzle.png';
        }
        else if (data.weather[0].main === 'Mist') {
            weatherIcon.src = 'photos/mist.png';
        }
        else if (data.weather[0].main === 'Snow') {
            weatherIcon.src = 'photos/snow.png';
        }

        document.querySelector('.weather').style.display = 'block';
        document.getElementById('error-p').style.display = 'none';


    }

}
searchBtn.addEventListener('click', () => {
    document.getElementById('error-p').style.display = 'none';
    checkWeather(inputValue.value);
    inputValue.value = "";
});

