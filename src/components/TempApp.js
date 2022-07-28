import React, { useEffect, useState } from "react";
import '../components/css/style.css';

const TempApp =() =>{
    const [city,setCity]=useState(null);
    const [search,setSearch]=useState("Mumbai");

      useEffect(()=>{
          const fetchApi = async()=>{
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=ec8b9c004d182b50408a29e0e5984d67`;
            const response = await fetch(url);
            
            const resjson = await response.json();
            // console.log(resjson);
            setCity(resjson.main);
          }

        fetchApi();
      },[search]);

    return (
      <>
        <div className="box">
          <div className="inputData">
            <input
              type="search"
              className="inputfield"
              defaultValue=""
              onChange={(event) => {
                setSearch(event.target.value);
              }}
            />
          </div>
          {!city ? (
            <p>No data found</p>
          ) : (
            <div>
              <div className="info">
                <h2 className="location">{search}</h2>
                <h1 className="temp">{city.temp} °C</h1>
                <h3 className="tempmin_max">Min: {city.temp_min} °C | Max : {city.temp_max} °C </h3>
              </div>
            </div>
          )}
        </div>
      </>
    );
}

export default TempApp;