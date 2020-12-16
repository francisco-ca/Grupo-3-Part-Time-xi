import React, { useContext } from 'react'
import { Form, Button } from 'react-bootstrap'
import { Context } from "../store/appContext";

const EnvioMsj = () => {
    const { actions } = useContext(Context);
    let usuario = 'Humberto'
    let restaurante = 'Pollito Rico'
    return (
        <Form onSubmit={(e)=>actions.onSubmitMsj(e, usuario, restaurante)}>
            <Button variant="secondary" type="submit">Enviar Aviso</Button>
        </Form>
    );
}
export default EnvioMsj