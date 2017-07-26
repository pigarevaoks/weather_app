import React, { Component } from 'react';
import WeatherItem from '../../components/WeatherItem/WeatherItem.js';
import * as styles from './WeatherList.styl';

const WeatherList = function({cities}) {
	return (
		<section className="weatherList">
			{cities.map((city, index)=>{
				return <WeatherItem name={city.name} temp={city.temp} key={index} />
			})}
		</section>
	);
}

export default WeatherList;
