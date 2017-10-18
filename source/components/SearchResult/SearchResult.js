import React, { Component } from 'react';
import { connect } from 'react-redux'
import { addCity } from './../../actions';
import * as styles from './searchResult.styl';

@connect(
	state => ({
		weatherInfo: state.weatherInfo,
		cities: state.cities
	}),
	{ addCity }
)
export default class SearchResult extends Component {
	constructor(props) {
		super(props);
		this.addCityInfo = this.addCityInfo.bind(this);
	}

	addCityInfo() {
		this.props.addCity(this.props.weatherInfo);
	}

	render() {
		return (
			<div className="searchResult">
				<div className="searchResult__inner">
					<div className="searchResult__name">{this.props.weatherInfo.name}</div>
					<div className="searchResult__temp">{this.props.weatherInfo.temp} &deg;C</div>
					<button type="button"
							className="searchResult__btn"
							onClick={this.addCityInfo}>
						ADD
					</button>
				</div>
			</div>
		);
	}
}
