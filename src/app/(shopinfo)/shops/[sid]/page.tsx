'use client'
import { useDispatch } from "react-redux";
import { useState } from "react";
import dayjs, { Dayjs } from "dayjs";
import { useParams, useRouter } from "next/navigation";
import postReservation from "@/libs/postReservation";
import { useSession } from "next-auth/react";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { Link } from "@mui/material";


export default function Booking () {
    const {data:session} = useSession()
    const token = session?.user.token
    console.log(token)
    const userID = useSession().data?.user._id
    console.log(userID)
    const shopID = useParams().sid.toString();
    console.log(shopID)

    const [date, setDate] = useState<Dayjs|null>(null)

    const handlerSubmit = () => {
        if (userID && shopID && date && token) {
            const formattedDate = dayjs(date).format("YYYY-MM-DD[T]HH:mm:ss.SSS[Z]")
            console.log(formattedDate)
            try {
            postReservation(userID, shopID, formattedDate, token)
            } catch(error) {
                alert(error)
            }
        }
    }

    return (
        <main className="w-[100%] flex flex-col items-center pt-20 space-y-10">
            <div className="text-4xl font-medium">Reservation</div> 
            
            <div className="w-fit bg-slate-200 rounded-lg space-y-2 w-fit px-10 py-5">
        
                <div className="my-10 text-xl">
                    Choose a date for your reservation
                    <form onSubmit={handlerSubmit}>
                        <div>
                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                                <DateTimePicker className="bg-white m-10" value={date} onChange={(newValue)=>{setDate(newValue); console.log(newValue)}}/>
                            </LocalizationProvider>
                        </div>
                    </form>
                </div>
            </div>
            <Link href="/booking">
                <button name="Reserve" className="block rounded-md bg-slate-800 hover:bg-slate-600 px-3 py-2 text-white shadow-sm"
                onClick={handlerSubmit}>
                    Reserve
                </button>
            </Link>
        </main>
    )
}