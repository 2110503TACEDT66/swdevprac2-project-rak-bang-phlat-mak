'use client'
import {DatePicker} from "@mui/x-date-pickers"
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider"
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs"
import { Select, Menu, MenuItem } from "@mui/material"
import { useState } from "react"
import { Dayjs } from "dayjs"
import getHospitals from "@/libs/getHospitals"
import { HotelJson } from "../../interface"


export default async function LocationDateReserve({onDateChange,onLocationChange}:{onDateChange:Function,onLocationChange:Function}){
    const [bookingDate,setBookingDate] = useState<Dayjs|null>(null)
    const [location, setLocation]=useState('BKK')
    
    const hotelJson = getHospitals()
    const hotelsJsonReady = await hotelJson

    return(
        <div className=" rounded-lg ">
            <Select variant="standard" name="location" id="location" value={location} onChange={(e)=>{setLocation(e.target.value); onLocationChange(e.target.value)}}
            className="h-[2em] w-[200px]">
                
                
                {hotelsJsonReady.data.map((hotelItem)=>(
                    <>
                    <MenuItem value={hotelItem.name}>{hotelItem.name}</MenuItem>
                    </>
                ))}
                
            </Select>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker className="bg-white"
                value={bookingDate} onChange={(value)=>{setBookingDate(value); onDateChange(value)}}/>
            </LocalizationProvider>
        </div>
    )
}/**/