import React from 'react';
import Notes from './Notes';

import uuid from 'uuid';

var notes = [{
    id: uuid.v4(),
    task: 'Wake Up'
}, {
    id: uuid.v4(),
    task: 'Go office'
}];


export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            notes: [{
                id: uuid.v4(),
                task: 'First task'
            }, {
                id: uuid.v4(),
                task: 'Second task'
            }]
        }
    }

    render() {
        const notes = this.state.notes;
        return (
            <div>
                <input type="text" ref="name"/><button onClick={this.addNote}> Add new </button>
                <Notes notes={notes} onDelete={this.deleteNote} />
            </div>
        )
    }

    addNote = () => {

        this.setState({
            notes: this.state.notes.concat([{
                id: uuid.v4(),
                task: this.refs.name.value || 'New task'
            }])
        })
    }

    deleteNote = (id, e) => {
        e.stopPropagation();
        this.setState({
            notes: this.state.notes.filter(function (note) {
                return note.id != id;
            })
        })
    }
}