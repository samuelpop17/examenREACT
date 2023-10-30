import React, { Component } from 'react'
import { Navigate } from 'react-router-dom'
import axios from "axios"
import Global from './../Global'
export default class NuevoPersonaje extends Component {

    state = {
        series: [],
        idser:0
    }
    componentDidMount = () => {
        this.loadSeries();
    }
    loadSeries = () => {


        var request = "/api/series"
        var url = Global.url + request

        axios.get(url).then((response) => {
            this.setState({
                series: response.data

            })
        })



    }

    cajanom = React.createRef();
    cajaimg = React.createRef();
    cajaserie = React.createRef();

    moficarSerie =(e)=>{
        e.preventDefault();
        var request="api/Personajes" 
        var url = Global.url+request
        var nombre=this.cajanom.current.value
        var imagen=this.cajaimg.current.value
        var idser=parseInt(this.cajaserie.current.value)
        
        

        var personaje={
            idPersonaje:1,
            nombre:nombre,
            imagen:imagen,
            idSerie:idser
            
        }
        console.log(personaje)
        axios.post(url,personaje).then(response=>{
            this.setState({
                
                status:true,
                idser:idser
            
            })
        })
    }


    render() {
        return (
            <div className="container">
                 {
            this.state.status===true &&
            (<Navigate to={"./../personajes/"+this.state.idser}/>)
            
        }
                <div className="row justify-content-center">
                    <div className="col-md-6">
                        <h1>Nuevo Personaje</h1>
                        <form onSubmit={this.handleSubmit}>
                            <div className="form-group">
                                <label htmlFor="campo1">Nombre:</label>
                                <input className="form-control" type="text" ref={this.cajanom}/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="campo2">Imagen:</label>
                                <input className="form-control" type="text" ref={this.cajaimg}/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="campo3">Seleccione una Serie:</label>
                                <select className="form-control" ref={this.cajaserie}>
                                    {this.state.series.map((serie, index) => (
                                        <option key={index} value={serie.idSerie}>
                                            {serie.nombre}
                                        </option>
                                    ))}
                                </select>
                            </div>
                            <button type="submit" className="btn btn-primary" onClick={this.moficarSerie}>
                                Insertar Personaje
                            </button>
                        </form>
                    </div>
                </div>
            </div>

        )
    }
}
