'use server'
import getReservations from "@/libs/getReservations"
import { HospitalJson, HotelItem, HotelJson, ReservationJson } from "../../interface"
import { Suspense } from "react"
import { LinearProgress } from "@mui/material"
import ReservationCatalogue from "./ReservationCatalogue"

export default async function ReservationList({reservationJson, role, token}:{reservationJson:ReservationJson, role:string, token: string}) {
    
    const reservationJsonReady = reservationJson

    return (
        <div className="w-[100%] flex flex-col items-center pt-20 space-y-10">
            <div className="text-4xl font-medium">
                <Suspense fallback={<p>Loading...<LinearProgress/></p>}>
                    { reservationJsonReady.count!=0
                    ?
                        <div className="ml-10"> View {reservationJsonReady.count} Reservations {
                            role=="admin"?<div className="text-pink-700"> as admin </div> : null
                        }
                        </div>
                        
                    :  
                        <div className="text-pink-700 w-[100%] flex flex-col items-center pt-20 space-y-10"> You don't have any reservations </div>
                    }
                    <ReservationCatalogue reservationJson={reservationJson} token={token}/>
                </Suspense>
            </div>
        </div>
    )
}