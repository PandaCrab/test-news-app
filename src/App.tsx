import React from 'react';
import { EmailOutlined } from '@mui/icons-material';
import Container from '@mui/material/Container';
import { Outlet } from 'react-router-dom';

import './Styles/App.module.css';

function App() {
  return (
    <Container maxWidth='lg'>
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
    </Container>
  );
}

export default App;
