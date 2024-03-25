import { createSlice,PayloadAction } from "@reduxjs/toolkit";
import { BookingItem } from "../../../interface";

type BookState = {
    bookItems:BookingItem[]
}

const initialState:BookState={bookItems:[]}

export const bookSlice = createSlice({
    name:"bookItems",
    initialState,
    reducers:{
        addBooking :(state,action:PayloadAction<BookingItem>)=>{
            const returnItem= state.bookItems.filter(obj=>{
                return(obj.id !== action.payload.id)
            })
            state.bookItems=returnItem
            state.bookItems.push(action.payload)

        },
        removeBooking:(state,action:PayloadAction<string>)=>{
            const returnItem= state.bookItems.filter(obj=>{
                return(obj.id !== action.payload)
            })
            state.bookItems=returnItem

        }
    }
})
export const{ addBooking,removeBooking}= bookSlice.actions
export default bookSlice.reducer