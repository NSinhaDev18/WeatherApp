import { WeatherAPI } from "./weather-api.js";

function testConstructURL() {
  const weatherAPIObj = new WeatherAPI();
  weatherAPIObj.constructURL("Mumbai");
}

function testInvokeURL() {
  // weather-object create
  // responseJSON invokeURL()
  // print (responseJSON)
}

// testConstructURL();

testInvokeURL();
