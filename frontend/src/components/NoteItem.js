import React from 'react';

const NoteList = ({ title, body, selectNote }) => (
  <li onClick={selectNote}>
    <h2>{title}</h2>
    <p>{body.split(" ").splice(0, 10).join(" ")}...</p>
  </li>
);

export default NoteList;
