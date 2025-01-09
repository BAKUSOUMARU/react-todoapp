import React from 'react';
import ReactDOM from 'react-dom/client'; 
import App from './App'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

const render = (Component: React.FC) => {
  root.render(
    <React.StrictMode>
      <Component />
    </React.StrictMode>
  );
};
 
render(App)
