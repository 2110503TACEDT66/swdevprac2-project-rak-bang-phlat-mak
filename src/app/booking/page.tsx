'use client'


import { TextField } from "@mui/material";
import DateReserve from "@/components/DateReserve";
import { useState } from "react";
import { Dayjs } from "dayjs";
import { BookingItem } from "../../../interface";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/redux/store";
import { addBooking } from "@/redux/features/bookSlice";

export default function BookingPage() {
  const [bookingDate, setBookingDate] = useState<Dayjs | null>(null);
  const [location, setLocation] = useState<string | null>(null);
  const dispatch = useDispatch<AppDispatch>()
  const makeBooking = () => {
    if (
      document.getElementById("Name")?.nodeValue?.toString() &&
      document.getElementById("Lastname")?.nodeValue?.toString &&
      bookingDate &&
      location &&
      document.getElementById("Citizen ID")?.nodeValue?.toString
    ) {
      const item: BookingItem = {
        name: document.getElementById("Name")?.nodeValue as string,
        surname: document.getElementById("Lastname")?.nodeValue as string,
        id: document.getElementById("Citizen ID")?.nodeValue as string,
        hospital: location,
        bookDate: bookingDate.toString(),
      };
      dispatch(addBooking(item))
    }
  };
  return (
    <div>
      <div>
        <TextField name="Name" />
        <label>Name</label>
      </div>
      <div>
        <TextField name="Lastname" />
        <label>Lastname</label>
      </div>
      <div>
        <TextField name="Citizen ID" />
        <label>Citizen ID</label>
      </div>
      <DateReserve
        onDateChange={(value: Dayjs) => {
          setBookingDate(value);
        }}
        onLocationCange={(value: string) => {
          setLocation(value);
        }}
      />

      <button
        className="block rounded-md bg-sky-600 hover:bg-indigo-600 px-3 py-2 text-white shadow-sm"
        onClick={makeBooking}
      >
        {" "}
        Check Car Avaibility
      </button>
    </div>
  );
}
