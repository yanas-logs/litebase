import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import { Slider } from './components/Slider';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      

      <main style={{ padding: "1px" }}>
        <Slider />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <h1>Welcome 🚀</h1>
                <p>Main content area.</p>
              </>
            }
          />
          <Route path="/product" element={<h1>Product Page</h1>} />
          <Route path="/about" element={<h1>About Page</h1>} />
          <Route path="/contact" element={<h1>Contact Page</h1>} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
