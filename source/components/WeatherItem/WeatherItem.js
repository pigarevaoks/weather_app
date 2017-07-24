import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deleteCity } from './../../actions';
import * as styles from './WeatherItem.styl';

class WeatherItem extends Component {
	constructor(props) {
		super(props);
		this.removeCity = this.removeCity.bind(this);
	}

	removeCity(name) {
		const cityIndex = this.props.cities.findIndex((city) => city.name == name)
		this.props.deleteCity(cityIndex);

		// localStorage.setItem('cities', JSON.stringify(newCities))
	}

	render() {
		return (
			<div className="weatherItem">
				<div className="searchResult__inner">
					<div className="searchResult__name">{this.props.name}</div>
					<div className="searchResult__temp">{this.props.temp}</div>
					<button type="button"
							onClick={() => this.removeCity(this.props.name)}>
						DELETE
					</button>
				</div>
			</div>
		);
	}
}

const mapStateToProps = state => ({
	cities: state.cities
})

const mapDispatchToProps = {
	deleteCity
}

export default connect(mapStateToProps, mapDispatchToProps)(WeatherItem);
