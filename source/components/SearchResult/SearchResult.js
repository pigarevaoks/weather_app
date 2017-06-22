import React, { Component } from 'react';
import * as styles from './searchResult.styl';

export default class SearchResult extends Component {
	constructor(props) {
		super(props);
		this.handleSaveCity = this.handleSaveCity.bind(this);
	}
	handleSaveCity() {
		this.props.updateCity(this.props.weatherInfo)
	}
	render() {
		return (
			<div className="searchResult">
				{ (this.props.weatherInfo.name) &&
					<div className="searchResult__inner">
						<div className="searchResult__name">{this.props.weatherInfo.name}</div>
						<div className="searchResult__temp">{this.props.weatherInfo.temp}</div>
						<button type="button" onClick={this.handleSaveCity}>ADD</button>
					</div>
				}
			</div>
		);
	}
}
