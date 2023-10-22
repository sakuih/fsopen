const express = require('express')
const morgan = require('morgan')
require('dotenv').config()
const date = new Date()
const app = express()
const PORT = process.env.PORT || 3001
const cors = require('cors')
const persons = require('./models/person')

/*
 * Cleaner production version:
 * https://github.com/sakuih/phonebook
 *
 */

let data = [
    { 
      "id": 1,
      "name": "Arto Hellas", 
      "number": "040-123456"
    },
    { 
      "id": 2,
      "name": "Ada Lovelace", 
      "number": "39-44-5323523"
    },
    { 
      "id": 3,
      "name": "Dan Abramov", 
      "number": "12-43-234345"
    },
    { 
      "id": 4,
      "name": "Mary Poppendieck", 
      "number": "39-23-6423122"
    }
]

app.use(morgan('tiny'))
app.use(express.json())
app.use(cors())
app.use(express.static('build'))

//app.set('json spaces', 2)

app.get("/api/persons/", (req, res) => {
  //res.header("Content-type","application/json")
  persons.find({})
    .then(result => {
      res.send(JSON.stringify(result, null, 4))
    })
  //res.send(JSON.stringify(data, null, 4))
})

app.get("/info/", (req, res) => {
  res.send(`Phonebook has info for ${data.length} people <br>  
      time ${date}`)
})

app.get("/api/persons/:id", (req, res) => {
  const id = req.params.id
  res.header("Content-type","application/json")
  res.send(JSON.stringify(data[id], null, 4))

})

app.delete("/api/persons/:id", (req, res) => {
  console.log("req params: ", req.params)
    
   persons.deleteOne({id: req.params.id})
    .then(result => {
      res.status(204).end()
    })
    .catch (error => console.log(error))
    
  
})

app.post("/api/persons/", (req, res) => {

  console.log(`req.body.name ${req.body.name}`)
  console.log(`req.body.id ${req.body.id}`)
  console.log(`req.body.number ${req.body.number}`)

  if (!req.body.name || !req.body.number) {
    return res.status(400).json({
      error: 'name or number is missing'
    })
  }

  const Person = new persons({
      id: req.body.id,
      name: req.body.name,
      number: req.body.number
  })

  Person.save().then(() => {
      console.log(`added ${Person.name} ${Person.number} to phonebook`) 
      res.send(JSON.stringify(Person, null, 4))
  })

})

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`)
})


// OLD CODE


function olderAppPost(req,res) {
  
    //console.log("data 1", data[0].name)
  
  if (!req.body.name || !req.body.number) {
    return res.status(400).json({
      error: 'name or number is missing'
    })
  }
  
  let randomNum = Math.floor((Math.random() * 1000) + 1)
  const newPerson = {
    id: randomNum,
    name: req.body.name,
    number: req.body.number
  }
  

  //const checkInclude = data.includes(req.body.name)
  
  for (let i = 0; i < data.length; i++){
      //console.log("data name ", data[i].name)
    if (data[i].name === req.body.name){
    return res.status(400).json({
        error: 'name must be unique'
    })
    }
  }

  data = data.concat(newPerson)
  res.json(newPerson)
  
  //console.log("req.body.name", req.body.name)
  //console.log("person created")
}

function oldDelete(req,res) {

  const itemid = data.findIndex((id) => id === req.params.id)
    if (itemid !== 0){
        //data.filter((id) => data.id !== itemid )
        data.splice(itemid, 1)
        res.send("Delete req successful")
    }
    else {
        res.send("delete not succesful")
    }
}


