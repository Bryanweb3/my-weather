

import { useState } from 'react'

const SongRecomendation = ({data}) => {
  
  let currentWeather = data.weather?.map(item => item.description)[0]
  console.log(currentWeather)
  const [recommendedSongs, setRecommendedSongs] = useState([])

  const getSongRecommendations = () => {
    const songsByWeather = [
      { weather: "clear sky", songs: [
        "Walking on Sunshine - Katrina & The Waves",
        "Here Comes the Sun - The Beatles", 
        "Good Day Sunshine - The Beatles"
      ]},
      { weather: "overcast clouds, scattered clouds, broken clouds, few clouds", songs: [
        "Cloudy - Simon & Garfunkel",
        "Both Sides Now - Joni Mitchell",
        "Get Off of My Cloud - The Rolling Stones"
      ]},
      { weather: "rain", songs: [
        "Purple Rain - Prince",
        "Singing in the Rain - Gene Kelly",
        "Set Fire to the Rain - Adele"
      ]},
      { weather: "snow", songs: [
        "Let it Snow - Dean Martin",
        "Winter Wonderland - Felix Bernard",
        "Snow (Hey Oh) - Red Hot Chili Peppers"
      ]},
      { weather: "thunderstorm", songs: [
        "Thunderstruck - AC/DC",
        "Thunder - Imagine Dragons",
        "Riders on the Storm - The Doors"
      ]}
    ]

    const defaultSongs = [
      "All Weather - by Various Artists",
      "Whatever the Weather - by Unknown",
      "The Weather Song - by Anonymous"
    ];

    if(currentWeather !== undefined){
      return songsByWeather.find(weather => weather.weather.includes(currentWeather.toLocaleLowerCase().trim()))?.songs || defaultSongs;
    }

   
  }

  return (
    <>
      <div className="song-recommendations">
        <h2>Music for {currentWeather} Weather</h2>
        <ul>
          {getSongRecommendations()?.map((song, index) => (
            <li key={index}>{song}</li>
          ))}
        </ul>
      </div>
    </>
  )
}

export default SongRecomendation