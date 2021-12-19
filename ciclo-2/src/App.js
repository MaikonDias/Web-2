import React from 'react'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

import CriarCorrida from './components/criar-corrida.component'
import EditarCorrida from './components/editar-corrida.component'
import ListarCorrida from './components/listar-corrida.component'

function App() {
  return (
    <div className="App">
      <Router>
        <header>
          <Navbar bg="dark" variant="dark">
            <Container>
              <Navbar.Brand>
                <Link to={'/criar-corrida.component'} className="nav-link">
                  MotorSpotlight
                </Link>
              </Navbar.Brand>

              <Nav className="justify-content-end">
                <Nav>
                  <Link to={'/criar-corrida.component'} className="nav-link">
                    Inserir Corrida
                  </Link>
                </Nav>

                <Nav>
                  <Link to={'/listar-corrida.component'} className="nav-link">
                    Listar Corrida
                  </Link>
                </Nav>
              </Nav>
            </Container>
          </Navbar>
        </header>

        <Container>
          <Row>
            <Col md={12}>
              <div className="wrapper">
                <Switch>
                  <Route
                    exact
                    path="/"
                    component={(props) => <CriarCorrida {...props} />}
                  />
                  <Route
                    exact
                    path="/criar-corrida.component"
                    component={(props) => <CriarCorrida {...props} />}
                  />
                  <Route
                    exact
                    path="/editar-corrida.component/:id"
                    component={(props) => <EditarCorrida {...props} />}
                  />
                  <Route
                    exact
                    path="/listar-corrida.component"
                    component={(props) => <ListarCorrida {...props} />}
                  />
                </Switch>
              </div>
            </Col>
          </Row>
        </Container>
      </Router>
    </div>
  )
}

export default App