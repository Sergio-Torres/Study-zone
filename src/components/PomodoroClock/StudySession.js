import React, {useState} from 'react';


function StudySession(){
    const[sessionLength, setSessionLength] = useState(25);
    const[textButton, setTextButton] = useState('start');
    
    const startStudySession = ()=>{
        setTextButton('pause');
        let vamos = sessionLength;
        setInterval(function(){
            if(vamos>0){
                vamos--;
                setSessionLength(vamos);
                console.log(vamos);
            } 
            else{
                vamos = sessionLength;
            }
                    
        },1000);
    }
    return(   
        
        <div>
            <h2>{sessionLength}</h2>
            
            <button onClick={()=>{
                if(sessionLength<60){
                    setSessionLength(sessionLength+1)
                }}}>
                +
            </button>           
            <button onClick={()=>{
                if(sessionLength>10){
                    setSessionLength(sessionLength-1)
                }}}>
                -
            </button>
            <button onClick={startStudySession}>{textButton}</button>
            
        </div>
        

    );

}

export default StudySession;
