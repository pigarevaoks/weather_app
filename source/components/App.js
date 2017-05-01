import React, { Component } from 'react';
import * as styles from './App.styl';


function renderWeather(weather, index) {
	return (
		<div className="app__weather__inner" key={ index }>
			<div className="app__ico">{weather.icon}</div>
			<div className="app__title">{weather.main}</div>
			<div className="app__desc">{weather.description}</div>
		</div>
	);
}

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			weatherInfo: {
				name: '',
				weather: []
			}
		}
	}

	componentDidMount() {
		const city_name = "London";
		fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city_name}&appid=63d0d4d4fbe038a5fbb63e0b3bc3e243`)
			.then((response) => response.json())
			.then((data) => {
				this.setState({ weatherInfo: data })
			})
			.catch((error) => {
				console.error(error);
			})
			console.log(this.state.weatherInfo);
	}



	render() {
		return (
			<div className="app">
				<h1 className="app__city">{this.state.weatherInfo.name}</h1>
				<div className="app__weather">
					{ this.state.weatherInfo.weather.map((weather, index) => renderWeather(weather, index)) }
				</div>
			</div>
		);
	}
}

export default App;
