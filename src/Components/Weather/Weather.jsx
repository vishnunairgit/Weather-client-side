
import React, { useState, useEffect } from 'react';
import { fetchCurrentWeather } from '../../Api/weather';
import './weather.css';
import weatherimg from '../Assets/icons8-sun-100.png';
import { formatDate } from '../../Helpers/Helpers';

function Weather() {
  const [weather, setWeather] = useState(null);
  const [city, setCity] = useState('Delhi');

  useEffect(() => {
    const getWeather = async () => {
      try {
        const data = await fetchCurrentWeather(city);
        setWeather(data);
      } catch (error) {
        console.error('Error fetching weather data:', error);
      }
    };

    getWeather();
  }, [city]);

  return (
    <div className="weather-container">
      <h1><strong>Weather in {city}</strong></h1>

      <div className='container'>
        <div>
          {weather ? (
            <div className="weather-box-first">
              <div className="dropdown">
                <button className="btn dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                  Today
                </button>
                <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                  <li><a className="dropdown-item" href="#">Tomorrow</a></li>
                </ul>
              </div>

              <div className='logo-Temperature'>
                <img src={weatherimg} alt="Weather icon" />
                <p>{weather.temperature}°</p>
              </div>
              <p>{weather.description}</p>
              <p>{formatDate(weather.date)}</p>
            </div>
          ) : (
            <p>Loading...</p>
          )}
        </div>

        <div>
          {weather ? (

            <div className="weather-box-second">
              <div className='Time-wather'>
                <div>
                  <img src={`http://openweathermap.org/img/wn/${weather.icon}.png`} alt="Weather icon" />
                  <p>now 23°</p>
                </div>
                <div>
                  <img src={`http://openweathermap.org/img/wn/${weather.icon}.png`} alt="Weather icon" />
                  <p>1 AM 23°</p>
                </div>
                <div>
                  <img src={`http://openweathermap.org/img/wn/${weather.icon}.png`} alt="Weather icon" />
                  <p>2 AM 23°</p>
                </div>
                <div>
                  <img src={`http://openweathermap.org/img/wn/${weather.icon}.png`} alt="Weather icon" />
                  <p>3 AM 23°</p>
                </div>
              </div>
              <div className='borderr'></div>


              <div className='Time-wather'>
                <div>
                  <img src={`http://openweathermap.org/img/wn/${weather.icon}.png`} alt="Weather icon" />
                  <p>now 23°</p>
                </div>
                <div>
                  <img src={`http://openweathermap.org/img/wn/${weather.icon}.png`} alt="Weather icon" />
                  <p>1 AM 23°</p>
                </div>
                <div>
                  <img src={`http://openweathermap.org/img/wn/${weather.icon}.png`} alt="Weather icon" />
                  <p>2 AM 23°</p>
                </div>
                <div>
                  <img src={`http://openweathermap.org/img/wn/${weather.icon}.png`} alt="Weather icon" />
                  <p>3 AM 23°</p>
                </div>

              </div>

            </div>
          ) : (
            <p>Loading...</p>
          )}
          <div className='loram'>
            <h3>Rondom Text</h3>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Quaerat obcaecati eveniet cupiditate deserunt aperiam officia eos corrupti, doloribus id,
            facere earum temporibus dolorem alias nam perferendis nihil totam, praesentium fugiat.
          </div>
        </div>

      </div>
    </div>
  );
}

export default Weather;


