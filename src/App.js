import logo from './logo.svg';
import { Component, useState, useContext } from 'react'
import { Routes, Route } from 'react-router';


import Shop from './components/products component/products component';
import Header from './components/header-component/component';
import Section from './components/section-components/component';
import Authentication from './components/authentication component/authentication component';
import CheckOutPage from './components/checkout-page component/checkout-page';


import { fetchCategoryAsync } from './store/categories/categories.action';

import { useEffect } from 'react';
import { onAuthListener, signOutUser } from "./utils/firestore-utils/firestore";
import { setCurrentUser } from './store/user/user.action';
import { setCategory } from './store/categories/categories.action';
import { getCollectionAndDocuments } from './utils/firestore-utils/firestore';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { useDispatch } from 'react-redux';
import './App.css';
import { setSpinnerState } from './store/spinner/spinner.action';
import Spinner from './components/spinner-component/spinner-component';
import { setSpinnerAction } from './store/spinner/spinner.action';




function App (){

    const dispatch = useDispatch()
    const isSpinning = useSelector((state)=>state.spinner.isSpinning)

    console.log(isSpinning)

   

    useEffect(()=>{
      
      signOutUser()
  
      const unsubscribe = onAuthListener((user)=>{
        dispatch( setCurrentUser(user))
        
         console.log(user)
      })
  
      return unsubscribe


    },[])


    useEffect(()=>{
      dispatch(setSpinnerAction())

    }, [])





   


   
  
     
  
    
      
  
  






    return (
      <Routes>
        <Route path='/' element={<Header></Header>}>
    
          <Route index  element={isSpinning?<Spinner></Spinner>:<Section></Section>}/>
          <Route path='shop/*' element={<Shop></Shop>}>
            <Route path='shop/womens' element=''></Route>
          </Route>
          <Route path='sign-in' element={<Authentication></Authentication>}></Route>
          <Route path='checkout' element = {<CheckOutPage></CheckOutPage>}></Route>
          
        </Route>
        
      </Routes>
      
    );
 
 
}

export default App;
