import { HotelJson } from "../../interface"
export default async function getHospitals():Promise<HotelJson> {

    const response = await fetch("http://localhost:5000/api/v1/shops")
    if(!response.ok){
        throw new Error("Fail")
    }

    return await response.json()
}