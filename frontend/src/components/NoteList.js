import React from 'react';
import NoteItem from './NoteItem';

const NoteList = ({notes, selectNote}) => {
  return (
    <ul>
      {
      notes.map(note => <NoteItem {...note} key={note.id} selectNote={() => selectNote(note.id)}/>)
      }
    </ul>
  );
}

export default NoteList;
