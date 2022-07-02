import axios from 'axios';
const baseURL = process.env.VUE_APP_BASE_URL
const iconURL = process.env.VUE_APP_ICON_URL
const apiKey = process.env.VUE_APP_API_KEY

export async function getCityWeather(cityName){
    return await axios.get(`${baseURL}/weather?appid=${apiKey}&q=${cityName}&units=metric&lang=pt_br`)
}

export async function getForecast(lat, lon){
    return await axios.get(`${baseURL}/forecast/hourly?appid=${apiKey}&lat=${lat}&lon=${lon}`)
}

export function getWeatherIcon(iconId){
    return `${iconURL}${iconId}@2x.png`
}