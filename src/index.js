import React from 'react';
import ReactDOM from 'react-dom/client';

import StoriesProvider from './contexts/stories_context';

import App from './App';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <StoriesProvider>
    <App />
  </StoriesProvider>
);
