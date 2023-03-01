import { useState, useEffect } from 'react'
import Filter from './Filter.js'
import PersonForm from './PersonForm.js'
import Persons from './Persons.js'
import {getData, deleteData, postData, updateData} from './backendFunc.js'

const App = () => {
    // persons value below is for testing. If seen
    // connection to database has problems
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '123', id: 1 }
  ]) 
  const [newName, setNewName] = useState('')
  const [filter, setFilter] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [showAll, setShowAll] = useState(true)
  const [nameOnList, setNameOnList] = useState(false)
  
  useEffect(() => {
      getData()
  }) 
    // Checks if persons got duplicate name
    // isNameOnList can be used as a function with a return value of true or false

    function isNameOnList() {
        if (persons.some(e => e.name === newName)) {
           setNameOnList(true) 
        }
    }

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
    function deleteContact(index) {
        deleteData(index)
        console.log("deleteContact index argument: ", index)
    }
    
    // Taking name and number into persons array
    function addContactToList(e) {
        e.preventDefault()
        console.log("form on submit", e.target, "newName value is ", newName)
        const newObjectForPhonebook = {
            name: newName,
            number: newNumber,
            id: persons.length + 1,
        }
        isNameOnList()
        if (nameOnList){
            alert(`${newName} is already on the list`)
        } else {
            postData(newObjectForPhonebook) 
            setNewName('')
            setNewNumber('')
        }

    }

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter filter={filter} handleFilter={handleFilter} />
      <h2> Add a new contact </h2>
      <PersonForm addContact={addContactToList} newName={newName} 
      handleName={handleName} newNumber={newNumber} handleNumber={handleNumber} />
      <h2>Numbers</h2>
      <Persons persons={persons} deleteContact={deleteContact} /> 
    </div>
  )
}
export default App
