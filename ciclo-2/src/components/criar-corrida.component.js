import React, {Component} from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import axios from 'axios';

export default class CriarCorrida extends Component {
 
  constructor(props) {
    super(props)

    this.onChangeCategoria = this.onChangeCategoria.bind(this);
    this.onChangeCircuito = this.onChangeCircuito.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      Categoria: '',
      Circuito: '',
    }
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
      Circuito: this.state.Circuito,
    };
    axios.post('http://localhost:4000/corrida/criar-corrida', corridaObject)
      .then(res => console.log(res.data));

    this.setState({ Categoria: '', Circuito: ''})
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

      <Button variant="primary" size="lg" block="block" type="submit">
        Criar Corrida
      </Button>
    </Form>
  </div>);
  }
}