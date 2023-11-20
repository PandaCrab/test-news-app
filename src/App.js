import React from 'react';
import { EmailOutlined } from '@mui/icons-material';

import { Outlet } from 'react-router-dom';

import './Styles/App.css';

function App() {
  return (
    <div className="siteLayout">
      <header>Formula</header>
      <main>
        <Outlet />
      </main>
      <footer>
        <div className="firstSection">
          <h1>Formula</h1>
          <p>&#169;Formula 2023. All Rights Reserved</p>
        </div>
        <div className="secondSection">
          <EmailOutlined sx={{ fontSize: 16, marginRight: .5 }} />
          <p>info@formula.com</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
