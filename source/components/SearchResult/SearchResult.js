import React, { Component } from 'react';
import * as styles from './searchResult.styl';

export default class SearchResult extends Component {
	render() {
		return (
			<div className="searchResult">
				<div className="searchResult__name">{this.props.weatherInfo.name}</div>
				<div className="searchResult__temp">{this.props.weatherInfo.temp}</div>
			</div>
		);
	}
}
