import React from 'react'
import {Link} from 'react-router-dom';

const Navbar = () => {
    return (

        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container">
            <Link className="navbar-brand" to="/">My favorite videos</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav ml-auto">
                <Link className="nav-item nav-link" to="/new-video">Create new video</Link>
                </div>
            </div>
          </div>
        </nav>
      );
}

export default Navbar
