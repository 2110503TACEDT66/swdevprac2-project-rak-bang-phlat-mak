import { HotelBooking, ReservationItem, ReservationJson } from "../../interface";
import CardReservation from "./CardReservation";

export default function ReservationCatalogue({reservationJson, token}:{reservationJson:ReservationJson, token:string}) {
    
    // console.log(reservationJson.data)

    const reservationArray = reservationJson.data

    return (
        <>
        <div
        style={{
            margin: "20px",
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "space-around",
            alignContent: "space-around",
          }}>
                {
                    reservationArray.map((reservationItem) => (
                        <div className="w-full h-auto my-5">
                            <CardReservation shop={reservationItem.shop} resDate={reservationItem.resDate} resID={reservationItem._id} token={token}/>
                        </div>
                    ))
                }
        </div>
        </>  
    )
}