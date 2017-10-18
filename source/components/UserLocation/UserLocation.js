import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getLocation } from './../../actions';
import * as styles from './UserLocation.styl';
import PreloaderIcon, { ICON_TYPE } from 'react-preloader-icon';

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
						<div className="userLocation__title">Weather in <span className="userLocation__city">{this.state.cityName}</span></div>
						<div className="userLocation__item"><span>TEMP: </span>{this.state.temp} &deg;C</div>
					</div>
					: <div className="userLocation__loader">
						<PreloaderIcon
							type={ICON_TYPE.OVAL}
							size={32}
							strokeWidth={8}
							strokeColor="#5fb3e4"
							duration={800} /> 
					</div>
				}
			</div>
		);
	}
}
