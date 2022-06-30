import axios from 'axios';

const api = axios.create({

    baseURL:"https://api.openweathermap.org/data/2.5/weather?q=Garanhuns&appid=cdfbf52ea66b119d020e98bf63f1fa40"
    
});

export default api;