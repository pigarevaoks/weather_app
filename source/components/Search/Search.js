import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addWeatherInfo } from './../../actions';
import * as styles from './search.styl';

@connect(
	state => ({ weatherInfo: state.weatherInfo }),
	{ addWeatherInfo }
)
export default class Search extends Component {
	constructor(props) {
		super(props);
		this.handleSearch = this.handleSearch.bind(this);
	}

	handleSearch(event) {
		const domen = 'api.openweathermap.org/data/2.5/weather';
		const key = '63d0d4d4fbe038a5fbb63e0b3bc3e243';

		let cityName = event.target.value;
		if (cityName.length < 3) { return false }

		fetch(`http://${domen}?q=${cityName}&appid=${key}`)
			.then((response) => response.json())
			.then((response) => {
				this.props.addWeatherInfo({
					temp: response.main.temp,
					name: response.name
				});
			})
			.catch((error) => {
				console.error(error);
			})
	}

	render() {
		return (
			<div className="search">
				<input className="search__input" 
						type="search"
						placeholder="Search"
						onChange={this.handleSearch} />
			</div>
		);
	}
}
