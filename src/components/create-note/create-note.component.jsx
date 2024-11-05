import React from "react";
import './create-note.styles.scss';
import {useNavigate} from 'react-router-dom';

function CreateNote ({addNote}) {

    const [noteTitle, setNoteTitle] = React.useState('');
    const navigate = useNavigate();
    function handleChange(event) {
        const {value} = event.target;
        setNoteTitle(value);
    }

    function handleClick() {
        addNote({
            title: noteTitle,
            item: [],
            date: new Date()
        });
        navigate(`/${noteTitle}`);
    }

    return(
        <div className="create-note">
            <h1 className="note-text">Create Note</h1>
            <input onChange={handleChange} value={noteTitle} type="text" className="note-input" placeholder="Enter note title" />
            <button onClick={handleClick} className="note-button">Submit</button>
        </div>
    );
}

export default CreateNote;