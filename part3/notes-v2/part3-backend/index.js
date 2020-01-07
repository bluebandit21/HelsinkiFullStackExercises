const express = require('express')
const bodyParser = require('body-parser')
//const cors = require('cors')
const morgan = require('morgan')

const app = express()

app.use(express.static('build'))
app.use(bodyParser.json())
app.use(morgan('dev'))
//app.use(cors())
let notes = [
    {
      id: 1,
      content: "HTML is easy",
      date: "2019-05-30T17:30:31.098Z",
      important: true
    },
    {
      id: 2,
      content: "Browser can execute only Javascript",
      date: "2019-05-30T18:39:34.091Z",
      important: false
    },
    {
      id: 3,
      content: "GET and POST are the most important methods of HTTP protocol",
      date: "2019-05-30T19:20:14.298Z",
      important: true
    }
]
 

app.get('/', (request,response) => {
  response.send('<p>Backend Server<p>')
  console.log(`GET ${request.path} 200`)
})

app.get('/api/notes', (request,response) => {
  response.json(notes)
  console.log(`GET ${request.path} 200`)
})

const generateId = () => {
  const maxId = notes.length > 0
    ? Math.max(...notes.map(n => n.id))
    : 0
  return maxId + 1
}

app.post('/api/notes', (request, response) => {
  const body = request.body

  if (!body.content) {
    return response.status(400).json({ 
      error: 'content missing' 
    })
  }

  const note = {
    content: body.content,
    important: body.important || false,
    date: new Date(),
    id: generateId(),
  }

  notes = notes.concat(note)

  response.json(note)
})

app.get('/api/notes/:id', (request, response) => {
  const id = Number(request.params.id)
  const note = notes.find(note => note.id === id)
  if(note){
    response.json(note)
    console.log(`GET ${request.path} 200`)
  }else{
    response.status(404).end()
    console.log(`GET ${request.path} 404`)
  }
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