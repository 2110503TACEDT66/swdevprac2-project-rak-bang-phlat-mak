export default async function updateReservation(token:string, resID:string ,resDate:string){
    console.log(process.env.NEXT_PUBLIC_BACKEND_URL)

    const response = await fetch(`${process.env.BACKEND_URL}/api/v1/reservations/${resID}`, {
        method:"PUT",
        headers:{
            "Content-Type":"application/json",
            authorization: `Bearer ${token}`
        },
        body:JSON.stringify({
            resDate: resDate,
        }),
    })
    
    if(!response.ok){
        console.log(await response.json())
        throw new Error("Failed to add new reservation")
    }
    
    console.log("successful")
    return await response.json()
}