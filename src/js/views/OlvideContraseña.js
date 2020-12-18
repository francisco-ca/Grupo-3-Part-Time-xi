import React, { useContext } from 'react'
import { Form, Button, Card } from 'react-bootstrap'
import NavbarTop from '../components/NavbarTop'
import { Context } from "../store/appContext";
import '../estilos/inicio.css'

const OlvideContraseña = () => {
    const { actions } = useContext(Context);
    console.log(actions)
    return (
        <>

            <div className="container" >
                <div className="Cont">
                    <div className="abs-center text-center">
                        <Card style={{ width: '30rem' }} className="p-4 m-4 borde3 fontt">
                            <h3>¿Olvidaste tu contraseña?</h3>
                            <p>Introduce la dirección de correo electrónico con la que accedes a la app. En unos minutos recibirás
                        un email para reestablecer tu contraseña </p>
                            <Form onSubmit={(e) => actions.onSubmitCorreo(e)}>
                                <Form.Group controlId="formBasicEmail">
                                    <Form.Control type="email" placeholder="Ingresa tu correo" name="correo" onChange={(e) => actions.onChangeUser(e)} />
                                </Form.Group>
                                <Button className="mb-4 btn botone" block size="lg" variant="dark" type="submit">Enviar correo electrónico</Button>
                            </Form>
                        </Card>
                    </div>
                </div>
            </div>
        </>
    );
}

export default OlvideContraseña