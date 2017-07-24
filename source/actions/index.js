import React from 'react';
export const ADD_CITY = 'ADD_CITY'
export const ADD_WEATHER = 'ADD_WEATHER'

export const addCity = (cities) => {
  return {
    type: ADD_CITY,
    cities: cities
  }
}

export const addWeatherInfo = (weatherInfo) => {
    return {
        type: ADD_WEATHER,
        weatherInfo: weatherInfo
    }
}
