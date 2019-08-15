import React, { Component } from 'react';
import NoteEditor from './NoteEditor';
import NoteViewer from './NoteViewer';
import Instructions from './Instructions';

/*
  Advice: If you cannot figure out how to get this component to work,
          move the div and renderContent up into NoteContainer and
          try to get it to work in the parent first.
          Then complete the rest of your app before attempting to
          refactor to get this Content component to work.
*/
class Content extends Component {

  
    

    renderContent = (selectedNote) => {
      
      if(selectedNote && this.props.editMode) {
        return <NoteEditor {...this.props.selectedNote} editNote={this.props.toggleEditMode} submitNote={this.props.submitUpdatedNote} />
      } else if (selectedNote) {
        return <NoteViewer {...this.props.selectedNote} editNote={this.props.toggleEditMode}/>;
      } else if (this.props.editMode) {
        return <NoteEditor {...this.props.selectedNote} editNote={this.props.toggleEditMode} submitNote={this.props.submitNewNote} />
      } else {
        return <Instructions />;
      }
    }
  
  render() {

    return (
      <div className='master-detail-element detail'>
        {
          this.renderContent(this.props.selectedNote)
        }
      </div>
    );
  }
}

export default Content;
// this.props.selectedNote ? <NoteViewer {...this.props.selectedNote} /> : <Instructions />
