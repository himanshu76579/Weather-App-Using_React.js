import React from "react";
import { useWeather } from "../context/Weather";
const Input=()=>{
    const weather = useWeather()
   

    return(
        <input className="input-field"
          placeholder="Search here"
         value={weather.searchcity}
         onChange={(e)=>weather.setsearchcity(e.target.value)}

       />
    )
}
export default Input