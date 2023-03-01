import axios from 'axios'

const personsData = 'http://localhost:3001/persons'
export function getData() {
    //const request = axios.get(personsData)
    //return request.then( response => response.data)
    return axios.get(personsData).then(response => response.data)
}
export function deleteData(index) {
    return axios.delete(`${personsData}/${index}`).
            then(response => response.data)
}
export function postData(object) {
    const request = axios.post(personsData, {
        method: 'post',
        timeout: '1000',
        headers: {
            "Content-Type": "application/json"
        },
        data: {
            name: object.name,
            number: object.number,
            id: object.id
        }
    })
   return request.then(response => response.data)
   
}
export function updateData(id, newObject){
   const request = axios.put(`${personsData}/${id}`, newObject) 
   return request.then(response => response.data) 
}
