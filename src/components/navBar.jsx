import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './navBar.css'


class Navbar extends Component {
    render() {
        function url_face() {
            window.open("https://pt-br.facebook.com/ezefferth");
        }
        function url_insta() {
            window.open("https://www.instagram.com/ezefferth");
        }
        function url_twitter() {
            window.open("https://twitter.com/ezefferth");
        }
        function url_git() {
            window.open("https://github.com/ezefferth");
        }
        return (
            <nav class="navbar navbar-expand-md navbar-dark bg-dark">
                <Link class="navbar-brand" to="/">Página Principal</Link>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarsExampleDefault" className='container'>
                    <ul class="navbar-nav ml-auto">
                        <li class="nav-item active">
                            <Link class="nav-link" to="/Sobre">Sobre<span class="sr-only">(current)</span></Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" to="/Contato">Contato<span class="sr-only">(current)</span></Link>
                        </li>
                        <li onClick={url_face}>
                            <Link to="#" class="facebook"><i class="fa fa-facebook"></i></Link>
                        </li>
                        <li onClick={url_twitter}>
                            <Link to="#" class="twitter"><i class="fa fa-twitter"></i></Link>
                        </li>
                        <li onClick={url_insta}>
                            <Link to="#" class="instagram"><i class="fa fa-instagram"></i></Link>
                        </li>
                        <li onClick={url_git}>
                            <Link to="#" class="github"><i class="fa fa-github"></i></Link>
                        </li>
                    </ul>


                </div>
            </nav>
        );
    }
}
export default Navbar;

// eslint-disable-next-line