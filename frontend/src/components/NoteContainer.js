import React, { Component, Fragment } from 'react';
import Search from './Search';
import Sidebar from './Sidebar';
import Content from './Content';
import API from '../adapters/API';

class NoteContainer extends Component {
  state = {
    users: [],
    notes: [],
    selectedNoteId: null,
    searchTerm: '',
    editMode: false
  }


  componentDidMount() {
    API.getNotes()
      .then(notes => this.setState({ notes }))
    API.getUsers()
      .then(users => this.setState({ users }))
  }

  selectNote = id => {
    this.setState({ selectedNoteId: id })
    this.setState({ editMode: false})
  }

  findNote = noteId => this.state.notes.find(note => note.id === noteId)

  getSelectedNote = () => this.findNote(this.state.selectedNoteId)

  handleChange = (event) => {
    this.setState({
      searchTerm: event.target.value
    })
  }
  // changeSearchTerm = (searchTerm) => this.setState({ searchTerm })

  filterNotesBySearchTerm = () => this.state.notes.filter(
      note => note.title.toLocaleLowerCase().includes(this.state.searchTerm.toLocaleLowerCase()) 
      || note.body.toLocaleLowerCase().includes(this.state.searchTerm.toLocaleLowerCase())
    )
    // this.state.notes.map(note => note.title.includes(this.state.searchTerm))
    toggleEditMode = () => {
      this.setState({editMode: !this.state.editMode})
    }


  render() {

    const notes = this.filterNotesBySearchTerm()

    return (
      <Fragment>
        <Search onSearchChange={this.handleChange} searchTerm={this.state.searchTerm} />
        <div className='container'>
          <Sidebar notes={notes} selectNote={this.selectNote} />
          <Content selectedNote={this.getSelectedNote()} editMode={this.state.editMode} toggleEditMode={this.toggleEditMode} />
        </div>
      </Fragment>
    );
  }
}

export default NoteContainer;
