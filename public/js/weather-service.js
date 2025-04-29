const WEATHER_API_KEY = ''; 

async function getWeather(lat, lon) {
  try {
    const response = await fetch(`/api/weather?lat=${lat}&lon=${lon}`);
    
    if (!response.ok) {
      throw new Error("Failed to fetch weather data");
    }

    return await response.json();
  } catch (error) {
    console.error("Error fetching weather data:", error);
    throw error;
  }
}

async function getWeatherForecast(lat, lon) {
  try {
    const response = await fetch(`/api/weather/forecast?lat=${lat}&lon=${lon}`);
    
    if (!response.ok) {
      throw new Error("Failed to fetch weather forecast data");
    }

    return await response.json();
  } catch (error) {
    console.error("Error fetching weather forecast data:", error);
    throw error;
  }
}