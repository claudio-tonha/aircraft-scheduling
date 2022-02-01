import React from 'react';
import { loadAircraft } from '../../reducers/aircraft';
import { selectRotation } from "../../reducers/rotation";
import { selectScheduledDate } from '../../reducers/scheduledDate';
import { useAppSelector } from "../../store";
import Rotation from "../Rotation";
import "./style.css";

const RotationList: React.FC = () => {
    const { rotations } = useAppSelector(selectRotation);
    const { date: selectedDate } = useAppSelector(selectScheduledDate);

    const { selectedAircraft } = useAppSelector(loadAircraft);

    const getRotations = () => {
        if(selectedAircraft){
            const filteredRotations = rotations.filter(x => x.date.getTime() === selectedDate.getTime());

            if(filteredRotations.length){
                return filteredRotations.map(x => <Rotation key={x.id} rotation={x}/>);
            }
            
            return <div className='msg--warning'>Please select one or more flights to this aircraft!</div>
        }
        
        return <div className='msg--warning'>Please select one aircraft before adding a new flight!</div>
    }

    return <div className="rotations">
        <h3 className='title'>Rotation {selectedAircraft}</h3>
        {getRotations()}
        </div>
}

export default RotationList;