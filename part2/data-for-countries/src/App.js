import {useState, useEffect} from 'react'
import axios from 'axios'
function App() {
  const [countryName, setCountryName] = useState('')
  const [countryList, setCountryList] = useState([])
  const all = `api/all`
  const individual = `api/name/finland`
  const url = `https://studies.cs.helsinki.fi/restcountries/${all}`

  useEffect( () => {
      fetch(url)
          .then(response => {
          if (response.ok){
              console.log("response ok")
              return response.json()
          }
              throw response
                  })
                    .then( data => {
                        setCountryList(data)
                        console.log(countryList)
                    })
                      .catch( error => {
                          console.log("Error")
                  })
  }, [] )

    function getData() {
        return axios.get(url).then(response => response.data)
    }
    function mapCountries() {
        countryList.map(country => {
            return <li>{country.name}</li>
        })
    }


    function handleInput(e) {
        setCountryName(e.target.value)
    }
  return (
    <div className="App">
        find countries
      <input 
      onChange={handleInput}
      type="text"
      />
      {mapCountries()}
    </div>
  );
}

export default App;
