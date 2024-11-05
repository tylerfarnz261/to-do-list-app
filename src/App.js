import './App.scss';
import Note from './components/note/note.component';
import Navigation from './routes/navigation/navigation.component';
import {Routes, Route} from 'react-router-dom';
import Home from './routes/home/home.component';
import CreateNote from './components/create-note/create-note.component';
import React, {useState} from 'react';

function App() {


  //Implement PostGreSQL database
  const [notesDB, setNotesDB] = useState([
    {
        title: 'Grocery List',
        item: ['Buy Milk', 'Buy Eggs', 'Buy Bread'],
        date: new Date(),
    },
    {
        title: 'To-Do List',
        item: ['Clean Room', 'Do Laundry', 'Study'],
        date: new Date(),
    }
  ]);

  function addNoteToDB(newNote) {
    setNotesDB((previousNotes) => {
        return [...previousNotes, newNote]
    })
  }

  return (
    <Routes>
      <Route path='/' element={<Navigation db={notesDB} />} >
      <Route index element={<Home />} />
      <Route path='new-note' element={<CreateNote addNote={addNoteToDB}/>} />
        {notesDB.map((note, index) => {
          return <Route key={index} path={note.title} element={<Note note={note}/>} />
        })}
        {/* <Route index element={<Note />} /> */}
      </Route>
  </Routes>
  );
}

export default App;
