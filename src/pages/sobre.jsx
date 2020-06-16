import React, { Component } from 'react'
import Navbar from '../components/navBar.jsx'
import Footer from '../components/footer.jsx';
import Jumbotron from '../components/jumbotron.jsx'

import './sobre.css'
class Sobre extends Component {
    render() {
        return (
            <div>
                
                <Navbar></Navbar>
                <Jumbotron tittle='Sobre' subtittle=''></Jumbotron>
                    <div className='container'>
                        <h2>
                            Sobre
                        </h2>
                        <p>
                            Estudante de Engenharia da Computação pela Univeridade Federal de Mato Grosso, Câmpus de Várzea Grande. Atuo na área 
                            de desenvolvimento Web com React e Mobile com React Native, Progamação em Arduino. Manutenção de computadores
                        </p>
                    </div>
                <Footer/>
            </div>
        );
    }
}
export default Sobre;