import React,{useState} from 'react';
import { createContext } from 'react';

export const TimelineContext = createContext();
export const  TimeLineProvider = ({children}) => {
    const [timeline, setTimeline] = useState([]);
    const data={
        timeline,
        setTimeline
    }
    return (
            <TimelineContext.Provider value={data}>
                 {children}
            </TimelineContext.Provider>
    );
};

