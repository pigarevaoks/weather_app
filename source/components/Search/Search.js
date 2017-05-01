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
		fetch(`http://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=63d0d4d4fbe038a5fbb63e0b3bc3e243`)
			.then((response) => response.json())
			.then((data) => {
				this.props.updateInfo({ temp: data.main.temp, name: data.name})
				console.log(data);

			})
			.catch((error) => {
				console.error(error);
			})
	}
	render() {
		return (
			<div className="search">
				<input className="search__input" type="search" placeholder="Поиск" onChange={this.handleSearch}/>
			</div>
		);
	}
}
