import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import axios from "axios"
import Global from './../Global'

export default class Menu extends Component {

    //creamos el state
    state = {
        series: []
    }

    //cargamos los equipos en el state
    loadSeries = () => {


        var request = "/api/series"
        var url = Global.url + request
        console.log(url)
        axios.get(url).then((response) => {
            this.setState({
                series: response.data
                
            })
        })



    }

    componentDidMount = () => {
        this.loadSeries();
    }


    render() {
        return (
            <div style={{ textAlign: "center" }}>

                <nav className="navbar navbar-expand-lg bg-body-tertiary">
                    <div className="container-fluid">
                        <NavLink className="navbar-brand" to="/">Series</NavLink>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <NavLink className="nav-link active" aria-current="page" to="/">Home</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link active" aria-current="page" to="/nueperso">Nuevo Personaje</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link active" aria-current="page" to="/modperso">Modificar Personaje</NavLink>
                                </li>
                                <li className="nav-item">

                                    <div className="dropdown-center">
                                        <button className="btn  dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            Series
                                        </button>
                                        <ul className="dropdown-menu">
                                            {this.state.series.map((serie, index) => {
                                                
                                                return (<li key={index}><NavLink className="nav-link" to={"/series/" + serie.idSerie}>{serie.nombre}</NavLink></li>)

                                            })}

                                        </ul>
                                    </div>
                                </li>


                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        )
    }
}
