Weather App

This Weather App provides real-time weather updates for any location.
Users can search for a city to see details like temperature, wind speed, humidity, and current weather conditions.
The app uses the OpenWeatherMap API to fetch weather data.

Features
---> Search weather by city name
---> Displays temperature, wind speed, humidity, and weather description
---> Dynamically updates UI with weather details
---> Error handling for invalid locations

Technologies Used
---> HTML
---> CSS
---> JavaScript (ES6+)
---> OpenWeatherMap API


Installation
---> Clone the repository or download the source code.
---> Replace the placeholder API_KEY in the JavaScript file with your OpenWeatherMap API key.
---> Open the index.html file in your browser to run the app.

Usage
---> Enter a city name in the input box.
---> Click the "Get Weather" button.
---> View weather details, including temperature, wind speed, humidity, and a weather icon.
---> If the location is not found, an error message will be displayed.

File Structure.
├── index.html         # Main HTML file
├── styles.css         # CSS file for styling
├── app.js             # JavaScript file (contains the weather app logic)
└── assets/            # Folder containing weather icons (e.g., Clouds.png, rain.png, etc.)


API Integration
This app uses the OpenWeatherMap API to fetch weather data. The endpoint used is:
https://api.openweathermap.org/data/2.5/weather?q={city_name}&units=metric&appid={API_KEY}



A sample response from the API:
{
    "weather": [
        {
            "main": "Clear",
            "description": "clear sky",
            "icon": "01d"
        }
    ],
    "main": {
        "temp": 25,
        "humidity": 60
    },
    "wind": {
        "speed": 5
    },
    "name": "New York"
}

Error Handling
---> If the city is not found, an error message is displayed.
---> If the input is empty, an alert prompts the user to enter a city name.

Contributing
---> Feel free to fork the repository and submit pull requests to improve the app.

