import {  createSlice, PayloadAction } from "@reduxjs/toolkit"
import * as moment from "moment";
import { RootState } from "../../store";
import { Flight } from "../../types/Flight";

type Props = {
    date: Date
}

const scheduledDateSlicer =  createSlice({
    name: "rotations",
    initialState: { date: new Date() } as Props,
    reducers: {
        nextDate(state, action: PayloadAction) {
            let newDate = new Date(state.date);
            newDate.setDate(newDate.getDate() + 1);
            state.date = newDate
        },
        previousDate(state, action: PayloadAction) {
            let newDate = new Date(state.date);
            newDate.setDate(newDate.getDate() - 1);
            state.date = newDate
        }
    },
    extraReducers: {}
});

export const { nextDate, previousDate } = scheduledDateSlicer.actions;

export const selectScheduledDate = (state: RootState) => state.scheduledDate; 

export default scheduledDateSlicer.reducer;