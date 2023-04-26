import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Principal from './principal.jsx'
class Login extends Component {
    state = {
        Persona: {
            nombre: "",
            apellido: "",
            email: "",
            tipousuario: "",
            password: "",
            foto: ""
        },
        personasActuales: [],
        ingresaralsistema: false
    }
    render() {
        if (this.state.ingresaralsistema) {
            return <React.Fragment>
                <Principal />
            </React.Fragment>
        }
        else {
            return <React.Fragment>
                <h1 class="text-center">Ingresar</h1>

<div>
    <div class="text-center w-25" />
    <input className='form-control' type='text' id='email' placeholder='Escriba el email' onChange={(evt) => this.actualizadatosaverificar(evt)} />
    <input className='form-control' type='password' id='password' placeholder='Escriba la contraseña' onChange={(evt) => this.actualizadatosaverificar(evt)} />
    <input className='btn btn btn-dark' type='button' id='botonguardar' value='Ingresar' onClick={this.Ingreso} />
</div>
            </React.Fragment>
        }
    }
    actualizadatosaverificar(evt) {
        var objetolocalpersona = new Object();

        objetolocalpersona = this.state.Persona
        switch (evt.target.id) {
            case "email":
                {
                    console.log(this.state.Persona)
                    objetolocalpersona.email = evt.target.value;
                    break;
                }
            case "password":
                {
                    console.log(this.state.Persona)
                    objetolocalpersona.password = evt.target.value;
                    break;
                }
        }
        this.setState({
            Persona: objetolocalpersona
        })


    }

    Ingreso = () => {
        var objetolocal = this.state.Persona
        const recipeUrl = 'http://localhost:8080/api/login';
        const requestMetadata = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(objetolocal)
        };

        fetch(recipeUrl, requestMetadata)
            .then(res => res.json())
            .then(personas => {
                if (personas.length === 1) {
                    this.setState({ ingresaralsistema: true })
                    alert("Ingreso Exitoso")
                }
                else {
                    alert('Algun dato es erroneo')
                }
            });
    }
}
export default Login;