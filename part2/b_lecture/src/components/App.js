import React, { useState } from 'react'
import Note from './Note'

const App = (props) => {
  const [notes, setNotes] = useState(props.notes)
  const [newNote, setNewNote] = useState('Type here')
  const rows = () => notes.map(note =>
    <Note
      key={note.id}
      note={note}
    />
  )
  const addNote = (event) => {
    event.preventDefault()
    console.log('button clicked', event.target)
  }
  const handleNoteChange = (event) => {
    console.log(event.target.value)
    setNewNote(event.target.value)
  }
  return (
    <div>
      <h1>Notes</h1>
      <ul>
        {rows()}
      </ul>
      <form onSubmit={addNote}>
        <input value = {newNote} onChange={handleNoteChange}/>
        <button type="submit">Save</button>
      </form>
    </div>
  )
}

export default App