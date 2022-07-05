
const PersonForm = ({concatContact, newName, handleName, newNumber, handleNumber}) => {

    return (
      <form onSubmit={concatContact}>
        <div>
          name: <input
                value={newName}
                onChange={handleName}
                /><br/>
        </div>
        <div>
          number: <input
                value={newNumber}
                onChange={handleNumber}
                /><br/>
        </div>
           <div>
          <button type="submit">add</button>
        </div>
      </form>

    )
}
export default PersonForm
