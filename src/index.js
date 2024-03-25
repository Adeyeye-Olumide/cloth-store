import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { ProductProvider } from './contexts/products';
import { CartProvider } from './contexts/cart';
import { CategoryContextProvider } from './contexts/categories-context';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react'
import './index.css';
import App from './App';
import { UserProvider } from './contexts/users';
import { CategoriesPreviewProvider } from './contexts/categories-preview-context';
import { persistedStore } from './store/store';
import reportWebVitals from './reportWebVitals';
import { store } from './store/store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persistedStore}>

        <BrowserRouter>
      
       
    
          <ProductProvider>
        
             <App />

  
      
          </ProductProvider>


    
  
        </BrowserRouter>

      </PersistGate>
      

    </Provider>
    
   
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
