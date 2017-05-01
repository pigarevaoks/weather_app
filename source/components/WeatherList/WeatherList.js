import React, { Component } from 'react';
import WeatherItem from '../../components/WeatherItem/WeatherItem.js';
import * as styles from './WeatherList.styl';

// function renderWeatherItems(weatherItems) {
// 	return weatherItems.map((weatherItem, index) => {
// 		return <WeatherItem { ...weather } key={ index } />
// 	});
// }

export default class WeatherList extends Component {
	render() {
		return (
			<section className="weatherList">
				{/* { renderWeatherItems(this.props.weatherItems) } */}
				<WeatherItem />
			</section>
		);
	}
}
