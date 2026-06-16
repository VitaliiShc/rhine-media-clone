import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home, Contact, Terms, Privacy } from './pages';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/privacy-policy" element={<Privacy />} />
      </Routes>
    </BrowserRouter>
  );
}
