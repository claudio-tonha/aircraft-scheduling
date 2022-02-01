import React, { useEffect } from 'react';
import Flight from '../Flight';
import { useAppSelector } from '../../store';
import { fetchFlights, loadFlights } from '../../reducers/flight';
import { useDispatch } from 'react-redux';
import "./style.css"

const FlightList = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchFlights());
    }, [])

    const { flights } = useAppSelector(loadFlights);

    return <div className='flights'>
        <h3 className='title'>Flights</h3>        
        {flights.map(x => <Flight key={x.id} flight={x}></Flight>)}
        </div>;
}

export default FlightList;