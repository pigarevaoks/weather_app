import { ADD_CITY } from './../actions/index.js';
import { ADD_WEATHER } from './../actions/index.js';
import { DELETE_CITY } from './../actions/index.js';

const initialState = {
    weatherInfo: {
        temp: '',
        name: ''
    },
    cities: []
    // cities: [
    //     {
    //         name: '',
    //         temp: ''
    //     }
    // ]
};

export const city = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CITY: {
            return {
                ...state,
                cities: [action.city, ...state.cities]
            };
        }
    case ADD_WEATHER: {
            return {
                ...state,
                weatherInfo: action.weatherInfo
            };
        }
    case DELETE_CITY: {
            return {
                ...state,
                cities: [
                    ...state.cities.slice(0, action.id),
                    ...state.cities.slice(action.id + 1)
                ]
            };
        }
    default:
      return state
  }
}

export default city;
