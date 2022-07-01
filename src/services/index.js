import axios from 'axios';
const baseURL = process.env.VUE_APP_BASE_URL
const apiKey = process.env.VUE_APP_API_KEY

console.log(process.env)

export async function getCityWeather(cityName){
    return await axios.get(`${baseURL}/weather?appid=${apiKey}&q=${cityName}`)
}

export async function getForecast(lat, lon){
    return await axios.get(`${baseURL}/forecast/hourly?appid=${apiKey}&lat=${lat}&lon=${lon}`)
}