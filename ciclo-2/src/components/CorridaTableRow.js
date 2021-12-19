import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Button from 'react-bootstrap/Button';

export default class CorridaTableRow extends Component {

    constructor(props) {
        super(props);
        this.deletarCorrida = this.deletarCorrida.bind(this);
    }

    deletarCorrida(){
        axios.delete('http://localhost:4000/corrida/excluir-corrida/' + this.props.obj._id)
        .then((res) => {
            console.log('GP Excluido');
        }).catch((error) => {
            console.log(error)
        })
    }

    render() {
        return (
            <tr>
                <td>{this.props.obj.Categoria}</td>
                <td>{this.props.obj.Circuito}</td>
                <td>
                    <Link className="edit-link" to={"/editar-corrida.component/" + this.props.obj._id}>
                        Editar
                    </Link>
                    <Button size="sm" variant="danger" onClick={this.deletarCorrida}>Excluir</Button>
                </td>
            </tr>
        );
    }
}