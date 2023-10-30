import React, { Component } from 'react'
import { Navigate } from 'react-router-dom'
import axios from "axios"
import Global from './../Global'
export default class ModificarPersoanjes extends Component {

    state = {
        series: [],
        status: false,
        personajes: [],
        idser:0
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
    loadPersonajes = () => {


        var request = "/api/personajes"
        var url = Global.url + request
        
        axios.get(url).then((response) => {
            this.setState({
                personajes: response.data

            })
        })



    }
    componentDidMount = () => {
        this.loadSeries();
        this.loadPersonajes();
    }
    cajaserie=React.createRef();
    cajaper=React.createRef();
    moficarSerie =(e)=>{
        e.preventDefault();
        
        var idserie=this.cajaserie.current.value
        var personaje=this.cajaper.current.value
        var request="api/personajes/"+personaje+"/"+idserie 
        var url = Global.url+request
        

     
            

        axios.put(url).then(response=>{
            this.setState({
                
                status:true,
                idser:idserie
            })
            console.log(this.state.idser)
        })
    }

    render() {
        return (
            <div>
                {
            this.state.status===true &&
            (<Navigate to={"./../personajes/"+this.state.idser}/>)
            
        }

                <h1>Personajes y Series</h1>



                <div className="container">
                    <form onSubmit={this.handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="campo1">Seleccione una Serie: </label>
                            <select className="form-control" ref={this.cajaserie}>
                                {this.state.series.map((serie, index) => {

                                    return (<option key={index} value={serie.idSerie}>{serie.nombre}</option>)

                                })}
                            </select>
                        </div>
                        <div className="form-group">
                            <label htmlFor="campo2">Seleccione un Personaje:</label>
                            <select className="form-control" ref={this.cajaper}>
                                {this.state.personajes.map((personaje, index) => {

                                    return (<option key={index} value={personaje.idPersonaje}>{personaje.nombre}</option>)

                                })}
                            </select>
                        </div>
                        <button type="submit" className="btn btn-primary" onClick={this.moficarSerie}>Guardar cambios</button>
                    </form>
                </div>


            </div>
        )
    }
}
