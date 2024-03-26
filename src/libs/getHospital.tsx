export default async function  getHospital(id:string) {
    
    const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/shops/${id}`)
    
    if(!response.ok){
        throw new Error("Fail")
    }

    return await response.json()
    
}