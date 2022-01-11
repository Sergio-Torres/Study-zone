import React,{useState} from 'react';
import Settings from './Settings';
import SettingsContext from './SettingsContext';
import Timer from './Timer';
import './pomodoroClock.css';

function PomodoClock(){
    const [showSettings, setShowSettings] = useState(false);
    const [workMinutes,setWorkMinutes] = useState(45);
    const [breakMinutes, setBreakMinutes] = useState(15);

    return(
        
        <div className='clock'>
            <SettingsContext.Provider value={{
                showSettings,
                setShowSettings,
                workMinutes,
                breakMinutes,
                setWorkMinutes,
                setBreakMinutes
            }}>
                {showSettings ? <Settings/> : <Timer/>}
            </SettingsContext.Provider>
            
        </div>
        
    );    
}

export default PomodoClock;
