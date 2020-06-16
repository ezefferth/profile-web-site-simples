import React, { Component } from 'react'
import Navbar from '../components/navBar.jsx'
import Footer from '../components/footer.jsx';
import Jumbotron from '../components/jumbotron.jsx'

import './home.css'
class Home extends Component {
    render() {
        return (
            <div>
                
                <Navbar></Navbar>
                <Jumbotron tittle='Bem Vindo' subtittle=''></Jumbotron>
                    <div className='container'>
                        <h2>
                            Welcome
                        </h2>
                        <p>
                            Sobre mim?
                        </p>
                    </div>
                <Footer/>
            </div>
        );
    }
}
export default Home;