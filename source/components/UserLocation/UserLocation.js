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
	}

	componentWillMount() {
	  	this.props.getLocation();
	}

	render() {
		return (
			<div className="userLocation">
				<div className="userLocation__title">Weather in Bryansk</div>
				<div className="userLocation__item"><span>latitude:</span>{this.props.location.latitude} </div>
				<div className="userLocation__item"><span>longitude:</span>{this.props.location.longitude} </div>
			</div>
		);
	}
}
