import axios from 'axios';

const api = axios.create({
    baseURL: 'https://site-pessoal-api-fizg.onrender.com/api',
});

export default api;