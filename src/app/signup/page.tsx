'use client'
import userSignup from "@/libs/userSignup"
import { TextField } from "@mui/material"
import { useState } from "react"

export default function signupPage(){
    const [name,setName]=useState<string>('')
    const [tel,setTel]=useState<string>('')
    const [email,setEmail]=useState<string>('')
    const [password,setPassword]=useState<string>('')

    return(
      
    <div>
      <div>
            <TextField name="Name" id="Name"
            onChange={()=>setName(document.getElementById("Name")?.nodeValue?.toString() as string)} />
            <label>Name</label>
        </div>
        <div>
            <TextField name="Tel" id="Tel"
            onChange={()=>setTel(document.getElementById("Tel")?.nodeValue?.toString() as string)} />
            <label>Telephone</label>
        </div>
        <div>
            <TextField name="Email" id="Email"
            onChange={()=>setEmail(document.getElementById("Email")?.nodeValue?.toString() as string)} />
            <label>Email</label>
        </div>
        <div>
            <TextField name="Password" id="Password"
            onChange={()=>setPassword(document.getElementById("Password")?.nodeValue?.toString() as string)} />
            <label>Password</label>
        </div>

          <button onClick={ async ()=>{
            if(name&&tel&&email&&password) 
            await userSignup(name,tel,email,password)
        }}>Register</button>
          </div>


    )





        
            
           
}