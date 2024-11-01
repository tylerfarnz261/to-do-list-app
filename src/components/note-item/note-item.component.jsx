import React, {useState} from "react";
import './note-item.styles.scss'
import { Checkbox } from "@mui/material";
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
function NoteItem({item, date, onDelete, id}) {

    const [isChecked, toggleChecked] = useState(false);

    function handleCheck () {
       return (isChecked? toggleChecked(false):toggleChecked(true));
    }

    function deleteNote() {
        onDelete(id)
    }
    
    return(
        <div className='item-container'>
        <div>
            <Checkbox 
                onChange={handleCheck} 
                sx={{alignSelf:'center', 
                    color:'#795757', 
                    '&.Mui-checked':{color:'#795757'}
                    }}type='checkbox'
                />
            <p 
                style={
                    {textDecoration: isChecked ? 'line-through': 'none'}}>
                    {item}</p>
            </div>
            <DeleteOutlineIcon onClick ={deleteNote} sx={{ '&:hover':{cursor: 'pointer'}, alignSelf:'center'}}/>
        </div>
    )
}

export default NoteItem;