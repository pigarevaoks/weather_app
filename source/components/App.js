import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loadCities } from './../actions';
import Search from './Search/Search.js';
import SearchResult from './SearchResult/SearchResult.js';
import WeatherList from './WeatherList/WeatherList.js';
import * as styles from './App.styl';

@connect(
	state => ({
		cities: state.cities,
		weatherInfo: state.weatherInfo
	}),
	{ loadCities }
)
export default class App extends Component {
	componentWillMount() {
		if (localStorage.cities) {
			const cities = JSON.parse(localStorage.cities);
			this.props.loadCities(cities);
		}
	}

	render() {
		return (
			<div className="app">
				<div className="app__inner">
					<h1 className="app__title">Weather application</h1>
					<div className="app__content">
						<Search />
						{
							(this.props.weatherInfo.name) ?
							<SearchResult /> :
							null
						}
						<WeatherList cities={this.props.cities} />
					</div>
				</div>
			</div>
		);
	}
}
