import React, { Component } from 'react'
import Navbar from '../components/navBar.jsx'
import Footer from '../components/footer.jsx';
import Jumbotron from '../components/jumbotron.jsx'

import './contato.css'
class Contato extends Component {
    render() {
        return (
            <div>
                <Navbar></Navbar>
                <Jumbotron tittle='Contato' subtittle=''></Jumbotron>
                <div className='container'>
                    <h2>
                        Telefone para Contato
                    </h2>
                    <p>
                        (65) 9 9649-3590
                    </p>
                    <h2>
                        Email
                    </h2>
                    <p>
                        ezefferth96@gmail.com
                    </p>
                    <p>
                        ezefferth@gmail.com
                    </p>
                </div>
                <Footer />
            </div>
        );
    }
}
export default Contato;