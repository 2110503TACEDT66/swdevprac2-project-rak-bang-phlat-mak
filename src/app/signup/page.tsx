'use client'
import userSignup from "@/libs/userSignup"
import { TextField } from "@mui/material"
import Link from "next/link"
import { useRef, useState } from "react"

export default function signupPage(){

    const userRef = useRef('')

    const [name,setName]=useState<string>('')
    const [tel,setTel]=useState<string>('')
    const [email,setEmail]=useState<string>('')
    const [password,setPassword]=useState<string>('')

    const handlerSubmit = () => {
        if (name && tel && email && password) {
            try {
                userSignup(name, tel, email, password)
            } catch(error) {
                console.log(error)
            }
        } else {
            alert("Please type in all the details!")
        }
    }

    return(
      
    <div className="w-[100%] flex flex-col items-center pt-20 space-y-10">
        <div className="text-4xl font-medium">Register</div> 

        <form className="w-[30%] items-center bg-slate-600 p-10 rounded-3xl shadow-[25px_25px_40px_-10px_rgba(0,0,0,0.7)]" onSubmit={handlerSubmit}>
                <div className="flex flex-row items-center">
                    <label className="w-2/5 text-2xl text-slate-200">Name</label>
                    <TextField name="Name" id="Name" className="w-3/5 bg-slate-100 rounded-2xl shadow-inner"
                    onChange={(e)=>setName(e.target.value)}/>
                </div>
                <div className="flex flex-row items-center my-5">
                    <label className="w-2/5 text-2xl text-slate-200">Telephone</label>
                    <TextField name="Tel" id="Tel" className="w-3/5 bg-slate-100 rounded-2xl border-gray-200"
                    onChange={(e)=>setTel(e.target.value)} />
                </div>
                <div className="flex flex-row items-center">
                    <label className="w-2/5 text-2xl text-slate-200">Email</label>
                    <TextField name="Email" id="Email" className="w-3/5 bg-slate-100 rounded-2xl border-gray-200"
                    onChange={(e)=>setEmail(e.target.value)} />
                </div>
                <div className="flex flex-row items-center my-5">
                    <label className="w-2/5 text-2xl text-slate-200">Password</label>
                    <TextField name="Password" id="Password" className="w-3/5 bg-slate-100 rounded-2xl border-gray-200"
                    onChange={(e)=>setPassword(e.target.value)} />
                </div>
                <div className="flex flex-row justify-end">
                <button className="bg-pink-300 p-3 rounded-lg shadow-[10px_10px_10px_-10px_rgba(0,0,0,0.5)] hover:bg-rose-700 hover:text-pink-50" onClick={ async ()=>{
                    console.log(name)
                    console.log(tel)
                    console.log(email)
                    console.log(password)
                    console.log(userRef)
                    handlerSubmit()
                }}>Register
                </button>
                </div>
                <div className="text-gray-200 mt-5">
                    Already have an account?
                    <Link href="/api/auth/signin" className="mr-1 ml-1 underline">
                    Sign-In
                    </Link>
                    now!
                </div>
        </form>
    </div>
    )





        
            
           
}