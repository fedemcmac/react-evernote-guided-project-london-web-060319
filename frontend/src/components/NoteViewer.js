import React, { Fragment } from 'react';

const NoteViewer = ({title, body, editNote}) => {
  return (
    <Fragment>
      <h2>{title}</h2>
      <p>{body}</p>
      <button
      onClick = {editNote}
      >Edit</button>
    </Fragment>
  );
}

export default NoteViewer;
