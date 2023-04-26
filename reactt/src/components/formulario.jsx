import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import FiladelatabladepeliculasP from './llenaTablaPersonas.jsx';
class Formulario extends Component{
    state={
        peliculas :{
            NOMBRE:"",
            PRECIO:"",
            COMENTARIOS:"",
            IMAGEN:""
    },
    personasActuales:[]  
    }
    render(){
        return (<React.Fragment>
                    <hr />
                    <input type='text' className='form-control' id='NOMBRE' onChange = {(evt) => this.actualizadatosaguardar(evt)} placeholder = 'Escriba el titulo del evento'/>
                    <hr />
                    <input type='date'  className='form-control' id='FECHA' onChange = {(evt) => this.actualizadatosaguardar(evt)}/>
                    <hr />
                    <input type='text'  className='form-control' id='COMENTARIOS' placeholder = 'Escriba el comentario' onChange = {(evt) => this.actualizadatosaguardar(evt)}/>
                    <hr />
                    <input type='file' id='FOTO' placeholder = 'Ingrese la foto de la prenda' onChange = {evt => this._onChange(evt)}/>
                    <hr />
                    <input type= 'button' className='btn btn btn-dark' id='botonguardar' value='Guardar'  onClick={this.guardarpersona} />
                    <hr />
                    <table className='table table-dark table-striped table-hover'>
                <thead>
                    <tr>
                        <th scope='col'>
                        Título
                        </th>
                        <th scope='col'>
                        Fecha
                        </th>
                        <th scope='col'>
                        Comentario
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
                    {this.state.personasActuales.map(op=> <FiladelatabladepeliculasP NOMBRE = {op.NOMBRE} 
                    FECHA = {op.FECHA} COMENTARIOS={op.COMENTARIOS} IMAGEN = {op.IMAGEN} _id={op._id} eliminarPersona={this.eliminarPersona} modificarpersona={this.modificarpersona} llenarpersona={this.llenarpersona} alertprueba={this.alertprueba}/>) }
                </tbody>
             </table>

            </React.Fragment>
               );
    }
    actualizadatosaguardar(evt)
    {
        var objetolocalpersona= new Object();
        
        objetolocalpersona= this.state.peliculas
        switch(evt.target.id)
            {
                case "NOMBRE":{ 
                    console.log(this.state.peliculas) 
                    objetolocalpersona.NOMBRE= evt.target.value; 
                    break; 
                } 
                case "FECHA":{ 
                    console.log(this.state.peliculas) 
                    objetolocalpersona.FECHA= evt.target.value; 
                    break; 
                } 
                case "COMENTARIOS":{
                    console.log(this.state.peliculas)
                    objetolocalpersona.COMENTARIOS= evt.target.value; 
                    break;
                }
                case "IMAGEN":{ 
                    console.log(this.state.peliculas) 
                    objetolocalpersona.IMAGEN= evt.target.value; 
                    break; 
                }        
            }
             this.setState({peliculas: objetolocalpersona})
    }
    
    guardarpersona = () => {
       var objetolocal = this.state.peliculas
       // const Url = 'https://kongzilla.herokuapp.com/api/guardarpersona&#39;;
        const recipeUrl = 'http://localhost:8080/api/guardarpeliculas'
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
            alert("Guardado");
            });
    }

    llenarpersona = (id,nombre,fecha,comentarios,imagen) =>{
        console.log(id)
        var objetolocal=this.state.peliculas
        objetolocal._id = id
        objetolocal.NOMBRE=nombre
        objetolocal.FECHA=fecha
        objetolocal.COMENTARIOS=comentarios
        objetolocal.IMAGEN=imagen
        document.getElementById("comentarioamodificar").value=objetolocal.COMENTARIOS;
        this.modificarpersona(objetolocal._id, objetolocal.NOMBRE, 
        objetolocal.FECHA, objetolocal.COMENTARIOS, objetolocal.IMAGEN)
    }
    
    modificarpersona=(id,nombre,fecha,comentarios,imagen)=>{
        var nuevocomentario=document.getElementById("comentarioamodificar").value
        console.log(id)
        var objetolocal = this.state.peliculas
        objetolocal._id = id
        objetolocal.NOMBRE=nombre
        objetolocal.FECHA=fecha
        objetolocal.COMENTARIOS=comentarios
        objetolocal.IMAGEN=imagen
        console.log(objetolocal)
        const Url = 'http://localhost:8080/api/modificarpeliculas';
        const requestMetadata = {
            method: 'POST',
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
            alert('Modificado')
        });
    }
    
    eliminarPersona = (id) =>{
        console.log(id)
        var objetolocal = this.state.peliculas
        objetolocal._id = id
        console.log(objetolocal)
        const Url = 'http://localhost:8080/api/eliminarpeliculas';
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
    
    
    _onChange = (e) => {
        var objetolocalpersona = new Object();
            objetolocalpersona= this.state.peliculas
            if (e.target.files && e.target.files[0]) {
                if (e.target.files[0].size < 2097152) {
                    var reader = new FileReader();
                    reader.onload = function (e) {
                     objetolocalpersona.IMAGEN= e.target.result
                    };
                    reader.readAsDataURL(e.target.files[0]);
               
                           this.setState({
                                            peliculas: objetolocalpersona
                                        });
    
                }
               
            }
         
         
     
    console.log(e)
    
    }
    }
    export default Formulario;