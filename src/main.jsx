import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Card from './components/Card.jsx'

function Main() {
  const formatUserName = (userName) => `@${userName}`;

  ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
      <Card formatUserName={formatUserName} initialIsFollowing={true} user="Miguel Ángel Durán" userName='midudev' />
    </React.StrictMode>
   );
    
}

Main();
