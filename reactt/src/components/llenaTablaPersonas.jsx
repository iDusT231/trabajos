import React, {Component} from "react"
import 'bootstrap/dist/css/bootstrap.min.css'
class Filadelatabladepeliculas extends Component{
    render(){
        const inputStyleimg= {border_radius: '50%', cursor: 'pointer', width:'100px'}
        return <React.Fragment>
            <tr>
                <td>{this.props.NOMBRE}</td>
                <td>{this.props.FECHA}</td>
                <td>{this.props.COMENTARIOS}</td>
                <img src={this.props.IMAGEN} style={inputStyleimg}></img>
                <td><button className="btn btn-danger" onClick={()=> this.props.eliminarPersona(this.props._id)}>Eliminar</button> </td>
            </tr>
        </React.Fragment>
    }
}
export default Filadelatabladepeliculas;