import React, { useState, useEffect } from 'react';
import LoginPage from './components/LoginPage';
import RobotList from './components/RobotList';
import RobotDetail from './components/RobotDetail';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  const [isAuthenticated, setAuthenticated] = useState(false);
  const [loginError, setLoginError] = useState(false);
  const [robots, setRobots] = useState([]);
  const [selectedRobot, setSelectedRobot] = useState(null);

  const handleLogin = (username, password) => {
    if (username === 'Pepe' && password === '12345') {
      setAuthenticated(true);
    } else {
      setLoginError(true);
    }
  };

  useEffect(() => {
    fetch('https://gist.githubusercontent.com/josejbocanegra/aa5fb56863c326ebb3d558f8a225d223/raw/5c55db5012e5fc24862e05847ff1f2927aea11db/robots.json')
      .then(res => res.json())
      .then(data => setRobots(data));
  }, []);

  if (!isAuthenticated) {
    return <LoginPage onLogin={handleLogin} loginError={loginError} />;
  }


  return (
    <div className="container mt-4">
      <img src="/banner.png" className="img-fluid" alt="banner" />
      <h2 className="text-center mt-2">Adopta un Robot con Robot Lovers!</h2>
      <div className="row mt-4">
        <div className="col-md-8">
          <RobotList robots={robots} onSelect={setSelectedRobot} />
        </div>
        <div className="col-md-4">
          <RobotDetail robot={selectedRobot} />
        </div>
      </div>
      <footer className="text-center mt-5 mb-2 text-muted">
        Contact us: +57 3102105253 - info@robot-lovers.com - @robot-lovers
      </footer>
    </div>
  );
}

export default App;

