import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit"
import { RootState } from "../../store";
import { Aircraft } from "../../types/Aircraft";
import { AircraftList } from "../../types/AircraftList";

export const getInitialState = ():AircraftList => {
    return { aircrafts: [], selectedAircraft: "" } 
} 

export const fetchAircraft = createAsyncThunk(
    "aircrafts",
    async() => {
        const response = await fetch("https://infinite-dawn-93085.herokuapp.com/aircrafts")
        return await response.json();
    }
)

const aircraftSlicer =  createSlice({
    name: "aircraft",
    initialState: getInitialState(),
    reducers: {
        selectAircraft(state, action:PayloadAction<string>){
            state.selectedAircraft = action.payload
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchAircraft.fulfilled, (state, action) => {
            state.aircrafts = action.payload.data
        })
    }
});

export const loadAircraft = (state: RootState) => state.aircrafts; 
export const { selectAircraft } = aircraftSlicer.actions

export default aircraftSlicer.reducer;