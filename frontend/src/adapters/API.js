const endpoint = 'http://localhost:3000'
const usersUrl = `${endpoint}/api/v1/users`
const notesUrl = `${endpoint}/api/v1/notes`
// const noteUrl = `${notesUrl}/:${id}`

const getUsers = () => fetch(usersUrl).then(users => users.json())

const getNotes = () => fetch(notesUrl).then(notes => notes.json())

const updateNote = (note) => fetch(`${notesUrl}/${note.id}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    body: JSON.stringify(
        note
      )
  }).then(res => res.json())

  const newNote = (note) => fetch(notesUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    body: JSON.stringify(
        note
      )
  }).then(res => res.json())

export default {
  getUsers,
  getNotes,
  updateNote,
  newNote
}