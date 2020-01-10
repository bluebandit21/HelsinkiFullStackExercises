const configParser=require('configparser')

const config=new configParser()
config.read('.password_config')

const mongoUsername=config.get('MongoDB',"username")
const mongoPassword=config.get('MongoDB',"password")
const mongoUrl=config.get('MongoDB',"url")

const mongoose = require('mongoose')
const url =
  `mongodb+srv://${mongoUsername}:${mongoPassword}@${mongoUrl}?retryWrites=true&w=majority`
mongoose.connect(url, { 
  useNewUrlParser: true,
  useUnifiedTopology: true,  
}).then(result => {
    console.log('Connected to Note database')
}).catch((error) => {
    console.log('Error occured during connection to Note database: ', error.message)
})


const noteSchema = new mongoose.Schema({
    content: String,
    date: Date,
    important: Boolean
})
noteSchema.set('toJSON', {
    transform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id.toString()
        delete returnedObject._id
        delete returnedObject.__v
    }
})
  

module.exports = mongoose.model("Note",noteSchema)
  
