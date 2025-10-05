import { useState } from 'react';
import './App.css';
import Header from './components/Header';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <main style={{ padding: "20px" }}>
        <h1>Welcome 🚀</h1>
        <p>Main content area.</p>
      </main>
    </>
  )
}

export default App
