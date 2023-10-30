import React, { Component } from 'react'
import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";
import Menu from './Menu';
import Home from './Home';
import Series from './Series';
import Personajes from './Personajes';
import ModificarPersoanjes from './ModificarPersoanjes';
import NuevoPersonaje from './NuevoPersonaje';
export default class Router extends Component {
  render() {

    
    function DetallesSerieElement () { 
      var { idserie } = useParams();
      return <Series idserie={idserie}/>

     }
     function DetallesPersonajesElement () { 
      var { idserie } = useParams();
      return <Personajes idserie={idserie}/>

     }




    return (
        <BrowserRouter>
        <Menu/>
          <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/modperso" element={<ModificarPersoanjes/>}/>
          <Route path="/nueperso" element={<NuevoPersonaje/>}/>
          <Route path="/series/:idserie" element={<DetallesSerieElement/>}/>
          <Route path="/personajes/:idserie" element={<DetallesPersonajesElement/>}/>
          </Routes>
        </BrowserRouter>
    )
  }
}
