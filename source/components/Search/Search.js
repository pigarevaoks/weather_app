import React, { Component } from 'react';
import * as styles from './search.styl';

export default class Search extends Component {
	constructor(props) {
		super(props);
		this.handleSearch = this.handleSearch.bind(this);
	}
	handleSearch(event) {
		let cityName = event.target.value;
		if (cityName.length < 3) { return false }
	}
	render() {
		return (
			<div className="search">
				<input className="search__input" type="search" placeholder="Поиск" onChange={this.handleSearch}/>
			</div>
		);
	}
}
