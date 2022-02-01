import {  createSlice, PayloadAction } from "@reduxjs/toolkit"
import { calculateUtilisation } from "../../services/util";
import { RootState } from "../../store";
import { Flight } from "../../types/Flight";
import { RotationList } from "../../types/RotationList";

type Props = {
    flight: Flight,
    date: Date,
    aircraft: string
}

const getInitialState = () : RotationList => {
    return { rotations: [], utilisation: 0 };
}

const rotationSlicer =  createSlice({
    name: "rotations",
    initialState: getInitialState(),
    reducers: {
        addRotation(state, action: PayloadAction<Props>) {
            state.rotations.push({...action.payload.flight, date: action.payload.date, aircraft: action.payload.aircraft})
            state.utilisation = calculateUtilisation(state.rotations);
        },
        removeRotation(state, action: PayloadAction<string>){
            const index = state.rotations.findIndex(x => x.id === action.payload);
            state.rotations.splice(index, 1);
            state.utilisation = calculateUtilisation(state.rotations);
        }
    },
    extraReducers: {}
});

export const { addRotation, removeRotation } = rotationSlicer.actions;

export const selectRotation = (state: RootState) => state.rotations; 

export default rotationSlicer.reducer;