import { WeatherAPI } from "./weather-api.js";

function testConstructURL() {
  const weatherAPIObj = new WeatherAPI();
  weatherAPIObj.constructURL("Mumbai");
}

testConstructURL();
