import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

function Home() {
  return (
    <div className="container py-5">
      <h1>OctoFit Tracker</h1>
      <p>Modern multi-tier fitness tracking app scaffold.</p>
      <Link to="/about" className="btn btn-primary">About</Link>
    </div>
  );
}

function About() {
  return (
    <div className="container py-5">
      <h1>About</h1>
      <p>Frontend running on Vite with React 19 and Bootstrap.</p>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}
