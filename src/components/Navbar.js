import React from 'react'
import propTypes from 'prop-types'
import { Link } from 'react-router-dom';
export default function Navbar(props) {
    return (
            <nav className={`navbar navbar-expand-lg bg-${props.mode} navbar-${props.mode}`}>
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">{props.title}</Link>
                    <div className="navbar-collapse" id="navbarNavAltMarkup">
                        <div className={`navbar-nav }`}>
                            <Link className="nav-link nav-item" aria-current="page" to="/home">{props.item1}</Link>
                            <Link className="nav-link nav-item" to="/about">About Us</Link>
                        </div>
                    </div>
                <div className={`form-check form-switch text-${props.mode === 'light' ? 'dark' : 'light'}`} >
                    <input className="form-check-input " style={{cursor : 'pointer'}} type="checkbox" role="switch"  id="flexSwitchCheckDefault" defaultChecked onClick={props.toggledarkmode} />
                    <label className="form-check-label" htmlFor="flexSwitchCheckDefault" >Dark Mode</label>
                </div>
                </div>

            </nav>

    )
}

Navbar.propTypes = {
    title: propTypes.string.isRequired,
    item1: propTypes.string.isRequired
}
Navbar.defaultProps = {
    title: 'Play With Texts',
    item1: 'Home'
}