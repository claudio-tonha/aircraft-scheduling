import React from 'react';
import { useDispatch } from 'react-redux';
import { selectAircraft } from '../../reducers/aircraft';
import { selectRotation } from '../../reducers/rotation';
import { useAppSelector } from '../../store';
import { Aircraft as AircraftType } from './../../types/Aircraft'

type Props = {
    aircraft: AircraftType,
    selected: boolean
}

const Aircraft:React.FC<Props> = ({ aircraft, selected }) => {

    const { utilisation } = useAppSelector(selectRotation);

    const dispatch = useDispatch();

    const handleOnClick = () => {        
        dispatch(selectAircraft(!selected ? aircraft.ident : ""));  
    }

    return <div className={`aircraft ${selected ? "aircraft--selected" : ""}`} onClick={handleOnClick}>
        <div>{ aircraft.ident }</div>
        <div>({utilisation} %)</div>
    </div>
}

export default Aircraft;