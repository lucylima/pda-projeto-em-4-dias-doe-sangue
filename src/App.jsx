import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import bloodDonationIllustration from "./assets/blood-donation-illustration.png";
import bloodDropPet from "./assets/blood-drop-pet.png";

function App() {
  return (
    <>
      <Navbar style={{ backgroundColor: "#CD8585" }} data-bs-theme="dark">
        <Container style={{ display: "flex", justifyContent: "space-between" }}>
          <Navbar.Brand href="#home">DSSMR</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Tipos Sanguineo</Nav.Link>
            <Nav.Link href="#pricing">Localização</Nav.Link>
            <Nav.Link href="#pricing">Contato</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <Container className="d-flex text-white mt-5 mb-5 align-items-center justify-content-center">
        <p>
          Selective collection is a system for separating recyclable waste from
          organic and common waste, facilitating recycling and reducing
          environmental impacts. Waste is classified as paper, plastic, metal,
          glass and organic, and is destined for recycling or composting. It can
          be carried out by city halls, cooperatives or specialized companies.
        </p>
        <img src={bloodDonationIllustration} alt="" className="w-75 h-75" />
      </Container>

      <Container className="d-flex text-white mt-5 mb-5 align-items-center justify-content-center">
        <p>
          Uma <span>única</span> doação de sangue pode <span>transformar</span>{" "}
          a vida de <span>várias pessoas.</span>
          Faça parte dessa corrente de esperança e <span>salve vidas</span> com
          um gesto simples e poderoso.
        </p>
      </Container>

      <Container className="d-flex text-white mt-5 mb-5 align-items-center justify-content-center">
        <div>
          <p>Doe sangue</p>
          <p>Doe vida</p>
          <img src="" alt="" />
        </div>
      </Container>

      <Container className="d-flex flex-column text-white mt-5 mb-5 align-items-center justify-content-center">
        <h4 className="mb-5">Tipos sanguíneos</h4>
        <div className="d-flex flex-row">
          <div className="d-flex flex-column align-items-center justify-content-center gap-4 bg-color">
            <img src={bloodDropPet} alt="" className="w-75 h-75" />
            <p>A</p>
          </div>
          <div className="d-flex flex-column align-items-center justify-content-center gap-4 bg-color">
            <img src={bloodDropPet} alt="" className="w-75 h-75" />
            <p>B</p>
          </div>
          <div className="d-flex flex-column align-items-center justify-content-center gap-4 bg-color">
            <img src={bloodDropPet} alt="" className="w-75 h-75" />
            <p>AB</p>
          </div>
          <div className="d-flex flex-column align-items-center justify-content-center gap-4 bg-color">
            <img src={bloodDropPet} alt="" className="w-75 h-75" />
            <p>O</p>
          </div>
        </div>
      </Container>

      <Container className="d-flex flex-column w-75 text-white mt-5 mb-5 w-auto justify-content-center">
        <Form className="w-auto">
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Nome completo</Form.Label>
            <Form.Control type="text" placeholder="Nome" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="email@exemplo.com" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Data de nascimento</Form.Label>
            <Form.Control type="text" placeholder="DD/MM/AAAA" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>CPF</Form.Label>
            <Form.Control type="text" placeholder="Apeans números" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Peso</Form.Label>
            <Form.Control type="text" placeholder="Em kg" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Endereço</Form.Label>
            <Form.Control type="text" placeholder="Endereço completo" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Telefone</Form.Label>
            <Form.Control type="text" placeholder="Apenas números" />
          </Form.Group>

          <Form.Group>
            <Form.Label>Tipo sangíneo</Form.Label>
            <Form.Select aria-label="Default select example" className="mb-4">
              <option>Selecione um tipo</option>
              <option value="1">A</option>
              <option value="2">B</option>
              <option value="3">AB</option>
              <option value="3">O</option>
            </Form.Select>
          </Form.Group>

            
        </Form>
        <Button variant="primary" type="submit">
              Enviar
            </Button>
      </Container>
    </>
  );
}

export default App;
