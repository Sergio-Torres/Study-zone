import React, {useState} from 'react';
import {NoteCreator} from './NoteCreator';
import {NoteList} from './NoteList';
import { NotesBanner } from './NotesBanner';
import './notes.css';

function Notes(){
    const[noteItems, setNotesItems] = useState([
        {name: 'Note example (mangoes are delicious)'}       
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
               
                />
            ))
        )
    }

    return(
        <div>
            <div className='notes-banner'>
                <NotesBanner/>
            </div> 
            <div className="content-note">
                <NoteCreator callback={createNewNote}/>
                <DisplayNoteList/> 
            </div>
        </div>
        
    );

}

export default Notes;