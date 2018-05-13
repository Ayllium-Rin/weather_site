//The function that retrieves the data from the API
function getWeather(position) {
    let latitude  = position.coords.latitude; 
    let longitude = position.coords.longitude;
    
    fetch('https://fcc-weather-api.glitch.me/api/current?lon=' +position.coords.longitude +'&lat=' +position.coords.latitude)
    .then((res) => res.json())
    .then((data) => {
        
//Varibles to store retrieved data
        let location = data.name;
        let conditions = data.weather[0].description;
        let windSpeed = data.wind.speed;
        let gust = data.wind.gust;
        let humidity = data.main.humidity;
        let temp = data.main.temp;
        let temp_max = data.main.temp_max;
        let temp_min = data.main.temp_min;
        let weatherIcon = data.weather[0].icon;
        
//Assigning values from API                    
        document.getElementById("current-local").innerHTML = location;
        document.getElementById("temp").innerHTML = "Current temperature: " + temp + "C";
        document.getElementById("temp_max").innerHTML = "High temperature: " + temp_max + "C";
        document.getElementById("temp_min").innerHTML = "Low temperature: " + temp_min + "C";
        document.getElementById("precipt").innerHTML = "Current conditions: " + conditions;
        document.getElementById("wind").innerHTML = "Wind speed: " + windSpeed + " knots";
        document.getElementById("wind_gust").innerHTML = "Wind gust up to: " + gust + " knots";                    
        document.getElementById("humidity").innerHTML = "Humidity: " + humidity + "%";
        document.getElementById("weatherIcon").src = weatherIcon;
        
//Click event to call convert funcitons
        document.getElementById("cToF").addEventListener("click", tempConvertToF);
        document.getElementById("fToC").addEventListener("click", tempConvertToC);

//Background image generator for conditions
        let bckGrnd = document.getElementById("backGround")
        if (conditions === "sunny" || conditions === "clear sky"){
            bckGrnd.style.background = "#333, url('https://images.pexels.com/photos/3768/sky-sunny-clouds-cloudy.jpg?auto=compress&cs=tinysrgb&h=650&w=940')";
            bckGrnd.style.backgroundRepeatepeat = "no-repeat";
            bckGrnd.style.backgroundPosition = "center";
            bckGrnd.style. backgroundSize = "cover";
        }else if (conditions === "cloudy" || conditions === "broken clouds"){
            bckGrnd.style.background = "url('https://images.pexels.com/photos/844297/pexels-photo-844297.jpeg?auto=compress&cs=tinysrgb&h=650&w=940')";
            bckGrnd.style.backgroundRepeatepeat = "no-repeat";
            bckGrnd.style.backgroundPosition = "center";
            bckGrnd.style. backgroundSize = "cover";
        }else{
            bckGrnd.style.background = randomBackground();
            bckGrnd.style.backgroundRepeatepeat = "no-repeat";
            bckGrnd.style.backgroundPosition = "center";
            bckGrnd.style. backgroundSize = "cover";
        }
        
//Function to convert to F from C
        function tempConvertToF() {
            let f = 0;
            let fMax = 0;
            let fMin = 0;

            f = Math.floor(temp * 1.8 + 32);
            fMax = Math.floor(temp_max * 1.8 + 32);
            fMin = Math.floor(temp_min * 1.8 + 32);

            document.getElementById("temp").innerHTML = "Current temperature: " + f + "F";
            document.getElementById("temp_max").innerHTML = "High temperature: " + fMax + "F";
            document.getElementById("temp_min").innerHTML = "Low temperature: " + fMin + "F";
        }
        
//Function to convert back to C
        function tempConvertToC() {                   
            document.getElementById("temp").innerHTML = "Current temperature: " + temp + "C";
            document.getElementById("temp_max").innerHTML = "High temperature: " + temp_max + "C";
            document.getElementById("temp_min").innerHTML = "Low temperature: " + temp_min + "C";
        }
    })
}

//Random background image generator for unanticipated conditions

function randomBackground() {
    let ran = Math.floor(Math.random() * 5);
    let weatherImgLibrary = {
    0:"url('https://images.pexels.com/photos/186980/pexels-photo-186980.jpeg?auto=compress&cs=tinysrgb&h=650&w=940')",
    1:"url(https://images.pexels.com/photos/108941/pexels-photo-108941.jpeg?auto=compress&cs=tinysrgb&h=650&w=940')",
    2:"url('https://images.pexels.com/photos/255347/pexels-photo-255347.png?auto=compress&cs=tinysrgb&h=650&w=940')",
    3:"url('https://images.pexels.com/photos/459451/pexels-photo-459451.jpeg?auto=compress&cs=tinysrgb&h=650&w=940')",
    4:"url('https://images.pexels.com/photos/414659/pexels-photo-414659.jpeg?auto=compress&cs=tinysrgb&h=650&w=940')",
    5:"url('https://images.pexels.com/photos/5230/road-fog-foggy-mist.jpg?auto=compress&cs=tinysrgb&h=650&w=940')"
    }
return weatherImgLibrary[ran];
}