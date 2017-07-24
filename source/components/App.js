import React, { Component, PropTypes } from 'react';
import Search from './Search/Search.js';
import SearchResult from './SearchResult/SearchResult.js';
import WeatherList from './WeatherList/WeatherList.js';
import { connect } from 'react-redux';
import { addCity } from './../actions';
import * as styles from './App.styl';

class App extends Component {
	constructor(props) {
		super(props);
		this.addCity = this.addCity.bind(this);
		this.deleteCity = this.deleteCity.bind(this);
		// this.state = {
		// 	weatherInfo: {
		// 		temp: '',
		// 		name: ''
		// 	},
		// 	weather: [],
		// 	cities: []
		// }
	}

	componentWillMount() {
		if (localStorage.cities) {
			const cities = JSON.parse(localStorage.cities).map((name) => {
				return { name: name, temp: 0 }
			})

			this.props.addCity(cities);
		}
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
					<Search />
					<SearchResult updateCity={this.addCity} />
					<WeatherList deleteCity={this.deleteCity} />
				</div>
			</div>
		);
	}
}

App.propTypes = {
	addCity: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
	cities: state.cities,
	weatherInfo: state.weatherInfo
})

const mapDispatchToProps = {
	addCity
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
