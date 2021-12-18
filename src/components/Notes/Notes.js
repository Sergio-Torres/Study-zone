import React, {useState} from 'react';
import {NoteCreator} from './NoteCreator';
import {NoteList} from './NoteList';

function Notes(){
    const[noteItems, setNotesItems] = useState([
    ]);

    const createNewNote = noteName =>{
        if(!noteItems.find(n=>n.name===noteName)){
            setNotesItems([...noteItems, {name: noteName}]);
//            DisplayNoteList({name: noteName});
        }
    }
    const DisplayNoteList = note=>{
        return (
            noteItems.map((n)=>(
                <NoteList note={n.name} key={note.name}/>
            ))

        )
    }

    
    return(
        <div>
            <NoteCreator callback={createNewNote}/>
            <div>                
                <DisplayNoteList/> 
            </div>
        </div>
    );

}

export default Notes;


