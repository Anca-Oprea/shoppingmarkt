import React from 'react';
import {Navbar, Nav,Link, Form, Button,FormControl } from  'react-bootstrap';
import Navi from './components/navbar.js';



class App extends React.Component {
  render() {
    return (
      <React.Fragment>
      <Navbar bg="dark" variant="dark">
      <Navbar.Brand href="/">Main</Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link href="/magazin">Magazin</Nav.Link>
        <Nav.Link href="/coupons">Coupons</Nav.Link>
        <Nav.Link href="/registration">Registration</Nav.Link>
        <Nav.Link href="/login">Login</Nav.Link>
      </Nav>
      <Form inline>
        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
        <Button variant="outline-info">Search</Button>
      </Form>
    </Navbar>
  
      <Navi />
    </React.Fragment>
    


    )
  
  }
}

export default App;
