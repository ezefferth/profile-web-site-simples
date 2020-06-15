import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './navBar.css'


class Navbar extends Component {
    render() {
        return (
            <nav class="navbar navbar-expand-md navbar-dark bg-dark">
                <Link class="navbar-brand" to="/">Página Principal</Link>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarsExampleDefault" className='container'>
                    <ul class="navbar-nav mr-auto">
                        <li class="nav-item active">
                            <Link class="nav-link" to="/">Sobre <span class="sr-only">(current)</span></Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" to="/Contato">Contato</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}
export default Navbar;

// eslint-disable-next-line