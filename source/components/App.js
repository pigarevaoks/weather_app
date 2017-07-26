import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { loadCities } from './../actions';
import Search from './Search/Search.js';
import SearchResult from './SearchResult/SearchResult.js';
import WeatherList from './WeatherList/WeatherList.js';
import * as styles from './App.styl';

class App extends Component {
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

App.propTypes = {
	loadCities: PropTypes.func.isRequired
}

const mapStateToProps = state => ({ cities: state.cities });
const mapDispatchToProps = { loadCities };
export default connect(mapStateToProps, mapDispatchToProps)(App);
