import axios from 'axios'
import { useState, useEffect } from 'react'
import Filter from './Filter.js'
import PersonForm from './PersonForm.js'
import Persons from './Persons.js'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '123', id: 1 }
  ]) 
  const [newName, setNewName] = useState('')
  const [filter, setFilter] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [showAll, setShowAll] = useState(true)
  
  useEffect(() => {
	  //console.log("useEffect")
	  axios
	  	.get('http://localhost:3001/persons')
	  	.then(response => {
           // console.log("Response is complete")
            setPersons(response.data)
		})
  }) 
        const isNameOnList = persons.every(m => {
            if(m.name === newName){
                return true
            }
            else {
                return false
            }
        }) 

    //Conditional rendering = condition ? true : false}
    // Handling name
    function handleName(e) {
        console.log("handleName function content", e.target.value)
        setNewName(e.target.value)
    }
    // Handling number
    function handleNumber(e) {
        console.log("handleNumber function content", e.target.value)
        setNewNumber(e.target.value)
    }
    function handleFilter(e) {
        setShowAll(false)
        if (newName === ''){
            setShowAll(true)
        }
    }
    
    // Taking name and number into persons array
    function concatContact(e) {
        e.preventDefault()
        console.log("form on submit", e.target, "newName value is ", newName)
        const tempObject = {
            name: newName,
            number: newNumber,
            id: persons.length + 1,
        }
        if (isNameOnList){
            alert(`${newName} is already on the list`)
        } else {
            setPersons(persons.concat(tempObject))
            setNewName('')
            setNewNumber('')
        }

    }

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter filter={filter} handleFilter={handleFilter} />
      <h2> Add a new contact </h2>
      <PersonForm concatContact={concatContact} newName={newName} 
      handleName={handleName} newNumber={newNumber} handleNumber={handleNumber} />
      <h2>Numbers</h2>
      <Persons persons={persons} /> 

    </div>
  )
}
export default App
