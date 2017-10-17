import React from 'react';

import NotesStore from '../stores/NotesStore.js';
import NotesActions from '../actions/NotesActions.js';

import NoteEditor from './NoteEditor.js';
import NotesGrid from './NotesGrid.js';

import './App.less';

function getStateFromFlux() {
    return {
        isLoading: NotesStore.isLoading(),
        notes: NotesStore.getNotes()
    };
}

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            isLoading: NotesStore.isLoading(),
            notes: NotesStore.getNotes()
        };
    }

    componentWillMount() {
        NotesActions.loadNotes();
    }

    componentDidMount() {
        NotesStore.addChangeListener(this._onChange.bind(this));
    }

    componentWillUnmount() {
        NotesStore.removeChangeListener(this._onChange.bind(this));
    }

    handleNoteDelete(note) {
        NotesActions.deleteNote(note.id);
    }

    handleNoteAdd(data) {
        NotesActions.createNote(data);
    }
    
    render() {
        return (
            <div className='App'>
                <h2 className='App__header'>Notesapp</h2>
                <NoteEditor onNoteAdd={this.handleNoteAdd.bind(this)} />
                <NotesGrid notes={this.state.notes} onNoteDelete={this.handleNoteDelete.bind(this)} />
            </div> 
        );
    }

    _onChange() {
        this.setState(getStateFromFlux());
    }
};

export default App;
