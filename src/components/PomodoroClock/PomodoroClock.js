import React, {useState, useEffect}from 'react';


function PomodoClock(){
    const[sessionLength, setSessionLength] = useState(25);
    const[sessionLengthControl, setSessionLengthControl] = useState(sessionLength);
    const[breakTimeLength, setBreakTimeLength] = useState(5);
    const[breakTimeLengthControl, setBreakTimeLengthControl] = useState(breakTimeLength);

    const[textButton, setTextButton] = useState('start');
    const [pause, setPause] = useState(null);
    const[stopBreak, setStopBreak] = useState(null);

    const[control,setControl] = useState(0);

    const StartStudySession = ()=>{   
        if(control===0){
            setPause(true);
            setTextButton('pause');
            setControl(1);
        }
        else{
            setPause(false);
            setTextButton('start');
            setControl(0);
        }      

    }
    const resetTimer = () =>{
        setPause(false);
        setSessionLengthControl(25);
    }

    useEffect(()=>{
        let interval;
        let count  = sessionLengthControl;
        
        if(pause){
            interval =setInterval(function(){
                    setBreakTimeLengthControl(breakTimeLength);
                    if(count >0){
                        count --;
                        setSessionLengthControl(count );       
                    } 
                    else{
                        setPause(false);     
                        setStopBreak(true);
                        count  = sessionLength;
                        }                                      
            },1000);   
        }    
        return ()=> clearInterval(interval);                      
        
    },[pause]);

    useEffect(()=>{
        let interval;
        let count  = breakTimeLengthControl;
        
        if(stopBreak){
            interval =setInterval(function(){
                    setSessionLengthControl(sessionLength);
                    if(count >0){
                        count --;
                        setBreakTimeLengthControl(count);
                            
                    } 
                    else{
                        setStopBreak(false);
                        setPause(true);
                        count  = breakTimeLength;
                    }                                      
            },1000);   
        }    
        return ()=> clearInterval(interval);                      
        
    },[stopBreak]);


    return(
        <div>
            <h2>{sessionLengthControl}</h2>
            
            <button onClick={()=>{
                if(sessionLength<60){
                    setSessionLength(sessionLength+1);
                    setSessionLengthControl(sessionLength);
                }}}>
                +
            </button>           
            <button onClick={()=>{
                if(sessionLength>10){
                    setSessionLength(sessionLength-1);
                    setSessionLengthControl(sessionLength);
                }}}>
                -
            </button>

            <h3>{breakTimeLengthControl}</h3>
            <button onClick={()=>{
                if(breakTimeLength<15){
                    setBreakTimeLength(breakTimeLength+1);
                    setBreakTimeLengthControl(breakTimeLength);
                }
            }}>+</button>
            <button onClick={()=>{
                if(breakTimeLength>3){
                    setBreakTimeLength(breakTimeLength-1);
                    setBreakTimeLengthControl(breakTimeLength);
                }
            }}>-</button>

            <button onClick={StartStudySession}>{textButton}</button>
            <button onClick={resetTimer}>reset</button>
            
        </div>

    );
}

export default PomodoClock;
