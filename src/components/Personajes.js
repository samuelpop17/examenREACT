import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import axios from "axios"
import Global from './../Global'
export default class Personajes extends Component {
  
  
    state = {
        personajes: [],
        status: false
      }
    
      loadPersonajes = () => {
        var request = "api/Series/PersonajesSerie/" + this.props.idserie
        var url = Global.url + request
        console.log(url)
        axios.get(url).then((response) => {
          this.setState({
            personajes: response.data,
            status: true
          })
        })
      }
    
    
      componentDidMount = () => {
        this.loadPersonajes();
      }
    
  
  
    render() {
    return (
        <div>
            <NavLink className="  btn btn-danger" aria-current="page" to={"/series/"+this.props.idserie}>Volver</NavLink>

        <div className='text-center' style={{ width: "60%", margin: "auto" }}>
          <h1>Personajes</h1>
          <table className="table table-bordered">
            <thead>
              <tr>

                <th>Nombre</th>
                <th>Imagen</th>
                

              </tr>
            </thead>
            <tbody>
              {this.state.personajes.map((personaje, index) => (
                <tr key={index}>

                  <td>{personaje.nombre}</td>
                  <td><img src={personaje.imagen} style={{width:"200px"}} /></td>
                  

                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    )
  }
}
