'use client'
import getHospital from "@/libs/getHospital"
import { Shop } from "../../interface"
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { PhoneAndroid } from "@mui/icons-material";
import QueryBuilderIcon from '@mui/icons-material/QueryBuilder';
import deleteReservation from "@/libs/deleteReservation";
import updateReservation from "@/libs/updateReservation";
import { useRef, useState } from "react";
import { TextField } from "@mui/material";
import dayjs from "dayjs";

interface dateRef {
    value: string;
}

export default async function CardReservation({shop, resDate, token, resID}:{shop:Shop, resDate:string, token:string, resID:string}) {
    
    const dateObj = new Date(resDate)

    const day = String(dateObj.getDate()).padStart(2, '0')
    const month = dateObj.toLocaleString('default', {month: 'long'})
    const year = dateObj.getFullYear()
    const hours = String(dateObj.getHours()-7).padStart(2, '0')
    const minutes = String(dateObj.getMinutes()).padStart(2, '0')

    const fullTime = `${day} ${month} ${year}, ${hours}:${minutes}`

    const [date, setDate] = useState<string>()
    const [editMode, setEditMode] = useState<boolean>(false)

    const dateRef = useRef<dateRef>()

    const handlerDelete = () => {
        try {
            console.log(token)
            deleteReservation(token, resID)
        } catch(error) {
            console.log(error)
        }
    }

    const handlerEdit = () => {
            if (dateRef.current) {
                // alert(`this is a console log${dateRef.current.value}`)
                const formattedDate = dayjs(dateRef.current.value).format("YYYY-MM-DD[T]HH:mm:ss.SSS")
                try {
                    updateReservation(token, resID, formattedDate)
                } catch(error) {
                    console.log(error)
                } finally {
                    setEditMode(false)
                }
                } else {
                    alert("Why would you press edit, but not change the date?")
            }
    }

    return (
        <div>
        <div className="flex flex row h-auto bg-white shadow-lg rounded-lg w-full my-5">
            <div className="w-1/5 h-auto relative rounded-lg bg-slate-700 text-slate-200 hover:bg-slate-900 hover:text-slate-300">
                <div className="text-slate-100 text-4xl h-full flex items-center justify-center"
                onClick={()=>setEditMode(true)}>
                    EDIT
                </div>
            </div>

            <div className="w-3/5 h-auto p-[10px]">
                <div className="text-left pl-5">
                    <div className="text-3xl">
                        {shop.name}
                    </div>
                    <div className="text-2xl my-10">
                    <LocationOnIcon className="mr-5"/>
                        {shop.address}
                    </div>
                    <div className="text-2xl my-10">
                    <PhoneAndroid className="mr-5"/>
                        {shop.tel}
                    </div>
                    
                    {editMode?     
                        <div className="flex flex-row mx-5">
                        <TextField name="editTime" id="editTime" className="rounded-2xl bg-slate-100 shadow-inner"
                        inputRef={dateRef}
                        placeholder="YYYY-MM-DD HH:MM"
                        />
                        <button className="text-sm text-slate-200 bg-slate-500 px-4 rounded-lg shadow-[10px_10px_10px_-10px_rgba(0,0,0,0.5)] hover:bg-slate-700 hover:text-slate-50 mx-5"
                        onClick={()=>{
                            handlerEdit()
                        }}>Submit</button>
                        <button className="text-sm text-rose-100 bg-rose-500 px-4 rounded-lg shadow-[10px_10px_10px_-10px_rgba(0,0,0,0.5)] hover:bg-rose-700 hover:text-pink-50"
                        onClick={(e)=>{
                            setEditMode(false);
                        }}>Cancle</button>
                        </div>
                    
                    :   <div className="text-2xl my-10">
                        <QueryBuilderIcon className="mr-5"/>
                        {fullTime}
                        </div>
                   
                    }
                    
                </div>
            </div>
            <div className="w-1/5 h-auto bg-pink-800 rounded-lg hover:bg-rose-950 hover:text-slate-300">
                    <div className="text-slate-100 text-4xl h-full flex items-center justify-center"
                    onClick={()=>{handlerDelete();}}>
                        DELETE
                    </div>
                </div>
        </div>
        </div>
    )
}
