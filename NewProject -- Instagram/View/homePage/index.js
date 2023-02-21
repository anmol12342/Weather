import { ActivityIndicator, Alert, LogBox, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React,{useEffect,useState} from 'react'
import HomePagescreen from './components/homePagescreen';
import axios from 'axios'


const homeScreen = () => {
    const [location, setLocation] = useState("Mumbai")
    const [enableInput, SetenableInput] = useState(false);
    const [weather, setWeather] = useState('');
    const [city, setCity] = useState("Delhi")
    const [lon, setLong] = useState()
    const [lat, setLat] = useState()
    const [forcast, setForcast] = useState()

    const enableSearch = () => {
      SetenableInput(true)
    }

    
      useEffect(() => {
        fetchWeather()
      },[])

      const openWeatherKey = 'bf6bcf0f066d57544d80c4e5f7518f91'
      const fetchWeather = async () => {
        try {
           let response = await fetch(`https://api.openweathermap.org/geo/1.0/direct?q=${city}&appid=${openWeatherKey}`);
            const myData = await response.json();
            setLong(myData[0].lon)
            setLat(myData[0].lat)
            // console.log(lat)
            // console.log(lon)
            let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${openWeatherKey}`
            let weatherResponse = await fetch(url);
            const data = await weatherResponse.json();
           setWeather({
            descp: data.weather[0].description,
            temp:  data.main.temp,
            city:  data.name,
            feel:  data.main.feels_like,
        })
        // console.log(data.weather[0].description)
        // console.log(data.main.temp)
        // console.log(data.name)
        // console.log(data.main.humidity)
        // console.log(data.main.pressure)
        // console.log(data)
            let forcasturl= `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric&appid=${openWeatherKey}`
            let forcastResponse = await fetch(forcasturl);
            const forcastData = await forcastResponse.json();
            // setForcast(forcastData)
            // console.log(forcast.list[0]);
            // setForcast(forcastData);
            // setForcast([...forcast, Traverse()])
            // console.log(forcast)
            // setForcast([...forcastData.list])
        } catch (error) {
            console.log("error",error)
        }
    };


return (
    <View>
      <HomePagescreen location={location} 
      setLocation={setLocation} 
      enableInput={enableInput} 
      enableSearch={enableSearch} 
      weather={weather}
      forcast={forcast}/>
    </View>
  )
}


const styles = StyleSheet.create({})
export default homeScreen;
