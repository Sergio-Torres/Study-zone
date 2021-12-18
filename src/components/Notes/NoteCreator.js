import React, {useState} from 'react';

export const NoteCreator = props =>{
        
    const [newNote, setNewNote] = useState('Please enter your note');

    const updateNewNote = e => setNewNote(e.target.value);

    const createNewNote = () =>{
        props.callback(newNote);
        setNewNote('');
    }

    return(
        <div>
            <input 
                type="text"
                className="form-control"
                value={newNote}
                onChange={updateNewNote}
            />
            <button className="btn" onClick={createNewNote}>
                add
            </button>
        </div>
    );


} 
