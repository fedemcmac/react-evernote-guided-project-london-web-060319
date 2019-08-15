const endpoint = 'http://localhost:3000'
const usersUrl = `${endpoint}/api/v1/users`
const notesUrl = `${endpoint}/api/v1/notes`
// const noteUrl = `${notesUrl}/:${id}`

const getUsers = () => fetch(usersUrl).then(users => users.json())

const getNotes = () => fetch(notesUrl).then(notes => notes.json())

export default {
  getUsers,
  getNotes
}