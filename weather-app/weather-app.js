import { WeatherAPI } from "./weather-api.js";
import { WeatherUtils } from "./weather-utils.js";

class WeatherApp {
  init() {
    this.addListener();
  }

  addListener() {
    const searchTextField = document.querySelector(".search-box");

    searchTextField.addEventListener("keypress", (event) => {
      const keyCode = event.keyCode;

      if (keyCode == 13) {
        // ENTER

        const userInput = event.target.value;

        const weatherAPIObj = new WeatherAPI();
        weatherAPIObj.constructURL(userInput);
        weatherAPIObj.invokeURL().then((responseJSON) => {
          const responseObj = WeatherUtils.convertResponse(responseJSON);

          // Location Element
          const locationElement = document.querySelector(".location .city");
          locationElement.innerText = responseObj.LOCATION_PLACE;

          // Date Element
          const dateElement = document.querySelector(".location .date");
          dateElement.innerText = responseObj.DATE;

          // Temperature Element
          const temperatureElement = document.querySelector(
            ".current .temp .digit"
          );
          temperatureElement.innerText = responseObj.TEMPERATURE;

          // TemperatureType Element
          const temperatureTypeElement =
            document.querySelector(".current .weather");
          temperatureTypeElement.innerText = responseObj.TEMPERATURE_TYPE;

          // TemperatureType Element
          const lowHighTempElement = document.querySelector(".current .hi-low");
          lowHighTempElement.innerText = `Min/Max: ${responseObj.LOW_TEMPERATURE}°c / ${responseObj.HIGH_TEMPERATURE}°c`;
        });
      } else {
        // Not needed
      }
    });

    //  keypress listener

    //  event.keyCode == 13 // ENTER
    // Call API [weatherAPI.invokeURL()]
    // responseJSON
    // responseObj

    // temperatureHTMLElement. innerText = responseObj.TEMPERATURE
  }
}

export { WeatherApp };
