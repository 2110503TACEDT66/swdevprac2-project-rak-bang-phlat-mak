'use client'

import { useAppSelector } from "@/redux/store"
import { BookingItem, HotelBooking } from "../../interface"


export default function BookingList(){
    const hospitalItems = useAppSelector((state:any)=>state.bookSlice.bookItems)
    return(
        <>
        {
            hospitalItems.map((bookingItem:HotelBooking)=>(
                <div className="bg-slate-200 roundednpx-5 mx-5 py-2 my-2" key={bookingItem._id}>
                    <div className="text-sm">{bookingItem._id} </div>
                    <div className="text-sm">{bookingItem.user} </div>
                    <div className="text-sm">{bookingItem.resDate} </div>
                    <div className="text-sm">{bookingItem.shop} </div>
                    <div className="text-sm">{bookingItem.createdAt} </div>
                    
                </div>
            ))
        }
        </>
    )


}