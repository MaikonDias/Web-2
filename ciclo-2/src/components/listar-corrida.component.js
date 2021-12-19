import React, { Component } from "react";
import axios from 'axios';
import Table from 'react-bootstrap/Table';
import CorridaTableRow from './CorridaTableRow';


export default class ListarCorrida extends Component {

  constructor(props) {
    super(props)
    this.state = {
      corridas: []
    };
  }

  componentDidMount() {
    axios.get('http://localhost:4000/corrida/')
      .then(res => {
        this.setState({
          corridas: res.data
        });
      })
      .catch((error) => {
        console.log(error);
      })
  }

  DataTable() {
    return this.state.corridas.map((res, i) => {
      return <CorridaTableRow obj={res} key={i} />;
    });
  }


  render() {
    return (<div className="table-wrapper">
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Categoria</th>
            <th>Circuito</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {this.DataTable()}
        </tbody>
      </Table>
    </div>);
  }
}