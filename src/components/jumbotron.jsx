import React, { Component } from 'react'
import './jumbotron.css'

class Jumbotron extends Component{
    render(){
        return(
            <div className='jumbotron jumboytron-fluid'>
                <div className='container'>
                    <h1 className='display-3'>
                        {this.props.tittle}
                    </h1>
                    <p className='lead'>
                        {this.props.subtittle}
                    </p>
                </div>
            </div>
        )
    }
}
export default Jumbotron;