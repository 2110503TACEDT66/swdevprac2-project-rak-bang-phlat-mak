import { createSlice,PayloadAction } from "@reduxjs/toolkit";
import { ReservationItem } from "../../../interface";

type BookState = {
    bookItems:ReservationItem[]
}

const initialState:BookState={bookItems:[]}

export const bookSlice = createSlice({
    name:"bookItems",
    initialState,
    reducers:{
        addBooking :(state,action:PayloadAction<ReservationItem>)=>{
            const returnItem= state.bookItems.filter(obj=>{
                return(obj._id !== action.payload._id)
            })
            state.bookItems=returnItem
            state.bookItems.push(action.payload)

        },
        removeBooking:(state,action:PayloadAction<string>)=>{
            const returnItem= state.bookItems.filter(obj=>{
                return(obj._id !== action.payload)
            })
            state.bookItems=returnItem

        }
    }
})
export const{ addBooking,removeBooking}= bookSlice.actions
export default bookSlice.reducer