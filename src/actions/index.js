import axios from 'axios';
const API_KEY = '3cf34ebde0ac30057088097e52965ba1';
export const FETCH_WEATHER = 'FETCH_WEATHER';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export function fetchWeather(city){
  const url = `${ROOT_URL}&q=${city},us`;
  const request = axios.get(url);



  return{
    type: FETCH_WEATHER,
    payload:request
  };
}
