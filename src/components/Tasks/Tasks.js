import React, { useState, useEffect } from 'react';
import {TaskRow} from './TaskRow';
import {TaskBanner} from './TaskBanner';
import {TaskCreator} from './TaskCreator';
import {VisibilityControl} from './Control';

import './task.css'

function Tasks(){

    const[taskItems, setTaskItems] = useState([]);
    
    const [showCompleted, setShowCompleted] = useState(true);
    
    useEffect(()=>{
        let taskData = localStorage.getItem('tasks');
        
        if(taskData != null){
            setTaskItems(JSON.parse(taskData));
        }
        else{

            setTaskItems([
                {name: 'Task Example', done: false}
            ])
            setShowCompleted(true)
        }
    },[]);
    
    //save in the localStorage
    useEffect(()=>{
        localStorage.setItem('tasks', JSON.stringify(taskItems));
    },[taskItems]);
     
    const createNewTask = taskName =>{   
        if(!taskItems.find(t=>t.name ===taskName)){
            setTaskItems([...taskItems, {name: taskName, done: false}])
        }
    }

    const deleteTask = task =>{
        console.log(task);
        const newTaskItems = [...taskItems];
        const Itask = newTaskItems.findIndex(i => i === task);
        newTaskItems.splice(Itask,1);
        setTaskItems(newTaskItems);
    };

    const toggleTask = task=>
        setTaskItems(taskItems.map(t=>(t.name === task.name ? {...t, done: !t.done} : t )));

    const TaskTableRows = (doneValue)=>
        taskItems
            .filter(task => task.done === doneValue)
            .map(task =>(
                <TaskRow task={task} key={task.name} 
                toggleTask={toggleTask}
                deleteTask={deleteTask}
                />
    ));
    
    return(
        <div> 
            <div className='task-banner'>
                <TaskBanner taskItems={taskItems}/>
            </div>
            <div className='content-task'>
                <div className='task-creator'>
                    <TaskCreator callback={createNewTask}/>
                </div>
                
                <table className="table table-striped table-bordered">
                    <thead>
                        <tr>
                            <th>Description</th>
                            <th>Done</th>
                        </tr>
                    </thead>
                    <tbody>
                        {TaskTableRows(false)}        
                    </tbody>
                </table>
                
                <div className="bg-secondary-text-white text-center p-2">
                    <VisibilityControl 
                        description="Completed Tasks"
                        isChecked={showCompleted}
                        callback={checked=> setShowCompleted(checked)}
                    />
                </div>
                {
                    showCompleted && (
                        <table className="table table-striped table-bordered">
                            <thead>
                                <tr>
                                    <th>Description</th>
                                    <th>Done</th>
                                </tr>
                            </thead>
                            <tbody>
                                {TaskTableRows(true)}
                            </tbody>
                        </table>
                    )        
                }

            </div>         
            
        </div>
    );
}

export default Tasks;
