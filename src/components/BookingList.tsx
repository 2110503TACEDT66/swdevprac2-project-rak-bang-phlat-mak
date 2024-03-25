'use client'

import { useAppSelector } from "@/redux/store"


export default function BookingList(){
    const hospitalItems = useAppSelector((state)=>state.bookSlice.bookItems)
    return(
        <>
        {
            hospitalItems.map((bookingItem)=>(
                <div className="bg-slate-200 roundednpx-5 mx-5 py-2 my-2" key={bookingItem.hospital}>
                    <div className="text-sm">{bookingItem.name} </div>
                    <div className="text-sm">{bookingItem.surname} </div>
                    <div className="text-sm">{bookingItem.id} </div>
                    <div className="text-sm">{bookingItem.hospital} </div>
                    <div className="text-sm">{bookingItem.bookDate} </div>
                </div>
            ))
        }
        </>
    )


}