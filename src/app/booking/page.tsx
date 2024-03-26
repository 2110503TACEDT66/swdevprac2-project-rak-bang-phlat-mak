'use client'
import DateReserve from "@/components/DateReserve"
import TextField from '@mui/material/TextField';
import { AppDispatch } from "@/redux/store";
import { useDispatch } from "react-redux";
import { useRef, useState } from "react";
import dayjs, { Dayjs } from "dayjs";
import { BookingItem } from "../../../interface";

export default function Booking () {

    const dispatch = useDispatch<AppDispatch>()

    const makeBooking = () => {
        if (name && lastname && id && hospital && date) {
            const item:BookingItem = {
                name: name,
                surname: lastname,
                id: id,
                hospital: hospital,
                bookDate: dayjs(date).format("YYYY/MM/DD") 
            }
        }
    }

    const [name, setName] = useState("")
    const [lastname, setLastname] = useState("")
    const [id, setId] = useState("")
    const [hospital, setHospital] = useState("")
    const [date, setDate] = useState<Dayjs|null>(null)

    return (
        <main className="w-[100%] flex flex-col items-center space-y-4">
            <div className="text-xl font-medium">Vaccine Booking</div> 
            
            <div className="w-fit bg-slate-200 rounded-lg space-y-2 w-fit px-10 py-5">
                <div className="my-4">
                    ชื่อ
                    <TextField name="Name" id="Name" label="Name" variant='standard' className="block" 
                    value={name} onChange={(e) => {
                        setName(e.target.value)
                    }}/>
                </div>
                <div className="my-4">
                    นามสกุล
                    <TextField name="Lastname" id="Lastname" label="Lastname" variant='standard' className="block" 
                    value={lastname} onChange={(e) => {
                        setLastname(e.target.value)
                    }}/>
                </div>
                <div className="my-4">
                    รหัสประจำตัวประชาชน
                    <TextField name="Citizen ID" id="Citizen ID" label="Citizen ID" variant='standard' className="block"
                    value={id} onChange={(e) => {
                        setId(e.target.value)
                    }}/>
                </div>
                <div className="my-4">
                    เลือกโรงพยาบาลและจองวันที่
                    <DateReserve onDateChange={(value:Dayjs)=>{setDate(value)}} onLocationChange={(value:string)=>{setHospital(value)}}/>
                </div>
            </div>
            <button name="Book Vaccine" className="block rounded-md bg-sky-600 hover:bg-indigo-600 px-3 py-2 text-white shadow-sm"
            onClick={makeBooking}>
                Book Vaccine
            </button>
        </main>
    )
}


{/* Unused */}
{/* User Profile
            const session = await getServerSession(authOptions)
            if (!session || !session.user.token) return null

            const profile = await getUserProfile(session.user.token)
            var createdAt = new Date(profile.data.createdAt)

            <div className="w-fit bg-slate-200 rounded-lg space-y-2 w-fit px-10 py-5">
            <table className="table-auto border-separate border-spacing-2">
                <tbody>
                    <tr>
                        <td>
                            Name: 
                        </td>
                        <td>{profile.data.name}</td>
                    </tr>
                    <tr>
                        <td>
                            Email:
                        </td>
                        <td>{profile.data.email}</td>
                    </tr>
                    <tr>
                        <td>
                            Tel Number:
                        </td>
                        <td>{profile.data.tel}</td>
                    </tr>
                    <tr>
                        <td>
                            Created At:
                        </td>
                        <td>
                            {createdAt.toString()}
                        </td>
                    </tr>
                </tbody>
            </table>            
            </div> */}