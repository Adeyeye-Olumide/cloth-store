import logo from './logo.svg';
import { Component } from 'react'
import { Routes, Route } from 'react-router';
import Header from './components/header-component/component';
import Section from './components/section-components/component';
import signIn from './components/sign-in  component/sign-in compnent';
import Home from './routes/home/home.component';
import './App.css';

function shop(){
  return (<h1>Test shop page</h1>)
}

class App extends Component {

  render(){
    return (
      <Routes>
        <Route path='/' element={<Header></Header>}>
          <Route index  element={<Section></Section>}/>
          <Route path='shop' element={shop()}/>
          <Route path='sign-in' element={signIn()}></Route>

        </Route>
        
      </Routes>
      
    );
  }
 
}

export default App;
