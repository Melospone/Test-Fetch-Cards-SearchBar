import React from "react";
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar';

const BarraRicerca = ({ ricerca, onRicercaChange }) => {
  return (
    <>
      <Navbar >
        <Container>
          <Navbar.Brand className="border border-5 rounded-1  px-3 py-2">Test Api</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
           
            <Form controlId="formSearch" className="d-flex">
              <Form.Control
                type="text"
                placeholder="Cerca titolo"
                value={ricerca}
                onChange={(e) => onRicercaChange(e.target.value)}
              />
              
            <Button variant="outline-dark mx-2">Search</Button>
           
            </Form>
            
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default BarraRicerca;
