export default async function deleteReservation(token:string, resID:string){
    const response = await fetch(`${process.env.BACKEND_URL}/api/v1/reservations/${resID}`, {
        method:"DELETE",
        headers:{
            "Content-Type":"application/json",
            authorization: `Bearer ${token}`
        },
    })
    
    if(!response.ok){
        console.log(await response.json())
        throw new Error("Failed to delete new reservation")
    }
    
    return await response.json()
}