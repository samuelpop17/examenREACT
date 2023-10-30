import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import axios from "axios"
import Global from './../Global'
export default class Series extends Component {
  
  
    state = {
        serie: [],
        status: false
    }

    loadSerie = () => {
        var ids=this.props.idserie
        var request = "api/Series/" + ids
        var url = Global.url + request
        console.log(url)
        axios.get(url).then((response) => {
            this.setState({
                serie: response.data,
                status: true
            })
        })
    }


    componentDidMount = () => {
        this.loadSerie();
    }
    componentDidUpdate = (oldprops) => {
        if (oldprops !== this.props.idserie) {
            this.loadSerie();
        }

    }
  
  
    render() {
    return (
        <div>
           

        <ul className='list-group' style={{ textAlign: "center", padding: "20px" }}>
            
            <li className='list-group-item'><img src={this.state.serie.imagen} style={{ width: "150px" }} /></li>
            <li className='list-group-item'>{this.state.serie.nombre}</li>
            <li className='list-group-item'>IMDB: {this.state.serie.puntuacion}</li>
        </ul>
        <div className='text-center'>
            <NavLink className=" btn btn-success " aria-current="page" to={"/personajes/"+this.state.serie.idSerie}>Personajes</NavLink>
            <NavLink className="  btn btn-danger" aria-current="page" to="/">Volver</NavLink>
        </div>
    </div>
    )
  }
}
