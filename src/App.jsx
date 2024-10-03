import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'

function App() {
  return (
    <>
      <Navbar style={{backgroundColor: '#CD8585'}} data-bs-theme="dark">
        <Container style={{display: "flex", justifyContent:'space-between'}}>
          <Navbar.Brand href="#home">DSSMR</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Tipos Sanguineo</Nav.Link>
            <Nav.Link href="#pricing">Localização</Nav.Link>
            <Nav.Link href="#pricing">Contato</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default App;