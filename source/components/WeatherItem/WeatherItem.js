import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deleteCity } from './../../actions';
import * as styles from './WeatherItem.styl';

@connect(
	state => ({ cities: state.cities }),
	{ deleteCity }
)
export default class WeatherItem extends Component {
	constructor(props) {
		super(props);
		this.removeCity = this.removeCity.bind(this);
	}

	removeCity(name) {
		const cityIndex = this.props.cities.findIndex((city) => city.name == name)
		this.props.deleteCity(cityIndex);
	}

	render() {
		return (
			<div className="weatherItem">
				<div className="weatherItem__inner">
					<div className="weatherItem__name">{this.props.name}</div>
					<div className="weatherItem__temp">{this.props.temp}</div>
				</div>
				<button type="button"
						className="weatherItem__btn"
						onClick={() => this.removeCity(this.props.name)}>
					DELETE
				</button>
			</div>
		);
	}
}
