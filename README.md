# 🌦️ Weather App

A simple and responsive Weather Application that helps users check real-time weather information for any city around the world.

This application fetches live weather data using the **OpenWeatherMap API** and displays important weather details in an easy-to-understand format.

## 🌍 About the Project

Weather App is a web-based application developed using HTML, CSS, and JavaScript. Users can enter a city name and instantly get its current weather information.

The application uses JavaScript's Fetch API to communicate with the OpenWeatherMap service and dynamically displays the retrieved weather data on the webpage.

## 💡 What You Can Do

- 🔎 **Search by City** – Find weather information by entering a city name.
- 🌡️ **Live Temperature** – Check the current temperature in Celsius.
- ☁️ **Weather Conditions** – View weather descriptions such as clear sky, clouds, and rain.
- 💧 **Humidity Details** – Get the current humidity percentage.
- 💨 **Wind Speed** – Check the wind speed of the selected city.
- ⚠️ **Error Handling** – Displays an error message when an invalid city name is entered.
- ⚡ **Live API Data** – Fetches updated weather information from OpenWeatherMap.

## 🧰 Built With

| Technology | Purpose |
|---|---|
| HTML5 | Webpage Structure |
| CSS3 | Styling and Layout |
| JavaScript | Application Logic |
| OpenWeatherMap API | Weather Data |
| Fetch API | API Communication |

## 📂 Folder Structure

```text
Weather-App/
│
├── index.html       # Main HTML webpage
│
├── style.css        # Styling and design
│
├── script.js        # Weather functionality
```

## 🔌 API Integration

This project uses the OpenWeatherMap Current Weather Data API to retrieve live weather information.

**API Service:** OpenWeatherMap

API Endpoint:

```text
https://api.openweathermap.org/data/2.5/weather
```

The application retrieves the following information:

- City Name
- Country
- Temperature
- Weather Description
- Humidity
- Wind Speed

## 🚀 Getting Started

Follow these steps to run the application locally.

**Step 1: Clone the Repository**

```bash
git clone https://github.com/YOUR-USERNAME/Weather-App.git
```

**Step 2: Open Project Folder**

```bash
cd Weather-App
```

**Step 3: Configure API Key**

1. Visit https://openweathermap.org/api
2. Create an account and generate an API key.
3. Open `script.js`.
4. Add your API key in the API configuration.

```javascript
const apiKey = "YOUR_API_KEY";
```

**Step 4: Run the Application**

Open `index.html` in your browser or use the VS Code Live Server extension.

## ⚙️ How It Works

1. User enters a city name.
2. JavaScript captures the entered city.
3. Fetch API sends a request to OpenWeatherMap.
4. API returns weather information in JSON format.
5. JavaScript processes the response.
6. Weather details are displayed dynamically on the webpage.

## 🔮 Future Improvements

- 📍 Current Location Weather Detection.
- 🌤️ 5-Day Weather Forecast.
- 🌙 Dark and Light Mode.
- 📱 Improved Mobile Responsiveness.
- 🌡️ Celsius and Fahrenheit Conversion.
- 🌅 Weather-Based Dynamic Backgrounds.

## 📌 Project Purpose

This project demonstrates practical knowledge of frontend web development, JavaScript asynchronous programming, API integration, JSON data handling, and dynamic DOM manipulation.

