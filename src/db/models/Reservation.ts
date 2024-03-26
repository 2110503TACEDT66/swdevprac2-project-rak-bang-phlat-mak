import mongoose, { mongo } from "mongoose";

const ReservationSchema = new mongoose.Schema({
  resDate: {
      type: Date,
      required: true
  },
  user: {
      type: mongoose.Schema.ObjectId,
      ref: 'Customer',
      required: true
  },
  shop: {
      type: mongoose.Schema.ObjectId,
      ref: 'Shop',
      required: true
  },
  createdAt: {
      type: Date,
      default: Date.now
  }
});

const Reservation = mongoose.models.Reservation || mongoose.model("Reservation", ReservationSchema)
export default Reservation
