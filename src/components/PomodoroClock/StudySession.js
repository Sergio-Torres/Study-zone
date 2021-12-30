import React, {useState, useEffect} from 'react';


function StudySession(){
    const[sessionLength, setSessionLength] = useState(25);
    const[sessionLengthControl, setSessionLengthControl] = useState(sessionLength);
    const[textButton, setTextButton] = useState('start');
    const [pause, setPause] = useState(null);
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
                    
                    if(count >0){
                        count --;
                        setSessionLengthControl(count );
                        
                    } 
                    else{
                        count  = sessionLength;
                    }                                      
            },1000);   
        }    
        return ()=> clearInterval(interval);                      
        
    },[pause]);
    
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
            <button onClick={StartStudySession}>{textButton}</button>
            <button onClick={resetTimer}>reset</button>
            
        </div>
            

    );

}
            
export default StudySession;
