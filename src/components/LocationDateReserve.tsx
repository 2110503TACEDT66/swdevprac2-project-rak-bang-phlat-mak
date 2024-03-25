'use client'


import {DatePicker} from "@mui/x-date-pickers"
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider"
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs"
import { Select, Menu, MenuItem } from "@mui/material"
import { useState } from "react"
import { Dayjs } from "dayjs"


export default function LocationDateReserve({onDateChange,onLocationCange}:{onDateChange:Function,onLocationCange:Function}){
    const [bookingDate,setBookingDate] = useState<Dayjs|null>(null)
    const [location, setLocation]=useState('BKK')
    return(
        <div className=" rounded-lg ">
            <Select variant="standard" name="location" id="location" value={location} onChange={(e)=>{setLocation(e.target.value); onLocationCange(e.target.value)}}
            className="h-[2em] w-[200px]">
                
                <MenuItem value="Chula ">Chulalongkorn Hospital</MenuItem>
                <MenuItem value=" Rajavithi"> Rajavithi Hospital </MenuItem>
                <MenuItem value="Thammasat">Thammasat University Hospital</MenuItem>
            </Select>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker className="bg-white"
                value={bookingDate} onChange={(value)=>{setBookingDate(value); onDateChange(value)}}/>
            </LocalizationProvider>




        </div>

    )
}/**/