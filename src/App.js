
import './App.css';
import Card from './components/Card'
import Input from './components/Input';
import Button from './components/Button';
import { useWeather } from './context/Weather';
import { useEffect } from 'react';

function App() {
  const weather = useWeather();
  console.log(weather);
  useEffect(()=>{
  weather.fetchCurrentLocation();
  },[])
  return (
    <div className="App">
     <h1>Weather forecast</h1>
     <Input />
     <Button  onClick={weather.Fetchdata} value="search" />
     {/* <Button value="refresh" onClick={weather.fetchCurrentLocation} /> */}
     {/* <Button onClick={weather.fetchCurrentLocation} value="refresh" /> */}
     <Card />
     <Button value = "refresh" />
     
    
    
    </div>
  );
}

export default App;
