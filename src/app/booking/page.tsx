import getReservations from "@/libs/getReservations";
import ReservationList from "@/components/ReservationList";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import getUserProfile from "@/libs/getUserProfile";

export default async function BookingPage() {
    const session = await getServerSession(authOptions)

    const token = session?.user.token || ''
    let reservations = await getReservations(token)
    let user = await getUserProfile(token)
    const userRole = user.data.role
    return (
        <ReservationList reservationJson={reservations} role={userRole} token={token}/>
    )
}