const mongoose = require('mongoose')

if ( process.argv.length!==5 && process.argv.length!==3) {
  console.log('Usage: Node mongo.js <password> [<name> <number>]')
  process.exit(1)
}

const url = `mongodb+srv://aplotner:${process.argv[2]}@cluster0-m6iko.mongodb.net/phonebook?retryWrites=true&w=majority`
mongoose.connect(url, { 
    useNewUrlParser: true,
    useUnifiedTopology: true,  
})

const personSchema=new mongoose.Schema({
    name: String,
    number: String
})

const disconnectHandler = () => () => {
    mongoose.connection.close()
}

const Person=mongoose.model('Person',personSchema)

if(process.argv.length===3){
    console.log("phonebook:")
    Person.find({}).then(result => {
        result.forEach(person => {
            console.log(`${person.name} ${person.number}`)
        })
    }).then(disconnectHandler())
}else{
    const entry = new Person({
        name: process.argv[3],
        number: process.argv[4]
    })
    entry.save().then(response => {
        console.log("Entry added.")
    }).then(disconnectHandler())
}
