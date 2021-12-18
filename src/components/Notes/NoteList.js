import React from 'react';


export const NoteList = props =>(

    <div>
        <p key={props.note}>{props.note}</p>
    </div>
);
