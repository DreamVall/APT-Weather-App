let weather = {
    apiKey : "17638c026469ba7e0aec23aa1fe58e51"
      , fetchWeather : function(city) {
        fetch("https://api.openweathermap.org/data/2.5/weather?q="
        + city 
        +"&units=metric&appid=" + this.apiKey)

        .then((response) => response.json())
        .then((data) => this.displayWeather(data));
        },
        displayWeather : function(data) {
            const {name} = data;
            const {icon, description} = data.weather[0];
            const {temp, humidity} = data.main;
            const {speed} = data.wind;

            console.log(name,icon,description,temp,humidity,speed);

            const cityElement = document.querySelector(".city");
            if (cityElement) {
            cityElement.innerText = "Weather in " + name;
            } else {
            console.error("City element not found!");
            }

            const iconElement = document.querySelector(".icon");
            if (iconElement) {
            iconElement.src = "https://openweathermap.org/img/wn/" + icon + "@2x.png";
            } else {
            console.error("Icon element not found!");
            }

            const descriptionElement = document.querySelector(".description");
            if (descriptionElement) {
            descriptionElement.innerText = description;
            } else {
            console.error("Description element not found!");
            }

            const tempElement = document.querySelector(".temperature");
            if (tempElement) {
            tempElement.innerText = temp + "°C";
            } else {
            console.error("Temp element not found!");
            }

            const humidityElement = document.querySelector(".humidity");
            if (humidityElement) {
            humidityElement.innerText = "Humidity: " + humidity + "%";
            } else {
            console.error("Humidity element not found!");
            }

            const windElement = document.querySelector(".wind");
            if (windElement) {
            windElement.innerText = "Wind speed: " + speed + " km/h";
            } else {
            console.error("Wind element not found!");
                }
            const weatherElement = document.querySelector(".weather")
            .classList.remove("loading");

        }}
       
       
const button = document.querySelector(".search button");
button.addEventListener("click", function() {
  const searchQuery = document.querySelector(".search-bar").value;
  weather.fetchWeather(searchQuery);
  });

const searchBar = document.querySelector(".search-bar");
searchBar.addEventListener("keyup", function(event){
    if(event.key === "Enter"){
        const searchQuery = searchBar.value; 
        weather.fetchWeather(searchQuery);
            }
})

weather.fetchWeather("Nairobi");

