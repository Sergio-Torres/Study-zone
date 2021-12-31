import React, {useState} from "react";

function BreakTime(){
    const[breakTimeLength, setBreakTimeLength] = useState(5);

    return(
        <div>
            <h3>{breakTimeLength}</h3>
            <button onClick={()=>{
                if(breakTimeLength<15){
                    setBreakTimeLength(breakTimeLength+1);
                }
            }}>+</button>
            <button onClick={()=>{
                if(breakTimeLength>5){
                    setBreakTimeLength(breakTimeLength-1);
                }
            }}>-</button>
        </div>
    );

}

export default BreakTime;