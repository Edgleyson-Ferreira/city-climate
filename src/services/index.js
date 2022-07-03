import axios from 'axios';
const baseURL = process.env.VUE_APP_BASE_URL
const iconURL = process.env.VUE_APP_ICON_URL
const apiKey = process.env.VUE_APP_API_KEY
const ibgeURL = process.env.VUE_APP_IBGE_URL

export async function getCityWeather(cityName){
    return await axios.get(`${baseURL}/weather?appid=${apiKey}&q=${cityName}&units=metric&lang=pt_br`)
}

export async function getCityForecast(lat, lon){
    return await axios.get(`${baseURL}/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric&lang=pt_br&cnt=7`)
}

export function getWeatherIcon(iconId){
    return `${iconURL}${iconId}@2x.png`
}