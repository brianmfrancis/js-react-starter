import React, { Component } from 'react';
import Immutable from 'immutable';
import SearchBar from './search_bar';
import Note from './note';
import Welcome from './welcome';

// example class based component (smart component)
class App extends Component {
  constructor(props) {
    super(props);

    // init component state here
    this.state = {
      notes: Immutable.Map(),
      //...
    };
    this.addNote = this.addNote.bind(this);
    this.updateNote = this.updateNote.bind(this);
    this.deleteNote = this.deleteNote.bind(this);
  }

  addNote(id, title) {
    this.setState({
      notes: this.state.notes.set(id, { title, x: ((id + 1) * 20), y: ((id + 1) * 20) }),
    });
    // console.log('add note');
  }

  deleteNote(id) {
    this.setState({
      notes: this.state.notes.delete(id),
    });
  }

  updateNote(id, fields) {
    this.setState({
      notes: this.state.notes.update(id, (n) => { return Object.assign({}, n, fields); }),
    });
  }

  render() {
    return (
      <div>
        <Welcome />
        <SearchBar onSubmit={this.addNote} />
        {this.state.notes.entrySeq().map(([id, note]) => {
          return <Note id={id} key={id} title={note.title} text={note.text} x={note.x} y={note.y} onDelete={this.deleteNote} onSave={this.updateNote} onDrag={this.updateNote} />;
        })}
      </div>
    );
  }
}

export default App;
