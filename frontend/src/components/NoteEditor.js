import React, { Component } from 'react';

class NoteEditor extends Component {

  constructor(props) {
    super(props);
    this.state = {
      title: props.title,
      body: props.body,
      id: props.id
    }
  }


  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  render() {
    const { editMode, submitNote } = this.props
    return (
      <form
        onSubmit={(event) => submitNote(this.state, event)}
        value={this.state}
        className="note-editor"
      >
        <input
          type="text"
          name="title"
          value={this.state.title}
          onChange={(e) => this.handleChange(e)}
        />
        <textarea
          name="body"
          value={this.state.body}
          onChange={(e) => this.handleChange(e)}
        />
        <div className="button-row">
          <input className="button" type="submit" value="Save" />
          <button onClick={editMode} type="button">Cancel</button>
        </div>
      </form>
    );
  }
}

export default NoteEditor;
