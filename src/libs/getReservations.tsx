import {resolve} from "path"

export default async function getReservations(token:string) {

    //Funny 5 second delay
    // await new Promise((resolve)=>setTimeout(resolve, 5000))

    const response = await fetch(`${process.env.BACKEND_URL}/api/v1/reservations`, {
        method: 'GET',
        next:{tags:['reservations']},
        headers: {
            authorization:`Bearer ${token}`
        }
        },
    )
    
    if (!(response.ok)) {
        throw new Error("Failed to fetch reservation")
    }

    return await response.json()
}