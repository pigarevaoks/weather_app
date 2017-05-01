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
		this.updateWeatherInfo = this.updateWeatherInfo.bind(this);
		this.updateCity = this.updateCity.bind(this);
	}

	componentWillMount() {
		if (localStorage.cities) {
			this.setState({cities: JSON.parse(localStorage.cities)})
		}
	}

	updateWeatherInfo(weatherInfo) {
		this.setState({
			weatherInfo: weatherInfo
		});
	}

	updateCity(cityInfo) {
		let cities = this.state.cities.slice()
		cities.push(cityInfo)
		this.setState({ cities: cities });
		localStorage.setItem('cities', JSON.stringify(cities))
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
					<Search updateInfo={this.updateWeatherInfo} />
					<SearchResult weatherInfo={this.state.weatherInfo} updateCity={this.updateCity} />
					<WeatherList cities={this.state.cities} deleteCity={this.deleteCity.bind(this)} />
				</div>
			</div>
		);
	}
}

export default App;
