import { ADD_CITY, LOAD_CITIES, ADD_WEATHER, DELETE_CITY } from './../actions/index.js';

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
            const have_city = state.cities.find((city) => city.name === action.city.name)

            if (have_city) {
                return { ...state }
            } else {
                const cities = [action.city, ...state.cities]
        		localStorage.setItem('cities', JSON.stringify(cities))

                return {
                    ...state,
                    cities: cities
                };
            }
        }
        case LOAD_CITIES: {
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
        case DELETE_CITY: {
            const cities = [
                ...state.cities.slice(0, action.id),
                ...state.cities.slice(action.id + 1)
            ]
            localStorage.setItem('cities', JSON.stringify(cities))

            return {
                ...state,
                cities: cities
            };
        }
        default:
          return state
    }
}

export default city;
