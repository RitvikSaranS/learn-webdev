import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./screens/Home";
import Product from "./screens/Product";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import { LinkContainer } from "react-router-bootstrap";

function App() {
  return (
    <BrowserRouter>
      <div className="d-flex flex-column site-container">
        <header>
          <Navbar bg="dark" variant="dark">
            <Container>
              <LinkContainer to="/">
                <Navbar.Brand>Shoppie</Navbar.Brand>
              </LinkContainer>
            </Container>
          </Navbar>
        </header>
        <main>
          <Container>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/product/:slug" element={<Product />} />
            </Routes>
          </Container>
        </main>
        <footer>
          <div className="text-center">All rights are reserved</div>
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
