export default async function postReservation(user:string, shop:string, resDate:string, token:string){
    console.log(process.env.NEXT_PUBLIC_BACKEND_URL)

    const response = await fetch(`${process.env.BACKEND_URL}/api/v1/reservations`, {
        method:"POST",
        headers:{
            "Content-Type":"application/json",
            authorization: `Bearer ${token}`
        },
        body:JSON.stringify({
            resDate: resDate,
            shop: shop,
            user: user
        }),
    })
    
    if(!response.ok){
        console.log(await response.json())
        throw new Error("Failed to add new reservation")
    }
    
    console.log("successful")
    return await response.json()
}