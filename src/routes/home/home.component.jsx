
import { Component } from 'react'
import { Outlet } from 'react-router';
import Header from '../../components/header-component/component'
import Section from '../../components/section-components/component'


class Home extends Component {

  render(){
    return (
      <div className="App">
        <Header></Header>


        <Section></Section>
      </div>
    );
  }
 
}

export default Home;
