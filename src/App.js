import React from 'react';
import injectContext from './js/store/appContext'
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'bootstrap/dist/css/bootstrap.min.css';
import{BrowserRouter, Switch, Route} from 'react-router-dom'

//Componentes
import Inicio from './js/views/Inicio'
import Login from './js/views/Login'
import RecuperaContraseña from './js/views/RecuperaContraseña'
import WaitList from './js/views/Wait-list';
import AdmWaitList from './js/views/Adm-Wait-list';
import SignUp from "./js/views/Sign-up"
import Restaurants from './js/views/Restaurants';
import AddRestaurant from './js/views/AddRestaurant';
import editRestaurant from './js/views/editarRestaurante';


function App() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component= {Inicio}/>
          <Route exact path="/lista-espera" component= {WaitList}/>
          <Route exact path="/adm-lista-espera" component= {AdmWaitList}/>
          <Route exact path="/restaurantes" component= {Restaurants}/>
          {/* <Route exact path="/registrarse" component= {SignUp}/> */}
          <Route exact path="/registro" component= {SignUp}/>
          <Route exact path="/login" component = {Login}/>
          <Route exact path="/contraseña" component= {RecuperaContraseña}/>
          <Route exact path="/restaurantes/:id/editar" component= {editRestaurant}/>
          <Route exact path="/addrestaurant" component= {AddRestaurant}/>
        </Switch>
      </BrowserRouter> 
    </>
  );
}

export default injectContext(App);