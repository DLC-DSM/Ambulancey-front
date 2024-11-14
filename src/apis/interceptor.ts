import axios, { AxiosError } from "axios"

class TempCookie {
    private accessToken: string | null
    constructor() {
        this.accessToken = null
    }
    setToken(token: string) {
        this.accessToken = token
    }
    getToken() {
        return this.accessToken
    }
    isNull() {
        return this.accessToken == null
    }
}

export const tempCookie: TempCookie = new TempCookie()

const instance = axios.create({
    baseURL: "http://13.124.47.171:8030",
    timeout: 30000,
})

export default instance

instance.interceptors.request.use(
    (config) => {
        if (typeof window !== "undefined" && tempCookie.isNull()) {
            const accessToken = tempCookie.getToken()
            config.headers.Authorization = accessToken
        }
        return config
    },
    (error: AxiosError) => Promise.reject(error)
)
