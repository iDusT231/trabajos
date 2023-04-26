import React, { Component } from 'react'
//import Contador from './contador';
//import Calculadora from './calculadora';
import Formulario from './formulario';
import Registro from    "./formularioPersonas.jsx"
import Login from './login';
class Principal extends Component{
state={
           
    muestraformulario:true,
    muestracontador:false,
    ingresaralsistema:false
       
    }

            render(){
      if (this.state.muestraformulario) {
                return (
                <React.Fragment>
                    <div class="btn-group">
                    <input type='button' class="btn btn-primary btn btn-dark" value= 'Mostrar formulario' onClick={(e) => this.muestraformulario()}/>
                    <input type='button' class="btn btn-primary btn btn-dark" value= 'Mostrar regristro' onClick={(e) => this.muestraregistro()}/>
                    <input type='button' class="btn btn-primary btn btn-dark" value= 'Logout' onClick={(e) => this.logout()}/>
                        <br />
                        </div>
                        <br />
                        <br />
       <Formulario/>
                       </React.Fragment>
   );
}
if (this.state.muestraregistro) {
    return (
    <React.Fragment>
        <div class="btn-group">
        <input type='button' class="btn btn-primary btn btn-dark" value= 'Mostrar formulario' onClick={(e) => this.muestraformulario()}/>
        <input type='button' class="btn btn-primary btn btn-dark" value= 'Mostrar regristro' onClick={(e) => this.muestraregistro()}/>
        <input type='button' class="btn btn-primary btn btn-dark" value= 'Logout' onClick={(e) => this.logout()}/>
        </div>
            <br />
        <Registro/>
           </React.Fragment>
);
}


if (this.state.ingresaralsistema) {
  return (
       <React.Fragment>
        <Login/>
         </React.Fragment>
);
}                
}

 muestraformulario()  {
     
     this.setState({muestraformulario : true })
      this.setState({muestraregistro : false})
      this.setState({ingresaralsistema:false})

     
  }
  muestraregistro()  {
         
     this.setState({muestraformulario : false})
      this.setState({muestraregistro : true})
      this.setState({ingresaralsistema:false})
     
  }
  logout(){
     this.setState({muestraformulario : false})
      this.setState({muestraregistro : false})
    this.setState({ingresaralsistema:true})
  }
}
    export default Principal;