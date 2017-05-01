import React, { Component } from 'react';
import * as styles from './WeatherItem.styl';

export default class WeatherItem extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="weatherItem">
				<div className="searchResult__inner">
					<div className="searchResult__name">{this.props.name}</div>
					<div className="searchResult__temp">{this.props.temp}</div>
					<button type="button"
									onClick={() => this.props.deleteCity(this.props.name)}>
						DELETE
					</button>
				</div>
			</div>
		);
	}
}
