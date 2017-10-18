import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getLocation } from './../../actions';
import * as styles from './UserLocation.styl';

@connect(
	state => ({ location: state.location }),
	{ getLocation }
)
export default class UserLocation extends Component {
	constructor(props) {
		super(props);
		this.state = { 
			cityName: null,
			temp: null
		}
	}

	componentDidMount() {
	  	this.props.getLocation().then((resp) => {
			const domen = 'api.openweathermap.org/data/2.5/weather';
			const key = '63d0d4d4fbe038a5fbb63e0b3bc3e243';

			fetch(`http://${domen}?appid=${key}&lat=${this.props.location.latitude}&lon=${this.props.location.longitude}&units=metric`)
				.then((response) => response.json())
				.then((response) => {
					this.setState({
						cityName: response.name,
						temp: response.main.temp
					})
				})
				.catch((error) => {
					console.error(error);
				})
		})
	}

	render() {
		return (
			<div className="userLocation">
    			{this.state.cityName && this.state.temp ?
					<div>
						<div className="userLocation__title">Weather in {this.state.cityName}</div>
						<div className="userLocation__item"><span>temp: </span>{this.state.temp} </div>
					</div> : null
				}
			</div>
		);
	}
}
