import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoadingPage from './LoadingPage';
import PortfolioPage from './PortfolioPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoadingPage />} />
        <Route path="/portfolio" element={<PortfolioPage />} />
      </Routes>
    </Router>
  );
}

export default App;
