
import axios from 'axios'

const personsData = 'http://localhost:3001/persons'
export function getServerData(object) {
    axios
    .get(personsData)
    .then(response => {
        object(response.data)
    }
    )
    .catch(e => {
        console.log(e)
    })
    

}
export function deleteData(index) {
    const request = axios.delete(`${personsData}/${index}`)
    console.log("deleteData", index)
    return request.then(response => response.data) 
}
export function postData(object) {
   const request = axios.post(personsData, object)
   return request.then(response => response.data) 
   
}
export function update(id, newObject){
   const request = axios.put(`${personsData}/${id}`, newObject) 
   return request.then(response => response.data) 
}
