import { useState } from 'react';
import Login from './components/Login';
import './App.css';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userEmail, setUserEmail] = useState('');

  const handleLogin = (email) => {
    setIsLoggedIn(true);
    setUserEmail(email);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUserEmail('');
  };

  return (
    <div className="App">
      {!isLoggedIn ? (
        <Login onLogin={handleLogin} />
      ) : (
        <div className="dashboard">
          <div className="dashboard-header">
            <h1>Welcome back, {userEmail}!</h1>
            <button onClick={handleLogout} className="logout-btn">
              Logout
            </button>
          </div>
          <div className="dashboard-content">
            <h2>You have successfully logged in!</h2>
            <p>This is your dashboard. You can add more content here.</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
