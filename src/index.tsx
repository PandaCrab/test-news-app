import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';

import { NewsContainer, NewsPage } from './Components';

import './Styles/index.css';

const rootElement = document.getElementById('root');

if (!rootElement) throw new Error('Failed to find the root element');

const root = ReactDOM.createRoot(rootElement);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <App /> }>
          <Route index element={ <NewsContainer /> } />
          <Route path="news/:title" element={ <NewsPage /> } />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
