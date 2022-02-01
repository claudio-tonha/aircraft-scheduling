import { Flight } from "../types/Flight";

export const calculateUtilisation = (flights: Flight[]) => {
    const totalFlightTime = flights.reduce((previous, current) => previous + (current.arrivaltime - current.departuretime) ,0);

    return parseFloat((totalFlightTime / 60 / 60 / 24 * 100).toFixed(2));
}

export const calculateTimeline = (flights: Flight[]) => {    
    let currentStartTime:number = 0;   
    
    if(flights.length === 0){
        return [{type: 'idle', percentage: 100}]
    }

    const timeline = [];
    for(let i = 0; i < flights.length; i++){
        const currentFlight = flights[i];
        
        timeline.push({type: i === 0 ? 'idle' : 'turnaround', percentage: convertSecondsToPercentage(currentFlight.departuretime - currentStartTime) });
        timeline.push({type: 'scheduled', percentage: convertSecondsToPercentage(currentFlight.arrivaltime - currentFlight.departuretime)  });  
        
        currentStartTime = currentFlight.arrivaltime
    }

    timeline.push({type: 'idle', percentage: convertSecondsToPercentage(86400 - flights[flights.length - 1].arrivaltime) });

    return timeline;
}

const convertSecondsToPercentage = (value:number) => {
    return parseFloat((value / 864).toFixed(2));
}