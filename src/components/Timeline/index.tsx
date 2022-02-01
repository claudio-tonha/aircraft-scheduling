import React from 'react';
import { selectRotation } from '../../reducers/rotation';
import { selectScheduledDate } from '../../reducers/scheduledDate';
import { calculateTimeline } from '../../services/util';
import { useAppSelector } from '../../store';
import "./style.css";

const Timeline = () => {
    const { rotations } = useAppSelector(selectRotation);
    const { date: selectedDate } = useAppSelector(selectScheduledDate);

    const timeline = calculateTimeline(rotations.filter(x => x.date.getTime() === selectedDate.getTime()));

    return (<div className='timeline'>
            {timeline.map(x => <span style={{width: `${x.percentage}%` }} className={x.type}>&nbsp;</span>)}
        </div>)
}

export default Timeline;