import React, { useState } from 'react'
import './Register.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import ToggleButton from 'react-bootstrap/ToggleButton';
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';

function Register() {
  return (

    <div className='registro'>

      <div className=''>
        <div>
          <ToggleButtonGroup type="radio" name="options" defaultValue={1}>
            <ToggleButton id="tbg-radio-2" value={2}>
              Iniciar Sesion
            </ToggleButton>
            <ToggleButton id="tbg-radio-3" value={3}>
              Registrarse
            </ToggleButton>
          </ToggleButtonGroup>
        </div>

        <>
          <Form.Label htmlFor="inputNombre">Nombre:</Form.Label>
          <Form.Control
            type="text"
            id="inputNombre"
            aria-describedby="name"
          />
          <Form.Text id="inputNombre" muted>
            *Ingrese su nombre
          </Form.Text>
        </>
        <div>
          <Form.Label htmlFor="inputEmail">Email</Form.Label>
          <Form.Control
            type="email"
            id="inputEmail"
            aria-describedby="email"
          />
          <Form.Text id="inputEmail" muted>
            *Ingrese su email
          </Form.Text>
        </div>
        <div>
          <>
            <Form.Label htmlFor="inputPassword5">Direccion</Form.Label>
            <Form.Control
              type="text"
              id="inputAdress"
              aria-describedby="adress"
            />
            <Form.Text id="inputAdress" muted>
              *ingrese su direccion
            </Form.Text>
          </>
        </div>
        <>
          <Form.Label htmlFor="inputPassword">Contraseña</Form.Label>
          <Form.Control
            type="password"
            id="inputPassword"
            aria-describedby="passwordHelpBlock"
          />
          <Form.Text id="inputPassword" muted>
            *Su contraseña debe tener entre 8 y 20 caracteres, contener letras y números.

          </Form.Text>
        </>
        <Form>
          {['Acepto terminos y condiciones'].map((type) => (
            <div key={`default-${type}`} className="mb-3">
              <Form.Check
                type={'checkbox'}
                id={`default-${type}`}
                label={` ${type}`}
              />
            </div>
          ))}
        </Form>
        <div>
          <Button variant="primary">Enviar</Button>{' '}
        </div>
      </div>
    </div>

  )
}

export default Register