import axios from 'axios';

// Создаем экземпляр axios с предварительными настройками
const axiosInstance = axios.create({
    baseURL: 'http://127.0.0.1:8000',
    headers: {
        'Content-Type': 'application/json',
    },
});
export default axiosInstance;
