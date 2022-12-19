import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./screens/Home";
import Product from "./screens/Product";

function App() {
  return (
    <BrowserRouter>
      <div>
        <header>
          <Link to="/">Shoppie</Link>
        </header>
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/product/:slug" element={<Product />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
