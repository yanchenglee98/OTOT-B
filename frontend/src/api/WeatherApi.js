import axios from 'axios';

const baseURL = "https://python-http-function-yilw3np2zq-as.a.run.app";

class WeatherApi {
    getWeather() {
        return axios.get(baseURL);
    }
}

export default new WeatherApi();
