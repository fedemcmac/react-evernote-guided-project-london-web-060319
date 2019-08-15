import React, { Component } from 'react';
import NoteList from './NoteList';

class Sidebar extends Component {
  render() {
    return (
      <div className='master-detail-element sidebar'>
        <button 
        onClick={this.props.toggleNewMode}
        >New</button>
        <NoteList notes={this.props.notes} selectNote={this.props.selectNote} />
      </div>
    );
  }
}

export default Sidebar;
