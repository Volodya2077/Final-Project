import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import Layout from './Components/Layout/Layout';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
	<BrowserRouter>
		<Layout/>
	</BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

