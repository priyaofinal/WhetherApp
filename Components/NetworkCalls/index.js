import axios from 'axios';


export const BaseURL = axios.create({
  baseURL: `http://api.openweathermap.org/data/2.5/`,
});

export const apiKey = '81f1ddef709440284b75812ca4d1d9c8';