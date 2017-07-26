import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux'
import { addCity } from './../../actions';
import * as styles from './searchResult.styl';


class SearchResult extends Component {
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
				{ (this.props.weatherInfo.name) &&
					<div className="searchResult__inner">
						<div className="searchResult__name">{this.props.weatherInfo.name}</div>
						<div className="searchResult__temp">{this.props.weatherInfo.temp}</div>
						<button type="button" onClick={this.addCityInfo}>ADD</button>
					</div>
				}
			</div>
		);
	}
}

SearchResult.propTypes = {
	addCity: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
	weatherInfo: state.weatherInfo,
	cities: state.cities
});
const mapDispatchToProps = { addCity };
export default connect(mapStateToProps, mapDispatchToProps)(SearchResult);
