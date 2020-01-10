const express = require('express')
const bodyParser = require('body-parser')
const morgan = require('morgan')

const app = express()
app.use(express.static('build'))
app.use(bodyParser.json())
app.use(morgan('dev'))


const Note = require('./models/note')


app.get('/', (request,response) => {
  response.send('<p>Backend Server<p>')
})

app.get('/api/notes', (request,response) => {
  Note
    .find({})
    .then(notes => response.json(
      notes.map(note => note.toJSON())
    ))
    .catch(error => {
      console.log("An error occured while fetching the notes: ", error.message)
      response.send(500).json({
        error: "An error occured while contacting the database."
      })
    })
})

app.post('/api/notes', (request, response) => {
  const body = request.body

  if (!body.content) {
    return response.status(400).json({ 
      error: 'content missing' 
    })
  }

  const note = new Note({
    content: body.content,
    important: body.important || false,
    date: new Date()
  })
  
  note
    .save()
    .then(savedNote => {
      response.json(savedNote.toJSON())
    })
    .catch(error => {
      console.log("An error occured while saving a note: ", error.message)
      response.send(500).json({
        error: "An error occured while contacting the database."
      })
    })
})

app.get('/api/notes/:id', (request, response) => {
  Note
    .findById(request.params.id).then(note => {
      response.json(note.toJSON())
    })
    .catch(error => {
      console.log("An error occured while fetching a note: ", error.message)
      response.send(500).json({
        error: "An error occured while contacting the database."
      })
    })
})

app.delete('/api/notes/:id', (request,response) => {
  const id = Number(request.params.id)
  notes = notes.filter(note => note.id !== id)

  response.status(204).end()
})

app.use((request,response) => {
  response.status(404).end()
  //Defaults to 404
})

const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}\n`)
})
console.log("@Logging test")