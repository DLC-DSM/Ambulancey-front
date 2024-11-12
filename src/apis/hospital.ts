import { AxiosError } from "axios"
import instance from "./interceptor"

export default class AuthServiceHospital {
    static async update(
        hospital_name: string,
        type: string,
        address: string,
        phone: string,
        description: string,
        open_time: string,
        close_time: string
    ): Promise<number> {
        try {
            const response = await instance.put("/hospital/update", {
                hospital_name: hospital_name,
                type: type,
                address: address,
                phone: phone,
                description: description,
                open_time: open_time,
                close_time: close_time,
            })
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
