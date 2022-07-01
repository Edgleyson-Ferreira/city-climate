import axios from 'axios';
const baseURL = process.env.VUE_APP_BASE_URL
const apiKey = process.env.VUE_APP_API_KEY

console.log(process.env)

export async function getCityWeather(cityName){
    return await axios.get(`${baseURL}?appid=${apiKey}&q=${cityName}`)
}