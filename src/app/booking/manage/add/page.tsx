'use server'
import { dbConnect } from "@/db/dbConnect"
import Reservation from "@/db/models/Reservation"
import { revalidateTag } from "next/cache"
import { redirect } from "next/navigation"
import { headers } from "next/headers"

export default async function Add() {
    
    const headerList = headers()
    console.log(headerList)
    const user = headerList.get("user")
    const shop = headerList.get("shop")
    const date = headerList.get("resDate")

    const addReservation = async () => {
        'use server'
        try {
            await dbConnect()
            const reservation = await Reservation.create({
                "user": user,
                "shop": shop,
                "resDate": date
            })
        } catch(error) {
            console.log(error)
        }
        revalidateTag('reservations')
        redirect('/hospital')
    }

    return (
        <main className="flex flex-col items-center text-8xl">
            Adding reservation....
            {addReservation()}
        </main>
    )
}