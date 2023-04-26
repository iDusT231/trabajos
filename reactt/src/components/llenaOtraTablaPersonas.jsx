import React, {Component} from "react"
import 'bootstrap/dist/css/bootstrap.min.css'
class Filadelatabladepersonas extends Component{
    render(){
        const inputStyleimg= {border_radius: '50px', cursor: 'pointer', width:'100px'}
        return <React.Fragment>
            <tr>
                <td>{this.props.nombre}</td>
                <td>{this.props.apellido}</td>
                <td>{this.props.email}</td>
                <td>{this.props.tipousuario}</td>
                <td>{this.props.password}</td>
                <img src={this.props.foto} style={inputStyleimg}></img>
                <td> <button className="btn btn-danger" onClick={() => this.props.eliminarPersona(this.props._id)}>Eliminar</button> </td>
            </tr>
        </React.Fragment>
    }
}
export default Filadelatabladepersonas;