import React, { useEffect } from 'react';
import Aircraft from '../Aircraft';
import { useAppSelector } from '../../store';
import { fetchAircraft, loadAircraft } from '../../reducers/aircraft';
import { useDispatch } from 'react-redux';
import "./style.css"

const AircraftList:React.FC = () => {

    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(fetchAircraft());
    }, [])

    const { aircrafts, selectedAircraft } = useAppSelector(loadAircraft);

    return (<div className='aircrafts'>
        <h3 className='title'>Aircrafts</h3>
        {aircrafts.map(x => <Aircraft key={x.ident} selected={selectedAircraft === x.ident} aircraft={x}></Aircraft>)}
        </div>);
}

export default AircraftList;