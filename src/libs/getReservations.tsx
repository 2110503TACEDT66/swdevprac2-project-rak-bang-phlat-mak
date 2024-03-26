import {resolve} from "path"

export default async function getReservations() {

    //Funny 5 second delay
    // await new Promise((resolve)=>setTimeout(resolve, 5000))

    const response = await fetch(`${process.env.BACKEND_URL}/api/v1/reservations`, {next:{tags:['reservations']}})
    const data = await response.json();

    if (!(response.ok)) {
        throw new Error("Failed to fetch reservation")
    }

    return data
}