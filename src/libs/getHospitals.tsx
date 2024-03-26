import { HotelJson } from "../../interface"
export default async function getHospitals():Promise<HotelJson> {

    const response = await fetch(`${process.env.BACKEND_URL}/api/v1/shops`)
    if(!response.ok){
        throw new Error("Fail")
    }

    return await response.json()
}