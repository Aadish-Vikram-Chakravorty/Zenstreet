import { useEffect } from 'react'; // Removed 'React' import
import { useNavigate } from 'react-router-dom';
import './LoadingPage.css';

const LoadingPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => navigate('/portfolio'), 3000);
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="loading-page">
      <div className="logo">
        <img src="/logo.png" alt="ZenStreet.ai" />
      </div>
      <h1>Portfolio Web Design</h1>
      <p>Designer: Milan</p>
      <p>Start date: 10 July, 2024</p>
    </div>
  );
};

export default LoadingPage;
