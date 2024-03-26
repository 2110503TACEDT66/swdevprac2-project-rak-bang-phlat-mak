export default async function  getUserProfile(token:string) {
    
    await new Promise((resolve)=>setTimeout(resolve,1000))
    const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/auth/me`,{
        headers:{
            authorization:`Bearer ${token}`
        }
    })
    if(!response.ok){
        throw new Error("Fail")
    }

    return await response.json()
    
}