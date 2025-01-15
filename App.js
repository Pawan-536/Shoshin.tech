import React, { useState } from 'react';
import Card from './components/Card';
import Button from './components/Button';
import './App.css';

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={`app ${darkMode ? 'dark-mode' : ''}`}>
      <header className="app-header">
        <h1 className="app-title">Responsive Webpage</h1>
        <Button label="Toggle Dark Mode" onClick={() => setDarkMode(!darkMode)} />
      </header>
      <div className="cards-container">
        <Card
          title="Card 1"
          description="This is the first card."
          image="https://picsum.photos/100"
        />
        <Card
          title="Card 2"
          description="This is the second card."
          image="https://picsum.photos/100"
        />
      </div>
      <form className="user-form">
        <input type="text" placeholder="Enter your name" className="form-input" />
        <Button label="Submit" onClick={() => alert('Form Submitted!')} />
      </form>
    </div>
  );
};

export default App;
