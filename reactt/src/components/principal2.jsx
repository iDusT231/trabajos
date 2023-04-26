import React, { Component } from 'react'
//import Contador from './contador';
//import Calculadora from './calculadora';
import Formulario from './formulario';
import Registro from    "./formularioPersonas.jsx"
import Login from './login';
class Principal extends Component{
state={
           
    muestraformulario:false,
    muestracontador:false,
    ingresaralsistema:false,
    muestraregistro: true
       
    }

            render(){
      if (this.state.muestraformulario) {
                return (
                <React.Fragment>
                    <input type='button' value= 'Mostrar formulario' onClick={(e) => this.muestraformulario()}/>
                    <input type='button' value= 'Mostrar regristro' onClick={(e) => this.muestraregistro()}/>
                    <input type='button' value= 'Logout' onClick={(e) => this.logout()}/>
                        <br />
       <Formulario/>
                       </React.Fragment>
   );
}
if (this.state.muestraregistro) {
    return (
    <React.Fragment>
         <input type='button' value= 'Mostrar Calculadora' onClick={(e) => this.muestracalculadora()}/>
        <input type='button' value= 'Mostrar formulario' onClick={(e) => this.muestraformulario()}/>
        <input type='button' value= 'Mostrar regristro' onClick={(e) => this.muestraregistro()}/>
        <input type='button' value= 'Mostrar contador' onClick={(e) => this.muestracontador()}/>
        <input type='button' value= 'Logout' onClick={(e) => this.logout()}/>

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
     
     
    this.setState({muestracontador : false })
     this.setState({muestraformulario : true })
      this.setState({muestracalculadora : false })
      this.setState({muestraregistro : false})
      this.setState({ingresaralsistema:false})

     
  }
  muestraregistro()  {
     
     
    this.setState({muestracontador : false })
     this.setState({muestraformulario : false})
      this.setState({muestracalculadora : false })
      this.setState({muestraregistro : true})
      this.setState({ingresaralsistema:false})
     
  }
  logout(){
    this.setState({muestracontador : false })
     this.setState({muestraformulario : false})
      this.setState({muestracalculadora : false })
      this.setState({muestraregistro : false})
    this.setState({ingresaralsistema:true})
  }
}
    export default Principal;