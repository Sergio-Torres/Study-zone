import React, {useState} from 'react';
import {NoteCreator} from './NoteCreator';
import {NoteList} from './NoteList';

function Notes(){
    const[noteItems, setNotesItems] = useState([
        {name: 'nota numero 1'},
        {name: 'nota numero 2'},
        {name: 'nota numero 3'}
    ]);

    const createNewNote = noteName =>{
        if(!noteItems.find(n=>n.name===noteName)){
            setNotesItems([...noteItems, {name: noteName}]);

        }
    }  
   
    const deleteNote= note =>{
        const newNoteItems = [...noteItems];
        const idNote = newNoteItems.findIndex(i=>i.name===note);
        newNoteItems.splice(idNote,1);          
        setNotesItems(newNoteItems);
    };

    const DisplayNoteList =()=>{
        return (
            noteItems.map(note=>(
                <NoteList note={note.name} key={note.name}
                deleteNote={deleteNote}
                editNote={editNote}
                />
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