import React from 'react';

export const NoteList = props =>(
    <div>
        <p key={props.note.name}>{props.note}</p>
        
        <button onClick={()=>props.deleteNote(props.note)}>
            delete
        </button>
        
    </div>

);