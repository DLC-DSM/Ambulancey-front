import axios from "axios"

const instance = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL,
    timeout: 30000,
})

export default instance

instance.interceptors.response.use(
    (response) => response,
    async (error) => {
        return Promise.reject(error)
    }
)
