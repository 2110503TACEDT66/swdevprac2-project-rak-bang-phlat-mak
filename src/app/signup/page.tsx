'use client'

import userSignup from "@/libs/userSignup"
import { MenuItem, Select, TextField } from "@mui/material"
import { useState } from "react"






export default function signupPage(){
    const [name,setName]=useState<string>('')
    const [tel,setTel]=useState<string>('')
    const [email,setEmail]=useState<string>('')
    const [password,setPassword]=useState<string>('')
    const [role,setRole]=useState<string>('')
    return(<div>
       
 <div>
            <TextField name="Name" id="Name"
            onChange={()=>setName(document.getElementById("Name")?.nodeValue?.toString() as string)} />
        <label>Name</label>
    </div>


       
      <div>
        <TextField name="Lastname" id="Tel"
        onChange={()=>setTel(document.getElementById("Tel")?.nodeValue?.toString() as string)} />
        <label>Lastname</label>
      </div>
      <div>
        <TextField name="Lastname" id="Email"
        onChange={()=>setEmail(document.getElementById("Email")?.nodeValue?.toString() as string)} />
        <label>Lastname</label>
      </div>
      <div>
        <TextField name="Lastname" id="Password"
        onChange={()=>setPassword(document.getElementById("Password")?.nodeValue?.toString() as string)} />
        <label>Lastname</label>
      </div>
      
        <div>
        <Select name="role" value={role} onChange={(e)=>{setRole(e.target.value)} }className="h-[2em] w-[200px]" variant="standard" >
        <MenuItem value="admin" >admin</MenuItem>
                <MenuItem value="user"> user </MenuItem>

        </Select>
        <label>Citizen ID</label>
      </div>
      <button onClick={()=>{
        if(name&&tel&&email&&password&&role) userSignup(name,tel,email,password,role)}}> Register</button>
      </div>


    )





        
            
           
}