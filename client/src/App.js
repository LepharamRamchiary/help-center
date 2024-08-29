import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './pages/Header';
import Home from "./pages/Home"
import CreateCard from './components/CreateCard';
import Footer from './pages/Footer';

function App() {
  return (
    <Router>
      <div id="root">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/create-card" element={<CreateCard />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
