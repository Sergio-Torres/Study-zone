import React from 'react';

function SessionTime(){
    let sessionTime = 25;
    let count = sessionTime * 60;
    
    const timeIncrement = () => sessionTime<=60 ? sessionTime++ : sessionTime=60;
    const timeDecrement = () => sessionTime>=10 ? sessionTime-- : sessionTime=60;
    return(
        <div>
            <button onClick={timeIncrement}>+</button>
            <div>
                time = count
            </div>
            <button onClick={timeDecrement}>+</button>
        </div>
    );

}

export default SessionTime;
