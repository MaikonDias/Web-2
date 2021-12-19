import React, { Component } from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import axios from 'axios';

export default class EditarCorrida extends Component {

  constructor(props) {
    super(props)

    this.onChangeCategoria = this.onChangeCategoria.bind(this);
    this.onChangeCircuito = this.onChangeCircuito.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      Categoria: '',
      Circuito: ''
    }
  }

  componentDidMount() {
    axios.get('http://localhost:4000/corrida/editar-corrida/' + this.props.match.params.id)
      .then(res => {
        this.setState({
          Categoria: res.data.Categoria,
          Circuito: res.data.Circuito
        });
      })
      .catch((error) => {
        console.log(error);
      })
  }

  onChangeCategoria(e) {
    this.setState({ Categoria: e.target.value })
  }

  onChangeCircuito(e) {
    this.setState({ Circuito: e.target.value })
  }

  onSubmit(e) {
    e.preventDefault()

    const corridaObject = {
      Categoria: this.state.Categoria,
      Circuito: this.state.Circuito
    };

    axios.put('http://localhost:4000/corrida/atualizar-corrida/' + this.props.match.params.id, corridaObject)
      .then((res) => {
        console.log(res.data)
        console.log('Dados do GP Atualizados')
      }).catch((error) => {
        console.log(error)
      })

    this.props.history.push('/listar-corrida.component')
  }


  render() {
    return (<div className="form-wrapper" >
    <Form onSubmit={this.onSubmit}>
      <Form.Group controlId="Categoria">
        <Form.Label>Categoria</Form.Label>
        <Form.Control type="text" value={this.state.Categoria} onChange={this.onChangeCategoria}/>
      </Form.Group>

      <Form.Group controlId="Circuito">
        <Form.Label>Circuito</Form.Label>
        <Form.Control type="text" value={this.state.Circuito} onChange={this.onChangeCircuito}/>
      </Form.Group>


        <Button variant="success" size="lg" block="block" type="submit">
          Atualizar Corrida
        </Button>
      </Form>
    </div>);
  }
}