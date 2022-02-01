import React from "react";
import { useDispatch } from "react-redux";
import { nextDate, previousDate, selectScheduledDate } from "../../reducers/scheduledDate"
import { useAppSelector } from "../../store";
import "./style.css";

const ScheduledDate = () => {

    const dispatch = useDispatch();
    const scheduledDate = useAppSelector(selectScheduledDate);

    const handlePreviousDate = () => {
        dispatch(previousDate())
    }

    const handleNextDate = () => {
        dispatch(nextDate())
    }

    return <div className="date__navigation">
        <button className="btn__navigate" onClick={handlePreviousDate}>&#8592;</button>
        <div>{scheduledDate.date.toLocaleDateString()}</div>
        <button className="btn__navigate" onClick={handleNextDate}>&#8594;</button>
    </div>
}

export default ScheduledDate;