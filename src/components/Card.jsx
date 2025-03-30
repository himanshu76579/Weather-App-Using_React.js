// import React from "react";
// import { useWeather } from "../context/Weather";

// function Card(){
//  const weather=useWeather()
//     return(
//         <div className="card">
//             <img src={weather.data?.current?.condition?.icon}></img>
//             <h2>{weather.data?.current?.temp_c} c</h2>
// <h5>{weather.data.location?.name},{weather.data?.location?.region}</h5>       
//  </div>
//     )
// }
// export default Card
// import React from "react";
// import { useWeather } from "../context/Weather";

// function Card() {
//   const weather = useWeather();

//   // Early return if weather data is not available
//   if (!weather?.data) {
//     return <div>Loading...</div>;
//   }

//   // Destructure to avoid repeating the optional chaining
//   const { current, location } = weather.data;

//   // Early return if current or location data is missing
//   if (!current || !location) {
//     return <div>Weather data is incomplete.</div>;
//   }

//   return (
//     <div className="card">
//       <img src={current?.condition?.icon} alt="weather condition" />
//       <h2>{current.temp_c}°C</h2>
//       <h5>{location?.name}, {location?.region}</h5>
//     </div>
//   );
// }

// export default Card;
import React from "react";
import { useWeather } from "../context/Weather";

const Card = () => {
  const weather = useWeather();

  return (
    <div className="card">
      <img src={weather?.data?.current?.condition?.icon} />
      <h2>{weather.data?.current?.temp_c}. C</h2>
      <h5>
        {weather.data?.location?.name}, {weather.data?.location?.region}{" "}
        {weather.data?.location?.country}
      </h5>
    </div>
  );
};

export default Card;