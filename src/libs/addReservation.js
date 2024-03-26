import {dbConnect} from "@/db/dbConnect"
import Reservation from "@/db/models/Reservation"

export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({error: "Method not allowed"})
    }

    const [user, shop, resDate] = req.body

    try {
        await dbConnect()
        const reservation = Reservation.create({
            "user": user,
            "Shop": shop,
            "resDate": resDate
        });

        res.status(201).json({success: true})
    } catch(error) {
        console.log(error)
        res.status(500).json({error: 'Internal Server Error'})
    }
}