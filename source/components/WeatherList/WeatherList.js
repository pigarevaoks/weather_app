import React, { Component } from 'react';
import WeatherItem from '../../components/WeatherItem/WeatherItem.js';
import { connect } from 'react-redux';
import * as styles from './WeatherList.styl';

class WeatherList extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<section className="weatherList">
				{this.props.cities.map((city, index)=>{
					return <WeatherItem name={city.name} temp={city.temp} key={index}
															deleteCity={this.props.deleteCity}/>
				})}
			</section>
		);
	}
}

const mapStateToProps = state => ({
	cities: state.cities
})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(WeatherList);
