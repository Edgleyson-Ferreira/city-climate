import axios from 'axios';
const baseURL = process.env.VUE_APP_BASE_URL
const iconURL = process.env.VUE_APP_ICON_URL
const apiKey = process.env.VUE_APP_API_KEY

export async function getCityWeather(cityName){
    return await axios.get(`${baseURL}/weather?appid=${apiKey}&q=${cityName}&units=metric`)
}

export async function getForecast(lat, lon){
    return await axios.get(`${baseURL}/forecast/hourly?appid=${apiKey}&lat=${lat}&lon=${lon}`)
}

export async function getWeatherIcon(iconId){
    return await axios.get(`${iconURL}${iconId}@2x.png`)
}