import { ADD_CITY } from './../actions/index.js';
import { ADD_WEATHER } from './../actions/index.js';

const initialState = {
    weatherInfo: {
        temp: '',
        name: ''
    },
    cities: [
        {
            name: 'moscow',
            temp: '18 C'
        }
    ]
    // weather: [],
};

export const city = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CITY: {
            return {
                ...state,
                cities: action.cities
            };
        }
    case ADD_WEATHER: {
            return {
                ...state,
                weatherInfo: action.weatherInfo
            };
        }
    // case 'DELETE_CITY':
    //   return {}

    default:
      return state
  }
}

export default city;
