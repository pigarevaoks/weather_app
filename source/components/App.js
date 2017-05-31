import React, { Component } from 'react';
import Search from './Search/Search.js';
import SearchResult from './SearchResult/SearchResult.js';
import WeatherList from './WeatherList/WeatherList.js';
import * as styles from './App.styl';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			weatherInfo: {
				temp: '',
				name: ''
			},
			weather: [],
			cities: []
		}
	}

	componentWillMount() {
		if (localStorage.cities) {
			
			// this.setState({cities: JSON.parse(localStorage.cities)})
		}
	}

	updateWeatherInfo(weatherInfo) {
		this.setState({
			weatherInfo: weatherInfo
		});
	}

	addCity(cityInfo) {
		let cities = this.state.cities.slice()
		cities.push(cityInfo)
		this.setState({ cities: cities });

		const storageCities = cities.map((city) => city.name)
		localStorage.setItem('cities', JSON.stringify(storageCities))
	}

	deleteCity(city) {
		let newCities = this.state.cities.filter((cityItem) => cityItem.name !== city)
		this.setState({cities: newCities})
		localStorage.setItem('cities', JSON.stringify(newCities))
	}

	render() {
		return (
			<div className="app">
				<div className="app__inner">
					<Search updateInfo={this.updateWeatherInfo.bind(this)} />
					<SearchResult weatherInfo={this.state.weatherInfo} updateCity={this.addCity.bind(this)} />
					<WeatherList cities={this.state.cities} deleteCity={this.deleteCity.bind(this)} />
				</div>
			</div>
		);
	}
}

export default App;
