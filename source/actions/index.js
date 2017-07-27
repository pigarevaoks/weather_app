import React from 'react';
export const ADD_CITY = 'ADD_CITY';
export const LOAD_CITIES = 'LOAD_CITIES';
export const DELETE_CITY = 'DELETE_CITY';
export const ADD_WEATHER = 'ADD_WEATHER';
export const GET_LOCATION = 'GET_LOCATION';

export const addCity = (city) => {
  return {
    type: ADD_CITY,
    city: city
  }
}

export const loadCities = (cities) => {
  return {
    type: LOAD_CITIES,
    cities: cities
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

export const getLocation = () => {
  const geolocation = navigator.geolocation;
  const location = new Promise((resolve, reject) => {
    if (!geolocation) {
      reject(new Error('Not Supported'));
    }
    geolocation.getCurrentPosition((position) => {
      return resolve(position);
    }, () => {
      reject (new Error('Permission denied'));
    });
  });
  return {
    type: GET_LOCATION,
    location: location
  }
};
