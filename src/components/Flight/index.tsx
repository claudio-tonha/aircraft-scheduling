import React from 'react';
import { useDispatch } from 'react-redux';
import { loadAircraft } from '../../reducers/aircraft';
import { addRotation, selectRotation } from '../../reducers/rotation';
import { selectScheduledDate } from '../../reducers/scheduledDate';
import { useAppSelector } from '../../store';
import { Flight as FlightType } from './../../types/Flight'

type Props = {
    flight: FlightType
}

const Flight:React.FC<Props> = ({ flight }) => {

    const dispatch = useDispatch();
    const { date: selectedDate } = useAppSelector(selectScheduledDate);
    const { selectedAircraft } = useAppSelector(loadAircraft);
    const { rotations } = useAppSelector(selectRotation);

    const handleOnClick = () => {
        if(selectedAircraft && validateOnAddFlight()){
            dispatch(addRotation({ flight, date: selectedDate,  aircraft: selectedAircraft}));
        }        
    }

    const validateOnAddFlight = ():boolean => {

        const rotationsOfSomeData = rotations.filter(x => x.date.getTime() === selectedDate.getTime());

        if(rotationsOfSomeData.some(x => x.id === flight.id)){
            alert("Flight was already added!")
            return false;
        }

        if(rotationsOfSomeData.length){            
            const lastRotation = rotationsOfSomeData[rotationsOfSomeData.length - 1];
            if(lastRotation.destination !== flight.origin){
                alert("You should select a flight that has same origin of the last destination!")
                return false;
            }

            if(flight.departuretime < lastRotation.arrivaltime){
                alert("You should select a flight that has departure time after the last arrival time!")
                return false;
            }
        }       

        return true;
    }

    return <div className="flight" onClick={handleOnClick}>
    <div>{flight.id}</div>
    
    <div className='flight__details'>
        <div className='flight__origin__container'>
            <div className="flight__origin">{flight.origin}</div>
            <div className="flight__departure">{flight.readable_departure}</div>
        </div>
        <div className='flight__row'>
            <hr className='flight__line'/>
            <div className='flight__icon'>✈</div>
        </div>
        <div className='flight__destination__container'>
            <div className="flight__destination">{flight.destination}</div>
            <div className="flight__arrival">{flight.readable_arrival}</div>
        </div>
    </div>
</div>
}

export default Flight;