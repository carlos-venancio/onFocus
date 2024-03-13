import axios, { AxiosInstance } from "axios";
    // o Axios faz a funçao de requisição da API, para isso é necessario ter uma url base
    const api: AxiosInstance = axios.create({
        baseURL: 'http://localhost:5000'
    })

    
export default api;