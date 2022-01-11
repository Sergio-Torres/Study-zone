import React, {useState} from 'react';

export const TaskCreator = props =>{

    const [newTaskName, setNewTaskName] = useState('');

    const updateNewTaskName = e => setNewTaskName(e.target.value);
    
    const createNewTask = () =>{
        props.callback(newTaskName);
        setNewTaskName('');
    };

    return(
        <div className="my-1">
            <input
                type="text"
                className="form-control"
                value={newTaskName}
                onChange={updateNewTaskName}
            />
            <button className="with-text" onClick={createNewTask}>
                Add 
               <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                </svg>
            </button>
        </div>
    );
}
