import React, { useState, useEffect } from 'react';
import {TaskRow} from './TaskRow';
import {TaskBanner} from './TaskBanner';
import {TaskCreator} from './TaskCreator';
import {VisibilityControl} from './Control';

function Tasks(){

    const[userName, setUserName]=useState('sergio');
    const[taskItems, setTaskItems] = useState([]);
    
    const [showCompleted, setShowCompleted] = useState(true);
    
    useEffect(()=>{
        let data = localStorage.getItem('tasks');
        if(data != null){
            setTaskItems(JSON.parse(data));
        }
        else{
            setUserName('Sergio Local')
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
        const newTaskItems = [...taskItems];
        const Itask = newTaskItems.findIndex(i => i === task);
        newTaskItems.splice(Itask,1);
        setTaskItems(newTaskItems);
    };


    /*It searches the array of tasks for one that matches, if it finds
     it, change its value (true to false or false to true)*/
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
            <TaskBanner userName={userName} taskItems={taskItems}/>
            <TaskCreator callback={createNewTask}/>
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
    );
}

export default Tasks;
