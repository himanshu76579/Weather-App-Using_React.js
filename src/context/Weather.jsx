import {useContext,createContext,useState} from "react"
import {getWeatherDataForCity,getWeatherDataForLocation} from "../api"
const WeatherContext= createContext(null);

export const useWeather=()=>{
    return useContext(WeatherContext);
};

export const WeatherProvider=(props)=>{
    const[data,setdata]=useState(null);
    const[searchcity,setsearchcity]=useState(null);
   

const Fetchdata= async()=>{
    const response = await getWeatherDataForCity(searchcity);
    setdata(response);
   }
   const fetchCurrentLocation=()=>{
    navigator.geolocation.getCurrentPosition((position)=>{
        getWeatherDataForLocation(position.coords.latitude,position.coords.longitude).then((data)=>setdata(data));
    });
   };
   return (<WeatherContext.Provider
   value={{searchcity,data,Fetchdata,setsearchcity,fetchCurrentLocation}}>{props.children}</WeatherContext.Provider>
   );
};


