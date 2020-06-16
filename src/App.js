import React, { Component } from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import './App.css';
import Home from './pages/home.jsx'
import Sobre from './pages/sobre.jsx'
import Contato from './pages/contato.jsx'
class App extends Component{
  render(){
    return(
      <Router>
        <div>
          <Route exact path='/' component={Home}/>
          <Route path='/sobre' component={Sobre}/>
          <Route path='/contato' component={Contato}/>
        </div>
      </Router>
    );
  }
}

export default App;
