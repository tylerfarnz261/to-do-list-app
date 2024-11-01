import React, {useState} from 'react';
import NoteItem from '../note-item/note-item.component';

import TextInput from '../text-input/text-input.component';
import './note.style.scss';



function Note () {

    const [noteList, setNoteList] = useState([
        {
            item: 'Buy Milk',
            date: new Date()
        }
    ]);
    
    function deleteNote(id){
        setNoteList(prevNotes => {
            return prevNotes.filter((noteItem, index) => {
                return index!==id;
            });
        });
    }

    function addNote(newNote) {
    
        setNoteList((previousItems) => {
            return [...previousItems, newNote]
        })

    }

    return (
        <div className='note-container'>
            <div>
                <h1 className='list-title'>Grocery List</h1>
            </div>
            {
                noteList.map((note, index) => {
                    return (<NoteItem key={index} 
                        id = {index}
                        item={note.item}
                        date={note.date}
                        onDelete = {deleteNote}
                    />)
                })
            }
            <TextInput onAdd={addNote}/>
            
        </div>
    )
}

export default Note