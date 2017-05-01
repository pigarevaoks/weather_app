import React, { Component } from 'react';
import WeatherItem from '../../components/WeatherItem/WeatherItem.js';
import * as styles from './WeatherList.styl';

export default class WeatherList extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<section className="weatherList">
				{this.props.cities.map((city, index)=>{
					return <WeatherItem name={city.name} temp={city.temp} key={index}/>
				})}
			</section>
		);
	}
}
