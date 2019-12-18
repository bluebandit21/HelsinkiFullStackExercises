import React, { useState, useEffect } from 'react'
import noteService from './services/notes'
import Note from './components/Note'

const App = (props) => {
  const [notes, setNotes] = useState([]) 
  const [newNote, setNewNote] = useState('') 
  const [showAll, setShowAll] = useState(true)

  useEffect(() => {
    console.log('@effect')
    noteService
      .getAll()
      .then(response => {
        console.log('promise fulfilled')
        setNotes(response.data)
      })
      .catch(error => {
        console.log('Error in get: ',error)
      })
      
    },[])

  const notesToShow = showAll
    ? notes
    : notes.filter(note => note.important)
  
  const toggleImportanceOf = id => {
    const note = notes.find(n => n.id === id)
    const changedNote = { ...note, important: !note.important }
    noteService
      .update(id, changedNote)
      .then(response => {
        setNotes(notes.map(note => note.id !== id ? note : response.data))
      })
      .catch(error => {
        console.log('Error in update: ',error)
      })
  }
  const rows = () => notesToShow.map(note =>
    <Note
      key={note.id}
      note={note}
      toggleImportance={() => toggleImportanceOf(note.id)}
    />
  )
  
  const handleNoteChange = (event) => {
    setNewNote(event.target.value)
  }

  const addNote = (event) => {
    event.preventDefault()

    const noteObject = {
      content: newNote,
      date: new Date().toISOString(),
      important: Math.random() > 0.5,
      id: notes.length + 1,
    }
    noteService
      .create(noteObject)
      .then(response => {
        setNotes(notes.concat(response.data))
        setNewNote('')
      })
      .catch(error => {
        console.log('Error in create: ',error)
      })

    setNotes(notes.concat(noteObject))
    setNewNote('')
  }

  return (
    <div>
      <h1>Notes</h1>
      <div>
        <button onClick={() => setShowAll(!showAll)}>
          show {showAll ? 'important' : 'all'}
        </button>
      </div>
      <ul>
        {rows()}
      </ul>
      <form onSubmit={addNote}>
        <input
          value={newNote} 
          onChange={handleNoteChange}
        />
        <button type="submit">save</button>
      </form>
    </div>
  )
}

export default App 