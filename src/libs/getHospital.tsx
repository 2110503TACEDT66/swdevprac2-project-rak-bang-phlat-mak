





export default async function  getHospital(id:string) {
    
    await new Promise((resolve)=>setTimeout(resolve,1000))
    const response = await fetch(`http://localhost:5000/api/v1/shops/${id}`)
    if(!response.ok){
        throw new Error("Fail")
    }

    return await response.json()
    
}