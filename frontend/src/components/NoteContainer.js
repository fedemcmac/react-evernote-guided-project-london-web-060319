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
    this.setState({ editMode: false })
  }

  findNote = noteId => this.state.notes.find(note => note.id === noteId)

  getSelectedNote = () => this.findNote(this.state.selectedNoteId)

  handleChange = (event) => {
    this.setState({
      searchTerm: event.target.value
    })
  }

  filterNotesBySearchTerm = () => this.state.notes.filter(
    note => note.title.toLocaleLowerCase().includes(this.state.searchTerm.toLocaleLowerCase())
      || note.body.toLocaleLowerCase().includes(this.state.searchTerm.toLocaleLowerCase())
  )

  toggleEditMode = () => {
    this.setState({ editMode: !this.state.editMode })
  }

  toggleNewMode = () => {
    this.setState({ selectedNoteId: null})
    this.toggleEditMode()
  }

  submitUpdatedNote = (updatedNote, event) => {
    event.preventDefault()
    this.toggleEditMode()
    API.updateNote(updatedNote)
      .then(
        this.setState({ notes: this.state.notes.map(note => note.id === updatedNote.id ? updatedNote : note) })
      )
  }

  submitNewNote = (note, event) => {
    event.preventDefault()
    this.toggleEditMode()
    this.setState({ selectedNoteId: note.id})
    API.newNote(note)
      .then(
        this.setState({ notes: [...this.state.notes, note] })
      )
  }


  render() {

    const notes = this.filterNotesBySearchTerm()

    return (
      <Fragment>
        <Search onSearchChange={this.handleChange} searchTerm={this.state.searchTerm} />
        <div className='container'>
          <Sidebar notes={notes}
            selectNote={this.selectNote}
            toggleNewMode={this.toggleNewMode}
          />
          <Content
            selectedNote={this.getSelectedNote()}
            editMode={this.state.editMode}
            toggleEditMode={this.toggleEditMode}
            submitUpdatedNote={this.submitUpdatedNote}
            submitNewNote={this.submitNewNote}
          />
        </div>
      </Fragment>
    );
  }
}

export default NoteContainer;
