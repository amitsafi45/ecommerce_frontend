import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { BrowserRouter, Link, Router } from 'react-router-dom';

export const Navs=()=> {
  return (
    <>
    
      <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand as={Link} to='/'>Ecommerce</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to='/add' >Add Product</Nav.Link>
            <Nav.Link as={Link} to='/update'>Update Product</Nav.Link>
            <Nav.Link as={Link} to='/logout'>Logout</Nav.Link>
            <Nav.Link as={Link} to='/profile'>Profile</Nav.Link>
            <Nav.Link as={Link} to='/sign-up'>SignUp</Nav.Link>
            
          </Nav>
        </Container>
      </Navbar>
    
    </>
  );
}
