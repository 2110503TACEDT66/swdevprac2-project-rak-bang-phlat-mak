export default async function userSignup(name:string,tel:string,email:string,password:string){
    const response = await fetch("http://localhost:5000//api/v1/auth/register",{
        method:"POST",
        headers:{
            "Content-Type":"application/json",
        },
        body:JSON.stringify({
            name: name,
            tel: tel,
            email: email,
            password: password,
            role: "user"
        })
    })
    if(!response.ok){
        throw new Error("Fail to log-in")
    }

    return await response.json()
}