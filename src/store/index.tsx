import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useSelector } from "react-redux";
import aircraftReducer from "./../reducers/aircraft";
import flightReducer from "./../reducers/flight"
import rotationReducer from "./../reducers/rotation";
import scheduledDateReducer from "./../reducers/scheduledDate"
import { loadState } from "./browser-storage";

export const store = configureStore({
  reducer: {
    aircrafts: aircraftReducer,
    flights: flightReducer,
    rotations: rotationReducer,
    scheduledDate: scheduledDateReducer
  }
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
