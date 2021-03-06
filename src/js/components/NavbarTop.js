import React, { useContext, useEffect} from "react";
import { Context } from '../store/appContext';
import {Link} from 'react-router-dom';
import {Navbar, Nav, Button} from 'react-bootstrap';

const NavbarTop = (props) => {
    const { store, actions } = useContext(Context);
    const id_session = JSON.parse(sessionStorage.getItem('login'))
    const id_rol = id_session.data.usuario.roles_id

    console.log(props);

    useEffect(() => { 
        actions.fetchMenu(id_rol);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return (
            <Navbar className="navbarlindo" variant="dark" expand="lg">
            <Navbar.Brand>
                    <img 
                        className="ml-4 mr-2"
                        style={{width:"100px"}}
                        src="/4wait.png"
                        alt='brand'
                    />     
                <span>Bienvenido</span>     
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto mr-4"> 
                    {
                        store.menu.map((item, index) => (
                            <Link key={index} className= "nav-link" to={item.ruta_pagina}>{item.nombre_pagina}</Link>
                        ))

                    }   
                    <Button variant="outline-secondary" style={{border: "None"}} onClick={(e)=> actions.cierraSesion(e, props.history)} >Cerrar sesion</Button>
                </Nav>  
                
            </Navbar.Collapse>
        </Navbar>
    );
}

export default NavbarTop