import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'


export default function Navbar(props) {
    return (
        <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">{props.title}</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                        <Link className="nav-link active" aria-current="page" to="/#/about">About</Link>
                        
                        
                    </div>
                </div>
                <div className="form-check form-switch" >
                    <input className="form-check-input " type="checkbox" id="flexSwitchCheckDefault" onClick={props.toogleMode} />
                    <label htmlFor="flexSwitchCheckDefault" className={`text-${props.mode === 'light' ? 'dark' : 'light'}`}>Enable {props.mode === 'light' ? 'Dark' : 'Light'} Mode </label>              
            </div>
            </div>
        </nav>
    )
}
Navbar.propTypes={
    title:PropTypes.string.isRequired,
}

Navbar.defaultProps={
    title:"Your Title"
}
