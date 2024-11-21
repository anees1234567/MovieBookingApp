import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { Provider } from 'react-redux';
import {store} from './assets/Redux/Store.js'
import Navbar from './components/Navbar.jsx';




createRoot(document.getElementById('root')).render(
  <StrictMode>
   

     <Provider store={store}>
     <Navbar/>
         <App />
     </Provider>



  </StrictMode>
);
