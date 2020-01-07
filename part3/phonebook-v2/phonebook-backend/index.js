const express=require('express')
const bodyParser=require('body-parser')
const morgan=require('morgan')
const cors=require('cors')

app=express()
app.use(cors())
app.use(bodyParser.json())
morgan.token('post-body', (request,response) => {
    let stringified = JSON.stringify(request.body)
    return stringified !== "{}" ? stringified : ""
})
app.use(morgan(':method :url :status :response-time ms :post-body'))

console.log('Hello World!');

let persons = [
    {
        name: "Arto Hellas",
        number: "040-123456",
        id: 1
    },
    {
        name: "Ada Lovelace",
        number: "39-44-5323523",
        id: 2
    },
    {
        name: "Dan Abramov",
        number: "12-43-234345",
        id: 3
    },
    {
        name: "Mary Poppendieck",
        number: "39-23-6423122",
        id: 4
    }
]

app.get('/info', (request,response) => {
    response.send(`<p>Phonebook has info for ${persons.length} people.</p><p>${new Date()}</p>`)
})

app.get('/api/persons', (request,response) => {
    response.json(persons)
})

app.post('/api/persons', (request, response) => {
    if(!request.body || !request.body.name || !request.body.number){
        response.status(400).json({
            error: "Content missing"
        })
        return
    }
    if(persons.find(a => a.name === request.body.name)){
        response.status(400).json({
            error: "Name already exists in phonebook."
        })
        return
    }
    const entry = {
        name: request.body.name,
        number: request.body.number,
        id: function(){
            let currId;
            do{
                currId=Math.round(Math.random()*2500)
            }while(persons.find(a => a.id === currId))
            return currId
        }()
    }
    persons.push(entry)
    response.status(204).end()
})
app.get('/api/persons/:id', (request, response) => {
    entry = persons.filter(entry => entry.id===Number(request.params.id))[0]
    if(entry){
        response.json(entry)
    }else{
        response.status(404).json({
            error: "Entry not found."
        })
    }
})

app.delete('/api/persons/:id', (request, response) => {
    let len = persons.length
    persons = persons.filter(person => person.id!==Number(request.params.id))
    if(len !== persons.length){
        response.status(204).end()
    }else{
        response.status(404).json({
            error: "Entry not found."
        })
    }
})

app.use((request,response) => {
    response.status(404).json({
        error: 'Page not found.'
    })
})
const PORT = 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}\n`)
})