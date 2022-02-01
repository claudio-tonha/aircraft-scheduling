import React from 'react';
import AircraftList from '../AircraftList';
import FlightList from '../FlightList';
import RotationList from '../RotationList';
import ScheduledDate from '../ScheduledDate';
import Timeline from '../Timeline';

const AppComponent:React.FC = () => {
    return <div className="App">
                <header className="header">
                    <ScheduledDate />
                </header>
                <section className="content">
                    <AircraftList />              
                    <RotationList />
                    <FlightList />
                    <Timeline />
                </section>                
            </div>   
}

export default AppComponent