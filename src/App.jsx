import axios from "axios"
import { useState } from "react"
import './App.css'
import SongRecomendation from "./components/SongRecomendation"


const App = () => {
  const [data, setData] = useState('')
  const [location, setLocation] = useState('')

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=dce67ecf0b30275697565afff5e51d85&units=metric`

  const searchLocation = (event) => {
    if (event.key === 'Enter') {
      axios
        .get(url)
        .then(response => {
          setData(response.data)
          console.log(response.data)
        })
        .catch(error => {
          if (error.response && error.response.status === 404) {
            alert('Invalid location, please try again');
          } else {
            console.log(error);
          }
        });
    }
  }

  return (
    <>
      <div className="app">
        <div className="search">
          <input 
            type="text" 
            placeholder="Enter location..." 
            value={location} 
            onChange={(e) => setLocation(e.target.value)} 
            onKeyPress={searchLocation}
          />
        </div>
        <div className="container">
          <div className="top">
            <div className="location">
              <p><b>{data.name}</b></p>
            </div>
            <div className="temp">
              <h1>{data.main ? `${data.main.temp.toFixed(1)}°F` : ''}</h1>
              <p><b>Temp</b></p>
            </div>
            <div className="description">
              <p>{data.weather ? data.weather[0].description : ''}</p>
            </div>
            <div className="bottom">
              <div className="feels">
                <p className='bold'>{data.main ? `${data.main.feels_like.toFixed(1)}°F` : ''}</p>
                <p>Condition</p>
              </div>
              <div className="humidity">
                <p className='bold'>{data.main ? `${data.main.humidity}%` : ''}</p>
                <p>Humidity</p>
              </div>
              <div className="wind">
                <p className='bold'>{data.wind ? `${data.wind.speed} m/s` : ''}</p>
                <p>Wind Speed</p>
              </div>
            </div>
          </div>
          <SongRecomendation data={data}/>
        </div>
      </div>
    
    </>
  )
}


export default App 
