'use client'



import styles from './reservation.module.css'


import LocationDateReserve from './LocationDateReserve';
import { useState } from 'react';
import { Dayjs } from 'dayjs';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '@/redux/store';
import { HotelBooking, HotelJson } from '../../interface';
import { useSession } from 'next-auth/react';
import { addBooking } from '@/redux/features/bookSlice';





export default function DateReserve(/*{onDateChange,onLocationCange}:{onDateChange:Function,onLocationCange:Function}*/{hotelsJson}:{hotelsJson:HotelJson}){



    const {data :session} = useSession()






    const [bookingDate, setBookingDate] = useState<Dayjs | null>(null);
  const [location, setLocation] = useState<string | null>(null);
  const dispatch = useDispatch<AppDispatch>()
  const makeBooking = () => {
    if (
      
      bookingDate &&
      location 
    ) {
      const item: HotelBooking = {
        _id: session?.user._id as string,
        resDate: bookingDate.toString(),
        user: session?.user.name as string,
        shop: location,
        createdAt: Date.now.toString(),
        //string,
        __v: 0
        //name: document.getElementById("Name")?.nodeValue as string,
        //surname: document.getElementById("Lastname")?.nodeValue as string,
        //id: document.getElementById("Citizen ID")?.nodeValue as string,
        //hospital: location,
        //bookDate: 
      };
      dispatch(addBooking(item))
    }
  };
    
    return(
        <div className={styles.submenu}>
            <div>
      
      <LocationDateReserve onDateChange={(value:Dayjs)=>{setBookingDate(value)}} onLocationCange={(value:string)=>{setLocation(value)}} hotelsJsonReady={hotelsJson}/>

      <button
        className="block rounded-md bg-sky-600 hover:bg-indigo-600 px-3 py-2 text-white shadow-sm"
        onClick={makeBooking}
      >
        {" "}
        Check Car Avaibility
      </button>
    </div>

            {/*<button className="block rounded-md bg-sky-600 hover:bg-indigo-600 px-3 py-2 text-white shadow-sm" name='Book Vaccine'> Book Vaccine</button>*/}
        
        </div>

    );
}
//