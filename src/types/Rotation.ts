import { Flight } from "./Flight";

export interface Rotation extends Flight{
    date: Date,
    aircraft: string
}   