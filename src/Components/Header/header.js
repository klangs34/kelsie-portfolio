import React from 'react';
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light p-0">
            <div className="container p-0">
                <Link to="/" className="navbar-brand p-3 bg-info text-light">Kelsie Langston</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <div className="form-inline ml-auto">
                        <ul className="navbar-nav">
                            <li className="nav-item active">
                                <Link to="/" className="nav-link">About |<span className="sr-only">(current)</span></Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/portfolio" className="nav-link">Portfolio |</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to='/contact'>Contact</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Header;