import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import FormControl from "react-bootstrap/FormControl";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import NavDropdown from "react-bootstrap/NavDropdown";

export const NavBarComponent = ({ collection }) => {
  const genre =
    collection &&
    collection.map(name => (
      <NavDropdown.Item href={`/category?id=${name}`}>{name}</NavDropdown.Item>
    ));
  return (
    <Navbar bg="light" variant="light">
      <Navbar.Brand href="#home">Anime Library</Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link href="/">Home</Nav.Link>
        <Nav.Link href="#features">Features</Nav.Link>
        <NavDropdown title="Catérogies" id="basic-nav-dropdown">
          {genre}
        </NavDropdown>
      </Nav>
      <Form inline>
        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
        <Button variant="outline-primary">Search</Button>
      </Form>
    </Navbar>
  );
};
