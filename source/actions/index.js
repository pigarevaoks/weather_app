import React from 'react';
export const ADD_CITY = 'ADD_CITY'
export const DELETE_CITY = 'DELETE_CITY'
export const ADD_WEATHER = 'ADD_WEATHER'

export const addCity = (city) => {
  return {
    type: ADD_CITY,
    city: city
  }
}

export const deleteCity = (id) => {
    return {
        type: DELETE_CITY,
        id: id
    }
}
export const addWeatherInfo = (weatherInfo) => {
    return {
        type: ADD_WEATHER,
        weatherInfo: weatherInfo
    }
}