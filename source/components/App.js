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
			weather: []
		}
		this.updateWeatherInfo = this.updateWeatherInfo.bind(this);
	}

	updateWeatherInfo(weatherInfo) {
		this.setState({
			weatherInfo: weatherInfo
		});
	}

	render() {
		return (
			<div className="app">
				<div className="app__inner">
					<Search updateInfo={this.updateWeatherInfo}/>
					<SearchResult weatherInfo={this.state.weatherInfo}/>
					<WeatherList />
				</div>
			</div>
		);
	}
}

export default App;
