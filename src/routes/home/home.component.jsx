import React, { Fragment } from 'react';
import Note from '../../components/note/note.component';
import './home.styles.scss';


const homePageNote = {
    id:'home',
    title: 'Welcome to the Notes App',
    item: ['View your notes by clicking on the navigation bar',
        'Create a new note by clicking the button below'
    ],
    date: new Date(),
}

const Home = () => {



    return (
        <Fragment >
            <Note note={homePageNote}/>
        </Fragment>
    );
};

export default Home;