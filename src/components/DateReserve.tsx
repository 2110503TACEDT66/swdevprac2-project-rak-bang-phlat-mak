'use client'



import styles from './reservation.module.css'


import LocationDateReserve from './LocationDateReserve';
import { useState } from 'react';
import { Dayjs } from 'dayjs';




export default function DateReserve({onDateChange,onLocationCange}:{onDateChange:Function,onLocationCange:Function}){
    
    return(
        <div className={styles.submenu}>
             
            <LocationDateReserve onDateChange={onDateChange} onLocationCange={onLocationCange}/>
            
            <button className="block rounded-md bg-sky-600 hover:bg-indigo-600 px-3 py-2 text-white shadow-sm" name='Book Vaccine'> Book Vaccine</button>
        
        </div>

    );
}
//