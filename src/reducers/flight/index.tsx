import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { RootState } from "../../store";
import { FlightList } from "../../types/FlightList";

export const getInitialState = ():FlightList => {
    return { flights: [] }
} 

export const fetchFlights = createAsyncThunk(
    "flights",
    async() => {
        const response = await fetch("https://infinite-dawn-93085.herokuapp.com/flights")
        return response.json();
    }
)

const flightSlicer =  createSlice({
    name: "flight",
    initialState: getInitialState(),
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchFlights.fulfilled, (state, action) => {
            state.flights = action.payload.data
        })
    }
});

export const loadFlights = (state: RootState) => state.flights; 

export default flightSlicer.reducer;