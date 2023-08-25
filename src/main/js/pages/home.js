const React = require('react');
const client = require('../client');
const {Link} = require('react-router-dom');

class HomePage extends React.Component {
	constructor(props) {
		super(props);
		this.state = { instrumentos: [], musicos: [], bandas: [] };
	}
	componentDidMount() {

		client({ method: 'GET', path: '/api/instrumentos' }).done(response => {
			this.setState({ instrumentos: response.entity._embedded.instrumentos });
		});

		client({ method: 'GET', path: '/api/musicos' }).done(response => {
			this.setState({ musicos: response.entity._embedded.musicos });
		});

		client({ method: 'GET', path: '/api/bandas' }).done(response => {
			this.setState({ bandas: response.entity._embedded.bandas });
		});

	}
	render() {
		return (
			<>
				<h1>Semana 14 Evf - Juan Angel Monzon Velasquez</h1>

				<div style={  {"width": "100%", "display": "flex"}   }>
					<div style={{"width": "calc(100% / 3)"}}>
						<Titulo entidad="Empresas" emoji="👩🏼‍🎤" />
						<BandaList bandas={this.state.bandas} />
						<Link to="/nueva-banda">Nuevos Producto</Link>
					</div>
				</div>


			</>
		)
	}
}

const Titulo = (props) => {
	return (
		<>
			<hr />
			<h2>{props.emoji} - {props.entidad}</h2>
			<hr />
			Lista completa de {props.entidad.toLowerCase()}
		</>
	)
}



class BandaList extends React.Component {
	render() {
		const bandas = this.props.bandas.map(banda =>
			<Banda key={banda._links.self.href} banda={banda} />
		);
		return (
			<table border="1">
				<tbody>
					<tr>
						<th>Tienda</th>
						<th>Productos</th>
					</tr>
					{bandas}
				</tbody>
			</table>
		)
	}
}

class Banda extends React.Component {
	render() {
		const id = this.props.banda._links.self.href.split("/").slice(-1)

		return (
			<tr>
				<td>{this.props.banda.nombre}</td>
				<td>
					<Link to={"/ver-banda/" + id}>Detalles</Link>
				</td>
			</tr>
		)
	}
}

module.exports = HomePage;