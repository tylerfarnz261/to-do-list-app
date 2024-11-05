import React, {useState} from 'react';
import NoteItem from '../note-item/note-item.component';
import { useNavigate } from 'react-router-dom';
import TextInput from '../text-input/text-input.component';
import './note.style.scss';



function Note ({note}) {
    console.log(note.item);
    const [itemList, setItemList] = useState(note.item);
    const [clicked, setClicked] = useState(false);
    const navigate = useNavigate();

    function deleteNote(id){
        setItemList(prevNotes => {
            return prevNotes.filter((noteItem, index) => {
                return index!==id;
            });
        });
    }

    function addNote(newNote) {
    
        setItemList((previousItems) => {
            return [...previousItems, newNote]
        })

    }

    function handleClick() {
        navigate('/new-note');
    }

    return (
        <div className='note-container'>
            <div>
                <h1 className='list-title'>{note.title}</h1>
            </div>
            {
                itemList.map((note, index) => {
                    console.log(note);
                    return (<NoteItem key={index} 
                        id = {index}
                        item={note}
                        date={note}
                        onDelete = {deleteNote}
                    />)
                })
            }
            {note.id === 'home' ? <button 
            className='new-note-btn'
            onClick={handleClick}
            >New Note</button> : <TextInput onAdd={addNote}/>}

        </div>
    )
}

export default Note