import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/*Assignment 1, Task 1*/}
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
)
