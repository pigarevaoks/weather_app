import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loadCities } from './../actions';
import Search from './Search/Search.js';
import SearchResult from './SearchResult/SearchResult.js';
import WeatherList from './WeatherList/WeatherList.js';
import * as styles from './App.styl';

@connect(
	state => ({ cities: state.cities }),
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
					<Search />
					<SearchResult />
					<WeatherList cities={this.props.cities} />
				</div>
			</div>
		);
	}
}
