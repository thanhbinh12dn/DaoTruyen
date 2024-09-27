import React from 'react';
import ReactDOM from 'react-dom/client';

import StoriesProvider from './contexts/stories_context';
import TranslatorProvider from './contexts/translator_context'
import UserProvider from './contexts/users_context';

import App from './App';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <StoriesProvider>
    <UserProvider>
      <TranslatorProvider>
        <App />
      </TranslatorProvider>
    </UserProvider>
  </StoriesProvider>
);
