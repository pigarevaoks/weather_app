export default function getWeather(cities) {
	const domen = 'api.openweathermap.org/data/2.5/weather';
	const key = '63d0d4d4fbe038a5fbb63e0b3bc3e243';
	cities = cities.split(',')

	fetch(`${domen}?q=${cities}&appid=${key}`)
		.then((response) => response.json())
		.then((data) => {
			this.props.updateInfo({ temp: data.main.temp, name: data.name})
		})
		.catch((error) => {
			console.error(error);
		})
}
