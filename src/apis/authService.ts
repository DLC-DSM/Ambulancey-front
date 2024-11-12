import { AxiosError } from "axios"
import instance, { tempCookie } from "./interceptor"

export default class AuthService {
    static async login(
        hospital_name: string,
        password: string
    ): Promise<number> {
        try {
            const response = await instance.post("/user/login", {
                hospital_name: hospital_name,
                password: password,
            })
            tempCookie.setToken(response.headers["Authorization"])
            return response.status
        } catch (e) {
            if (e instanceof AxiosError) {
                return e.status ?? 500
            } else {
                return 500
            }
        }
    }
}
