import React, { Component, PropTypes } from 'react';
import Search from './Search/Search.js';
import SearchResult from './SearchResult/SearchResult.js';
import WeatherList from './WeatherList/WeatherList.js';
import { connect } from 'react-redux';
import { addCity } from './../actions';
import * as styles from './App.styl';

class App extends Component {

	componentWillMount() {
		if (localStorage.cities) {
			const cities = JSON.parse(localStorage.cities).map((name) => {
				return { name: name, temp: 0 }
			})

			this.props.addCity(cities);
		}
	}

	render() {
		return (
			<div className="app">
				<div className="app__inner">
					<Search />
					<SearchResult />
					<WeatherList />
				</div>
			</div>
		);
	}
}

App.propTypes = {
	addCity: PropTypes.func.isRequired
}

const mapStateToProps = state => ({})

const mapDispatchToProps = {
	addCity
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
