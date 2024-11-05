import React, {useState} from 'react'
import Fab from "@mui/material/Fab";
import AddIcon from '@mui/icons-material/Add';
import Zoom from "@mui/material/Zoom";
import './text-input.styles.scss'

function TextInput ({onAdd}) {

    const [newItemText, setNewItemText] = useState('');
    const [isExpanded, setExpanded] = useState(false);

    function expand() {
        setExpanded(true);
    }

    function handleChange(event) {
        setNewItemText(event.target.value);
    }

    function addNote(){
        onAdd(newItemText);
        setExpanded(false);
        setNewItemText('');
    }

    return(
        <div className='add-item-container'>
            <input onClick={expand} className='addItem' onChange={handleChange} type='text' placeholder='Add Item' name='newItemText' value={newItemText}/>
            <Zoom in={isExpanded ? true : false}>
                <Fab sx={{margin:'0px 5px', backgroundColor:"#795757"}}  size='small' onClick={addNote}  aria-label="add">
                    <AddIcon />
                </Fab>
            </Zoom>
        </div>
    )
}

export default TextInput


