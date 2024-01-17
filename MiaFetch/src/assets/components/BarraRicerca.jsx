import React from "react";
import { FormGroup } from "react-bootstrap";
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const BarraRicerca = ({ ricerca, onRicercaChange }) => {
  return (
    <>
      <Navbar >
        <Container fluid>
          <Navbar.Brand href="#">Test Api</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
           
            <Form controlId="formSearch" className="d-flex">
              <Form.Control
                type="text"
                placeholder="Cerca titolo"
                value={ricerca}
                onChange={(e) => onRicercaChange(e.target.value)}
              />
              
            <Button variant="outline-danger mx-2">Search</Button>
           
            </Form>
            
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default BarraRicerca;
