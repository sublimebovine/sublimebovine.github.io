const WEATHER_API_KEY = ac5daa5456cd2baab84b202651b13f05;
const WEATHER_API_BASE_URL = "https://api.openweathermap.org/data/2.5";

export const getWeather = async (lat, lon) => {
  try {
    const response = await fetch(
      `${WEATHER_API_BASE_URL}/weather?lat=${lat}&lon=${lon}&units=metric&appid=${WEATHER_API_KEY}`
    );
    if (!response.ok) {
      throw new Error("Failed to fetch weather data");
    }

    return await response.json();
  } catch (error) {
    console.error("Error fetching weather data:", error);
    throw error;
  }
};

export const getWeatherForecast = async (lat, lon) => {
  try {
    const response = await fetch(
      `${WEATHER_API_BASE_URL}/forecast?lat=${lat}&lon=${lon}&units=metric&appid=${WEATHER_API_KEY}`
    );
    if (!response.ok) {
      throw new Error("Failed to fetch weather forecast data");
    }

    return await response.json();
  } catch (error) {
    console.error("Error fetching weather forecast data:", error);
    throw error;
  }
};
