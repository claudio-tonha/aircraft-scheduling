import React from 'react';
import { useDispatch } from 'react-redux';
import { removeRotation } from '../../reducers/rotation';
import { Rotation as RotationType } from "../../types/Rotation"

type Props = {
    rotation: RotationType
}

const Rotation:React.FC<Props> = ({rotation}) => {

    const dispatch = useDispatch();

    const handleClickRemove = () => {
        dispatch(removeRotation(rotation.id));
    }

    return (
        <div className="flight">
            <div>{rotation.id}</div>
            
            <div className='flight__details'>
                <div className='flight__origin__container'>
                    <div className="flight__origin">{rotation.origin}</div>
                    <div className="flight__departure">{rotation.readable_departure}</div>
                </div>
                <div className='flight__row'>
                    <hr className='flight__line'/>
                    <div className='flight__icon'>✈</div>
                </div>
                <div className='flight__destination__container'>
                    <div className="flight__destination">{rotation.destination}</div>
                    <div className="flight__arrival">{rotation.readable_arrival}</div>
                </div>
            </div>
            <button className="delete__rotation" onClick={handleClickRemove}>x</button>
        </div>
    )
}

export default Rotation