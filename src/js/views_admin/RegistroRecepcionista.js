import React, { useContext, useEffect} from "react";
import { Context } from "../store/appContext";
import { Form, Col, Button, Row } from 'react-bootstrap';
import Volver from "../components/Volver";
import '../estilos/inicio.css'
import { useHistory } from 'react-router-dom'

const RegistroRecepcionista = () => {
    const { store, actions } = useContext(Context);
    const history =useHistory();
    useEffect(() => { }, []);

    return (
        <div className="container">
             <div className="Cont">
            <div className= "abs-center text-center">
                <Form className="p-4 m-4 borde3 fontt" onSubmit={(e) => {actions.registroRecepcionista(e);history.push('/restaurantes')}}>
                    <Form.Row>
                        <Form.Group as={Col} controlId="formName">
                            <Form.Label>Nombre</Form.Label>
                            <Form.Control type="text" placeholder="Nombre" name="nombre" onChange={(e) => actions.onChangeUser(e)} value={store.persona.nombre} />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formLastName">
                            <Form.Label>Apellido</Form.Label>
                            <Form.Control type="text" placeholder="Apellido" name="apellido" onChange={(e) => actions.onChangeUser(e)} value={store.persona.apellido} />
                        </Form.Group>
                    </Form.Row>
                    <Form.Group controlId="telefono">
                        <Form.Label>Número de teléfono</Form.Label>
                        <Form.Control placeholder="Ej: +56 9 12345788" name="telefono" onChange={(e) => actions.onChangeUser(e)} value={store.persona.telefono} />
                    </Form.Group>
                    <Form.Group controlId="formGridEmail">
                        <Form.Label>Correo electrónico</Form.Label>
                        <Form.Control type="email" placeholder="Correo electrónico" name="correo" onChange={(e) => actions.onChangeUser(e)} value={store.persona.correo} />
                    </Form.Group>

                    <Form.Group controlId="formGridPassword">
                        <Form.Label>Contraseña</Form.Label>
                        <Form.Control type="password" placeholder="Contraseña" name="contraseña" onChange={(e) => actions.onChangeUser(e)} value={store.persona.contraseña} />
                    </Form.Group>
                    
                    <Button className="btn botone" variant="dark" type="submit" > Registrar Recepcionista </Button>
                    <Row><Volver/></Row>
                </Form>
            </div>
            </div>
        </div>
    )
}

export default RegistroRecepcionista
