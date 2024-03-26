'use client'
import DateReserve from "@/components/DateReserve"
import TextField from '@mui/material/TextField';
import { AppDispatch } from "@/redux/store";
import { useDispatch } from "react-redux";
import { useRef, useState } from "react";
import dayjs, { Dayjs } from "dayjs";
import { BookingItem } from "../../../interface";
import { addBooking } from "@/redux/features/bookSlice";
import getReservations from "@/libs/getReservations";
import { useSession } from "next-auth/react";

export default function BookingPage() {
    const {data:session} = useSession()
    const token = session?.user.token

    let reservations
    if (token) {
        reservations = getReservations(token)
    } else {
        reservations = null
    }
    console.log(reservations)    
}