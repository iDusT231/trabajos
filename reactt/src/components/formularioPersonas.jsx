import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import FiladelatabladepersonasP from './llenaOtraTablaPersonas.jsx';
class Formulario extends Component{
    state={
        personas :{
        nombre:"",
        apellido:"",
        email:"",
        tipousuario:"",
        password:"",
        foto:""
    },
    personasActuales:[]  
    }
    render(){
        return (<React.Fragment>
            <br />
            <table className='table table-dark table-striped table-hover'>
                    <td scope='col'>
                    <input type='text' className='form-control col' id='nombre' onChange = {(evt) => this.actualizadatosaguardar(evt)} placeholder = 'Escriba el nombre'/>
                    </td>
                    <td scope='col'>
                    <input type='text' className='form-control ' id='apellido' placeholder = 'Escriba el apellido' onChange = {(evt) => this.actualizadatosaguardar(evt)}/>
                    </td>
                    <td scope='col'>
                    <input type='text' className='form-control' id='email' placeholder = 'Escriba el correo' onChange = {(evt) => this.actualizadatosaguardar(evt)}/>
                    </td>
                    <td scope='col'>
                    <input type='text' className='form-control' id='tipousuario' placeholder = 'Tipo de usuario' onChange = {(evt) => this.actualizadatosaguardar(evt)}/>
                    </td>
                    <td scope='col'>
                    <input type='text' className='form-control' id='password' placeholder = 'Contraseña' onChange = {(evt) => this.actualizadatosaguardar(evt)}/>
                    </td>
                    <td scope='col'>
                    </td>
                    <td scope='col'>
                    <input type='file' className='form-control-file' id='foto' placeholder = 'Ingrese la foto' onChange = {evt => this._onChange(evt)}/>
                    </td>
                    <td scope='col'>
                    <input type= 'button' className='btn btn-dark' id='botonguardar' value='Guardar'  onClick={this.guardarpersona} />
                    </td>
            </table>
                    <table className='table table-dark table-striped table-hover'>
                <thead>
                    <tr>
                        <th scope='col'>
                        Nombre
                        </th>
                        <th scope='col'>
                        Apellido
                        </th>
                        <th scope='col'>
                        Correo
                        </th>
                        <th scope='col'>
                        Tipo de Usuario
                        </th>
                        <th scope='col'>
                        Clave
                        </th>
                        <th scope='col'>
                        Foto
                        </th>
                        <th scope='col'>
                        Eliminar
                        </th>
                    </tr>
                </thead>
                <tbody id='filasdelatabla'>
                    {this.state.personasActuales.map(op=> <FiladelatabladepersonasP nombre = {op.nombre}
                      apellido = {op.apellido} email = {op.email} tipousuario = {op.tipousuario}
                       password = {op.password} foto= {op.foto} _id={op._id} eliminarPersona={this.eliminarPersona}/>)}
                </tbody>
             </table>

            </React.Fragment>
               );
    }


actualizadatosaguardar(evt)
{
    var objetolocalpersona= new Object();
   
    objetolocalpersona= this.state.personas
    switch(evt.target.id)
        {
            case "nombre":{
                console.log(this.state.nombre)
                objetolocalpersona.nombre= evt.target.value;
                break;
            }

            case "apellido":{
                console.log(this.state.apellido);
                objetolocalpersona.apellido= evt.target.value;
                break;
            }

            case "email":{
                console.log(this.state.email);
                objetolocalpersona.email= evt.target.value;
                break;
            }
            case "tipousuario":{
                console.log(this.state.tipousuario)
                objetolocalpersona.tipousuario= evt.target.value;
                break;
            }
            case "password":{
                console.log(this.state.password)
                objetolocalpersona.password= evt.target.value;
                break;
            }
            case "foto":{
                console.log(this.state.foto)
                objetolocalpersona.foto= evt.target.value;
                break;
            }
            
        }
   
    this.setState({personas: objetolocalpersona})
   
   
}

guardarpersona = () => {
    // With all properties
   var objetolocal = this.state.personas
   // const Url = 'https://kongzilla.herokuapp.com/api/guardarpersona&#39;;
   const recipeUrl = 'http://localhost:8080/api/guardarpersona';
  const requestMetadata = {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(objetolocal)
    };

    fetch(recipeUrl, requestMetadata)
        .then(res => res.json())
        .then(personas => {
        this.setState({
      personasActuales: personas
    });
                       
           console.log(personas)
       
      // this.setState({combosactuales: recipes})
        alert("Guardado");
        });
}

_onChange = (e) => {
    var objetolocalpersona = new Object();
        objetolocalpersona= this.state.personas
        if (e.target.files && e.target.files[0]) {
            if (e.target.files[0].size < 2097152) {
                var reader = new FileReader();
                reader.onload = function (e) {
                 objetolocalpersona.foto= e.target.result
                };
                reader.readAsDataURL(e.target.files[0]);
           
                       this.setState({
                                        personas: objetolocalpersona
                                    });

            }
           
        }
     
     
 
console.log(e)

}

eliminarPersona = (id) =>{
    console.log(id)
    var objetolocal = this.state.personas
    objetolocal._id = id
    console.log(objetolocal)
    const Url = 'http://localhost:8080/api/eliminarpersona';
    const requestMetadata = {
        method: 'DELETE',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify(objetolocal)
    };
    fetch(Url, requestMetadata)
    .then(res => res.json())
    .then (personas => {
        console.log(personas)

        this.setState({
            personasActuales: personas
        })
        alert('Eliminado')
    });

}

}
export default Formulario;
