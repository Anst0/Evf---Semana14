const React = require('react');
const { Link, useParams } = require('react-router-dom');
const { useState, useEffect } = require('react');
const client = require('../client');

const VerBandaPage = () => {

    let { id } = useParams();
    const [banda, setBanda] = useState({});
    const [integrantes, setIntegrantes] = useState([]);

    useEffect(() => {
        client({
            method: 'GET',
            path: '/api/empresa/' + id
        }).done(response => setBanda(response.entity))
        client({
            method: 'GET',
            path: '/api/bandas/' + id + '/formacion'
        }).done(response => setIntegrantes(response.entity))
    }, [])


    return (
        <>
            <h1>Empresa</h1>
            <hr />

            <table border="1">
                <tbody>
                    <tr>
                        <th>Empresa</th>
                        <td>{banda.nombre}</td>
                    </tr>
                </tbody>
            </table>
            <hr />

            <h2>Listado de Productos</h2>
            <table border="1">
                <thead>
                    <tr>
                        <th>Producto</th>
                        <th>Marca</th>
                    </tr>
                </thead>
                <tbody>

                    {integrantes.map(integrante=>{
                        return(
                            <tr key={integrante.ID}>
                                <td>{integrante.MUSICO}</td>
                                <td>{integrante.INSTRUMENTO}</td>
                            </tr>
                        )
                    })}

                </tbody>

            </table>

            <hr />
            <Link to={`/ver-banda/${id}/nuevo-integrante`}>Agregar Producto</Link> |
            <Link to="/">Volver</Link>
        </>
    )

}

module.exports = VerBandaPage;