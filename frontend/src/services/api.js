import axios from 'axios';

const api = axios.create({
    baseURL: 'https://uaigrill-system.onrender.com',
});

export default api;